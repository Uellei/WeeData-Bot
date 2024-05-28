import sys
sys.path.append('/home/weslleysantos/Projetos/extractData')

from backend.app.service.extraction.web_scrapping import WebExtract
from backend.app.service.bot.bot_base import BotBase


class Aliexpress(BotBase):
    async def parse_page(self, page, web_extract: WebExtract) -> dict:
        await page.wait_for_load_state(state="domcontentloaded")

        object_json = await page.evaluate("window._dida_config_._init_data_")

        extract_data = [
            {
                "productId": item["productId"],
                "image": item["image"]["imgUrl"],
                "nameItem": item["title"]["displayTitle"],
                "sales": item["trade"]["tradeDesc"],
                # Usa get com valor padrão vazio
                "stars": str(item.get("evaluation", {}).get("starRating", "")),
                "salePrice": item["prices"]["salePrice"]["formattedPrice"],
                "originalPrice": item["prices"]["originalPrice"]["formattedPrice"] if "originalPrice" in item["prices"] else ""
            } for item in object_json["data"]["data"]["root"]["fields"]["mods"]["itemList"]["content"]
        ]

        return extract_data


async def fetch_aliexpress(product_name: str) -> dict:
    formated_name = product_name.replace(" ", "-")
    aliexpress_bot = Aliexpress(
        base_url="https://pt.aliexpress.com/",
        links={"search": f"https://pt.aliexpress.com/w/wholesale-{formated_name}.html"}
    )
    return await aliexpress_bot.fetch_page(product_name=product_name, continue_url="https://pt.aliexpress.com/w/wholesale")
