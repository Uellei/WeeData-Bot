import asyncio
from playwright.async_api import async_playwright, Playwright

async def fetch_aliexpress(product_name: str):
    async with async_playwright() as playwright:
        chromium = playwright.chromium  # ou "firefox" ou "webkit".
        browser = await chromium.launch(headless=True)  # Definido como headless para execução em servidor

        page = await browser.new_page()
        formated_name = product_name.replace(" ", "-")
        
        await page.route("**/*", lambda route:
                route.continue_() if f"https://pt.aliexpress.com/w/wholesale-{formated_name}.html" in route.request.url
                else route.abort()
        )
        
        await page.goto(f"https://pt.aliexpress.com/w/wholesale-{formated_name}.html", wait_until="domcontentloaded")

        object_json = await page.evaluate("window._dida_config_._init_data_")
        itens = object_json["data"]["data"]["root"]["fields"]["mods"]["itemList"]["content"]
        data = []
        for item in itens:
            try:
              image = item["image"]["imgUrl"]
              nameItem = item["title"]["displayTitle"]
              sales = item["trade"]["tradeDesc"]
              salePrice = item["prices"]["salePrice"]["formattedPrice"]
              originalPrice = item["prices"]["originalPrice"]["formattedPrice"] if "originalPrice" in item["prices"] else ""
              data.append({"image": image, "nameItem": nameItem, "sales": sales, "salePrice": salePrice, "originalPrice": originalPrice})
            except:
                pass
        # other actions...
        await browser.close()
        return data