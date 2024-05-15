from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import asyncio
import urllib.parse
from bots.aliexpress import fetch_aliexpress

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

class Product(BaseModel):
    name: str
    bot: str
    
    
async def fetch_product_details(product_name: str, bot_name: str):
    product_name = urllib.parse.quote(product_name)
    if bot_name.lower() == "aliexpress":
        return await fetch_aliexpress(product_name)
    else:
        raise ValueError("Bot desconhecido")
    
@app.post("/products/")
async def get_product_details(product: Product):
    try:
        return await fetch_product_details(product.name, product.bot)
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
    
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)