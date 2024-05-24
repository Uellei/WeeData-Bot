import httpx
from backend.app.service.bot.bot_base import BotBase


class Adidas(BotBase):
    async def fetch_data_from_api(self, product_name: str) -> dict:
        search_url = self.links['search'].format(product_name=product_name)

        async with httpx.AsyncClient(headers=self.headers) as client:
            response = await client.get(search_url)
            response.raise_for_status()
            data = response.json()

        parsed_data = self.parse_json(data=data)
        return parsed_data

    async def parse_page(self, page) -> dict:
        # This method is not needed for httpx usage but must be implemented due to abstract base class
        return {}

    def parse_json(self, data: dict) -> dict:
        extracted_data = [
            {
                "productId": "https://www.adidas.com.br" + item["link"],
                "image": item["image"]["src"],
                "nameItem": item["displayName"],
                # (pessoas que classificaram)
                "sales": str(item["ratingCount"]),
                "stars": str(item["rating"]),
                # menor valor entre salePrice e price
                "salePrice": "R$ " + str(min(float(item["salePrice"]), float(item["price"]))),
                "originalPrice": "R$ " + str(max(float(item["salePrice"]), float(item["price"]))) if item["salePrice"] != item["price"] else ""
            } for item in data["raw"]["itemList"]["items"]
            if all(key in item for key in ["link", "image", "displayName", "ratingCount", "rating", "salePrice", "price"])
        ]

        return extracted_data


async def fetch_adidas(product_name: str) -> dict:
    adidas_bot = Adidas(
        base_url="https://www.adidas.com.br",
        links={"search": "https://www.adidas.com.br/api/plp/content-engine?query={product_name}"}
    )
    return await adidas_bot.fetch_data(product_name)
