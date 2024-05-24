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
      "image": "https://imgnike-a.akamaihd.net/1920x1920/02916751.jpg",
      "nameItem": "Air Jordan 4 Retro",
      "sales": "Casual",
      "stars": "",
      "salePrice": "R$ 1.799,99",
      "originalPrice": ""
    },
    {
      "productId": "https://www.nike.com.br/air-jordan-4-retro-027237.html?cor=51",
      "image": "https://imgnike-a.akamaihd.net/1920x1920/02723751.jpg",
      "nameItem": "Air Jordan 4 Retro",
      "sales": "Casual",
      "stars": "5.0",
      "salePrice": "R$ 1149,49",
      "originalPrice": "R$ 1.699,99"
    },
    {
      "productId": "https://www.nike.com.br/air-jordan-4-retro-craft-027796.html?cor=NX",
      "image": "https://imgnike-a.akamaihd.net/1920x1920/027796NX.jpg",
      "nameItem": "Air Jordan 4 Retro Craft",
      "sales": "Casual",
      "stars": "5.0",
      "salePrice": "R$ 1.899,99",
      "originalPrice": ""
    },
    {
      "productId": "https://www.nike.com.br/bone-jordan-club-unissex-026523.html?cor=ID",
      "image": "https://imgnike-a.akamaihd.net/1920x1920/026523ID.jpg",
      "nameItem": "Boné Jordan Club Unissex",
      "sales": "Casual",
      "stars": "4.3",
      "salePrice": "R$ 151,99",
      "originalPrice": "R$ 179,99"
    },
    {
      "productId": "https://www.nike.com.br/chinelo-jordan-post-masculino-025635.html?cor=ID",
      "image": "https://imgnike-a.akamaihd.net/1920x1920/025635ID.jpg",
      "nameItem": "Chinelo Jordan Post Masculino",
      "sales": "Casual",
      "stars": "4.3",
      "salePrice": "R$ 237,49",
      "originalPrice": "R$ 249,99"
    },
    {
      "productId": "https://www.nike.com.br/camiseta-jordan-flight-masculina-027316.html?cor=ID",
      "image": "https://imgnike-a.akamaihd.net/1920x1920/027316ID.jpg",
      "nameItem": "Camiseta Jordan Flight Masculina",
      "sales": "Casual",
      "stars": "4.6",
      "salePrice": "R$ 132,99",
      "originalPrice": "R$ 249,99"
    },
    {
      "productId": "https://www.nike.com.br/camiseta-jordan-jumpman-masculina-026344.html?cor=51",
      "image": "https://imgnike-a.akamaihd.net/1920x1920/02634451.jpg",
      "nameItem": "Camiseta Jordan Jumpman Masculina",
      "sales": "Casual",
      "stars": "4.7",
      "salePrice": "R$ 132,99",
      "originalPrice": "R$ 199,99"
    },
    {
      "productId": "https://www.nike.com.br/shorts-jordan-essentials-masculino-026473.html?cor=ID",
      "image": "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      "nameItem": "Shorts Jordan Essentials Masculino",
      "sales": "Casual",
      "stars": "4.8",
      "salePrice": "R$ 265,99",
      "originalPrice": "R$ 329,99"
    },
    {
      "productId": "https://www.nike.com.br/air-jordan-xxxvii-025347.html?cor=7T",
      "image": "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      "nameItem": "Air Jordan XXXVII",
      "sales": "Casual",
      "stars": "4.7",
      "salePrice": "R$ 873,99",
      "originalPrice": "R$ 1.299,99"
    },
    {
      "productId": "https://www.nike.com.br/camiseta-jordan-sneaker-masculina-028098.html?cor=ID",
      "image": "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      "nameItem": "Camiseta Jordan Sneaker Masculina",
      "sales": "Casual",
      "stars": "5.0",
      "salePrice": "R$ 180,49",
      "originalPrice": "R$ 299,99"
    },
    {
      "productId": "https://www.nike.com.br/camiseta-jordan-air-masculina-023891.html?cor=ID",
      "image": "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      "nameItem": "Camiseta Jordan Air Masculina",
      "sales": "Casual",
      "stars": "4.7",
      "salePrice": "R$ 199,49",
      "originalPrice": "R$ 229,99"
    },
    {
      "productId": "https://www.nike.com.br/camiseta-jordan-flight-mvp-masculina-028199.html?cor=ID",
      "image": "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      "nameItem": "Camiseta Jordan Flight MVP Masculina",
      "sales": "Casual",
      "stars": "5.0",
      "salePrice": "R$ 151,99",
      "originalPrice": "R$ 229,99"
    },
    {
      "productId": "https://www.nike.com.br/shorts-jordan-essentials-masculino-026473.html?cor=7T",
      "image": "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      "nameItem": "Shorts Jordan Essentials Masculino",
      "sales": "Casual",
      "stars": "4.8",
      "salePrice": "R$ 189,99",
      "originalPrice": "R$ 329,99"
    },
    {
      "productId": "https://www.nike.com.br/air-jordan-1-retro-low-og-027661.html?cor=51",
      "image": "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      "nameItem": "Air Jordan 1 Retro Low OG",
      "sales": "Casual",
      "stars": "5.0",
      "salePrice": "R$ 759,99",
      "originalPrice": "R$ 1.299,99"
    },
    {
      "productId": "https://www.nike.com.br/camiseta-jordan-jumpman-masculina-026344.html?cor=ID",
      "image": "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      "nameItem": "Camiseta Jordan Jumpman Masculina",
      "sales": "Casual",
      "stars": "4.7",
      "salePrice": "R$ 151,99",
      "originalPrice": "R$ 199,99"
    },
    {
      "productId": "https://www.nike.com.br/air-jordan-1-low-se-026322.html?cor=15",
      "image": "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      "nameItem": "Air Jordan 1 Low SE",
      "sales": "Casual",
      "stars": "5.0",
      "salePrice": "R$ 854,99",
      "originalPrice": "R$ 1.099,99"
    },
    {
      "productId": "https://www.nike.com.br/camiseta-jordan-flight-masculina-027316.html?cor=51",
      "image": "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      "nameItem": "Camiseta Jordan Flight Masculina",
      "sales": "Casual",
      "stars": "4.6",
      "salePrice": "R$ 189,99",
      "originalPrice": "R$ 249,99"
    },
    {
      "productId": "https://www.nike.com.br/camiseta-jordan-masculina-025738.html?cor=15",
      "image": "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      "nameItem": "Camiseta Jordan Masculina",
      "sales": "Casual",
      "stars": "4.9",
      "salePrice": "R$ 132,99",
      "originalPrice": "R$ 199,99"
    },
    {
      "productId": "https://www.nike.com.br/air-jordan-1-high-og-028389.html?cor=ID",
      "image": "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      "nameItem": "Air Jordan 1 High OG",
      "sales": "Casual",
      "stars": "4.8",
      "salePrice": "R$ 1.599,99",
      "originalPrice": ""
    },
    {
      "productId": "https://www.nike.com.br/air-jordan-1-low-027128.html?cor=51",
      "image": "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      "nameItem": "Air Jordan 1 Low",
      "sales": "Casual",
      "stars": "4.3",
      "salePrice": "R$ 1044,99",
      "originalPrice": "R$ 1.099,99"
    },
    {
      "productId": "https://www.nike.com.br/air-jordan-1-high-og-027657.html?cor=51",
      "image": "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      "nameItem": "Air Jordan 1 High OG",
      "sales": "Casual",
      "stars": "5.0",
      "salePrice": "R$ 911,99",
      "originalPrice": "R$ 1.599,99"
    },
    {
      "productId": "https://www.nike.com.br/womens-air-jordan-1-elevate-low-026797.html?cor=51",
      "image": "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      "nameItem": "Women's Air Jordan 1 Elevate Low",
      "sales": "Casual",
      "stars": "5.0",
      "salePrice": "R$ 1.099,99",
      "originalPrice": ""
    },
    {
      "productId": "https://www.nike.com.br/air-jordan-3-027810.html?cor=ID",
      "image": "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      "nameItem": "Air Jordan 3",
      "sales": "Casual",
      "stars": "",
      "salePrice": "R$ 1519,99",
      "originalPrice": "R$ 1.899,99"
    },
    {
      "productId": "https://www.nike.com.br/chapeu-jordan-apex-unissex-026657.html?cor=ID",
      "image": "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      "nameItem": "Chapéu Jordan Apex Unissex",
      "sales": "Casual",
      "stars": "4.9",
      "salePrice": "R$ 218,49",
      "originalPrice": "R$ 229,99"
    },
    {
      "productId": "https://www.nike.com.br/camiseta-jordan-flight-essentials-masculina-023808.html?cor=ID",
      "image": "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      "nameItem": "Camiseta Jordan Flight Essential Crew Masculina",
      "sales": "Casual",
      "stars": "4.6",
      "salePrice": "R$ 265,99",
      "originalPrice": "R$ 279,99"
    },
    {
      "productId": "https://www.nike.com.br/camiseta-jordan-air-masculina-023891.html?cor=51",
      "image": "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      "nameItem": "Camiseta Jordan Air Masculina",
      "sales": "Casual",
      "stars": "4.7",
      "salePrice": "R$ 180,49",
      "originalPrice": "R$ 229,99"
    },
    {
      "productId": "https://www.nike.com.br/camiseta-manga-curta-m-j-jumpman-ss-crew-008250.html?cor=52",
      "image": "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      "nameItem": "Camiseta Jordan Jumpman Masculina",
      "sales": "Casual",
      "stars": "4.9",
      "salePrice": "R$ 170,99",
      "originalPrice": "R$ 249,99"
    },
    {
      "productId": "https://www.nike.com.br/camiseta-manga-curta-m-j-jumpman-ss-crew-008250.html?cor=IE",
      "image": "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      "nameItem": "Camiseta Jordan Jumpman Masculina",
      "sales": "Casual",
      "stars": "4.9",
      "salePrice": "R$ 189,99",
      "originalPrice": "R$ 249,99"
    },
    {
      "productId": "https://www.nike.com.br/chinelo-jordan-jumpman-masculino-027980.html?cor=ID",
      "image": "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      "nameItem": "Chinelo Jordan Jumpman Masculino",
      "sales": "Casual",
      "stars": "4.6",
      "salePrice": "R$ 265,99",
      "originalPrice": "R$ 349,99"
    },
    {
      "productId": "https://www.nike.com.br/tenis-air-jordan-1-mid-masculino-024331.html?cor=51",
      "image": "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      "nameItem": "Tênis Air Jordan 1 Mid Masculino",
      "sales": "Casual",
      "stars": "4.8",
      "salePrice": "R$ 892,99",
      "originalPrice": "R$ 1.199,99"
    },
    {
      "productId": "https://www.nike.com.br/air-jordan-4-retro-029167.html?cor=51",
      "image": "https://imgnike-a.akamaihd.net/1920x1920/02916751.jpg",
      "nameItem": "Air Jordan 4 Retro",
      "sales": "Casual",
      "stars": "",
      "salePrice": "R$ 1.799,99",
      "originalPrice": ""
    },
    {
      "productId": "https://www.nike.com.br/air-jordan-4-retro-027237.html?cor=51",
      "image": "https://imgnike-a.akamaihd.net/1920x1920/02723751.jpg",
      "nameItem": "Air Jordan 4 Retro",
      "sales": "Casual",
      "stars": "5.0",
      "salePrice": "R$ 1149,49",
      "originalPrice": "R$ 1.699,99"
    },
    {
      "productId": "https://www.nike.com.br/air-jordan-4-retro-craft-027796.html?cor=NX",
      "image": "https://imgnike-a.akamaihd.net/1920x1920/027796NX.jpg",
      "nameItem": "Air Jordan 4 Retro Craft",
      "sales": "Casual",
      "stars": "5.0",
      "salePrice": "R$ 1.899,99",
      "originalPrice": ""
    },
    {
      "productId": "https://www.nike.com.br/bone-jordan-club-unissex-026523.html?cor=ID",
      "image": "https://imgnike-a.akamaihd.net/1920x1920/026523ID.jpg",
      "nameItem": "Boné Jordan Club Unissex",
      "sales": "Casual",
      "stars": "4.3",
      "salePrice": "R$ 151,99",
      "originalPrice": "R$ 179,99"
    },
    {
      "productId": "https://www.nike.com.br/chinelo-jordan-post-masculino-025635.html?cor=ID",
      "image": "https://imgnike-a.akamaihd.net/1920x1920/025635ID.jpg",
      "nameItem": "Chinelo Jordan Post Masculino",
      "sales": "Casual",
      "stars": "4.3",
      "salePrice": "R$ 237,49",
      "originalPrice": "R$ 249,99"
    },
    {
      "productId": "https://www.nike.com.br/camiseta-jordan-flight-masculina-027316.html?cor=ID",
      "image": "https://imgnike-a.akamaihd.net/1920x1920/027316ID.jpg",
      "nameItem": "Camiseta Jordan Flight Masculina",
      "sales": "Casual",
      "stars": "4.6",
      "salePrice": "R$ 132,99",
      "originalPrice": "R$ 249,99"
    },
    {
      "productId": "https://www.nike.com.br/camiseta-jordan-jumpman-masculina-026344.html?cor=51",
      "image": "https://imgnike-a.akamaihd.net/1920x1920/02634451.jpg",
      "nameItem": "Camiseta Jordan Jumpman Masculina",
      "sales": "Casual",
      "stars": "4.7",
      "salePrice": "R$ 132,99",
      "originalPrice": "R$ 199,99"
    },
    {
      "productId": "https://www.nike.com.br/shorts-jordan-essentials-masculino-026473.html?cor=ID",
      "image": "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      "nameItem": "Shorts Jordan Essentials Masculino",
      "sales": "Casual",
      "stars": "4.8",
      "salePrice": "R$ 265,99",
      "originalPrice": "R$ 329,99"
    },
    {
      "productId": "https://www.nike.com.br/air-jordan-xxxvii-025347.html?cor=7T",
      "image": "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      "nameItem": "Air Jordan XXXVII",
      "sales": "Casual",
      "stars": "4.7",
      "salePrice": "R$ 873,99",
      "originalPrice": "R$ 1.299,99"
    },
    {
      "productId": "https://www.nike.com.br/camiseta-jordan-sneaker-masculina-028098.html?cor=ID",
      "image": "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      "nameItem": "Camiseta Jordan Sneaker Masculina",
      "sales": "Casual",
      "stars": "5.0",
      "salePrice": "R$ 180,49",
      "originalPrice": "R$ 299,99"
    },
    {
      "productId": "https://www.nike.com.br/camiseta-jordan-air-masculina-023891.html?cor=ID",
      "image": "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      "nameItem": "Camiseta Jordan Air Masculina",
      "sales": "Casual",
      "stars": "4.7",
      "salePrice": "R$ 199,49",
      "originalPrice": "R$ 229,99"
    },
    {
      "productId": "https://www.nike.com.br/camiseta-jordan-flight-mvp-masculina-028199.html?cor=ID",
      "image": "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      "nameItem": "Camiseta Jordan Flight MVP Masculina",
      "sales": "Casual",
      "stars": "5.0",
      "salePrice": "R$ 151,99",
      "originalPrice": "R$ 229,99"
    },
    {
      "productId": "https://www.nike.com.br/shorts-jordan-essentials-masculino-026473.html?cor=7T",
      "image": "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      "nameItem": "Shorts Jordan Essentials Masculino",
      "sales": "Casual",
      "stars": "4.8",
      "salePrice": "R$ 189,99",
      "originalPrice": "R$ 329,99"
    },
    {
      "productId": "https://www.nike.com.br/air-jordan-1-retro-low-og-027661.html?cor=51",
      "image": "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      "nameItem": "Air Jordan 1 Retro Low OG",
      "sales": "Casual",
      "stars": "5.0",
      "salePrice": "R$ 759,99",
      "originalPrice": "R$ 1.299,99"
    },
    {
      "productId": "https://www.nike.com.br/camiseta-jordan-jumpman-masculina-026344.html?cor=ID",
      "image": "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      "nameItem": "Camiseta Jordan Jumpman Masculina",
      "sales": "Casual",
      "stars": "4.7",
      "salePrice": "R$ 151,99",
      "originalPrice": "R$ 199,99"
    },
    {
      "productId": "https://www.nike.com.br/air-jordan-1-low-se-026322.html?cor=15",
      "image": "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      "nameItem": "Air Jordan 1 Low SE",
      "sales": "Casual",
      "stars": "5.0",
      "salePrice": "R$ 854,99",
      "originalPrice": "R$ 1.099,99"
    },
    {
      "productId": "https://www.nike.com.br/camiseta-jordan-flight-masculina-027316.html?cor=51",
      "image": "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      "nameItem": "Camiseta Jordan Flight Masculina",
      "sales": "Casual",
      "stars": "4.6",
      "salePrice": "R$ 189,99",
      "originalPrice": "R$ 249,99"
    },
    {
      "productId": "https://www.nike.com.br/camiseta-jordan-masculina-025738.html?cor=15",
      "image": "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      "nameItem": "Camiseta Jordan Masculina",
      "sales": "Casual",
      "stars": "4.9",
      "salePrice": "R$ 132,99",
      "originalPrice": "R$ 199,99"
    },
    {
      "productId": "https://www.nike.com.br/air-jordan-1-high-og-028389.html?cor=ID",
      "image": "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      "nameItem": "Air Jordan 1 High OG",
      "sales": "Casual",
      "stars": "4.8",
      "salePrice": "R$ 1.599,99",
      "originalPrice": ""
    },
    {
      "productId": "https://www.nike.com.br/air-jordan-1-low-027128.html?cor=51",
      "image": "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      "nameItem": "Air Jordan 1 Low",
      "sales": "Casual",
      "stars": "4.3",
      "salePrice": "R$ 1044,99",
      "originalPrice": "R$ 1.099,99"
    },
    {
      "productId": "https://www.nike.com.br/air-jordan-1-high-og-027657.html?cor=51",
      "image": "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      "nameItem": "Air Jordan 1 High OG",
      "sales": "Casual",
      "stars": "5.0",
      "salePrice": "R$ 911,99",
      "originalPrice": "R$ 1.599,99"
    },
    {
      "productId": "https://www.nike.com.br/womens-air-jordan-1-elevate-low-026797.html?cor=51",
      "image": "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      "nameItem": "Women's Air Jordan 1 Elevate Low",
      "sales": "Casual",
      "stars": "5.0",
      "salePrice": "R$ 1.099,99",
      "originalPrice": ""
    },
    {
      "productId": "https://www.nike.com.br/air-jordan-3-027810.html?cor=ID",
      "image": "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      "nameItem": "Air Jordan 3",
      "sales": "Casual",
      "stars": "",
      "salePrice": "R$ 1519,99",
      "originalPrice": "R$ 1.899,99"
    },
    {
      "productId": "https://www.nike.com.br/chapeu-jordan-apex-unissex-026657.html?cor=ID",
      "image": "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      "nameItem": "Chapéu Jordan Apex Unissex",
      "sales": "Casual",
      "stars": "4.9",
      "salePrice": "R$ 218,49",
      "originalPrice": "R$ 229,99"
    },
    {
      "productId": "https://www.nike.com.br/camiseta-jordan-flight-essentials-masculina-023808.html?cor=ID",
      "image": "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      "nameItem": "Camiseta Jordan Flight Essential Crew Masculina",
      "sales": "Casual",
      "stars": "4.6",
      "salePrice": "R$ 265,99",
      "originalPrice": "R$ 279,99"
    },
    {
      "productId": "https://www.nike.com.br/camiseta-jordan-air-masculina-023891.html?cor=51",
      "image": "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      "nameItem": "Camiseta Jordan Air Masculina",
      "sales": "Casual",
      "stars": "4.7",
      "salePrice": "R$ 180,49",
      "originalPrice": "R$ 229,99"
    },
    {
      "productId": "https://www.nike.com.br/camiseta-manga-curta-m-j-jumpman-ss-crew-008250.html?cor=52",
      "image": "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      "nameItem": "Camiseta Jordan Jumpman Masculina",
      "sales": "Casual",
      "stars": "4.9",
      "salePrice": "R$ 170,99",
      "originalPrice": "R$ 249,99"
    },
    {
      "productId": "https://www.nike.com.br/camiseta-manga-curta-m-j-jumpman-ss-crew-008250.html?cor=IE",
      "image": "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      "nameItem": "Camiseta Jordan Jumpman Masculina",
      "sales": "Casual",
      "stars": "4.9",
      "salePrice": "R$ 189,99",
      "originalPrice": "R$ 249,99"
    },
    {
      "productId": "https://www.nike.com.br/chinelo-jordan-jumpman-masculino-027980.html?cor=ID",
      "image": "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      "nameItem": "Chinelo Jordan Jumpman Masculino",
      "sales": "Casual",
      "stars": "4.6",
      "salePrice": "R$ 265,99",
      "originalPrice": "R$ 349,99"
    },
    {
      "productId": "https://www.nike.com.br/tenis-air-jordan-1-mid-masculino-024331.html?cor=51",
      "image": "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      "nameItem": "Tênis Air Jordan 1 Mid Masculino",
      "sales": "Casual",
      "stars": "4.8",
      "salePrice": "R$ 892,99",
      "originalPrice": "R$ 1.199,99"
    }
  ]

  const dataToRender = fetchResults.length > 0 ? fetchResults : data
  return (
    <div className='bg-[#131313] min-h-screen max-h-screen overflow-hidden'>
      <Header searchItem={true} botName="nike"/>
      <div className="container mx-auto">
        {isLoading ? (
          <div>
            <div></div> {/* COLOCAR ALGUMA IMAGEM DE UM ROBO PRA LOADING AQUI */}
          </div>
        ) : (
          <ProductCarousel data={dataToRender} headers={headers} />
        )}
      </div>
    </div>
  )
}

export default Nike