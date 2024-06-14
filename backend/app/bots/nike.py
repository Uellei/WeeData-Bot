from service.bot.bot_base import BotBase
from service.extraction.web_scrapping import WebExtract


class Nike(BotBase):
    async def parse_page(self, page, web_extract: WebExtract) -> dict:
        await page.wait_for_load_state(state='domcontentloaded')
        
        return await web_extract.get_nike_data()
    
async def fetch_nike(product_name: str) -> dict:
    nike_bot = Nike(
        base_url="https://www.nike.com.br/",
        links={"search": "https://www.nike.com.br/busca?term={product_name}"}
    )
    return await nike_bot.fetch_page(product_name=product_name, continue_url="https://www.nike.com.br/busca?term=")