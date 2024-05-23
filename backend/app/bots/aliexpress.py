from bots.bot_base import BotBase


class Aliexpress(BotBase):
    async def parse_page(self, page) -> dict:
        await page.wait_for_load_state(state="domcontentloaded")

        object_json = await page.evaluate("window._dida_config_._init_data_")
        itens = object_json["data"]["data"]["root"]["fields"]["mods"]["itemList"]["content"]
        data = []
        for item in itens:
            try:
                id = item["productId"]
                image = item["image"]["imgUrl"]
                nameItem = item["title"]["displayTitle"]
                sales = item["trade"]["tradeDesc"]
                salePrice = item["prices"]["salePrice"]["formattedPrice"]
                originalPrice = item["prices"]["originalPrice"]["formattedPrice"] if "originalPrice" in item["prices"] else ""
                data.append({"productId": id, "image": image, "nameItem": nameItem,
                            "sales": sales, "salePrice": salePrice, "originalPrice": originalPrice})
            except:
                pass

        return data


async def fetch_aliexpress(product_name: str) -> dict:
    formated_name = product_name.replace(" ", "-")
    aliexpress_bot = Aliexpress(
        base_url="https://pt.aliexpress.com/",
        links={"search": f"https://pt.aliexpress.com/w/wholesale-{formated_name}.html"}
    )
    return await aliexpress_bot.fetch_page(product_name=product_name, continue_url="https://pt.aliexpress.com/w/wholesale")
