from bots.bot_base import BotBase


class Kabum(BotBase):
    async def parse_page(self, page) -> dict:
        await page.wait_for_load_state(state="domcontentloaded")

        data = await page.evaluate(""" () => {
            const cards = Array.from(document.querySelectorAll('article.productCard'))

            return cards.map(el => {
                const productId = el.querySelector('a').href
                const image = el.querySelector('img.imageCard').src
                const nameItem = trimText(el.querySelector('span.nameCard'))
                
                const elementStars = el.querySelector('.estrelasAvaliacao')
                const stars = elementStars ? 
                    Array.from(elementStars.querySelectorAll('.estrelaAvaliacao')).reduce((count, star) => {
                        return count + (star.querySelector('svg > path').getAttribute('d').startsWith('M17') ? 1 : 0)
                    }, 0).toString() : ""

                const totalAvaliacoes = el.querySelector('.labelTotalAvaliacoes')
                const sales = totalAvaliacoes ? trimText(totalAvaliacoes) : ""

                const salePrice = trimText(el.querySelector('span.priceCard'))
                const originalPrice = trimText(el.querySelector('span.oldPriceCard'))

                return { productId, image, nameItem, sales, stars, salePrice, originalPrice }
            })
            function trimText(text) {
                return text ? text.textContent.replace(/\\s+/g, ' ').trim() : "";
            }
        }""")
        return data
    
async def fetch_kabum(product_name: str) -> dict:
    kabum_bot = Kabum(
        base_url="https://www.kabum.com.br",
        links={"search": "https://www.kabum.com.br/busca/{product_name}?page_number=1&page_size=40&facet_filters=&sort=most_searched"}
    )
    return await kabum_bot.fetch_page(product_name=product_name)