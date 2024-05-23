from bots.bot_base import BotBase


class Amazon(BotBase):
    async def parse_page(self, page) -> dict:
        await page.wait_for_load_state(state="domcontentloaded")

        data = await page.evaluate(""" () => {
            const cards = Array.from(document.querySelectorAll('.s-card-container'))

            const result = cards.map(el => {
                const idElement = el.querySelector('h2 > .a-link-normal')
                const productId = idElement ? idElement.href : ""

                const imageElement = el.querySelector('.s-image')
                const image = imageElement ? imageElement.src : ""

                const nameElement = el.querySelector('h2 > a > span')
                const nameItem = nameElement ? trimText(nameElement) : ""

                const salesElement = el.querySelector('div.a-row.a-size-small > span:nth-child(2)')
                const sales = salesElement ? salesElement.ariaLabel : ""

                const starsElement = el.querySelector('div.a-row.a-size-small > span:nth-child(1)')
                const stars = starsElement ? starsElement.ariaLabel : ""

                const pricesElement = el.querySelector('[class="a-price"]')
                const salePrice = pricesElement ? trimText(pricesElement.querySelector('span')) : ""
                const originalPriceElement = pricesElement ? pricesElement.nextElementSibling : null
                const originalPrice = originalPriceElement ? trimText(originalPriceElement.querySelector('span.a-offscreen')) : ""

                return { productId, image, nameItem, sales, stars, salePrice, originalPrice }
            }).filter(item => item.productId !== "")

            function trimText(text) {
                return text ? text.textContent.replace(/\\s+/g, ' ').trim() : ""
            }

            return result
        }""")
        return data
    
async def fetch_amazon(product_name: str) -> dict:
    amazon_bot = Amazon(
        base_url="https://www.amazon.com.br/",
        links={"search": "https://www.amazon.com.br/s?k={product_name}"}
    )
    return await amazon_bot.fetch_page(product_name, continue_url="https://www.amazon.com.br/s?k=")
