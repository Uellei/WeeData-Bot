import React from "react"
import { Header } from "../components/Header/Header"
import { useFetchContext } from "../contexts/FetchContext"
import ProductCarousel from "../components/Carousel/ProductCarousel"



const Nike = () => {
  const { fetchResults, isLoading } = useFetchContext()

  const headers = {
    "accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
    "accept-language": "en-US,en;q=0.9,pt;q=0.8",
    "sec-ch-ua": "\"Chromium\";v=\"124\", \"Google Chrome\";v=\"124\", \"Not-A.Brand\";v=\"99\"",
    "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
  }

  const data = [
    {
      "productId": "https://www.nike.com.br/air-jordan-4-retro-029167.html?cor=51",
      "image": "https://imgnike-a.akamaihd.net/360x360/02916751.jpg",
      "nameItem": "Air Jordan 4 Retro",
      "sales": "Casual",
      "stars": "",
      "salePrice": "R$ 1.799,99",
      "originalPrice": ""
    },
    {
      "productId": "https://www.nike.com.br/air-jordan-xxxvii-025347.html?cor=7T",
      "image": "https://imgnike-a.akamaihd.net/360x360/0253477T.jpg",
      "nameItem": "Air Jordan XXXVII",
      "sales": "Casual",
      "stars": "4.7",
      "salePrice": "R$ 997,49",
      "originalPrice": "R$ 1.299,99"
    },
    {
      "productId": "https://www.nike.com.br/air-jordan-4-retro-027237.html?cor=51",
      "image": "https://imgnike-a.akamaihd.net/360x360/02723751.jpg",
      "nameItem": "Air Jordan 4 Retro",
      "sales": "Casual",
      "stars": "5.0",
      "salePrice": "R$ 1149,49",
      "originalPrice": "R$ 1.699,99"
    },
    {
      "productId": "https://www.nike.com.br/camiseta-jordan-air-masculina-023891.html?cor=ID",
      "image": "https://imgnike-a.akamaihd.net/360x360/023891ID.jpg",
      "nameItem": "Camiseta Jordan Air Masculina",
      "sales": "Casual",
      "stars": "4.7",
      "salePrice": "R$ 199,49",
      "originalPrice": "R$ 229,99"
    },
    {
      "productId": "https://www.nike.com.br/air-jordan-1-retro-low-og-027661.html?cor=51",
      "image": "https://imgnike-a.akamaihd.net/360x360/02766151.jpg",
      "nameItem": "Air Jordan 1 Retro Low OG",
      "sales": "Casual",
      "stars": "4.9",
      "salePrice": "R$ 759,99",
      "originalPrice": "R$ 1.299,99"
    },
    {
      "productId": "https://www.nike.com.br/air-jordan-1-high-og-028389.html?cor=ID",
      "image": "https://imgnike-a.akamaihd.net/360x360/028389ID.jpg",
      "nameItem": "Air Jordan 1 High OG",
      "sales": "Casual",
      "stars": "4.8",
      "salePrice": "R$ 1.599,99",
      "originalPrice": ""
    },
    {
      "productId": "https://www.nike.com.br/air-jordan-1-low-se-026322.html?cor=15",
      "image": "https://imgnike-a.akamaihd.net/360x360/02632215.jpg",
      "nameItem": "Air Jordan 1 Low SE",
      "sales": "Casual",
      "stars": "5.0",
      "salePrice": "R$ 854,99",
      "originalPrice": "R$ 1.099,99"
    },
    {
      "productId": "https://www.nike.com.br/air-jordan-1-low-027128.html?cor=51",
      "image": "https://imgnike-a.akamaihd.net/360x360/02712851.jpg",
      "nameItem": "Air Jordan 1 Low",
      "sales": "Casual",
      "stars": "4.3",
      "salePrice": "R$ 1044,99",
      "originalPrice": "R$ 1.099,99"
    },
    {
      "productId": "https://www.nike.com.br/air-jordan-1-high-og-027657.html?cor=51",
      "image": "https://imgnike-a.akamaihd.net/360x360/02765751.jpg",
      "nameItem": "Air Jordan 1 High OG",
      "sales": "Casual",
      "stars": "5.0",
      "salePrice": "R$ 1044,99",
      "originalPrice": "R$ 1.599,99"
    },
    {
      "productId": "https://www.nike.com.br/air-jordan-3-027810.html?cor=ID",
      "image": "https://imgnike-a.akamaihd.net/360x360/027810ID.jpg",
      "nameItem": "Air Jordan 3",
      "sales": "Casual",
      "stars": "",
      "salePrice": "R$ 1519,99",
      "originalPrice": "R$ 1.899,99"
    },
    {
      "productId": "https://www.nike.com.br/womens-air-jordan-1-elevate-low-026797.html?cor=51",
      "image": "https://imgnike-a.akamaihd.net/360x360/02679751.jpg",
      "nameItem": "Women's Air Jordan 1 Elevate Low",
      "sales": "Casual",
      "stars": "5.0",
      "salePrice": "R$ 1.099,99",
      "originalPrice": ""
    },
    {
      "productId": "https://www.nike.com.br/camiseta-jordan-air-masculina-023891.html?cor=51",
      "image": "https://imgnike-a.akamaihd.net/360x360/02389151.jpg",
      "nameItem": "Camiseta Jordan Air Masculina",
      "sales": "Casual",
      "stars": "4.7",
      "salePrice": "R$ 180,49",
      "originalPrice": "R$ 229,99"
    },
    {
      "productId": "https://www.nike.com.br/air-jordan-1-retro-low-og-026422.html?cor=7T",
      "image": "https://imgnike-a.akamaihd.net/360x360/0264227T.jpg",
      "nameItem": "Air Jordan 1 Retro Low OG",
      "sales": "Casual",
      "stars": "5.0",
      "salePrice": "R$ 949,99",
      "originalPrice": "R$ 1.299,99"
    },
    {
      "productId": "https://www.nike.com.br/air-jordan-3-retro-028262.html?cor=51",
      "image": "https://imgnike-a.akamaihd.net/360x360/02826251.jpg",
      "nameItem": "Air Jordan 3 Retro",
      "sales": "Casual",
      "stars": "",
      "salePrice": "R$ 1.699,99",
      "originalPrice": ""
    },
    {
      "productId": "https://www.nike.com.br/air-jordan-1-low-se-027185.html?cor=51",
      "image": "https://imgnike-a.akamaihd.net/360x360/02718551.jpg",
      "nameItem": "Air Jordan 1 Low SE",
      "sales": "Casual",
      "stars": "5.0",
      "salePrice": "R$ 892,99",
      "originalPrice": "R$ 1.199,99"
    },
    {
      "productId": "https://www.nike.com.br/air-jordan-xxxviii-low-028249.html?cor=51",
      "image": "https://imgnike-a.akamaihd.net/360x360/02824951.jpg",
      "nameItem": "Air Jordan XXXVIII Low",
      "sales": "Casual",
      "stars": "",
      "salePrice": "R$ 997,49",
      "originalPrice": "R$ 1.599,99"
    },
    {
      "productId": "https://www.nike.com.br/air-jordan-3-retro-026247.html?cor=51",
      "image": "https://imgnike-a.akamaihd.net/360x360/02624751.jpg",
      "nameItem": "AIR JORDAN 3 RETRO",
      "sales": "Casual",
      "stars": "5.0",
      "salePrice": "R$ 1282,49",
      "originalPrice": "R$ 1.899,99"
    },
    {
      "productId": "https://www.nike.com.br/womens-air-jordan-1-elevate-028995.html?cor=P1",
      "image": "https://imgnike-a.akamaihd.net/360x360/028995P1.jpg",
      "nameItem": "Women's Air Jordan 1 Elevate",
      "sales": "Casual",
      "stars": "",
      "salePrice": "R$ 1.099,99",
      "originalPrice": ""
    },
    {
      "productId": "https://www.nike.com.br/tenis-air-jordan-1-low-016510.html?cor=5C",
      "image": "https://imgnike-a.akamaihd.net/360x360/0165105C.jpg",
      "nameItem": "Tênis Air Jordan 1 Low Masculino",
      "sales": "Casual",
      "stars": "4.6",
      "salePrice": "R$ 1044,99",
      "originalPrice": "R$ 1.099,99"
    },
    {
      "productId": "https://www.nike.com.br/tenis-wmns-air-jordan-1-low-re-012715.html?cor=5F",
      "image": "https://imgnike-a.akamaihd.net/360x360/0127155F.jpg",
      "nameItem": "Tênis Air Jordan 1 Low Feminino",
      "sales": "Casual",
      "stars": "4.4",
      "salePrice": "R$ 1044,99",
      "originalPrice": "R$ 1.099,99"
    },
    {
      "productId": "https://www.nike.com.br/air-jordan-xxxviii-027827.html?cor=P1",
      "image": "https://imgnike-a.akamaihd.net/360x360/027827P1.jpg",
      "nameItem": "Air Jordan XXXVIII",
      "sales": "Casual",
      "stars": "5.0",
      "salePrice": "R$ 987,99",
      "originalPrice": "R$ 1.699,99"
    },
    {
      "productId": "https://www.nike.com.br/air-jordan-13-retro-tex-026240.html?cor=ID",
      "image": "https://imgnike-a.akamaihd.net/360x360/026240ID.jpg",
      "nameItem": "Air Jordan 13",
      "sales": "Casual",
      "stars": "4.0",
      "salePrice": "R$ 1044,99",
      "originalPrice": "R$ 1.899,99"
    },
    {
      "productId": "https://www.nike.com.br/air-jordan-3-retro-craft-028407.html?cor=51",
      "image": "https://imgnike-a.akamaihd.net/360x360/02840751.jpg",
      "nameItem": "Air Jordan 3 Retro Craft",
      "sales": "Casual",
      "stars": "",
      "salePrice": "R$ 1.699,99",
      "originalPrice": ""
    },
    {
      "productId": "https://www.nike.com.br/tenis-wmns-air-jordan-1-low-re-012715.html?cor=82",
      "image": "https://imgnike-a.akamaihd.net/360x360/01271582.jpg",
      "nameItem": "Tênis Air Jordan 1 Low Feminino",
      "sales": "Casual",
      "stars": "4.4",
      "salePrice": "R$ 1044,99",
      "originalPrice": "R$ 1.099,99"
    },
    {
      "productId": "https://www.nike.com.br/air-jordan-3-retro-027141.html?cor=3X",
      "image": "https://imgnike-a.akamaihd.net/360x360/0271413X.jpg",
      "nameItem": "Air Jordan 3 Retro",
      "sales": "Casual",
      "stars": "4.8",
      "salePrice": "R$ 1082,99",
      "originalPrice": "R$ 1.699,99"
    },
    {
      "productId": "https://www.nike.com.br/air-jordan-4-retro-craft-027796.html?cor=NX",
      "image": "https://imgnike-a.akamaihd.net/360x360/027796NX.jpg",
      "nameItem": "Air Jordan 4 Retro Craft",
      "sales": "Casual",
      "stars": "5.0",
      "salePrice": "R$ 1.899,99",
      "originalPrice": ""
    },
    {
      "productId": "https://www.nike.com.br/womens-air-jordan-3-retro-027842.html?cor=ID",
      "image": "https://imgnike-a.akamaihd.net/360x360/027842ID.jpg",
      "nameItem": "Women's Air Jordan 3 Retro",
      "sales": "Casual",
      "stars": "",
      "salePrice": "R$ 1643,49",
      "originalPrice": "R$ 1.899,99"
    },
    {
      "productId": "https://www.nike.com.br/womens-air-jordan-1-low-029166.html?cor=NX",
      "image": "https://imgnike-a.akamaihd.net/360x360/029166NX.jpg",
      "nameItem": "Women's Air Jordan 1 Low",
      "sales": "Casual",
      "stars": "",
      "salePrice": "R$ 1.199,99",
      "originalPrice": ""
    },
    {
      "productId": "https://www.nike.com.br/air-jordan-5-027748.html?cor=15",
      "image": "https://imgnike-a.akamaihd.net/360x360/02774815.jpg",
      "nameItem": "Air Jordan 5",
      "sales": "Casual",
      "stars": "5.0",
      "salePrice": "R$ 1.899,99",
      "originalPrice": ""
    },
    {
      "productId": "https://www.nike.com.br/tenis-air-jordan-1-mid-masculino-024331.html?cor=5A",
      "image": "https://imgnike-a.akamaihd.net/360x360/0243315A.jpg",
      "nameItem": "Tênis Air Jordan 1 Mid Masculino",
      "sales": "Casual",
      "stars": "4.8",
      "salePrice": "R$ 873,99",
      "originalPrice": "R$ 1.199,99"
    },
    {
      "productId": "https://www.nike.com.br/air-jordan-4-retro-029167.html?cor=51",
      "image": "https://imgnike-a.akamaihd.net/360x360/02916751.jpg",
      "nameItem": "Air Jordan 4 Retro",
      "sales": "Casual",
      "stars": "",
      "salePrice": "R$ 1.799,99",
      "originalPrice": ""
    },
    {
      "productId": "https://www.nike.com.br/air-jordan-xxxvii-025347.html?cor=7T",
      "image": "https://imgnike-a.akamaihd.net/360x360/0253477T.jpg",
      "nameItem": "Air Jordan XXXVII",
      "sales": "Casual",
      "stars": "4.7",
      "salePrice": "R$ 997,49",
      "originalPrice": "R$ 1.299,99"
    },
    {
      "productId": "https://www.nike.com.br/air-jordan-4-retro-027237.html?cor=51",
      "image": "https://imgnike-a.akamaihd.net/360x360/02723751.jpg",
      "nameItem": "Air Jordan 4 Retro",
      "sales": "Casual",
      "stars": "5.0",
      "salePrice": "R$ 1149,49",
      "originalPrice": "R$ 1.699,99"
    },
    {
      "productId": "https://www.nike.com.br/camiseta-jordan-air-masculina-023891.html?cor=ID",
      "image": "https://imgnike-a.akamaihd.net/360x360/023891ID.jpg",
      "nameItem": "Camiseta Jordan Air Masculina",
      "sales": "Casual",
      "stars": "4.7",
      "salePrice": "R$ 199,49",
      "originalPrice": "R$ 229,99"
    },
    {
      "productId": "https://www.nike.com.br/air-jordan-1-retro-low-og-027661.html?cor=51",
      "image": "https://imgnike-a.akamaihd.net/360x360/02766151.jpg",
      "nameItem": "Air Jordan 1 Retro Low OG",
      "sales": "Casual",
      "stars": "4.9",
      "salePrice": "R$ 759,99",
      "originalPrice": "R$ 1.299,99"
    },
    {
      "productId": "https://www.nike.com.br/air-jordan-1-high-og-028389.html?cor=ID",
      "image": "https://imgnike-a.akamaihd.net/360x360/028389ID.jpg",
      "nameItem": "Air Jordan 1 High OG",
      "sales": "Casual",
      "stars": "4.8",
      "salePrice": "R$ 1.599,99",
      "originalPrice": ""
    },
    {
      "productId": "https://www.nike.com.br/air-jordan-1-low-se-026322.html?cor=15",
      "image": "https://imgnike-a.akamaihd.net/360x360/02632215.jpg",
      "nameItem": "Air Jordan 1 Low SE",
      "sales": "Casual",
      "stars": "5.0",
      "salePrice": "R$ 854,99",
      "originalPrice": "R$ 1.099,99"
    },
    {
      "productId": "https://www.nike.com.br/air-jordan-1-low-027128.html?cor=51",
      "image": "https://imgnike-a.akamaihd.net/360x360/02712851.jpg",
      "nameItem": "Air Jordan 1 Low",
      "sales": "Casual",
      "stars": "4.3",
      "salePrice": "R$ 1044,99",
      "originalPrice": "R$ 1.099,99"
    },
    {
      "productId": "https://www.nike.com.br/air-jordan-1-high-og-027657.html?cor=51",
      "image": "https://imgnike-a.akamaihd.net/360x360/02765751.jpg",
      "nameItem": "Air Jordan 1 High OG",
      "sales": "Casual",
      "stars": "5.0",
      "salePrice": "R$ 1044,99",
      "originalPrice": "R$ 1.599,99"
    },
    {
      "productId": "https://www.nike.com.br/air-jordan-3-027810.html?cor=ID",
      "image": "https://imgnike-a.akamaihd.net/360x360/027810ID.jpg",
      "nameItem": "Air Jordan 3",
      "sales": "Casual",
      "stars": "",
      "salePrice": "R$ 1519,99",
      "originalPrice": "R$ 1.899,99"
    },
    {
      "productId": "https://www.nike.com.br/womens-air-jordan-1-elevate-low-026797.html?cor=51",
      "image": "https://imgnike-a.akamaihd.net/360x360/02679751.jpg",
      "nameItem": "Women's Air Jordan 1 Elevate Low",
      "sales": "Casual",
      "stars": "5.0",
      "salePrice": "R$ 1.099,99",
      "originalPrice": ""
    },
    {
      "productId": "https://www.nike.com.br/camiseta-jordan-air-masculina-023891.html?cor=51",
      "image": "https://imgnike-a.akamaihd.net/360x360/02389151.jpg",
      "nameItem": "Camiseta Jordan Air Masculina",
      "sales": "Casual",
      "stars": "4.7",
      "salePrice": "R$ 180,49",
      "originalPrice": "R$ 229,99"
    },
    {
      "productId": "https://www.nike.com.br/air-jordan-1-retro-low-og-026422.html?cor=7T",
      "image": "https://imgnike-a.akamaihd.net/360x360/0264227T.jpg",
      "nameItem": "Air Jordan 1 Retro Low OG",
      "sales": "Casual",
      "stars": "5.0",
      "salePrice": "R$ 949,99",
      "originalPrice": "R$ 1.299,99"
    },
    {
      "productId": "https://www.nike.com.br/air-jordan-3-retro-028262.html?cor=51",
      "image": "https://imgnike-a.akamaihd.net/360x360/02826251.jpg",
      "nameItem": "Air Jordan 3 Retro",
      "sales": "Casual",
      "stars": "",
      "salePrice": "R$ 1.699,99",
      "originalPrice": ""
    },
    {
      "productId": "https://www.nike.com.br/air-jordan-1-low-se-027185.html?cor=51",
      "image": "https://imgnike-a.akamaihd.net/360x360/02718551.jpg",
      "nameItem": "Air Jordan 1 Low SE",
      "sales": "Casual",
      "stars": "5.0",
      "salePrice": "R$ 892,99",
      "originalPrice": "R$ 1.199,99"
    },
    {
      "productId": "https://www.nike.com.br/air-jordan-xxxviii-low-028249.html?cor=51",
      "image": "https://imgnike-a.akamaihd.net/360x360/02824951.jpg",
      "nameItem": "Air Jordan XXXVIII Low",
      "sales": "Casual",
      "stars": "",
      "salePrice": "R$ 997,49",
      "originalPrice": "R$ 1.599,99"
    },
    {
      "productId": "https://www.nike.com.br/air-jordan-3-retro-026247.html?cor=51",
      "image": "https://imgnike-a.akamaihd.net/360x360/02624751.jpg",
      "nameItem": "AIR JORDAN 3 RETRO",
      "sales": "Casual",
      "stars": "5.0",
      "salePrice": "R$ 1282,49",
      "originalPrice": "R$ 1.899,99"
    },
    {
      "productId": "https://www.nike.com.br/womens-air-jordan-1-elevate-028995.html?cor=P1",
      "image": "https://imgnike-a.akamaihd.net/360x360/028995P1.jpg",
      "nameItem": "Women's Air Jordan 1 Elevate",
      "sales": "Casual",
      "stars": "",
      "salePrice": "R$ 1.099,99",
      "originalPrice": ""
    },
    {
      "productId": "https://www.nike.com.br/tenis-air-jordan-1-low-016510.html?cor=5C",
      "image": "https://imgnike-a.akamaihd.net/360x360/0165105C.jpg",
      "nameItem": "Tênis Air Jordan 1 Low Masculino",
      "sales": "Casual",
      "stars": "4.6",
      "salePrice": "R$ 1044,99",
      "originalPrice": "R$ 1.099,99"
    },
    {
      "productId": "https://www.nike.com.br/tenis-wmns-air-jordan-1-low-re-012715.html?cor=5F",
      "image": "https://imgnike-a.akamaihd.net/360x360/0127155F.jpg",
      "nameItem": "Tênis Air Jordan 1 Low Feminino",
      "sales": "Casual",
      "stars": "4.4",
      "salePrice": "R$ 1044,99",
      "originalPrice": "R$ 1.099,99"
    },
    {
      "productId": "https://www.nike.com.br/air-jordan-xxxviii-027827.html?cor=P1",
      "image": "https://imgnike-a.akamaihd.net/360x360/027827P1.jpg",
      "nameItem": "Air Jordan XXXVIII",
      "sales": "Casual",
      "stars": "5.0",
      "salePrice": "R$ 987,99",
      "originalPrice": "R$ 1.699,99"
    },
    {
      "productId": "https://www.nike.com.br/air-jordan-13-retro-tex-026240.html?cor=ID",
      "image": "https://imgnike-a.akamaihd.net/360x360/026240ID.jpg",
      "nameItem": "Air Jordan 13",
      "sales": "Casual",
      "stars": "4.0",
      "salePrice": "R$ 1044,99",
      "originalPrice": "R$ 1.899,99"
    },
    {
      "productId": "https://www.nike.com.br/air-jordan-3-retro-craft-028407.html?cor=51",
      "image": "https://imgnike-a.akamaihd.net/360x360/02840751.jpg",
      "nameItem": "Air Jordan 3 Retro Craft",
      "sales": "Casual",
      "stars": "",
      "salePrice": "R$ 1.699,99",
      "originalPrice": ""
    },
    {
      "productId": "https://www.nike.com.br/tenis-wmns-air-jordan-1-low-re-012715.html?cor=82",
      "image": "https://imgnike-a.akamaihd.net/360x360/01271582.jpg",
      "nameItem": "Tênis Air Jordan 1 Low Feminino",
      "sales": "Casual",
      "stars": "4.4",
      "salePrice": "R$ 1044,99",
      "originalPrice": "R$ 1.099,99"
    },
    {
      "productId": "https://www.nike.com.br/air-jordan-3-retro-027141.html?cor=3X",
      "image": "https://imgnike-a.akamaihd.net/360x360/0271413X.jpg",
      "nameItem": "Air Jordan 3 Retro",
      "sales": "Casual",
      "stars": "4.8",
      "salePrice": "R$ 1082,99",
      "originalPrice": "R$ 1.699,99"
    },
    {
      "productId": "https://www.nike.com.br/air-jordan-4-retro-craft-027796.html?cor=NX",
      "image": "https://imgnike-a.akamaihd.net/360x360/027796NX.jpg",
      "nameItem": "Air Jordan 4 Retro Craft",
      "sales": "Casual",
      "stars": "5.0",
      "salePrice": "R$ 1.899,99",
      "originalPrice": ""
    },
    {
      "productId": "https://www.nike.com.br/womens-air-jordan-3-retro-027842.html?cor=ID",
      "image": "https://imgnike-a.akamaihd.net/360x360/027842ID.jpg",
      "nameItem": "Women's Air Jordan 3 Retro",
      "sales": "Casual",
      "stars": "",
      "salePrice": "R$ 1643,49",
      "originalPrice": "R$ 1.899,99"
    },
    {
      "productId": "https://www.nike.com.br/womens-air-jordan-1-low-029166.html?cor=NX",
      "image": "https://imgnike-a.akamaihd.net/360x360/029166NX.jpg",
      "nameItem": "Women's Air Jordan 1 Low",
      "sales": "Casual",
      "stars": "",
      "salePrice": "R$ 1.199,99",
      "originalPrice": ""
    },
    {
      "productId": "https://www.nike.com.br/air-jordan-5-027748.html?cor=15",
      "image": "https://imgnike-a.akamaihd.net/360x360/02774815.jpg",
      "nameItem": "Air Jordan 5",
      "sales": "Casual",
      "stars": "5.0",
      "salePrice": "R$ 1.899,99",
      "originalPrice": ""
    },
    {
      "productId": "https://www.nike.com.br/tenis-air-jordan-1-mid-masculino-024331.html?cor=5A",
      "image": "https://imgnike-a.akamaihd.net/360x360/0243315A.jpg",
      "nameItem": "Tênis Air Jordan 1 Mid Masculino",
      "sales": "Casual",
      "stars": "4.8",
      "salePrice": "R$ 873,99",
      "originalPrice": "R$ 1.199,99"
    }
  ]

  const dataToRender = fetchResults.length > 0 ? fetchResults : data
  return (
    <div className='bg-[#131313] min-h-screen flex flex-col'>
      <Header searchItem={true} botName="nike" placeHolder="Air jordan" />
      <div className="container mx-auto flex-grow flex items-center justify-center">
        {isLoading ? (
          <div role="status" className="flex items-center justify-center h-full">
            <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          <ProductCarousel data={dataToRender} headers={headers} />
        )}
      </div>
    </div>
  )
}

export default Nike