from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import urllib.parse

from bots.aliexpress import fetch_aliexpress
from bots.amazon import fetch_amazon
from bots.nike import fetch_nike
from bots.kabum import fetch_kabum
from bots.adidas import fetch_adidas
from models import Product

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

async def fetch_product_details(product_name: str, bot_name: str):
    product_name = urllib.parse.quote(product_name)
    if bot_name.lower() == "aliexpress":
        return await fetch_aliexpress(product_name)
    elif bot_name.lower() == "amazon":
        return await fetch_amazon(product_name)
    elif bot_name.lower() == "nike":
        return await fetch_nike(product_name)
    elif bot_name.lower() == "kabum":
        return await fetch_kabum(product_name)
    elif bot_name.lower() == "adidas":
        return await fetch_adidas(product_name)
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
    uvicorn.run(app, port=8000)