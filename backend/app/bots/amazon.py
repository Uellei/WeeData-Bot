from backend.app.service.bot.bot_base import BotBase
from backend.app.service.extraction.web_scrapping import WebExtract


class Amazon(BotBase):
    async def parse_page(self, page, web_extract: WebExtract) -> dict:
        await page.wait_for_load_state(state="domcontentloaded")

        return await web_extract.get_amazon_data()
    
async def fetch_amazon(product_name: str) -> dict:
    amazon_bot = Amazon(
        base_url="https://www.amazon.com.br/",
        links={"search": "https://www.amazon.com.br/s?k={product_name}"}
    )
    return await amazon_bot.fetch_page(product_name, continue_url="https://www.amazon.com.br/s?k=")