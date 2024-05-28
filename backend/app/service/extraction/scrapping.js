window.myLib = {
  trimText: (text) => {
    return text ? text.textContent.replace(/\s+/g, ' ').trim() : ""
  },
  scrappingAmazon: () => {
    const cards = Array.from(document.querySelectorAll('.s-card-container'))

    return cards.map(el => {
      const idElement = el.querySelector('h2 > .a-link-normal')
      const productId = idElement ? idElement.href : ""

      const imageElement = el.querySelector('.s-image')
      const image = imageElement ? imageElement.src : ""

      const nameElement = el.querySelector('h2 > a > span')
      const nameItem = nameElement ? window.myLib.trimText(nameElement) : ""

      const salesElement = el.querySelector('div.a-row.a-size-small > span:nth-child(2)')
      const sales = salesElement ? salesElement.ariaLabel : ""

      const starsElement = el.querySelector('div.a-row.a-size-small > span:nth-child(1)')
      const stars = starsElement ? starsElement.ariaLabel : ""

      const pricesElement = el.querySelector('[class="a-price"]')
      const salePrice = pricesElement ? window.myLib.trimText(pricesElement.querySelector('span')) : ""
      const originalPriceElement = pricesElement ? pricesElement.nextElementSibling : null
      const originalPrice = originalPriceElement ? window.myLib.trimText(originalPriceElement.querySelector('span.a-offscreen')) : ""

        return { productId, image, nameItem, sales, stars, salePrice, originalPrice }
    }).filter(item => item.productId !== "")
  },
  scrappingNike: () => {
    const cards = Array.from(document.querySelectorAll('[class*="ProductCard-styled__ProductCardContainer"]'))

    return cards.map(el => {
      const productId = el.querySelector('a').href
      const imageText = el.querySelector('div noscript').textContent
        let image
      if(imageText) {
        const regex = /250w,\s*(.*?)\s*360w/;
      const match = imageText.match(regex);
      image = match[1]   
      } else {
          el.scrollIntoView()
          image = el.querySelector('div > span > img').src
      }
      const nameItem = window.myLib.trimText(el.querySelector('div[class*="ProductName"]'))
      const sales = window.myLib.trimText(el.querySelector('div[class*="ProductCategory"]'))
      const stars = window.myLib.trimText(el.querySelector('span[class*="RatingStarSnippet"]'))
      const salePrice = window.myLib.trimText(el.querySelector('span[class*="CurrentPrice"]'))
      const originalPrice = window.myLib.trimText(el.querySelector('div[class*="OldPrice"]'))
      return { productId, image, nameItem, sales, stars, salePrice, originalPrice }
    })
  },
  scrappingKabum: () => {
    const cards = Array.from(document.querySelectorAll('article.productCard'))

    return cards.map(el => {
      const productId = el.querySelector('a').href
      const image = el.querySelector('img.imageCard').src
      const nameItem = window.myLib.trimText(el.querySelector('span.nameCard'))
      
      const elementStars = el.querySelector('.estrelasAvaliacao')
      const stars = elementStars ? 
          Array.from(elementStars.querySelectorAll('.estrelaAvaliacao')).reduce((count, star) => {
              return count + (star.querySelector('svg > path').getAttribute('d').startsWith('M17') ? 1 : 0)
          }, 0).toString() : ""

      const totalAvaliacoes = el.querySelector('.labelTotalAvaliacoes')
      const sales = totalAvaliacoes ? window.myLib.trimText(totalAvaliacoes) : ""

      const salePrice = window.myLib.trimText(el.querySelector('span.priceCard'))
      const originalPrice = window.myLib.trimText(el.querySelector('span.oldPriceCard'))

      return { productId, image, nameItem, sales, stars, salePrice, originalPrice }
    })
  }
}