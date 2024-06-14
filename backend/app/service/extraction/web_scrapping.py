from service.extraction.file_path import FilePathAdapter


class WebExtract:
    def __init__(self, page, file_adapter: FilePathAdapter):
        self.page = page
        self.file_adapter = file_adapter

    async def initialize(self):
      script_path = self.file_adapter.get_script_path("scrapping.js")
      await self.page.add_script_tag(path=script_path)

    async def get_amazon_data(self):
      return await self.page.evaluate('window.myLib.scrappingAmazon()')
    
    async def get_nike_data(self):
      return await self.page.evaluate('window.myLib.scrappingNike()')
    
    async def get_kabum_data(self):
      return await self.page.evaluate('window.myLib.scrappingKabum()')