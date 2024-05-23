from bots.bot_base import BotBase


class Nike(BotBase):
    async def parse_page(self, page) -> dict:
        await page.wait_for_load_state(state='domcontentloaded')

        data = await page.evaluate(""" () => {
          const cards = Array.from(document.querySelectorAll('[class*="ProductCard-styled__ProductCardContainer"]'))

          return cards.map(el => {
              const productId = el.querySelector('a').href
              const image = el.querySelector('div > span > img').src
              const nameItem = trimText(el.querySelector('div[class*="ProductName"]'))
              const sales = trimText(el.querySelector('div[class*="ProductCategory"]'))
              const stars = trimText(el.querySelector('span[class*="RatingStarSnippet"]'))
              const salePrice = trimText(el.querySelector('span[class*="CurrentPrice"]'))
              const originalPrice = trimText(el.querySelector('div[class*="OldPrice"]'))
              return { productId, image, nameItem, sales, stars, salePrice, originalPrice }
          })

          function trimText(text) {
            return text ? text.textContent.replace(/\\s+/g, ' ').trim() : "";
          }
        }""")
        return data
    
async def fetch_nike(product_name: str) -> dict:
    nike_bot = Nike(
        base_url="https://www.nike.com.br/",
        links={"search": "https://www.nike.com.br/busca?term={product_name}"}
    )
    return await nike_bot.fetch_page(product_name=product_name, continue_url="https://www.nike.com.br/busca?term=")