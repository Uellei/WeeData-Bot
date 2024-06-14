from service.bot.bot_base import BotBase
from service.extraction.web_scrapping import WebExtract


class Kabum(BotBase):
    async def parse_page(self, page, web_extract: WebExtract) -> dict:
        await page.wait_for_load_state(state="domcontentloaded")

        return await web_extract.get_kabum_data()
    
async def fetch_kabum(product_name: str) -> dict:
    kabum_bot = Kabum(
        base_url="https://www.kabum.com.br/",
        links={"search": "https://www.kabum.com.br/busca/{product_name}?page_number=1&page_size=40&facet_filters=&sort=most_searched"}
    )
    return await kabum_bot.fetch_page(product_name=product_name)