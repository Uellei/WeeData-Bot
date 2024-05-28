import React from "react"
import { Header } from "../components/Header/Header"
import { useFetchContext } from "../contexts/FetchContext"
import ProductCarousel from "../components/Carousel/ProductCarousel"



const Adidas = () => {
  const { fetchResults, isLoading } = useFetchContext()

  const headers = {
    "accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
    "accept-language": "en-US,en;q=0.9,pt;q=0.8",
    "sec-ch-ua": "\"Chromium\";v=\"124\", \"Google Chrome\";v=\"124\", \"Not-A.Brand\";v=\"99\"",
    "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
  }

  const data = [
    {
        "productId": "https://www.adidas.com.br/tenis-forum-84-low-adv/IG6252.html",
        "image": "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/95f6d155defa41cdb48144b0481dd754_9366/tenis-forum-84-low-adv.jpg",
        "nameItem": "Tênis Forum 84 Low ADV",
        "sales": "16",
        "stars": "4.75",
        "salePrice": "R$ 899.99",
        "originalPrice": ""
    },
    {
        "productId": "https://www.adidas.com.br/tenis-forum-bold/FY9042.html",
        "image": "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/e1fc6fb0d7c9411e8806acd3010488b6_9366/tenis-forum-bold.jpg",
        "nameItem": "Tênis Forum Bold",
        "sales": "813",
        "stars": "4.7921",
        "salePrice": "R$ 799.99",
        "originalPrice": ""
    },
    {
        "productId": "https://www.adidas.com.br/tenis-forum-84-low-adv/HP9088.html",
        "image": "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/0de3c2a610a740c8bb3aaf150100d049_9366/tenis-forum-84-low-adv.jpg",
        "nameItem": "Tênis Forum 84 Low ADV",
        "sales": "210",
        "stars": "4.7572",
        "salePrice": "R$ 899.99",
        "originalPrice": ""
    },
    {
        "productId": "https://www.adidas.com.br/tenis-forum-84-low-adv/IG6260.html",
        "image": "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/27008781295144b48eba10d7f931c493_9366/tenis-forum-84-low-adv.jpg",
        "nameItem": "Tênis Forum 84 Low ADV",
        "sales": "4",
        "stars": "5",
        "salePrice": "R$ 899.99",
        "originalPrice": ""
    },
    {
        "productId": "https://www.adidas.com.br/tenis-forum-low/FY7755.html",
        "image": "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/949a39ad23254477a094ac310128aeb2_9366/tenis-forum-low.jpg",
        "nameItem": "Tênis Forum Low",
        "sales": "890",
        "stars": "4.8057",
        "salePrice": "R$ 799.99",
        "originalPrice": ""
    },
    {
        "productId": "https://www.adidas.com.br/tenis-forum-low-cl/IG8700.html",
        "image": "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/5b4522610aa24735863e09376acfe258_9366/tenis-forum-low-cl.jpg",
        "nameItem": "Tênis Forum Low CL",
        "sales": "11",
        "stars": "5",
        "salePrice": "R$ 799.99",
        "originalPrice": ""
    },
    {
        "productId": "https://www.adidas.com.br/tenis-forum-low/FY7756.html",
        "image": "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/9775786cd7b446af9ddcac5e004a275e_9366/tenis-forum-low.jpg",
        "nameItem": "Tênis Forum Low",
        "sales": "890",
        "stars": "4.8057",
        "salePrice": "R$ 799.99",
        "originalPrice": ""
    },
    {
        "productId": "https://www.adidas.com.br/tenis-forum-bold-stripes/ID8316.html",
        "image": "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/6558eb99936a49ff8a7a2368bedcc5ec_9366/tenis-forum-bold-stripes.jpg",
        "nameItem": "Tênis Forum Bold Stripes",
        "sales": "4",
        "stars": "4.75",
        "salePrice": "R$ 799.99",
        "originalPrice": ""
    },
    {
        "productId": "https://www.adidas.com.br/tenis-forum-xlg/ID0399.html",
        "image": "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/6b3a1d0fc9f04769bd8863263d0fc439_9366/tenis-forum-xlg.jpg",
        "nameItem": "Tênis Forum XLG",
        "sales": "6",
        "stars": "5",
        "salePrice": "R$ 799.99",
        "originalPrice": ""
    },
    {
        "productId": "https://www.adidas.com.br/tenis-forum-low-cl/IG1435.html",
        "image": "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/096f41d766824f5d83ea36f540d73b1b_9366/tenis-forum-low-cl.jpg",
        "nameItem": "Tênis Forum Low CL",
        "sales": "-99",
        "stars": "None",
        "salePrice": "R$ 799.99",
        "originalPrice": ""
    },
    {
        "productId": "https://www.adidas.com.br/tenis-forum-low/IG3967.html",
        "image": "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/63bd2676df584304a16e678b5bde385e_9366/tenis-forum-low.jpg",
        "nameItem": "Tênis Forum Low",
        "sales": "13",
        "stars": "4.6924",
        "salePrice": "R$ 799.99",
        "originalPrice": ""
    },
    {
        "productId": "https://www.adidas.com.br/tenis-forum-mid/IG3757.html",
        "image": "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/b9a783b9c3564d529542e758c3dd0ed4_9366/tenis-forum-mid.jpg",
        "nameItem": "Tênis Forum Mid",
        "sales": "3",
        "stars": "4.3333",
        "salePrice": "R$ 899.99",
        "originalPrice": ""
    },
    {
        "productId": "https://www.adidas.com.br/tenis-adidas-originals-x-hello-kitty-and-friends-forum-bold/IF1229.html",
        "image": "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/c4871324308b4805b272aa115da93a9e_9366/tenis-adidas-originals-x-hello-kitty-and-friends-forum-bold.jpg",
        "nameItem": "Tênis adidas Originals x Hello Kitty and Friends Forum Bold",
        "sales": "15",
        "stars": "4.7334",
        "salePrice": "R$ 649.99",
        "originalPrice": ""
    },
    {
        "productId": "https://www.adidas.com.br/tenis-forum-low-cl/IG3783.html",
        "image": "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/c3454684e03b44b89c9b81887339b215_9366/tenis-forum-low-cl.jpg",
        "nameItem": "Tênis Forum Low CL",
        "sales": "-99",
        "stars": "None",
        "salePrice": "R$ 799.99",
        "originalPrice": ""
    },
    {
        "productId": "https://www.adidas.com.br/tenis-forum-xlg/ID0398.html",
        "image": "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/f0fa0d4d08c642c6ac7516bf29a77d50_9366/tenis-forum-xlg.jpg",
        "nameItem": "Tênis Forum XLG",
        "sales": "6",
        "stars": "5",
        "salePrice": "R$ 799.99",
        "originalPrice": ""
    },
    {
        "productId": "https://www.adidas.com.br/tenis-forum-low/IG3785.html",
        "image": "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/5f01572332ea441298165fd16d337a91_9366/tenis-forum-low.jpg",
        "nameItem": "Tênis Forum Low",
        "sales": "-99",
        "stars": "None",
        "salePrice": "R$ 799.99",
        "originalPrice": ""
    },
    {
        "productId": "https://www.adidas.com.br/tenis-forum-low/FY7989.html",
        "image": "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/6920442968704e7ca140ad19017e7980_9366/tenis-forum-low.jpg",
        "nameItem": "Tênis Forum Low",
        "sales": "23",
        "stars": "4.5653",
        "salePrice": "R$ 399.99",
        "originalPrice": ""
    },
    {
        "productId": "https://www.adidas.com.br/tenis-forum-low/FY7986.html",
        "image": "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/0a77ff8de9314d5fbe22ace20021c0bc_9366/tenis-forum-low.jpg",
        "nameItem": "Tênis Forum Low",
        "sales": "23",
        "stars": "4.5653",
        "salePrice": "R$ 399.99",
        "originalPrice": ""
    },
    {
        "productId": "https://www.adidas.com.br/tenis-forum-low-cl/IF1823.html",
        "image": "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/a7f889cd87ee406087ea4d2dfbd12866_9366/tenis-forum-low-cl.jpg",
        "nameItem": "Tênis Forum Low CL",
        "sales": "19",
        "stars": "4.6316",
        "salePrice": "R$ 799.99",
        "originalPrice": ""
    },
    {
        "productId": "https://www.adidas.com.br/tenis-forum-84-low-cl/IG3772.html",
        "image": "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/9115a618e333451d8f6415898ffda37c_9366/tenis-forum-84-low-cl.jpg",
        "nameItem": "Tênis Forum 84 Low CL",
        "sales": "2",
        "stars": "5",
        "salePrice": "R$ 899.99",
        "originalPrice": ""
    },
    {
        "productId": "https://www.adidas.com.br/tenis-forum-mid/IG3754.html",
        "image": "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/a4a8a793d88c4aa2bd0e446f411836a3_9366/tenis-forum-mid.jpg",
        "nameItem": "Tênis Forum Mid",
        "sales": "3",
        "stars": "4.3333",
        "salePrice": "R$ 899.99",
        "originalPrice": ""
    },
    {
        "productId": "https://www.adidas.com.br/tenis-forum-bold/IE4763.html",
        "image": "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/7f80f940f01d4b47b229c5e5b79b2467_9366/tenis-forum-bold.jpg",
        "nameItem": "Tênis Forum Bold",
        "sales": "118",
        "stars": "4.8899",
        "salePrice": "R$ 799.99",
        "originalPrice": ""
    },
    {
        "productId": "https://www.adidas.com.br/tenis-forum-low/GV9766.html",
        "image": "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/ed1f85799cd94f358717ade9017d5235_9366/tenis-forum-low.jpg",
        "nameItem": "Tênis Forum Low",
        "sales": "890",
        "stars": "4.8057",
        "salePrice": "R$ 799.99",
        "originalPrice": ""
    },
    {
        "productId": "https://www.adidas.com.br/tenis-forum-low/FY7981.html",
        "image": "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/e8d7a9722d404381a1d2ace9013b500c_9366/tenis-forum-low.jpg",
        "nameItem": "Tênis Forum Low",
        "sales": "29",
        "stars": "4.6897",
        "salePrice": "R$ 449.99",
        "originalPrice": ""
    },
    {
        "productId": "https://www.adidas.com.br/tenis-forum-mid/IG3755.html",
        "image": "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/73c4910d129141b2b3a6a642fd751c89_9366/tenis-forum-mid.jpg",
        "nameItem": "Tênis Forum Mid",
        "sales": "3",
        "stars": "4.3333",
        "salePrice": "R$ 899.99",
        "originalPrice": ""
    },
    {
        "productId": "https://www.adidas.com.br/tenis-forum-low/IF2652.html",
        "image": "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/a59e6e95bd1b407b89faafc6013f3e9d_9366/tenis-forum-low.jpg",
        "nameItem": "Tênis Forum Low",
        "sales": "29",
        "stars": "4.6897",
        "salePrice": "R$ 449.99",
        "originalPrice": ""
    },
    {
        "productId": "https://www.adidas.com.br/tenis-forum-low/IG3784.html",
        "image": "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/80c744127563430aad9d810426672b3c_9366/tenis-forum-low.jpg",
        "nameItem": "Tênis Forum Low",
        "sales": "1",
        "stars": "4",
        "salePrice": "R$ 799.99",
        "originalPrice": ""
    },
    {
        "productId": "https://www.adidas.com.br/tenis-forum-low-cl/IE7204.html",
        "image": "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/9d0caa91b40441be81a9afb30007855f_9366/tenis-forum-low-cl.jpg",
        "nameItem": "Tênis Forum Low CL",
        "sales": "80",
        "stars": "4.875",
        "salePrice": "R$ 799.99",
        "originalPrice": ""
    },
    {
        "productId": "https://www.adidas.com.br/tenis-forum-bold/IE4775.html",
        "image": "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/587f20e6847341a680baafa900f4a0ee_9366/tenis-forum-bold.jpg",
        "nameItem": "Tênis Forum Bold",
        "sales": "118",
        "stars": "4.8899",
        "salePrice": "R$ 699.99",
        "originalPrice": ""
    },
    {
        "productId": "https://www.adidas.com.br/forum-mod-low-w/IE5917.html",
        "image": "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/18280362e47543eea25d74fc6eb68d01_9366/forum-mod-low-w.jpg",
        "nameItem": "FORUM MOD LOW W",
        "sales": "2",
        "stars": "5",
        "salePrice": "R$ 799.99",
        "originalPrice": ""
    },
    {
        "productId": "https://www.adidas.com.br/tenis-forum-bold/ID1654.html",
        "image": "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/a7d2922e6fb44ee2aa18af70010cb736_9366/tenis-forum-bold.jpg",
        "nameItem": "Tênis Forum Bold",
        "sales": "813",
        "stars": "4.7921",
        "salePrice": "R$ 699.99",
        "originalPrice": ""
    },
    {
        "productId": "https://www.adidas.com.br/tenis-forum-low-x-andre-saraiva/GZ2205.html",
        "image": "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/e27795d781604c9f8267ae7b013c185e_9366/tenis-forum-low-x-andre-saraiva.jpg",
        "nameItem": "Tênis Forum Low x André Saraiva",
        "sales": "890",
        "stars": "4.8057",
        "salePrice": "R$ 699.99",
        "originalPrice": ""
    },
    {
        "productId": "https://www.adidas.com.br/tenis-forum-84-low-adv/HP9093.html",
        "image": "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/451460bd617c4d629ef6af33017c2807_9366/tenis-forum-84-low-adv.jpg",
        "nameItem": "Tênis Forum 84 Low ADV",
        "sales": "210",
        "stars": "4.7572",
        "salePrice": "R$ 699.99",
        "originalPrice": ""
    },
    {
        "productId": "https://www.adidas.com.br/tenis-forum-bold/GX4617.html",
        "image": "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/db71840de19d4eef9ed7ae74008f9060_9366/tenis-forum-bold.jpg",
        "nameItem": "Tênis Forum Bold",
        "sales": "813",
        "stars": "4.7921",
        "salePrice": "R$ 699.99",
        "originalPrice": ""
    },
    {
        "productId": "https://www.adidas.com.br/tenis-forum-low-cl/IG3778.html",
        "image": "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/8c290b2553674cb992fa7188a452d07e_9366/tenis-forum-low-cl.jpg",
        "nameItem": "Tênis Forum Low CL",
        "sales": "4",
        "stars": "5",
        "salePrice": "R$ 799.99",
        "originalPrice": ""
    },
    {
        "productId": "https://www.adidas.com.br/tenis-forum-low/GY9492.html",
        "image": "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/42bf0727d54c48c4b26bae92016b6b79_9366/tenis-forum-low.jpg",
        "nameItem": "Tênis Forum Low",
        "sales": "417",
        "stars": "4.8729",
        "salePrice": "R$ 699.99",
        "originalPrice": ""
    },
    {
        "productId": "https://www.adidas.com.br/tenis-forum-84-low-aec/HR0558.html",
        "image": "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/23ebfd0eba3b48afaac6ae6d016a1902_9366/tenis-forum-84-low-aec.jpg",
        "nameItem": "Tênis Forum 84 Low AEC",
        "sales": "-99",
        "stars": "None",
        "salePrice": "R$ 999.99",
        "originalPrice": ""
    },
    {
        "productId": "https://www.adidas.com.br/tenis-forum-low/GY5832.html",
        "image": "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/b1638eed778143d2a9f0ade201870773_9366/tenis-forum-low.jpg",
        "nameItem": "Tênis Forum Low",
        "sales": "890",
        "stars": "4.8057",
        "salePrice": "R$ 599.99",
        "originalPrice": ""
    },
    {
        "productId": "https://www.adidas.com.br/tenis-forum-bold-her-vegan/HP2999.html",
        "image": "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/2e6cadb25ceb47f29515afc400f5d34e_9366/tenis-forum-bold-her-vegan.jpg",
        "nameItem": "Tênis Forum Bold Her Vegan",
        "sales": "21",
        "stars": "4.9524",
        "salePrice": "R$ 699.99",
        "originalPrice": ""
    },
    {
        "productId": "https://www.adidas.com.br/tenis-forum-bonega/IG9678.html",
        "image": "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/5948c6e976094c0b9be5af4800b59773_9366/tenis-forum-bonega.jpg",
        "nameItem": "Tênis Forum Bonega",
        "sales": "82",
        "stars": "4.878",
        "salePrice": "R$ 699.99",
        "originalPrice": ""
    },
    {
        "productId": "https://www.adidas.com.br/tenis-js-wings-4.0/GY1848.html",
        "image": "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/3dfb97ce33c14cc2a97fadfd011e3dee_9366/tenis-js-wings-4.0.jpg",
        "nameItem": "Tênis JS Wings 4.0",
        "sales": "11",
        "stars": "5",
        "salePrice": "R$ 599.99",
        "originalPrice": ""
    },
    {
        "productId": "https://www.adidas.com.br/tenis-forum-bold/GY6988.html",
        "image": "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/790ae49753ce4713a057ae7000011ee3_9366/tenis-forum-bold.jpg",
        "nameItem": "Tênis Forum Bold",
        "sales": "813",
        "stars": "4.7921",
        "salePrice": "R$ 699.99",
        "originalPrice": ""
    },
    {
        "productId": "https://www.adidas.com.br/tenis-atlas-forum-adv/HQ6996.html",
        "image": "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/63d6be662849483389baaf41017049f5_9366/tenis-atlas-forum-adv.jpg",
        "nameItem": "Tênis Atlas Forum ADV",
        "sales": "1",
        "stars": "4",
        "salePrice": "R$ 799.99",
        "originalPrice": ""
    },
    {
        "productId": "https://www.adidas.com.br/tenis-brand-forum-low-84-m-ms/GZ1935.html",
        "image": "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/b8fd8cb93f154f56b855ad5200833177_9366/tenis-brand-forum-low-84-m-ms.jpg",
        "nameItem": "Tênis Brand Forum Low 84 M&M'S",
        "sales": "55",
        "stars": "4.9637",
        "salePrice": "R$ 899.99",
        "originalPrice": ""
    },
    {
        "productId": "https://www.adidas.com.br/tenis-brand-forum-low-84-m-ms/GZ1936.html",
        "image": "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/f86b26e3b987456ca31dad520082dae9_9366/tenis-brand-forum-low-84-m-ms.jpg",
        "nameItem": "Tênis Brand Forum Low 84 M&M'S",
        "sales": "55",
        "stars": "4.9637",
        "salePrice": "R$ 899.99",
        "originalPrice": ""
    },
    {
        "productId": "https://www.adidas.com.br/tenis-forum-bonega/IG0281.html",
        "image": "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/82b6ceaa628c4287acd090c3ece28425_9366/tenis-forum-bonega.jpg",
        "nameItem": "Tênis Forum Bonega",
        "sales": "67",
        "stars": "4.6866",
        "salePrice": "R$ 799.99",
        "originalPrice": ""
    },
    {
        "productId": "https://www.adidas.com.br/tenis-forum-low/IF5165.html",
        "image": "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/18d0eea4cfa54c3c905aafb9012dda98_9366/tenis-forum-low.jpg",
        "nameItem": "Tênis Forum Low",
        "sales": "27",
        "stars": "4.926",
        "salePrice": "R$ 799.99",
        "originalPrice": ""
    },
    {
        "productId": "https://www.adidas.com.br/tenis-forum-bold/IG0285.html",
        "image": "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/3c4f003790134147a53a6066ab8f44e4_9366/tenis-forum-bold.jpg",
        "nameItem": "Tênis Forum Bold",
        "sales": "118",
        "stars": "4.8899",
        "salePrice": "R$ 799.99",
        "originalPrice": ""
    }
]

  const dataToRender = fetchResults.length > 0 ? fetchResults : data
  return (
    <div className='bg-[#131313] min-h-screen'>
      <Header searchItem={true} botName="adidas"/>
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

export default Adidas