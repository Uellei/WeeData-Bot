from bots.bot_base import BotBase


class Adidas(BotBase):
    async def parse_page(self, page) -> dict:
        await page.wait_for_selector('div.gl-price-item', state="attached")

        data = await page.evaluate(""" () => {
            const cards = Array.from(document.querySelectorAll('.grid-item'))
            return cards.map(el => {
                const idElement = el.querySelector('a[class*="link"]')
                const productId = idElement ? idElement.href : ""

                const imageElement = el.querySelector('img.product-card-image')
                const image = imageElement ? imageElement.src : ""

                const nameElement = el.querySelector('p[class*="card__title"]')
                const nameItem = nameElement ? trimText(nameElement) : ""

                const sales = ""
                const stars = ""

                let salePrice = trimText(el.querySelector('div.gl-price-item'))
                const elementOriginalPrice = el.querySelector('.gl-price-item--membership')
                let originalPrice = elementOriginalPrice ? trimText(elementOriginalPrice).replace(' para membros', '') : ""

                // Verificar se o originalPrice é menor que o salePrice
                if (parseFloat(originalPrice.replace('R$', '')) < parseFloat(salePrice.replace('R$', ''))) {
                    // Trocar os valores
                    const tempPrice = salePrice
                    salePrice = originalPrice
                    originalPrice = tempPrice
                }

                return { productId, image, nameItem, sales, stars, salePrice, originalPrice }
            }).filter(item => item.productId !== "")

            function trimText(text) {
                return text ? text.textContent.replace(/\\s+/g, ' ').trim() : ""
            }
        }""")
        return data


async def fetch_adidas(product_name: str) -> dict:
    adidas_bot = Adidas(
        base_url="https://www.adidas.com.br",
        links={"search": "https://www.adidas.com.br/search?q={product_name}"}
    )
    return await adidas_bot.fetch_page(product_name, browser_type="firefox")
