import asyncio
from abc import ABC, abstractmethod
from playwright.async_api import async_playwright, Playwright


class BotBase(ABC):
    base_url: str
    user_agent: str = (
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36"
    )
    headers: dict
    links: str

    def __init__(self, base_url: str, links: str, headers: dict = None):
      self.base_url = base_url
      self.links = links
      self.headers = headers or {
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'accept-language': 'en-US,en;q=0.9,pt;q=0.8',
        'cache-control': 'no-cache',
        'pragma': 'no-cache',
        'priority': 'u=0, i',
        'referer': self.base_url,
        'sec-ch-ua': '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Linux"',
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-user': '?1',
        'upgrade-insecure-requests': '1',
        'user-agent': self.user_agent
      }

    # async def fetch_page(self, product_name: str) -> dict:
    #   async with async_playwright() as playwright:
    #     browser = await playwright.chromium.launch(headless=True)
    #     context = await browser.new_context()
    #     page = await context.new_page()
        
    #     await page.set_extra_http_headers(self.headers)
    #     search_url = self.links['search'].format(product_name=product_name)
    #     await page.goto(search_url)

    #     data = await self.parse_page(page)
    #     await browser.close()
    #     return data

    async def fetch_page(self, product_name: str, browser_type: str = "chromium", continue_url = None) -> dict:
      async with async_playwright() as playwright:
          if browser_type == "firefox":
              browser = await playwright.firefox.launch(headless=True)
          else:
              browser = await playwright.chromium.launch(headless=True)

          context = await browser.new_context()
          page = await context.new_page()

          if continue_url:
            await page.route("**/*", lambda route: route.continue_() if continue_url in route.request.url else route.abort() )

          if self.headers:
              await page.set_extra_http_headers(self.headers)
          search_url = self.links['search'].format(product_name=product_name)
          await page.goto(search_url, wait_until="domcontentloaded")

          data = await self.parse_page(page)
          await browser.close()
          return data
      
    @abstractmethod
    async def parse_page(self, page) -> dict:
      pass
