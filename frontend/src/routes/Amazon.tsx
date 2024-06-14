import React from "react"
import { Header } from "../components/Header/Header"
import { useFetchContext } from "../contexts/FetchContext"
import ProductCarousel from "../components/Carousel/ProductCarousel"



const Amazon = () => {
    const { fetchResults, isLoading } = useFetchContext()

    const headers = {
        "accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
        "accept-language": "en-US,en;q=0.9,pt;q=0.8",
        "sec-ch-ua": "\"Chromium\";v=\"124\", \"Google Chrome\";v=\"124\", \"Not-A.Brand\";v=\"99\"",
    }

    const data = [
        {
            "productId": "https://www.amazon.com.br/sspa/click?ie=UTF8&spc=MToxODA4MDEwNzMxNjYzNDg5OjE3MTY0MTI2MjQ6c3BfYXRmOjMwMDE4NTA1OTg5MjEwMjo6MDo6&url=%2FSamsung-Smart-OLED-65S95D-Processador%2Fdp%2FB0CYMZP89Z%2Fref%3Dsr_1_1_sspa%3Fdib%3DeyJ2IjoiMSJ9.nhGw25Kksm3MaOq7zWgx69qZOpRf-rLrejaUhkgSaZQGBys43XOdhkKeVZ-eXeKxiXe_RC1URRRjP2UUPdy5h-yEyB2da68qM5DHRzm5dRYAC2F-Lvrl-CBJLe8zZZrM_8a1s-gUiIzfDGQibbFDnhCFPVw48ZCKcJYOmw81Rki8T0OtpnHBi2J4rbFCCracxs_Ym0nSmIfwqtX3CIp7wU4NXT7DDQpAyVq0C5TaRNnbQ79BaAxE7sWmEPrmmus0z257043XBKjmusUsDOrag3cJ512vNreukQUtpekKz_Q.W7dIdvJNI5JFGq7HpWKk7NMQQ0vTPIKJCLSwjPUtkJI%26dib_tag%3Dse%26keywords%3Dtelevis%25C3%25A3o%26qid%3D1716412624%26sr%3D8-1-spons%26ufe%3Dapp_do%253Aamzn1.fos.a492fd4a-f54d-4e8d-8c31-35e0a04ce61e%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1",
            "image": "https://m.media-amazon.com/images/I/61QEvG0q05L._AC_UL320_.jpg",
            "nameItem": "Samsung Smart TV 65\" OLED 4K 65S95D - Processador com AI, Livre de reflexos, HDR OLED Pro AI, Painel até 144Hz",
            "sales": "",
            "stars": "",
            "salePrice": "R$ 15.999,00",
            "originalPrice": ""
        },
        {
            "productId": "https://www.amazon.com.br/sspa/click?ie=UTF8&spc=MToxODA4MDEwNzMxNjYzNDg5OjE3MTY0MTI2MjQ6c3BfYXRmOjMwMDE4NTA1OTg5MTkwMjo6MDo6&url=%2FSamsung-Smart-Gaming-QLED-65QN90D%2Fdp%2FB0CYNJ8CWD%2Fref%3Dsr_1_2_sspa%3Fdib%3DeyJ2IjoiMSJ9.nhGw25Kksm3MaOq7zWgx69qZOpRf-rLrejaUhkgSaZQGBys43XOdhkKeVZ-eXeKxiXe_RC1URRRjP2UUPdy5h-yEyB2da68qM5DHRzm5dRYAC2F-Lvrl-CBJLe8zZZrM_8a1s-gUiIzfDGQibbFDnhCFPVw48ZCKcJYOmw81Rki8T0OtpnHBi2J4rbFCCracxs_Ym0nSmIfwqtX3CIp7wU4NXT7DDQpAyVq0C5TaRNnbQ79BaAxE7sWmEPrmmus0z257043XBKjmusUsDOrag3cJ512vNreukQUtpekKz_Q.W7dIdvJNI5JFGq7HpWKk7NMQQ0vTPIKJCLSwjPUtkJI%26dib_tag%3Dse%26keywords%3Dtelevis%25C3%25A3o%26qid%3D1716412624%26sr%3D8-2-spons%26ufe%3Dapp_do%253Aamzn1.fos.a492fd4a-f54d-4e8d-8c31-35e0a04ce61e%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1",
            "image": "https://m.media-amazon.com/images/I/61kHDvh13WL._AC_UL320_.jpg",
            "nameItem": "Samsung Smart Gaming TV 65\" Neo QLED 4K 65QN90D - Processador com AI, Upscaling 4K, Mini LED, Painel até 144hz",
            "sales": "",
            "stars": "",
            "salePrice": "R$ 10.999,00",
            "originalPrice": ""
        },
        {
            "productId": "https://www.amazon.com.br/sspa/click?ie=UTF8&spc=MToxODA4MDEwNzMxNjYzNDg5OjE3MTY0MTI2MjQ6c3BfYXRmOjMwMDE5NTEwNzYyNzkwMjo6MDo6&url=%2FSamsung-Smart-UHD-55DU7700-Processador%2Fdp%2FB0CYNFLZ2B%2Fref%3Dsr_1_3_sspa%3Fdib%3DeyJ2IjoiMSJ9.nhGw25Kksm3MaOq7zWgx69qZOpRf-rLrejaUhkgSaZQGBys43XOdhkKeVZ-eXeKxiXe_RC1URRRjP2UUPdy5h-yEyB2da68qM5DHRzm5dRYAC2F-Lvrl-CBJLe8zZZrM_8a1s-gUiIzfDGQibbFDnhCFPVw48ZCKcJYOmw81Rki8T0OtpnHBi2J4rbFCCracxs_Ym0nSmIfwqtX3CIp7wU4NXT7DDQpAyVq0C5TaRNnbQ79BaAxE7sWmEPrmmus0z257043XBKjmusUsDOrag3cJ512vNreukQUtpekKz_Q.W7dIdvJNI5JFGq7HpWKk7NMQQ0vTPIKJCLSwjPUtkJI%26dib_tag%3Dse%26keywords%3Dtelevis%25C3%25A3o%26qid%3D1716412624%26sr%3D8-3-spons%26ufe%3Dapp_do%253Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1",
            "image": "https://m.media-amazon.com/images/I/71TzRZLt7fL._AC_UL320_.jpg",
            "nameItem": "Samsung Smart TV 55\" UHD 4K 55DU7700 - Processador Crystal 4K, Gaming Hub",
            "sales": "",
            "stars": "",
            "salePrice": "R$ 2.699,00",
            "originalPrice": ""
        },
        {
            "productId": "https://www.amazon.com.br/sspa/click?ie=UTF8&spc=MToxODA4MDEwNzMxNjYzNDg5OjE3MTY0MTI2MjQ6c3BfYXRmOjMwMDE4MTkxMTIyODIwMjo6MDo6&url=%2FSamsung-Smart-QLED-65Q60D-Tecnologia%2Fdp%2FB0CYN23W1C%2Fref%3Dsr_1_4_sspa%3Fdib%3DeyJ2IjoiMSJ9.nhGw25Kksm3MaOq7zWgx69qZOpRf-rLrejaUhkgSaZQGBys43XOdhkKeVZ-eXeKxiXe_RC1URRRjP2UUPdy5h-yEyB2da68qM5DHRzm5dRYAC2F-Lvrl-CBJLe8zZZrM_8a1s-gUiIzfDGQibbFDnhCFPVw48ZCKcJYOmw81Rki8T0OtpnHBi2J4rbFCCracxs_Ym0nSmIfwqtX3CIp7wU4NXT7DDQpAyVq0C5TaRNnbQ79BaAxE7sWmEPrmmus0z257043XBKjmusUsDOrag3cJ512vNreukQUtpekKz_Q.W7dIdvJNI5JFGq7HpWKk7NMQQ0vTPIKJCLSwjPUtkJI%26dib_tag%3Dse%26keywords%3Dtelevis%25C3%25A3o%26qid%3D1716412624%26sr%3D8-4-spons%26ufe%3Dapp_do%253Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1",
            "image": "https://m.media-amazon.com/images/I/61lsuF3PbYL._AC_UL320_.jpg",
            "nameItem": "Samsung Smart TV 65\" QLED 4K 65Q60D - Tecnologia de Pontos Quânticos, Design AirSlim, Gaming Hub",
            "sales": "",
            "stars": "",
            "salePrice": "R$ 4.995,81",
            "originalPrice": ""
        },
        {
            "productId": "https://www.amazon.com.br/Smart-Philco-PTV32G7PR2CSBLH-Dolby-Bivolt/dp/B0BW1X752N/ref=sr_1_5?dib=eyJ2IjoiMSJ9.nhGw25Kksm3MaOq7zWgx69qZOpRf-rLrejaUhkgSaZQGBys43XOdhkKeVZ-eXeKxiXe_RC1URRRjP2UUPdy5h-yEyB2da68qM5DHRzm5dRYAC2F-Lvrl-CBJLe8zZZrM_8a1s-gUiIzfDGQibbFDnhCFPVw48ZCKcJYOmw81Rki8T0OtpnHBi2J4rbFCCracxs_Ym0nSmIfwqtX3CIp7wU4NXT7DDQpAyVq0C5TaRNnbQ79BaAxE7sWmEPrmmus0z257043XBKjmusUsDOrag3cJ512vNreukQUtpekKz_Q.W7dIdvJNI5JFGq7HpWKk7NMQQ0vTPIKJCLSwjPUtkJI&dib_tag=se&keywords=televis%C3%A3o&qid=1716412624&sr=8-5&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147",
            "image": "https://m.media-amazon.com/images/I/61PohabQpGL._AC_UL320_.jpg",
            "nameItem": "Fast Smart TV Philco 32” PTV32G7PR2CSBLH Dolby Audio Led Bivolt",
            "sales": "146 classificações",
            "stars": "4,5 de 5 estrelas",
            "salePrice": "R$ 999,90",
            "originalPrice": "R$ 1.284,12"
        },
        {
            "productId": "https://www.amazon.com.br/Samsung-Smart-Crystal-UHD-CU7700/dp/B0C1538ZJ4/ref=sr_1_6?dib=eyJ2IjoiMSJ9.nhGw25Kksm3MaOq7zWgx69qZOpRf-rLrejaUhkgSaZQGBys43XOdhkKeVZ-eXeKxiXe_RC1URRRjP2UUPdy5h-yEyB2da68qM5DHRzm5dRYAC2F-Lvrl-CBJLe8zZZrM_8a1s-gUiIzfDGQibbFDnhCFPVw48ZCKcJYOmw81Rki8T0OtpnHBi2J4rbFCCracxs_Ym0nSmIfwqtX3CIp7wU4NXT7DDQpAyVq0C5TaRNnbQ79BaAxE7sWmEPrmmus0z257043XBKjmusUsDOrag3cJ512vNreukQUtpekKz_Q.W7dIdvJNI5JFGq7HpWKk7NMQQ0vTPIKJCLSwjPUtkJI&dib_tag=se&keywords=televis%C3%A3o&qid=1716412624&sr=8-6&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147",
            "image": "https://m.media-amazon.com/images/I/71vk2qFDSPL._AC_UL320_.jpg",
            "nameItem": "Samsung Smart TV Crystal 43\" 4K UHD CU7700 - Alexa built in, Samsung Gaming Hub",
            "sales": "1.881 classificações",
            "stars": "4,7 de 5 estrelas",
            "salePrice": "R$ 1.996,84",
            "originalPrice": "R$ 2.499,00"
        },
        {
            "productId": "https://www.amazon.com.br/Philips-50PUG7408-78-Comando-Bluetooth/dp/B0CCJW1FVP/ref=sr_1_7?dib=eyJ2IjoiMSJ9.nhGw25Kksm3MaOq7zWgx69qZOpRf-rLrejaUhkgSaZQGBys43XOdhkKeVZ-eXeKxiXe_RC1URRRjP2UUPdy5h-yEyB2da68qM5DHRzm5dRYAC2F-Lvrl-CBJLe8zZZrM_8a1s-gUiIzfDGQibbFDnhCFPVw48ZCKcJYOmw81Rki8T0OtpnHBi2J4rbFCCracxs_Ym0nSmIfwqtX3CIp7wU4NXT7DDQpAyVq0C5TaRNnbQ79BaAxE7sWmEPrmmus0z257043XBKjmusUsDOrag3cJ512vNreukQUtpekKz_Q.W7dIdvJNI5JFGq7HpWKk7NMQQ0vTPIKJCLSwjPUtkJI&dib_tag=se&keywords=televis%C3%A3o&qid=1716412624&sr=8-7&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147",
            "image": "https://m.media-amazon.com/images/I/71efj0Th5TL._AC_UL320_.jpg",
            "nameItem": "Smart TV Philips 50\" 4K 50PUG7408/78, Google TV, Comando de Voz, Dolby Vision/Atmos, VRR/ALLM, Bluetooth",
            "sales": "388 classificações",
            "stars": "4,5 de 5 estrelas",
            "salePrice": "R$ 1.994,05",
            "originalPrice": "R$ 2.399,00"
        },
        {
            "productId": "https://www.amazon.com.br/SAMSUNG-Smart-Crystal-UHD-CU7700/dp/B0C154VR2L/ref=sr_1_8?dib=eyJ2IjoiMSJ9.nhGw25Kksm3MaOq7zWgx69qZOpRf-rLrejaUhkgSaZQGBys43XOdhkKeVZ-eXeKxiXe_RC1URRRjP2UUPdy5h-yEyB2da68qM5DHRzm5dRYAC2F-Lvrl-CBJLe8zZZrM_8a1s-gUiIzfDGQibbFDnhCFPVw48ZCKcJYOmw81Rki8T0OtpnHBi2J4rbFCCracxs_Ym0nSmIfwqtX3CIp7wU4NXT7DDQpAyVq0C5TaRNnbQ79BaAxE7sWmEPrmmus0z257043XBKjmusUsDOrag3cJ512vNreukQUtpekKz_Q.W7dIdvJNI5JFGq7HpWKk7NMQQ0vTPIKJCLSwjPUtkJI&dib_tag=se&keywords=televis%C3%A3o&qid=1716412624&sr=8-8&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147",
            "image": "https://m.media-amazon.com/images/I/71vk2qFDSPL._AC_UL320_.jpg",
            "nameItem": "SAMSUNG Smart TV Crystal 50\" 4K UHD CU7700 - Alexa built in, Samsung Gaming Hub, Preto",
            "sales": "1.448 classificações",
            "stars": "4,7 de 5 estrelas",
            "salePrice": "R$ 2.349,00",
            "originalPrice": "R$ 3.237,50"
        },
        {
            "productId": "https://www.amazon.com.br/AOC-43S5135-78G-Conversor-Digital/dp/B0BSLMPB65/ref=sr_1_9?dib=eyJ2IjoiMSJ9.nhGw25Kksm3MaOq7zWgx69qZOpRf-rLrejaUhkgSaZQGBys43XOdhkKeVZ-eXeKxiXe_RC1URRRjP2UUPdy5h-yEyB2da68qM5DHRzm5dRYAC2F-Lvrl-CBJLe8zZZrM_8a1s-gUiIzfDGQibbFDnhCFPVw48ZCKcJYOmw81Rki8T0OtpnHBi2J4rbFCCracxs_Ym0nSmIfwqtX3CIp7wU4NXT7DDQpAyVq0C5TaRNnbQ79BaAxE7sWmEPrmmus0z257043XBKjmusUsDOrag3cJ512vNreukQUtpekKz_Q.W7dIdvJNI5JFGq7HpWKk7NMQQ0vTPIKJCLSwjPUtkJI&dib_tag=se&keywords=televis%C3%A3o&qid=1716412624&sr=8-9&ufe=app_do%3Aamzn1.fos.a492fd4a-f54d-4e8d-8c31-35e0a04ce61e",
            "image": "https://m.media-amazon.com/images/I/71sp2owMqHL._AC_UL320_.jpg",
            "nameItem": "AOC 43S5135/78G - Smart TV LED 43\" Full HD, Design sem bordas, Wifi, Conversor Digital, USB, HDMI",
            "sales": "861 classificações",
            "stars": "4,7 de 5 estrelas",
            "salePrice": "R$ 1.469,00",
            "originalPrice": "R$ 1.556,60"
        },
        {
            "productId": "https://www.amazon.com.br/LG-32LQ620-Bluetooth-ThinQAI-compat%C3%ADvel/dp/B0B5HJYL3B/ref=sr_1_10?dib=eyJ2IjoiMSJ9.nhGw25Kksm3MaOq7zWgx69qZOpRf-rLrejaUhkgSaZQGBys43XOdhkKeVZ-eXeKxiXe_RC1URRRjP2UUPdy5h-yEyB2da68qM5DHRzm5dRYAC2F-Lvrl-CBJLe8zZZrM_8a1s-gUiIzfDGQibbFDnhCFPVw48ZCKcJYOmw81Rki8T0OtpnHBi2J4rbFCCracxs_Ym0nSmIfwqtX3CIp7wU4NXT7DDQpAyVq0C5TaRNnbQ79BaAxE7sWmEPrmmus0z257043XBKjmusUsDOrag3cJ512vNreukQUtpekKz_Q.W7dIdvJNI5JFGq7HpWKk7NMQQ0vTPIKJCLSwjPUtkJI&dib_tag=se&keywords=televis%C3%A3o&qid=1716412624&sr=8-10&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147",
            "image": "https://m.media-amazon.com/images/I/51OOI90yyoL._AC_UL320_.jpg",
            "nameItem": "Smart TV LG 32\" HD 32LQ620 WiFi Bluetooth HDR ThinQAI compatível com Smart Magic Google Alexa",
            "sales": "2.228 classificações",
            "stars": "4,7 de 5 estrelas",
            "salePrice": "R$ 1.249,00",
            "originalPrice": "R$ 2.003,39"
        },
        {
            "productId": "https://www.amazon.com.br/LG-43UR7800PSA-Bluetooth-Assistente-Airplay2/dp/B0C6NL4QK3/ref=sr_1_11?dib=eyJ2IjoiMSJ9.nhGw25Kksm3MaOq7zWgx69qZOpRf-rLrejaUhkgSaZQGBys43XOdhkKeVZ-eXeKxiXe_RC1URRRjP2UUPdy5h-yEyB2da68qM5DHRzm5dRYAC2F-Lvrl-CBJLe8zZZrM_8a1s-gUiIzfDGQibbFDnhCFPVw48ZCKcJYOmw81Rki8T0OtpnHBi2J4rbFCCracxs_Ym0nSmIfwqtX3CIp7wU4NXT7DDQpAyVq0C5TaRNnbQ79BaAxE7sWmEPrmmus0z257043XBKjmusUsDOrag3cJ512vNreukQUtpekKz_Q.W7dIdvJNI5JFGq7HpWKk7NMQQ0vTPIKJCLSwjPUtkJI&dib_tag=se&keywords=televis%C3%A3o&qid=1716412624&sr=8-11&ufe=app_do%3Aamzn1.fos.95de73c3-5dda-43a7-bd1f-63af03b14751",
            "image": "https://m.media-amazon.com/images/I/61cz2Iaku4L._AC_UL320_.jpg",
            "nameItem": "Smart TV 43\" 4K LG UHD ThinQ AI 43UR7800PSA HDR Bluetooth Alexa Google Assistente Airplay2 3 HDMI",
            "sales": "927 classificações",
            "stars": "4,7 de 5 estrelas",
            "salePrice": "R$ 1.879,00",
            "originalPrice": "R$ 2.849,00"
        },
        {
            "productId": "https://www.amazon.com.br/LG-55UR8750PSA-Bluetooth-Assistente-Airplay2/dp/B0C6NJLG7B/ref=sr_1_12?dib=eyJ2IjoiMSJ9.nhGw25Kksm3MaOq7zWgx69qZOpRf-rLrejaUhkgSaZQGBys43XOdhkKeVZ-eXeKxiXe_RC1URRRjP2UUPdy5h-yEyB2da68qM5DHRzm5dRYAC2F-Lvrl-CBJLe8zZZrM_8a1s-gUiIzfDGQibbFDnhCFPVw48ZCKcJYOmw81Rki8T0OtpnHBi2J4rbFCCracxs_Ym0nSmIfwqtX3CIp7wU4NXT7DDQpAyVq0C5TaRNnbQ79BaAxE7sWmEPrmmus0z257043XBKjmusUsDOrag3cJ512vNreukQUtpekKz_Q.W7dIdvJNI5JFGq7HpWKk7NMQQ0vTPIKJCLSwjPUtkJI&dib_tag=se&keywords=televis%C3%A3o&qid=1716412624&sr=8-12&ufe=app_do%3Aamzn1.fos.95de73c3-5dda-43a7-bd1f-63af03b14751",
            "image": "https://m.media-amazon.com/images/I/51NfNFaewDL._AC_UL320_.jpg",
            "nameItem": "Smart TV 55\" 4K LG UHD ThinQ AI 55UR8750PSA HDR Bluetooth Alexa Google Assistente Airplay2 3 HDMI",
            "sales": "519 classificações",
            "stars": "4,6 de 5 estrelas",
            "salePrice": "R$ 2.489,00",
            "originalPrice": ""
        },
        {
            "productId": "https://www.amazon.com.br/Smart-Philco-Android-PTV40E3AAGSSBLF-Dolby/dp/B0CJW8KT2Q/ref=sr_1_13?dib=eyJ2IjoiMSJ9.nhGw25Kksm3MaOq7zWgx69qZOpRf-rLrejaUhkgSaZQGBys43XOdhkKeVZ-eXeKxiXe_RC1URRRjP2UUPdy5h-yEyB2da68qM5DHRzm5dRYAC2F-Lvrl-CBJLe8zZZrM_8a1s-gUiIzfDGQibbFDnhCFPVw48ZCKcJYOmw81Rki8T0OtpnHBi2J4rbFCCracxs_Ym0nSmIfwqtX3CIp7wU4NXT7DDQpAyVq0C5TaRNnbQ79BaAxE7sWmEPrmmus0z257043XBKjmusUsDOrag3cJ512vNreukQUtpekKz_Q.W7dIdvJNI5JFGq7HpWKk7NMQQ0vTPIKJCLSwjPUtkJI&dib_tag=se&keywords=televis%C3%A3o&qid=1716412624&sr=8-13&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147",
            "image": "https://m.media-amazon.com/images/I/81dAjavpgpL._AC_UL320_.jpg",
            "nameItem": "Smart TV 40” Philco Android TV PTV40E3AAGSSBLF LED Dolby Áudio",
            "sales": "308 classificações",
            "stars": "4,1 de 5 estrelas",
            "salePrice": "R$ 1.249,00",
            "originalPrice": "R$ 1.314,74"
        },
        {
            "productId": "https://www.amazon.com.br/Samsung-UN32T4300AGXZD-Sistema-Operacional-Espelhamento/dp/B08B14TSHS/ref=sr_1_14?dib=eyJ2IjoiMSJ9.nhGw25Kksm3MaOq7zWgx69qZOpRf-rLrejaUhkgSaZQGBys43XOdhkKeVZ-eXeKxiXe_RC1URRRjP2UUPdy5h-yEyB2da68qM5DHRzm5dRYAC2F-Lvrl-CBJLe8zZZrM_8a1s-gUiIzfDGQibbFDnhCFPVw48ZCKcJYOmw81Rki8T0OtpnHBi2J4rbFCCracxs_Ym0nSmIfwqtX3CIp7wU4NXT7DDQpAyVq0C5TaRNnbQ79BaAxE7sWmEPrmmus0z257043XBKjmusUsDOrag3cJ512vNreukQUtpekKz_Q.W7dIdvJNI5JFGq7HpWKk7NMQQ0vTPIKJCLSwjPUtkJI&dib_tag=se&keywords=televis%C3%A3o&qid=1716412624&sr=8-14&ufe=app_do%3Aamzn1.fos.a492fd4a-f54d-4e8d-8c31-35e0a04ce61e",
            "image": "https://m.media-amazon.com/images/I/51V8GZ3gWEL._AC_UL320_.jpg",
            "nameItem": "Samsung UN32T4300AGXZD - Smart TV LED 32\" HD, Wifi, HDMI, USB",
            "sales": "3.578 classificações",
            "stars": "4,7 de 5 estrelas",
            "salePrice": "R$ 1.139,90",
            "originalPrice": "R$ 1.369,00"
        },
        {
            "productId": "https://www.amazon.com.br/Samsung-LH43BETMLGGXZD-Sistema-Operacional-Digital/dp/B0899GJHWR/ref=sr_1_15?dib=eyJ2IjoiMSJ9.nhGw25Kksm3MaOq7zWgx69qZOpRf-rLrejaUhkgSaZQGBys43XOdhkKeVZ-eXeKxiXe_RC1URRRjP2UUPdy5h-yEyB2da68qM5DHRzm5dRYAC2F-Lvrl-CBJLe8zZZrM_8a1s-gUiIzfDGQibbFDnhCFPVw48ZCKcJYOmw81Rki8T0OtpnHBi2J4rbFCCracxs_Ym0nSmIfwqtX3CIp7wU4NXT7DDQpAyVq0C5TaRNnbQ79BaAxE7sWmEPrmmus0z257043XBKjmusUsDOrag3cJ512vNreukQUtpekKz_Q.W7dIdvJNI5JFGq7HpWKk7NMQQ0vTPIKJCLSwjPUtkJI&dib_tag=se&keywords=televis%C3%A3o&qid=1716412624&sr=8-15&ufe=app_do%3Aamzn1.fos.a492fd4a-f54d-4e8d-8c31-35e0a04ce61e",
            "image": "https://m.media-amazon.com/images/I/51mB03occBL._AC_UL320_.jpg",
            "nameItem": "Smart TV LED 43\" Full HD Samsung LH43BETMLGGXZD, 2 HDMI, 1 USB, Wi-Fi, HDR, Sistema Operacional Tizen e Dolby Digital Plus",
            "sales": "844 classificações",
            "stars": "4,7 de 5 estrelas",
            "salePrice": "R$ 1.748,00",
            "originalPrice": ""
        },
        {
            "productId": "https://www.amazon.com.br/Smart-LED-AOC-32S5135-78G/dp/B0BSLQMXZJ/ref=sr_1_16?dib=eyJ2IjoiMSJ9.nhGw25Kksm3MaOq7zWgx69qZOpRf-rLrejaUhkgSaZQGBys43XOdhkKeVZ-eXeKxiXe_RC1URRRjP2UUPdy5h-yEyB2da68qM5DHRzm5dRYAC2F-Lvrl-CBJLe8zZZrM_8a1s-gUiIzfDGQibbFDnhCFPVw48ZCKcJYOmw81Rki8T0OtpnHBi2J4rbFCCracxs_Ym0nSmIfwqtX3CIp7wU4NXT7DDQpAyVq0C5TaRNnbQ79BaAxE7sWmEPrmmus0z257043XBKjmusUsDOrag3cJ512vNreukQUtpekKz_Q.W7dIdvJNI5JFGq7HpWKk7NMQQ0vTPIKJCLSwjPUtkJI&dib_tag=se&keywords=televis%C3%A3o&qid=1716412624&sr=8-16&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147",
            "image": "https://m.media-amazon.com/images/I/713gsa8hdpL._AC_UL320_.jpg",
            "nameItem": "Smart TV LED 32\" HD AOC 32S5135/78G - Design sem bordas, Wifi, Conversor Digital, USB, HDMI",
            "sales": "1.300 classificações",
            "stars": "4,6 de 5 estrelas",
            "salePrice": "R$ 1.016,64",
            "originalPrice": "R$ 1.349,00"
        },
        {
            "productId": "https://www.amazon.com.br/TCL-LED-SMART-S5400A-ANDROID/dp/B0CC6P9DJJ/ref=sr_1_17?dib=eyJ2IjoiMSJ9.nhGw25Kksm3MaOq7zWgx69qZOpRf-rLrejaUhkgSaZQGBys43XOdhkKeVZ-eXeKxiXe_RC1URRRjP2UUPdy5h-yEyB2da68qM5DHRzm5dRYAC2F-Lvrl-CBJLe8zZZrM_8a1s-gUiIzfDGQibbFDnhCFPVw48ZCKcJYOmw81Rki8T0OtpnHBi2J4rbFCCracxs_Ym0nSmIfwqtX3CIp7wU4NXT7DDQpAyVq0C5TaRNnbQ79BaAxE7sWmEPrmmus0z257043XBKjmusUsDOrag3cJ512vNreukQUtpekKz_Q.W7dIdvJNI5JFGq7HpWKk7NMQQ0vTPIKJCLSwjPUtkJI&dib_tag=se&keywords=televis%C3%A3o&qid=1716412624&sr=8-17&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147",
            "image": "https://m.media-amazon.com/images/I/61lfaXZk2IL._AC_UL320_.jpg",
            "nameItem": "TCL LED SMART TV 43” S5400A FHD ANDROID TV",
            "sales": "30 classificações",
            "stars": "4,2 de 5 estrelas",
            "salePrice": "R$ 1.529,00",
            "originalPrice": "R$ 1.899,00"
        },
        {
            "productId": "https://www.amazon.com.br/LG-50UR8750PSA-Bluetooth-Assistente-Airplay2/dp/B0C4ZN3PPS/ref=sr_1_18?dib=eyJ2IjoiMSJ9.nhGw25Kksm3MaOq7zWgx69qZOpRf-rLrejaUhkgSaZQGBys43XOdhkKeVZ-eXeKxiXe_RC1URRRjP2UUPdy5h-yEyB2da68qM5DHRzm5dRYAC2F-Lvrl-CBJLe8zZZrM_8a1s-gUiIzfDGQibbFDnhCFPVw48ZCKcJYOmw81Rki8T0OtpnHBi2J4rbFCCracxs_Ym0nSmIfwqtX3CIp7wU4NXT7DDQpAyVq0C5TaRNnbQ79BaAxE7sWmEPrmmus0z257043XBKjmusUsDOrag3cJ512vNreukQUtpekKz_Q.W7dIdvJNI5JFGq7HpWKk7NMQQ0vTPIKJCLSwjPUtkJI&dib_tag=se&keywords=televis%C3%A3o&qid=1716412624&sr=8-18&ufe=app_do%3Aamzn1.fos.95de73c3-5dda-43a7-bd1f-63af03b14751",
            "image": "https://m.media-amazon.com/images/I/51NfNFaewDL._AC_UL320_.jpg",
            "nameItem": "Smart TV 50\" 4K LG UHD ThinQ AI 50UR8750PSA HDR Bluetooth Alexa Google Assistente Airplay2 3 HDMI",
            "sales": "807 classificações",
            "stars": "4,7 de 5 estrelas",
            "salePrice": "R$ 2.159,00",
            "originalPrice": "R$ 2.799,00"
        },
        {
            "productId": "https://www.amazon.com.br/Philips-55PUG7408-78-Comando-Bluetooth/dp/B0CFFS5YN8/ref=sr_1_19?dib=eyJ2IjoiMSJ9.nhGw25Kksm3MaOq7zWgx69qZOpRf-rLrejaUhkgSaZQGBys43XOdhkKeVZ-eXeKxiXe_RC1URRRjP2UUPdy5h-yEyB2da68qM5DHRzm5dRYAC2F-Lvrl-CBJLe8zZZrM_8a1s-gUiIzfDGQibbFDnhCFPVw48ZCKcJYOmw81Rki8T0OtpnHBi2J4rbFCCracxs_Ym0nSmIfwqtX3CIp7wU4NXT7DDQpAyVq0C5TaRNnbQ79BaAxE7sWmEPrmmus0z257043XBKjmusUsDOrag3cJ512vNreukQUtpekKz_Q.W7dIdvJNI5JFGq7HpWKk7NMQQ0vTPIKJCLSwjPUtkJI&dib_tag=se&keywords=televis%C3%A3o&qid=1716412624&sr=8-19&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147",
            "image": "https://m.media-amazon.com/images/I/71xMEGzY4UL._AC_UL320_.jpg",
            "nameItem": "Smart TV Philips 55\" 4K 55PUG7408/78, Google TV, Comando de Voz, Dolby Vision/Atmos, VRR/ALLM, Bluetooth",
            "sales": "56 classificações",
            "stars": "4,6 de 5 estrelas",
            "salePrice": "R$ 2.399,00",
            "originalPrice": "R$ 2.699,90"
        },
        {
            "productId": "https://www.amazon.com.br/Smart-LED-UHD-Semp-RK8600/dp/B0BFTCDQ24/ref=sr_1_20?dib=eyJ2IjoiMSJ9.nhGw25Kksm3MaOq7zWgx69qZOpRf-rLrejaUhkgSaZQGBys43XOdhkKeVZ-eXeKxiXe_RC1URRRjP2UUPdy5h-yEyB2da68qM5DHRzm5dRYAC2F-Lvrl-CBJLe8zZZrM_8a1s-gUiIzfDGQibbFDnhCFPVw48ZCKcJYOmw81Rki8T0OtpnHBi2J4rbFCCracxs_Ym0nSmIfwqtX3CIp7wU4NXT7DDQpAyVq0C5TaRNnbQ79BaAxE7sWmEPrmmus0z257043XBKjmusUsDOrag3cJ512vNreukQUtpekKz_Q.W7dIdvJNI5JFGq7HpWKk7NMQQ0vTPIKJCLSwjPUtkJI&dib_tag=se&keywords=televis%C3%A3o&qid=1716412624&sr=8-20&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147",
            "image": "https://m.media-amazon.com/images/I/61cxfrNZwgL._AC_UL320_.jpg",
            "nameItem": "Smart TV LED 50\" 4K UHD Semp RK8600 - Roku, Alexa, Wifi",
            "sales": "131 classificações",
            "stars": "4,6 de 5 estrelas",
            "salePrice": "R$ 1.899,05",
            "originalPrice": "R$ 1.999,00"
        },
        {
            "productId": "https://www.amazon.com.br/sspa/click?ie=UTF8&spc=MToxODA4MDEwNzMxNjYzNDg5OjE3MTY0MTI2MjQ6c3BfbXRmOjMwMDE4MTkxMTIyODMwMjo6MDo6&url=%2FSamsung-Smart-Crystal-UHD-70DU8000%2Fdp%2FB0CYN2G73D%2Fref%3Dsr_1_21_sspa%3Fdib%3DeyJ2IjoiMSJ9.nhGw25Kksm3MaOq7zWgx69qZOpRf-rLrejaUhkgSaZQGBys43XOdhkKeVZ-eXeKxiXe_RC1URRRjP2UUPdy5h-yEyB2da68qM5DHRzm5dRYAC2F-Lvrl-CBJLe8zZZrM_8a1s-gUiIzfDGQibbFDnhCFPVw48ZCKcJYOmw81Rki8T0OtpnHBi2J4rbFCCracxs_Ym0nSmIfwqtX3CIp7wU4NXT7DDQpAyVq0C5TaRNnbQ79BaAxE7sWmEPrmmus0z257043XBKjmusUsDOrag3cJ512vNreukQUtpekKz_Q.W7dIdvJNI5JFGq7HpWKk7NMQQ0vTPIKJCLSwjPUtkJI%26dib_tag%3Dse%26keywords%3Dtelevis%25C3%25A3o%26qid%3D1716412624%26sr%3D8-21-spons%26ufe%3Dapp_do%253Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1",
            "image": "https://m.media-amazon.com/images/I/71rEzuhuYTL._AC_UL320_.jpg",
            "nameItem": "Samsung Smart TV 70\" Crystal UHD 4K 70DU8000 - Painel Dynamic Crystal Color, Gaming Hub",
            "sales": "",
            "stars": "",
            "salePrice": "R$ 4.699,00",
            "originalPrice": ""
        },
        {
            "productId": "https://www.amazon.com.br/sspa/click?ie=UTF8&spc=MToxODA4MDEwNzMxNjYzNDg5OjE3MTY0MTI2MjQ6c3BfbXRmOjMwMDE5NTEwNzYyODAwMjo6MDo6&url=%2FSamsung-Smart-UHD-43DU7700-Processador%2Fdp%2FB0CYN6LJV6%2Fref%3Dsr_1_22_sspa%3Fdib%3DeyJ2IjoiMSJ9.nhGw25Kksm3MaOq7zWgx69qZOpRf-rLrejaUhkgSaZQGBys43XOdhkKeVZ-eXeKxiXe_RC1URRRjP2UUPdy5h-yEyB2da68qM5DHRzm5dRYAC2F-Lvrl-CBJLe8zZZrM_8a1s-gUiIzfDGQibbFDnhCFPVw48ZCKcJYOmw81Rki8T0OtpnHBi2J4rbFCCracxs_Ym0nSmIfwqtX3CIp7wU4NXT7DDQpAyVq0C5TaRNnbQ79BaAxE7sWmEPrmmus0z257043XBKjmusUsDOrag3cJ512vNreukQUtpekKz_Q.W7dIdvJNI5JFGq7HpWKk7NMQQ0vTPIKJCLSwjPUtkJI%26dib_tag%3Dse%26keywords%3Dtelevis%25C3%25A3o%26qid%3D1716412624%26sr%3D8-22-spons%26ufe%3Dapp_do%253Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1",
            "image": "https://m.media-amazon.com/images/I/51lElwjJUeL._AC_UL320_.jpg",
            "nameItem": "Samsung Smart TV 43\" UHD 4K 43DU7700 - Processador Crystal 4K, Gaming Hub",
            "sales": "",
            "stars": "",
            "salePrice": "R$ 1.879,00",
            "originalPrice": "R$ 2.287,93"
        },
        {
            "productId": "https://www.amazon.com.br/sspa/click?ie=UTF8&spc=MToxODA4MDEwNzMxNjYzNDg5OjE3MTY0MTI2MjQ6c3BfbXRmOjMwMDE3MTQyNDY0ODYwMjo6MDo6&url=%2Fpolegadas-sensibilidade-Widescreen-televis%25C3%25A3o-sintonizador%2Fdp%2FB0B1JZP7G3%2Fref%3Dsr_1_23_sspa%3Fdib%3DeyJ2IjoiMSJ9.nhGw25Kksm3MaOq7zWgx69qZOpRf-rLrejaUhkgSaZQGBys43XOdhkKeVZ-eXeKxiXe_RC1URRRjP2UUPdy5h-yEyB2da68qM5DHRzm5dRYAC2F-Lvrl-CBJLe8zZZrM_8a1s-gUiIzfDGQibbFDnhCFPVw48ZCKcJYOmw81Rki8T0OtpnHBi2J4rbFCCracxs_Ym0nSmIfwqtX3CIp7wU4NXT7DDQpAyVq0C5TaRNnbQ79BaAxE7sWmEPrmmus0z257043XBKjmusUsDOrag3cJ512vNreukQUtpekKz_Q.W7dIdvJNI5JFGq7HpWKk7NMQQ0vTPIKJCLSwjPUtkJI%26dib_tag%3Dse%26keywords%3Dtelevis%25C3%25A3o%26qid%3D1716412624%26sr%3D8-23-spons%26ufe%3Dapp_do%253Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1",
            "image": "https://m.media-amazon.com/images/I/71tFmVqqjWL._AC_UL320_.jpg",
            "nameItem": "TV LED portátil de 16 polegadas, TV digital 1080P ATSC de alta sensibilidade Widescreen televisão, HDMI, USB, sintonizador digital, entrada AV, monitor de exibição, TV analógica, ATV com suporte, controle remoto",
            "sales": "30 classificações",
            "stars": "3,6 de 5 estrelas",
            "salePrice": "R$ 1.373,04",
            "originalPrice": ""
        },
        {
            "productId": "https://www.amazon.com.br/sspa/click?ie=UTF8&spc=MToxODA4MDEwNzMxNjYzNDg5OjE3MTY0MTI2MjQ6c3BfbXRmOjMwMDIwMTg2MTE2MDEwMjo6MDo6&url=%2FControle-Compat%25C3%25ADvel-Globoplay-Universal-PTV32G52S%2Fdp%2FB0C84V46NC%2Fref%3Dsr_1_24_sspa%3Fdib%3DeyJ2IjoiMSJ9.nhGw25Kksm3MaOq7zWgx69qZOpRf-rLrejaUhkgSaZQGBys43XOdhkKeVZ-eXeKxiXe_RC1URRRjP2UUPdy5h-yEyB2da68qM5DHRzm5dRYAC2F-Lvrl-CBJLe8zZZrM_8a1s-gUiIzfDGQibbFDnhCFPVw48ZCKcJYOmw81Rki8T0OtpnHBi2J4rbFCCracxs_Ym0nSmIfwqtX3CIp7wU4NXT7DDQpAyVq0C5TaRNnbQ79BaAxE7sWmEPrmmus0z257043XBKjmusUsDOrag3cJ512vNreukQUtpekKz_Q.W7dIdvJNI5JFGq7HpWKk7NMQQ0vTPIKJCLSwjPUtkJI%26dib_tag%3Dse%26keywords%3Dtelevis%25C3%25A3o%26qid%3D1716412624%26sr%3D8-24-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1",
            "image": "https://m.media-amazon.com/images/I/51StHThNRwL._AC_UL320_.jpg",
            "nameItem": "Controle Remoto Smart Tv Compatível Com Philco 4k Tecla Netflix Prime Vídeo Youtube Globoplay Universal PTV32G52S",
            "sales": "66 classificações",
            "stars": "4,5 de 5 estrelas",
            "salePrice": "R$ 34,90",
            "originalPrice": ""
        },
        {
            "productId": "https://www.amazon.com.br/Smart-Crystal-UHD-Samsung-CU8000/dp/B0C14ZM9MQ/ref=sr_1_25?dib=eyJ2IjoiMSJ9.nhGw25Kksm3MaOq7zWgx69qZOpRf-rLrejaUhkgSaZQGBys43XOdhkKeVZ-eXeKxiXe_RC1URRRjP2UUPdy5h-yEyB2da68qM5DHRzm5dRYAC2F-Lvrl-CBJLe8zZZrM_8a1s-gUiIzfDGQibbFDnhCFPVw48ZCKcJYOmw81Rki8T0OtpnHBi2J4rbFCCracxs_Ym0nSmIfwqtX3CIp7wU4NXT7DDQpAyVq0C5TaRNnbQ79BaAxE7sWmEPrmmus0z257043XBKjmusUsDOrag3cJ512vNreukQUtpekKz_Q.W7dIdvJNI5JFGq7HpWKk7NMQQ0vTPIKJCLSwjPUtkJI&dib_tag=se&keywords=televis%C3%A3o&qid=1716412624&sr=8-25&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147",
            "image": "https://m.media-amazon.com/images/I/711dJpyij1L._AC_UL320_.jpg",
            "nameItem": "SAMSUNG Smart TV Crystal 65'' 4K UHD CU8000 - Alexa built in, Gaming Hub, Painel Dynamic Crystal Color",
            "sales": "437 classificações",
            "stars": "4,6 de 5 estrelas",
            "salePrice": "R$ 3.499,00",
            "originalPrice": "R$ 3.628,81"
        },
        {
            "productId": "https://www.amazon.com.br/Smart-Philco-PTV43G7ER2CPBLF-Dolby-%C3%81udio/dp/B0C7W5V3MP/ref=sr_1_26?dib=eyJ2IjoiMSJ9.nhGw25Kksm3MaOq7zWgx69qZOpRf-rLrejaUhkgSaZQGBys43XOdhkKeVZ-eXeKxiXe_RC1URRRjP2UUPdy5h-yEyB2da68qM5DHRzm5dRYAC2F-Lvrl-CBJLe8zZZrM_8a1s-gUiIzfDGQibbFDnhCFPVw48ZCKcJYOmw81Rki8T0OtpnHBi2J4rbFCCracxs_Ym0nSmIfwqtX3CIp7wU4NXT7DDQpAyVq0C5TaRNnbQ79BaAxE7sWmEPrmmus0z257043XBKjmusUsDOrag3cJ512vNreukQUtpekKz_Q.W7dIdvJNI5JFGq7HpWKk7NMQQ0vTPIKJCLSwjPUtkJI&dib_tag=se&keywords=televis%C3%A3o&qid=1716412624&sr=8-26&ufe=app_do%3Aamzn1.fos.a492fd4a-f54d-4e8d-8c31-35e0a04ce61e",
            "image": "https://m.media-amazon.com/images/I/611m-5cl+JL._AC_UL320_.jpg",
            "nameItem": "Smart TV 43” Philco PTV43G7ER2CPBLF Led Dolby Áudio",
            "sales": "115 classificações",
            "stars": "4,5 de 5 estrelas",
            "salePrice": "R$ 1.692,90",
            "originalPrice": "R$ 1.802,52"
        },
        {
            "productId": "https://www.amazon.com.br/LG-NanoCell-50NANO77SRA-Bluetooth-assistente/dp/B0C6NKMM6H/ref=sr_1_27?dib=eyJ2IjoiMSJ9.nhGw25Kksm3MaOq7zWgx69qZOpRf-rLrejaUhkgSaZQGBys43XOdhkKeVZ-eXeKxiXe_RC1URRRjP2UUPdy5h-yEyB2da68qM5DHRzm5dRYAC2F-Lvrl-CBJLe8zZZrM_8a1s-gUiIzfDGQibbFDnhCFPVw48ZCKcJYOmw81Rki8T0OtpnHBi2J4rbFCCracxs_Ym0nSmIfwqtX3CIp7wU4NXT7DDQpAyVq0C5TaRNnbQ79BaAxE7sWmEPrmmus0z257043XBKjmusUsDOrag3cJ512vNreukQUtpekKz_Q.W7dIdvJNI5JFGq7HpWKk7NMQQ0vTPIKJCLSwjPUtkJI&dib_tag=se&keywords=televis%C3%A3o&qid=1716412624&sr=8-27&ufe=app_do%3Aamzn1.fos.95de73c3-5dda-43a7-bd1f-63af03b14751",
            "image": "https://m.media-amazon.com/images/I/61vgiU5DFpL._AC_UL320_.jpg",
            "nameItem": "Smart TV 50\" 4K LG NanoCell 50NANO77SRA Bluetooth ThinQ AI Alexa Google assistente Airplay 3 HDMI, Light Black",
            "sales": "377 classificações",
            "stars": "4,6 de 5 estrelas",
            "salePrice": "R$ 2.326,55",
            "originalPrice": "R$ 2.599,00"
        },
        {
            "productId": "https://www.amazon.com.br/Philips-32PHG6918-78-Comando-Bluetooth/dp/B0CD311KQQ/ref=sr_1_28?dib=eyJ2IjoiMSJ9.nhGw25Kksm3MaOq7zWgx69qZOpRf-rLrejaUhkgSaZQGBys43XOdhkKeVZ-eXeKxiXe_RC1URRRjP2UUPdy5h-yEyB2da68qM5DHRzm5dRYAC2F-Lvrl-CBJLe8zZZrM_8a1s-gUiIzfDGQibbFDnhCFPVw48ZCKcJYOmw81Rki8T0OtpnHBi2J4rbFCCracxs_Ym0nSmIfwqtX3CIp7wU4NXT7DDQpAyVq0C5TaRNnbQ79BaAxE7sWmEPrmmus0z257043XBKjmusUsDOrag3cJ512vNreukQUtpekKz_Q.W7dIdvJNI5JFGq7HpWKk7NMQQ0vTPIKJCLSwjPUtkJI&dib_tag=se&keywords=televis%C3%A3o&qid=1716412624&sr=8-28&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147",
            "image": "https://m.media-amazon.com/images/I/614JsabuFTL._AC_UL320_.jpg",
            "nameItem": "Smart TV Philips 32\" HD 32PHG6918/78, Google TV, Comando de Voz, HDR, 3 HDMI, Wifi 5G, Bluetooth",
            "sales": "221 classificações",
            "stars": "4,5 de 5 estrelas",
            "salePrice": "R$ 1.138,99",
            "originalPrice": "R$ 1.196,84"
        },
        {
            "productId": "https://www.amazon.com.br/Smart-Philco-PTV43E3AAGSSBLF-Android-Dolby/dp/B0CKD83Q54/ref=sr_1_29?dib=eyJ2IjoiMSJ9.nhGw25Kksm3MaOq7zWgx69qZOpRf-rLrejaUhkgSaZQGBys43XOdhkKeVZ-eXeKxiXe_RC1URRRjP2UUPdy5h-yEyB2da68qM5DHRzm5dRYAC2F-Lvrl-CBJLe8zZZrM_8a1s-gUiIzfDGQibbFDnhCFPVw48ZCKcJYOmw81Rki8T0OtpnHBi2J4rbFCCracxs_Ym0nSmIfwqtX3CIp7wU4NXT7DDQpAyVq0C5TaRNnbQ79BaAxE7sWmEPrmmus0z257043XBKjmusUsDOrag3cJ512vNreukQUtpekKz_Q.W7dIdvJNI5JFGq7HpWKk7NMQQ0vTPIKJCLSwjPUtkJI&dib_tag=se&keywords=televis%C3%A3o&qid=1716412624&sr=8-29&ufe=app_do%3Aamzn1.fos.a492fd4a-f54d-4e8d-8c31-35e0a04ce61e",
            "image": "https://m.media-amazon.com/images/I/71+3k+wVBfL._AC_UL320_.jpg",
            "nameItem": "Philco Smart TV 43” PTV43E3AAGSSBLF Android TV LED Dolby Audio",
            "sales": "10 classificações",
            "stars": "4,9 de 5 estrelas",
            "salePrice": "R$ 1.699,90",
            "originalPrice": ""
        },
        {
            "productId": "https://www.amazon.com.br/Smart-Preta-Tronos-Trs32sfa11-Bivolt/dp/B0CJGHJ1KF/ref=sr_1_30?dib=eyJ2IjoiMSJ9.nhGw25Kksm3MaOq7zWgx69qZOpRf-rLrejaUhkgSaZQGBys43XOdhkKeVZ-eXeKxiXe_RC1URRRjP2UUPdy5h-yEyB2da68qM5DHRzm5dRYAC2F-Lvrl-CBJLe8zZZrM_8a1s-gUiIzfDGQibbFDnhCFPVw48ZCKcJYOmw81Rki8T0OtpnHBi2J4rbFCCracxs_Ym0nSmIfwqtX3CIp7wU4NXT7DDQpAyVq0C5TaRNnbQ79BaAxE7sWmEPrmmus0z257043XBKjmusUsDOrag3cJ512vNreukQUtpekKz_Q.W7dIdvJNI5JFGq7HpWKk7NMQQ0vTPIKJCLSwjPUtkJI&dib_tag=se&keywords=televis%C3%A3o&qid=1716412624&sr=8-30&ufe=app_do%3Aamzn1.fos.a492fd4a-f54d-4e8d-8c31-35e0a04ce61e",
            "image": "https://m.media-amazon.com/images/I/61D2g19CF5L._AC_UL320_.jpg",
            "nameItem": "Smart Tv 32'' Hd Preta Tronos Trs32sfa11 Bivolt",
            "sales": "11 classificações",
            "stars": "3,9 de 5 estrelas",
            "salePrice": "R$ 847,53",
            "originalPrice": "R$ 1.094,00"
        },
        {
            "productId": "https://www.amazon.com.br/LG-Bluetooth-compat%C3%ADvel-Intelig%C3%AAncia-Artificial/dp/B095PY7423/ref=sr_1_31?dib=eyJ2IjoiMSJ9.nhGw25Kksm3MaOq7zWgx69qZOpRf-rLrejaUhkgSaZQGBys43XOdhkKeVZ-eXeKxiXe_RC1URRRjP2UUPdy5h-yEyB2da68qM5DHRzm5dRYAC2F-Lvrl-CBJLe8zZZrM_8a1s-gUiIzfDGQibbFDnhCFPVw48ZCKcJYOmw81Rki8T0OtpnHBi2J4rbFCCracxs_Ym0nSmIfwqtX3CIp7wU4NXT7DDQpAyVq0C5TaRNnbQ79BaAxE7sWmEPrmmus0z257043XBKjmusUsDOrag3cJ512vNreukQUtpekKz_Q.W7dIdvJNI5JFGq7HpWKk7NMQQ0vTPIKJCLSwjPUtkJI&dib_tag=se&keywords=televis%C3%A3o&qid=1716412624&sr=8-31&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147",
            "image": "https://m.media-amazon.com/images/I/61qCaCvrxdL._AC_UL320_.jpg",
            "nameItem": "2021 Smart TV LG 43\" Full HD 43LM6370 WiFi Bluetooth HDR ThinQAI compatível com Inteligência Artificial",
            "sales": "611 classificações",
            "stars": "4,8 de 5 estrelas",
            "salePrice": "R$ 1.724,19",
            "originalPrice": ""
        },
        {
            "productId": "https://www.amazon.com.br/Smart-Multi-S%C3%A9rie-Experience-Android/dp/B0CNH84Q6H/ref=sr_1_32?dib=eyJ2IjoiMSJ9.nhGw25Kksm3MaOq7zWgx69qZOpRf-rLrejaUhkgSaZQGBys43XOdhkKeVZ-eXeKxiXe_RC1URRRjP2UUPdy5h-yEyB2da68qM5DHRzm5dRYAC2F-Lvrl-CBJLe8zZZrM_8a1s-gUiIzfDGQibbFDnhCFPVw48ZCKcJYOmw81Rki8T0OtpnHBi2J4rbFCCracxs_Ym0nSmIfwqtX3CIp7wU4NXT7DDQpAyVq0C5TaRNnbQ79BaAxE7sWmEPrmmus0z257043XBKjmusUsDOrag3cJ512vNreukQUtpekKz_Q.W7dIdvJNI5JFGq7HpWKk7NMQQ0vTPIKJCLSwjPUtkJI&dib_tag=se&keywords=televis%C3%A3o&qid=1716412624&sr=8-32&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147",
            "image": "https://m.media-amazon.com/images/I/512pZVMdStL._AC_UL320_.jpg",
            "nameItem": "Smart TV DLED 32 HD Multi Série Experience Android 11 3HDMI 2USB - TL068M",
            "sales": "4 classificações",
            "stars": "3,3 de 5 estrelas",
            "salePrice": "R$ 892,00",
            "originalPrice": ""
        },
        {
            "productId": "https://www.amazon.com.br/Smart-LED-UHD-TCL-50P635/dp/B0B5S1YQS2/ref=sr_1_33?dib=eyJ2IjoiMSJ9.nhGw25Kksm3MaOq7zWgx69qZOpRf-rLrejaUhkgSaZQGBys43XOdhkKeVZ-eXeKxiXe_RC1URRRjP2UUPdy5h-yEyB2da68qM5DHRzm5dRYAC2F-Lvrl-CBJLe8zZZrM_8a1s-gUiIzfDGQibbFDnhCFPVw48ZCKcJYOmw81Rki8T0OtpnHBi2J4rbFCCracxs_Ym0nSmIfwqtX3CIp7wU4NXT7DDQpAyVq0C5TaRNnbQ79BaAxE7sWmEPrmmus0z257043XBKjmusUsDOrag3cJ512vNreukQUtpekKz_Q.W7dIdvJNI5JFGq7HpWKk7NMQQ0vTPIKJCLSwjPUtkJI&dib_tag=se&keywords=televis%C3%A3o&qid=1716412624&sr=8-33&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147",
            "image": "https://m.media-amazon.com/images/I/61dHJpr85eL._AC_UL320_.jpg",
            "nameItem": "Smart TV LED 50\" 4K UHD TCL 50P635 - Google TV, Wifi, HDMI , PRETO",
            "sales": "949 classificações",
            "stars": "4,7 de 5 estrelas",
            "salePrice": "R$ 1.989,00",
            "originalPrice": "R$ 2.039,00"
        },
        {
            "productId": "https://www.amazon.com.br/Smart-TV-LED-Semp-32R6500/dp/B0BFTQ3XHF/ref=sr_1_34?dib=eyJ2IjoiMSJ9.nhGw25Kksm3MaOq7zWgx69qZOpRf-rLrejaUhkgSaZQGBys43XOdhkKeVZ-eXeKxiXe_RC1URRRjP2UUPdy5h-yEyB2da68qM5DHRzm5dRYAC2F-Lvrl-CBJLe8zZZrM_8a1s-gUiIzfDGQibbFDnhCFPVw48ZCKcJYOmw81Rki8T0OtpnHBi2J4rbFCCracxs_Ym0nSmIfwqtX3CIp7wU4NXT7DDQpAyVq0C5TaRNnbQ79BaAxE7sWmEPrmmus0z257043XBKjmusUsDOrag3cJ512vNreukQUtpekKz_Q.W7dIdvJNI5JFGq7HpWKk7NMQQ0vTPIKJCLSwjPUtkJI&dib_tag=se&keywords=televis%C3%A3o&qid=1716412624&sr=8-34&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147",
            "image": "https://m.media-amazon.com/images/I/61tJlBpaIIL._AC_UL320_.jpg",
            "nameItem": "TLC, Smart TV LED 32' HD Semp 32R6500 - Wifi, HDMI, USB, preto",
            "sales": "425 classificações",
            "stars": "4,7 de 5 estrelas",
            "salePrice": "R$ 1.099,00",
            "originalPrice": ""
        },
        {
            "productId": "https://www.amazon.com.br/Samsung-Smart-Crystal-UHD-CU8000/dp/B0C15423S3/ref=sr_1_35?dib=eyJ2IjoiMSJ9.nhGw25Kksm3MaOq7zWgx69qZOpRf-rLrejaUhkgSaZQGBys43XOdhkKeVZ-eXeKxiXe_RC1URRRjP2UUPdy5h-yEyB2da68qM5DHRzm5dRYAC2F-Lvrl-CBJLe8zZZrM_8a1s-gUiIzfDGQibbFDnhCFPVw48ZCKcJYOmw81Rki8T0OtpnHBi2J4rbFCCracxs_Ym0nSmIfwqtX3CIp7wU4NXT7DDQpAyVq0C5TaRNnbQ79BaAxE7sWmEPrmmus0z257043XBKjmusUsDOrag3cJ512vNreukQUtpekKz_Q.W7dIdvJNI5JFGq7HpWKk7NMQQ0vTPIKJCLSwjPUtkJI&dib_tag=se&keywords=televis%C3%A3o&qid=1716412624&sr=8-35&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147",
            "image": "https://m.media-amazon.com/images/I/711dJpyij1L._AC_UL320_.jpg",
            "nameItem": "Samsung Smart TV Crystal 50\" 4K UHD CU8000 - Alexa built in, Samsung Gaming Hub, Painel Dynamic Crystal Color",
            "sales": "809 classificações",
            "stars": "4,6 de 5 estrelas",
            "salePrice": "R$ 2.499,00",
            "originalPrice": ""
        },
        {
            "productId": "https://www.amazon.com.br/Samsung-Smart-Crystal-UHD-CU7700/dp/B0C15423SH/ref=sr_1_36?dib=eyJ2IjoiMSJ9.nhGw25Kksm3MaOq7zWgx69qZOpRf-rLrejaUhkgSaZQGBys43XOdhkKeVZ-eXeKxiXe_RC1URRRjP2UUPdy5h-yEyB2da68qM5DHRzm5dRYAC2F-Lvrl-CBJLe8zZZrM_8a1s-gUiIzfDGQibbFDnhCFPVw48ZCKcJYOmw81Rki8T0OtpnHBi2J4rbFCCracxs_Ym0nSmIfwqtX3CIp7wU4NXT7DDQpAyVq0C5TaRNnbQ79BaAxE7sWmEPrmmus0z257043XBKjmusUsDOrag3cJ512vNreukQUtpekKz_Q.W7dIdvJNI5JFGq7HpWKk7NMQQ0vTPIKJCLSwjPUtkJI&dib_tag=se&keywords=televis%C3%A3o&qid=1716412624&sr=8-36",
            "image": "https://m.media-amazon.com/images/I/71vk2qFDSPL._AC_UL320_.jpg",
            "nameItem": "Samsung Smart TV Crystal 55\" 4K UHD CU7700 - Alexa built in, Samsung Gaming Hub",
            "sales": "522 classificações",
            "stars": "4,7 de 5 estrelas",
            "salePrice": "",
            "originalPrice": ""
        },
        {
            "productId": "https://www.amazon.com.br/Samsung-58CU7700-Processador-Crystal-Limites/dp/B0CB73K787/ref=sr_1_37?dib=eyJ2IjoiMSJ9.nhGw25Kksm3MaOq7zWgx69qZOpRf-rLrejaUhkgSaZQGBys43XOdhkKeVZ-eXeKxiXe_RC1URRRjP2UUPdy5h-yEyB2da68qM5DHRzm5dRYAC2F-Lvrl-CBJLe8zZZrM_8a1s-gUiIzfDGQibbFDnhCFPVw48ZCKcJYOmw81Rki8T0OtpnHBi2J4rbFCCracxs_Ym0nSmIfwqtX3CIp7wU4NXT7DDQpAyVq0C5TaRNnbQ79BaAxE7sWmEPrmmus0z257043XBKjmusUsDOrag3cJ512vNreukQUtpekKz_Q.W7dIdvJNI5JFGq7HpWKk7NMQQ0vTPIKJCLSwjPUtkJI&dib_tag=se&keywords=televis%C3%A3o&qid=1716412624&sr=8-37&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147",
            "image": "https://m.media-amazon.com/images/I/61EdTzOCGIL._AC_UL320_.jpg",
            "nameItem": "Samsung Smart TV 58\" UHD 4K 58CU7700, Processador Crystal 4K, Gaming Hub, Visual Livre de Cabos, Tela sem limites, Alexa built in, Controle Único",
            "sales": "109 classificações",
            "stars": "4,7 de 5 estrelas",
            "salePrice": "R$ 2.789,07",
            "originalPrice": ""
        },
        {
            "productId": "https://www.amazon.com.br/Samsung-Smart-Crystal-UHD-CU8000/dp/B0C153ML9K/ref=sr_1_38?dib=eyJ2IjoiMSJ9.nhGw25Kksm3MaOq7zWgx69qZOpRf-rLrejaUhkgSaZQGBys43XOdhkKeVZ-eXeKxiXe_RC1URRRjP2UUPdy5h-yEyB2da68qM5DHRzm5dRYAC2F-Lvrl-CBJLe8zZZrM_8a1s-gUiIzfDGQibbFDnhCFPVw48ZCKcJYOmw81Rki8T0OtpnHBi2J4rbFCCracxs_Ym0nSmIfwqtX3CIp7wU4NXT7DDQpAyVq0C5TaRNnbQ79BaAxE7sWmEPrmmus0z257043XBKjmusUsDOrag3cJ512vNreukQUtpekKz_Q.W7dIdvJNI5JFGq7HpWKk7NMQQ0vTPIKJCLSwjPUtkJI&dib_tag=se&keywords=televis%C3%A3o&qid=1716412624&sr=8-38&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147",
            "image": "https://m.media-amazon.com/images/I/711dJpyij1L._AC_UL320_.jpg",
            "nameItem": "Samsung Smart TV Crystal 55\" 4K UHD CU8000 - Alexa built in, Samsung Gaming Hub, Painel Dynamic Crystal Color",
            "sales": "381 classificações",
            "stars": "4,5 de 5 estrelas",
            "salePrice": "R$ 2.697,00",
            "originalPrice": "R$ 2.810,42"
        },
        {
            "productId": "https://www.amazon.com.br/TCL-SMART-S5400AF-ANDROID-PRETO/dp/B0CC6QLWPV/ref=sr_1_39?dib=eyJ2IjoiMSJ9.nhGw25Kksm3MaOq7zWgx69qZOpRf-rLrejaUhkgSaZQGBys43XOdhkKeVZ-eXeKxiXe_RC1URRRjP2UUPdy5h-yEyB2da68qM5DHRzm5dRYAC2F-Lvrl-CBJLe8zZZrM_8a1s-gUiIzfDGQibbFDnhCFPVw48ZCKcJYOmw81Rki8T0OtpnHBi2J4rbFCCracxs_Ym0nSmIfwqtX3CIp7wU4NXT7DDQpAyVq0C5TaRNnbQ79BaAxE7sWmEPrmmus0z257043XBKjmusUsDOrag3cJ512vNreukQUtpekKz_Q.W7dIdvJNI5JFGq7HpWKk7NMQQ0vTPIKJCLSwjPUtkJI&dib_tag=se&keywords=televis%C3%A3o&qid=1716412624&sr=8-39&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147",
            "image": "https://m.media-amazon.com/images/I/61lfaXZk2IL._AC_UL320_.jpg",
            "nameItem": "TCL LED SMART TV 32” S5400AF FHD ANDROID TV, PRETO",
            "sales": "562 classificações",
            "stars": "4,5 de 5 estrelas",
            "salePrice": "R$ 1.149,00",
            "originalPrice": "R$ 1.299,00"
        },
        {
            "productId": "https://www.amazon.com.br/Smart-Aiwa-Android-Ultrafina-AWS-TV-43-BL-02/dp/B0BJLCW2QZ/ref=sr_1_40?dib=eyJ2IjoiMSJ9.nhGw25Kksm3MaOq7zWgx69qZOpRf-rLrejaUhkgSaZQGBys43XOdhkKeVZ-eXeKxiXe_RC1URRRjP2UUPdy5h-yEyB2da68qM5DHRzm5dRYAC2F-Lvrl-CBJLe8zZZrM_8a1s-gUiIzfDGQibbFDnhCFPVw48ZCKcJYOmw81Rki8T0OtpnHBi2J4rbFCCracxs_Ym0nSmIfwqtX3CIp7wU4NXT7DDQpAyVq0C5TaRNnbQ79BaAxE7sWmEPrmmus0z257043XBKjmusUsDOrag3cJ512vNreukQUtpekKz_Q.W7dIdvJNI5JFGq7HpWKk7NMQQ0vTPIKJCLSwjPUtkJI&dib_tag=se&keywords=televis%C3%A3o&qid=1716412624&sr=8-40&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147",
            "image": "https://m.media-amazon.com/images/I/61R0cdZif8L._AC_UL320_.jpg",
            "nameItem": "Smart TV Aiwa 43”, Android, Full HD, Borda Ultrafina, HDR10, Dolby Áudio - AWS-TV-43-BL-02-A",
            "sales": "357 classificações",
            "stars": "4,3 de 5 estrelas",
            "salePrice": "R$ 1.498,99",
            "originalPrice": ""
        },
        {
            "productId": "https://www.amazon.com.br/Samsung-Smart-Crystal-UHD-CU7700/dp/B0C153PJRB/ref=sr_1_41?dib=eyJ2IjoiMSJ9.nhGw25Kksm3MaOq7zWgx69qZOpRf-rLrejaUhkgSaZQGBys43XOdhkKeVZ-eXeKxiXe_RC1URRRjP2UUPdy5h-yEyB2da68qM5DHRzm5dRYAC2F-Lvrl-CBJLe8zZZrM_8a1s-gUiIzfDGQibbFDnhCFPVw48ZCKcJYOmw81Rki8T0OtpnHBi2J4rbFCCracxs_Ym0nSmIfwqtX3CIp7wU4NXT7DDQpAyVq0C5TaRNnbQ79BaAxE7sWmEPrmmus0z257043XBKjmusUsDOrag3cJ512vNreukQUtpekKz_Q.W7dIdvJNI5JFGq7HpWKk7NMQQ0vTPIKJCLSwjPUtkJI&dib_tag=se&keywords=televis%C3%A3o&qid=1716412624&sr=8-41&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147",
            "image": "https://m.media-amazon.com/images/I/71vk2qFDSPL._AC_UL320_.jpg",
            "nameItem": "Samsung Smart TV Crystal 75\" 4K UHD CU7700 - Alexa built in, Samsung Gaming Hub",
            "sales": "42 classificações",
            "stars": "4,4 de 5 estrelas",
            "salePrice": "R$ 4.499,00",
            "originalPrice": "R$ 7.044,32"
        },
        {
            "productId": "https://www.amazon.com.br/Philco-PTV24N91DFRH-LED-Digital-Bivolt/dp/B0B44HYFZ2/ref=sr_1_42?dib=eyJ2IjoiMSJ9.nhGw25Kksm3MaOq7zWgx69qZOpRf-rLrejaUhkgSaZQGBys43XOdhkKeVZ-eXeKxiXe_RC1URRRjP2UUPdy5h-yEyB2da68qM5DHRzm5dRYAC2F-Lvrl-CBJLe8zZZrM_8a1s-gUiIzfDGQibbFDnhCFPVw48ZCKcJYOmw81Rki8T0OtpnHBi2J4rbFCCracxs_Ym0nSmIfwqtX3CIp7wU4NXT7DDQpAyVq0C5TaRNnbQ79BaAxE7sWmEPrmmus0z257043XBKjmusUsDOrag3cJ512vNreukQUtpekKz_Q.W7dIdvJNI5JFGq7HpWKk7NMQQ0vTPIKJCLSwjPUtkJI&dib_tag=se&keywords=televis%C3%A3o&qid=1716412624&sr=8-42&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147",
            "image": "https://m.media-amazon.com/images/I/61fcGUbIAPL._AC_UL320_.jpg",
            "nameItem": "TV Philco 24\" PTV24N91DFRH LED HD Digital Bivolt",
            "sales": "62 classificações",
            "stars": "4,4 de 5 estrelas",
            "salePrice": "R$ 799,90",
            "originalPrice": ""
        },
        {
            "productId": "https://www.amazon.com.br/LG-LED-UHD-Smart-43UR781C0SA/dp/B0C9QQVQFT/ref=sr_1_43?dib=eyJ2IjoiMSJ9.nhGw25Kksm3MaOq7zWgx69qZOpRf-rLrejaUhkgSaZQGBys43XOdhkKeVZ-eXeKxiXe_RC1URRRjP2UUPdy5h-yEyB2da68qM5DHRzm5dRYAC2F-Lvrl-CBJLe8zZZrM_8a1s-gUiIzfDGQibbFDnhCFPVw48ZCKcJYOmw81Rki8T0OtpnHBi2J4rbFCCracxs_Ym0nSmIfwqtX3CIp7wU4NXT7DDQpAyVq0C5TaRNnbQ79BaAxE7sWmEPrmmus0z257043XBKjmusUsDOrag3cJ512vNreukQUtpekKz_Q.W7dIdvJNI5JFGq7HpWKk7NMQQ0vTPIKJCLSwjPUtkJI&dib_tag=se&keywords=televis%C3%A3o&qid=1716412624&sr=8-43&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147",
            "image": "https://m.media-amazon.com/images/I/61hyXt3P+AL._AC_UL320_.jpg",
            "nameItem": "TV LG 43\" LED 4K UHD Smart Pro 43UR781C0SA",
            "sales": "118 classificações",
            "stars": "4,5 de 5 estrelas",
            "salePrice": "R$ 1.898,00",
            "originalPrice": ""
        },
        {
            "productId": "https://www.amazon.com.br/Smart-Philco-PTV32G23AGSSBLH-Android-LED/dp/B0C7W863T2/ref=sr_1_44?dib=eyJ2IjoiMSJ9.nhGw25Kksm3MaOq7zWgx69qZOpRf-rLrejaUhkgSaZQGBys43XOdhkKeVZ-eXeKxiXe_RC1URRRjP2UUPdy5h-yEyB2da68qM5DHRzm5dRYAC2F-Lvrl-CBJLe8zZZrM_8a1s-gUiIzfDGQibbFDnhCFPVw48ZCKcJYOmw81Rki8T0OtpnHBi2J4rbFCCracxs_Ym0nSmIfwqtX3CIp7wU4NXT7DDQpAyVq0C5TaRNnbQ79BaAxE7sWmEPrmmus0z257043XBKjmusUsDOrag3cJ512vNreukQUtpekKz_Q.W7dIdvJNI5JFGq7HpWKk7NMQQ0vTPIKJCLSwjPUtkJI&dib_tag=se&keywords=televis%C3%A3o&qid=1716412624&sr=8-44&ufe=app_do%3Aamzn1.fos.a492fd4a-f54d-4e8d-8c31-35e0a04ce61e",
            "image": "https://m.media-amazon.com/images/I/6164cv8vvDL._AC_UL320_.jpg",
            "nameItem": "Smart TV 32” Philco PTV32G23AGSSBLH Android TV LED",
            "sales": "1.525 classificações",
            "stars": "4,5 de 5 estrelas",
            "salePrice": "R$ 1.199,90",
            "originalPrice": ""
        },
        {
            "productId": "https://www.amazon.com.br/Smart-LED-LG-32LQ621CBSB-AWZ-built/dp/B09ZWMV9K2/ref=sr_1_45?dib=eyJ2IjoiMSJ9.nhGw25Kksm3MaOq7zWgx69qZOpRf-rLrejaUhkgSaZQGBys43XOdhkKeVZ-eXeKxiXe_RC1URRRjP2UUPdy5h-yEyB2da68qM5DHRzm5dRYAC2F-Lvrl-CBJLe8zZZrM_8a1s-gUiIzfDGQibbFDnhCFPVw48ZCKcJYOmw81Rki8T0OtpnHBi2J4rbFCCracxs_Ym0nSmIfwqtX3CIp7wU4NXT7DDQpAyVq0C5TaRNnbQ79BaAxE7sWmEPrmmus0z257043XBKjmusUsDOrag3cJ512vNreukQUtpekKz_Q.W7dIdvJNI5JFGq7HpWKk7NMQQ0vTPIKJCLSwjPUtkJI&dib_tag=se&keywords=televis%C3%A3o&qid=1716412624&sr=8-45&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147",
            "image": "https://m.media-amazon.com/images/I/61sCWk941hL._AC_UL320_.jpg",
            "nameItem": "Smart TV LED 32\" HD LG 32LQ621CBSB.AWZ - IA LG ThinQ, Alexa built-in",
            "sales": "5.383 classificações",
            "stars": "4,7 de 5 estrelas",
            "salePrice": "R$ 1.129,00",
            "originalPrice": ""
        },
        {
            "productId": "https://www.amazon.com.br/Philips-43PFG6918-78-Comando-Bluetooth/dp/B0CCJWFWWN/ref=sr_1_46?dib=eyJ2IjoiMSJ9.nhGw25Kksm3MaOq7zWgx69qZOpRf-rLrejaUhkgSaZQGBys43XOdhkKeVZ-eXeKxiXe_RC1URRRjP2UUPdy5h-yEyB2da68qM5DHRzm5dRYAC2F-Lvrl-CBJLe8zZZrM_8a1s-gUiIzfDGQibbFDnhCFPVw48ZCKcJYOmw81Rki8T0OtpnHBi2J4rbFCCracxs_Ym0nSmIfwqtX3CIp7wU4NXT7DDQpAyVq0C5TaRNnbQ79BaAxE7sWmEPrmmus0z257043XBKjmusUsDOrag3cJ512vNreukQUtpekKz_Q.W7dIdvJNI5JFGq7HpWKk7NMQQ0vTPIKJCLSwjPUtkJI&dib_tag=se&keywords=televis%C3%A3o&qid=1716412624&sr=8-46&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147",
            "image": "https://m.media-amazon.com/images/I/61OGXgI9o2L._AC_UL320_.jpg",
            "nameItem": "Smart TV Philips 43\" Full HD 43PFG6918/78, Google TV, Comando de Voz, HDR, 3 HDMI, Wifi 5G, Bluetooth",
            "sales": "451 classificações",
            "stars": "4,6 de 5 estrelas",
            "salePrice": "R$ 1.626,11",
            "originalPrice": "R$ 1.949,00"
        },
        {
            "productId": "https://www.amazon.com.br/TCL-LED-SMART-P635-GOOGLE/dp/B0CC71YS55/ref=sr_1_47?dib=eyJ2IjoiMSJ9.nhGw25Kksm3MaOq7zWgx69qZOpRf-rLrejaUhkgSaZQGBys43XOdhkKeVZ-eXeKxiXe_RC1URRRjP2UUPdy5h-yEyB2da68qM5DHRzm5dRYAC2F-Lvrl-CBJLe8zZZrM_8a1s-gUiIzfDGQibbFDnhCFPVw48ZCKcJYOmw81Rki8T0OtpnHBi2J4rbFCCracxs_Ym0nSmIfwqtX3CIp7wU4NXT7DDQpAyVq0C5TaRNnbQ79BaAxE7sWmEPrmmus0z257043XBKjmusUsDOrag3cJ512vNreukQUtpekKz_Q.W7dIdvJNI5JFGq7HpWKk7NMQQ0vTPIKJCLSwjPUtkJI&dib_tag=se&keywords=televis%C3%A3o&qid=1716412624&sr=8-47&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147",
            "image": "https://m.media-amazon.com/images/I/61frgXylFVL._AC_UL320_.jpg",
            "nameItem": "TCL LED SMART TV 65” P635 4K UHD GOOGLE TV",
            "sales": "93 classificações",
            "stars": "4,6 de 5 estrelas",
            "salePrice": "R$ 3.199,00",
            "originalPrice": "R$ 3.999,00"
        },
        {
            "productId": "https://www.amazon.com.br/LG-65UR8750PSA-Bluetooth-Assistente-Airplay2/dp/B0C6NVT9GJ/ref=sr_1_48?dib=eyJ2IjoiMSJ9.nhGw25Kksm3MaOq7zWgx69qZOpRf-rLrejaUhkgSaZQGBys43XOdhkKeVZ-eXeKxiXe_RC1URRRjP2UUPdy5h-yEyB2da68qM5DHRzm5dRYAC2F-Lvrl-CBJLe8zZZrM_8a1s-gUiIzfDGQibbFDnhCFPVw48ZCKcJYOmw81Rki8T0OtpnHBi2J4rbFCCracxs_Ym0nSmIfwqtX3CIp7wU4NXT7DDQpAyVq0C5TaRNnbQ79BaAxE7sWmEPrmmus0z257043XBKjmusUsDOrag3cJ512vNreukQUtpekKz_Q.W7dIdvJNI5JFGq7HpWKk7NMQQ0vTPIKJCLSwjPUtkJI&dib_tag=se&keywords=televis%C3%A3o&qid=1716412624&sr=8-48&ufe=app_do%3Aamzn1.fos.95de73c3-5dda-43a7-bd1f-63af03b14751",
            "image": "https://m.media-amazon.com/images/I/51NfNFaewDL._AC_UL320_.jpg",
            "nameItem": "Smart TV 65\" 4K LG UHD ThinQ AI 65UR8750PSA HDR Bluetooth Alexa Google Assistente Airplay2 3 HDMI",
            "sales": "303 classificações",
            "stars": "4,7 de 5 estrelas",
            "salePrice": "R$ 3.199,00",
            "originalPrice": "R$ 3.334,11"
        },
        {
            "productId": "https://www.amazon.com.br/Smart-TV-LED-Samsung-LH32BETBLGGXZD/dp/B0899BRB4B/ref=sr_1_49?dib=eyJ2IjoiMSJ9.nhGw25Kksm3MaOq7zWgx69qZOpRf-rLrejaUhkgSaZQGBys43XOdhkKeVZ-eXeKxiXe_RC1URRRjP2UUPdy5h-yEyB2da68qM5DHRzm5dRYAC2F-Lvrl-CBJLe8zZZrM_8a1s-gUiIzfDGQibbFDnhCFPVw48ZCKcJYOmw81Rki8T0OtpnHBi2J4rbFCCracxs_Ym0nSmIfwqtX3CIp7wU4NXT7DDQpAyVq0C5TaRNnbQ79BaAxE7sWmEPrmmus0z257043XBKjmusUsDOrag3cJ512vNreukQUtpekKz_Q.W7dIdvJNI5JFGq7HpWKk7NMQQ0vTPIKJCLSwjPUtkJI&dib_tag=se&keywords=televis%C3%A3o&qid=1716412624&sr=8-49&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147",
            "image": "https://m.media-amazon.com/images/I/61M025WzQdL._AC_UL320_.jpg",
            "nameItem": "Samsung LH32BETBLGGXZD - Smart TV LED 32'' HD",
            "sales": "5.493 classificações",
            "stars": "4,7 de 5 estrelas",
            "salePrice": "R$ 1.469,00",
            "originalPrice": ""
        },
        {
            "productId": "https://www.amazon.com.br/Samsung-Smart-Crystal-UHD-CU7700/dp/B0C152N6PJ/ref=sr_1_50?dib=eyJ2IjoiMSJ9.nhGw25Kksm3MaOq7zWgx69qZOpRf-rLrejaUhkgSaZQGBys43XOdhkKeVZ-eXeKxiXe_RC1URRRjP2UUPdy5h-yEyB2da68qM5DHRzm5dRYAC2F-Lvrl-CBJLe8zZZrM_8a1s-gUiIzfDGQibbFDnhCFPVw48ZCKcJYOmw81Rki8T0OtpnHBi2J4rbFCCracxs_Ym0nSmIfwqtX3CIp7wU4NXT7DDQpAyVq0C5TaRNnbQ79BaAxE7sWmEPrmmus0z257043XBKjmusUsDOrag3cJ512vNreukQUtpekKz_Q.W7dIdvJNI5JFGq7HpWKk7NMQQ0vTPIKJCLSwjPUtkJI&dib_tag=se&keywords=televis%C3%A3o&qid=1716412624&sr=8-50&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147",
            "image": "https://m.media-amazon.com/images/I/71vk2qFDSPL._AC_UL320_.jpg",
            "nameItem": "Samsung Smart TV Crystal 65\" 4K UHD CU7700 - Alexa built in, Samsung Gaming Hub",
            "sales": "311 classificações",
            "stars": "4,7 de 5 estrelas",
            "salePrice": "R$ 3.599,00",
            "originalPrice": "R$ 4.657,95"
        },
        {
            "productId": "https://www.amazon.com.br/Smart-Aiwa-Android-Ultrafina-AWS-TV-32-BL-02/dp/B0BFG4LBW4/ref=sr_1_51?dib=eyJ2IjoiMSJ9.nhGw25Kksm3MaOq7zWgx69qZOpRf-rLrejaUhkgSaZQGBys43XOdhkKeVZ-eXeKxiXe_RC1URRRjP2UUPdy5h-yEyB2da68qM5DHRzm5dRYAC2F-Lvrl-CBJLe8zZZrM_8a1s-gUiIzfDGQibbFDnhCFPVw48ZCKcJYOmw81Rki8T0OtpnHBi2J4rbFCCracxs_Ym0nSmIfwqtX3CIp7wU4NXT7DDQpAyVq0C5TaRNnbQ79BaAxE7sWmEPrmmus0z257043XBKjmusUsDOrag3cJ512vNreukQUtpekKz_Q.W7dIdvJNI5JFGq7HpWKk7NMQQ0vTPIKJCLSwjPUtkJI&dib_tag=se&keywords=televis%C3%A3o&qid=1716412624&sr=8-51&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147",
            "image": "https://m.media-amazon.com/images/I/71dubOlKt2L._AC_UL320_.jpg",
            "nameItem": "Smart TV Aiwa 32”, Android, HD, Borda Ultrafina, HDR10, Dolby Áudio - AWS-TV-32-BL-02-A",
            "sales": "631 classificações",
            "stars": "4,5 de 5 estrelas",
            "salePrice": "R$ 989,99",
            "originalPrice": ""
        },
        {
            "productId": "https://www.amazon.com.br/TV-LED-32-Philco-PTV32A21DFH/dp/B0BCCDNJSV/ref=sr_1_52?dib=eyJ2IjoiMSJ9.nhGw25Kksm3MaOq7zWgx69qZOpRf-rLrejaUhkgSaZQGBys43XOdhkKeVZ-eXeKxiXe_RC1URRRjP2UUPdy5h-yEyB2da68qM5DHRzm5dRYAC2F-Lvrl-CBJLe8zZZrM_8a1s-gUiIzfDGQibbFDnhCFPVw48ZCKcJYOmw81Rki8T0OtpnHBi2J4rbFCCracxs_Ym0nSmIfwqtX3CIp7wU4NXT7DDQpAyVq0C5TaRNnbQ79BaAxE7sWmEPrmmus0z257043XBKjmusUsDOrag3cJ512vNreukQUtpekKz_Q.W7dIdvJNI5JFGq7HpWKk7NMQQ0vTPIKJCLSwjPUtkJI&dib_tag=se&keywords=televis%C3%A3o&qid=1716412624&sr=8-52&ufe=app_do%3Aamzn1.fos.a492fd4a-f54d-4e8d-8c31-35e0a04ce61e",
            "image": "https://m.media-amazon.com/images/I/A1mLP3sTlTL._AC_UL320_.jpg",
            "nameItem": "TV LED 32\", HD, PTV32A21DFH, Philco, Recepção digital, Função Futebol - Não é SMART TV",
            "sales": "278 classificações",
            "stars": "4,4 de 5 estrelas",
            "salePrice": "R$ 838,00",
            "originalPrice": "R$ 899,90"
        },
        {
            "productId": "https://www.amazon.com.br/Philips-Ambilight-65PUG7908-79-Bluetooth/dp/B0CCJYJLPP/ref=sr_1_53?dib=eyJ2IjoiMSJ9.nhGw25Kksm3MaOq7zWgx69qZOpRf-rLrejaUhkgSaZQGBys43XOdhkKeVZ-eXeKxiXe_RC1URRRjP2UUPdy5h-yEyB2da68qM5DHRzm5dRYAC2F-Lvrl-CBJLe8zZZrM_8a1s-gUiIzfDGQibbFDnhCFPVw48ZCKcJYOmw81Rki8T0OtpnHBi2J4rbFCCracxs_Ym0nSmIfwqtX3CIp7wU4NXT7DDQpAyVq0C5TaRNnbQ79BaAxE7sWmEPrmmus0z257043XBKjmusUsDOrag3cJ512vNreukQUtpekKz_Q.W7dIdvJNI5JFGq7HpWKk7NMQQ0vTPIKJCLSwjPUtkJI&dib_tag=se&keywords=televis%C3%A3o&qid=1716412624&sr=8-53&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147",
            "image": "https://m.media-amazon.com/images/I/51vl3zpT-1L._AC_UL320_.jpg",
            "nameItem": "Smart TV Philips Ambilight 65\" 4K 65PUG7908/79, Google TV, Comando de Voz, Dolby Vision/Atmos, VRR/ALLM, Bluetooth",
            "sales": "160 classificações",
            "stars": "4,4 de 5 estrelas",
            "salePrice": "R$ 3.089,00",
            "originalPrice": "R$ 3.299,00"
        },
        {
            "productId": "https://www.amazon.com.br/Samsung-Crystal-85CU8000-Dynamic-AirSlim/dp/B0CB6SFV64/ref=sr_1_54?dib=eyJ2IjoiMSJ9.nhGw25Kksm3MaOq7zWgx69qZOpRf-rLrejaUhkgSaZQGBys43XOdhkKeVZ-eXeKxiXe_RC1URRRjP2UUPdy5h-yEyB2da68qM5DHRzm5dRYAC2F-Lvrl-CBJLe8zZZrM_8a1s-gUiIzfDGQibbFDnhCFPVw48ZCKcJYOmw81Rki8T0OtpnHBi2J4rbFCCracxs_Ym0nSmIfwqtX3CIp7wU4NXT7DDQpAyVq0C5TaRNnbQ79BaAxE7sWmEPrmmus0z257043XBKjmusUsDOrag3cJ512vNreukQUtpekKz_Q.W7dIdvJNI5JFGq7HpWKk7NMQQ0vTPIKJCLSwjPUtkJI&dib_tag=se&keywords=televis%C3%A3o&qid=1716412624&sr=8-54&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147",
            "image": "https://m.media-amazon.com/images/I/51EsdiEsqdL._AC_UL320_.jpg",
            "nameItem": "Samsung Smart TV 85\" Crystal UHD 4K 85CU8000, Painel Dynamic Crystal Color, Samsung Gaming Hub, Design AirSlim, Tela sem limites, Alexa built in, Controle Remoto Único",
            "sales": "",
            "stars": "",
            "salePrice": "R$ 7.799,00",
            "originalPrice": ""
        },
        {
            "productId": "https://www.amazon.com.br/Smart-Philco-Android-PTV39E3AASSB-Bivolt/dp/B0CN7CML9F/ref=sr_1_55?dib=eyJ2IjoiMSJ9.nhGw25Kksm3MaOq7zWgx69qZOpRf-rLrejaUhkgSaZQGBys43XOdhkKeVZ-eXeKxiXe_RC1URRRjP2UUPdy5h-yEyB2da68qM5DHRzm5dRYAC2F-Lvrl-CBJLe8zZZrM_8a1s-gUiIzfDGQibbFDnhCFPVw48ZCKcJYOmw81Rki8T0OtpnHBi2J4rbFCCracxs_Ym0nSmIfwqtX3CIp7wU4NXT7DDQpAyVq0C5TaRNnbQ79BaAxE7sWmEPrmmus0z257043XBKjmusUsDOrag3cJ512vNreukQUtpekKz_Q.W7dIdvJNI5JFGq7HpWKk7NMQQ0vTPIKJCLSwjPUtkJI&dib_tag=se&keywords=televis%C3%A3o&qid=1716412624&sr=8-55&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147",
            "image": "https://m.media-amazon.com/images/I/611yaL7tVyL._AC_UL320_.jpg",
            "nameItem": "Smart TV 39” Philco Android PTV39E3AASSB Dolby Audio Bivolt",
            "sales": "18 classificações",
            "stars": "3,9 de 5 estrelas",
            "salePrice": "R$ 1.299,90",
            "originalPrice": ""
        },
        {
            "productId": "https://www.amazon.com.br/Samsung-Smart-TV-LED-LS32BETBL/dp/B0CV21GFP4/ref=sr_1_56?dib=eyJ2IjoiMSJ9.nhGw25Kksm3MaOq7zWgx69qZOpRf-rLrejaUhkgSaZQGBys43XOdhkKeVZ-eXeKxiXe_RC1URRRjP2UUPdy5h-yEyB2da68qM5DHRzm5dRYAC2F-Lvrl-CBJLe8zZZrM_8a1s-gUiIzfDGQibbFDnhCFPVw48ZCKcJYOmw81Rki8T0OtpnHBi2J4rbFCCracxs_Ym0nSmIfwqtX3CIp7wU4NXT7DDQpAyVq0C5TaRNnbQ79BaAxE7sWmEPrmmus0z257043XBKjmusUsDOrag3cJ512vNreukQUtpekKz_Q.W7dIdvJNI5JFGq7HpWKk7NMQQ0vTPIKJCLSwjPUtkJI&dib_tag=se&keywords=televis%C3%A3o&qid=1716412624&sr=8-56&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147",
            "image": "https://m.media-amazon.com/images/I/916Ts4fDi5L._AC_UL320_.jpg",
            "nameItem": "Samsung Smart TV LED 32\" HD LS32BETBL - Wifi, HDMI, USB",
            "sales": "53 classificações",
            "stars": "4,5 de 5 estrelas",
            "salePrice": "R$ 1.099,00",
            "originalPrice": ""
        },
        {
            "productId": "https://www.amazon.com.br/sspa/click?ie=UTF8&spc=MToxODA4MDEwNzMxNjYzNDg5OjE3MTY0MTI2MjQ6c3BfYnRmOjMwMDE2NzQwNDg5MzIwMjo6MDo6&url=%2FVANAUX-subwoofer-coaxial-digital-theater%2Fdp%2FB0CNXF3PY6%2Fref%3Dsr_1_57_sspa%3Fdib%3DeyJ2IjoiMSJ9.nhGw25Kksm3MaOq7zWgx69qZOpRf-rLrejaUhkgSaZQGBys43XOdhkKeVZ-eXeKxiXe_RC1URRRjP2UUPdy5h-yEyB2da68qM5DHRzm5dRYAC2F-Lvrl-CBJLe8zZZrM_8a1s-gUiIzfDGQibbFDnhCFPVw48ZCKcJYOmw81Rki8T0OtpnHBi2J4rbFCCracxs_Ym0nSmIfwqtX3CIp7wU4NXT7DDQpAyVq0C5TaRNnbQ79BaAxE7sWmEPrmmus0z257043XBKjmusUsDOrag3cJ512vNreukQUtpekKz_Q.W7dIdvJNI5JFGq7HpWKk7NMQQ0vTPIKJCLSwjPUtkJI%26dib_tag%3Dse%26keywords%3Dtelevis%25C3%25A3o%26qid%3D1716412624%26sr%3D8-57-spons%26ufe%3Dapp_do%253Aamzn1.fos.6121c6c4-c969-43ae-92f7-cc248fc6181d%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9idGY%26psc%3D1",
            "image": "https://m.media-amazon.com/images/I/71IN6WaIeOL._AC_UL320_.jpg",
            "nameItem": "VANAUX Cabo de subwoofer RCA de 90 graus, cabo de áudio coaxial digital macho para macho para home theater, barra de som, TV, PS4, Xbox e mais, preto (90 graus para reto, 3 m)",
            "sales": "347 classificações",
            "stars": "4,4 de 5 estrelas",
            "salePrice": "R$ 188,33",
            "originalPrice": ""
        },
        {
            "productId": "https://www.amazon.com.br/sspa/click?ie=UTF8&spc=MToxODA4MDEwNzMxNjYzNDg5OjE3MTY0MTI2MjQ6c3BfYnRmOjMwMDE1OTU0ODEyNzUwMjo6MDo6&url=%2FControle-universal-televisores-Buy-Cell%2Fdp%2FB0CZHP2CLY%2Fref%3Dsr_1_58_sspa%3Fdib%3DeyJ2IjoiMSJ9.nhGw25Kksm3MaOq7zWgx69qZOpRf-rLrejaUhkgSaZQGBys43XOdhkKeVZ-eXeKxiXe_RC1URRRjP2UUPdy5h-yEyB2da68qM5DHRzm5dRYAC2F-Lvrl-CBJLe8zZZrM_8a1s-gUiIzfDGQibbFDnhCFPVw48ZCKcJYOmw81Rki8T0OtpnHBi2J4rbFCCracxs_Ym0nSmIfwqtX3CIp7wU4NXT7DDQpAyVq0C5TaRNnbQ79BaAxE7sWmEPrmmus0z257043XBKjmusUsDOrag3cJ512vNreukQUtpekKz_Q.W7dIdvJNI5JFGq7HpWKk7NMQQ0vTPIKJCLSwjPUtkJI%26dib_tag%3Dse%26keywords%3Dtelevis%25C3%25A3o%26qid%3D1716412624%26sr%3D8-58-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9idGY%26psc%3D1",
            "image": "https://m.media-amazon.com/images/I/51u8cCxbNRL._AC_UL320_.jpg",
            "nameItem": "Controle remoto universal para todos os televisores Samsung LCD LED HDTV 3D Smart TV Samsung (Buy Cell)",
            "sales": "6 classificações",
            "stars": "4,0 de 5 estrelas",
            "salePrice": "R$ 39,99",
            "originalPrice": "R$ 43,99"
        },
        {
            "productId": "https://www.amazon.com.br/sspa/click?ie=UTF8&spc=MToxODA4MDEwNzMxNjYzNDg5OjE3MTY0MTI2MjQ6c3BfYnRmOjMwMDE3MjE3MTcyMTIwMjo6MDo6&url=%2Fcontrole-dom%25C3%25A9stico-protetora-acess%25C3%25B3rios-televis%25C3%25A3o%2Fdp%2FB0B52Y3MNF%2Fref%3Dsr_1_59_sspa%3Fdib%3DeyJ2IjoiMSJ9.nhGw25Kksm3MaOq7zWgx69qZOpRf-rLrejaUhkgSaZQGBys43XOdhkKeVZ-eXeKxiXe_RC1URRRjP2UUPdy5h-yEyB2da68qM5DHRzm5dRYAC2F-Lvrl-CBJLe8zZZrM_8a1s-gUiIzfDGQibbFDnhCFPVw48ZCKcJYOmw81Rki8T0OtpnHBi2J4rbFCCracxs_Ym0nSmIfwqtX3CIp7wU4NXT7DDQpAyVq0C5TaRNnbQ79BaAxE7sWmEPrmmus0z257043XBKjmusUsDOrag3cJ512vNreukQUtpekKz_Q.W7dIdvJNI5JFGq7HpWKk7NMQQ0vTPIKJCLSwjPUtkJI%26dib_tag%3Dse%26keywords%3Dtelevis%25C3%25A3o%26qid%3D1716412624%26sr%3D8-59-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9idGY%26psc%3D1",
            "image": "https://m.media-amazon.com/images/I/51igIPaoWYL._AC_UL320_.jpg",
            "nameItem": "Capa de controle remoto doméstico para Fire TV Stick Estojo protetor de silicone com cordão Acessórios de televisão de 3ª geração com alça de mão (5#)",
            "sales": "46 classificações",
            "stars": "4,6 de 5 estrelas",
            "salePrice": "R$ 52,01",
            "originalPrice": ""
        },
        {
            "productId": "https://www.amazon.com.br/sspa/click?ie=UTF8&spc=MToxODA4MDEwNzMxNjYzNDg5OjE3MTY0MTI2MjQ6c3BfYnRmOjMwMDExMjEzMDQ3MzgwMjo6MDo6&url=%2FSuporte-Polegadas-Televis%25C3%25A3o-PREMIUM-ONYK%2Fdp%2FB0CMJ5PWWY%2Fref%3Dsr_1_60_sspa%3Fdib%3DeyJ2IjoiMSJ9.nhGw25Kksm3MaOq7zWgx69qZOpRf-rLrejaUhkgSaZQGBys43XOdhkKeVZ-eXeKxiXe_RC1URRRjP2UUPdy5h-yEyB2da68qM5DHRzm5dRYAC2F-Lvrl-CBJLe8zZZrM_8a1s-gUiIzfDGQibbFDnhCFPVw48ZCKcJYOmw81Rki8T0OtpnHBi2J4rbFCCracxs_Ym0nSmIfwqtX3CIp7wU4NXT7DDQpAyVq0C5TaRNnbQ79BaAxE7sWmEPrmmus0z257043XBKjmusUsDOrag3cJ512vNreukQUtpekKz_Q.W7dIdvJNI5JFGq7HpWKk7NMQQ0vTPIKJCLSwjPUtkJI%26dib_tag%3Dse%26keywords%3Dtelevis%25C3%25A3o%26qid%3D1716412624%26sr%3D8-60-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9idGY%26psc%3D1",
            "image": "https://m.media-amazon.com/images/I/61s9J2ztEPL._AC_UL320_.jpg",
            "nameItem": "Suporte Para Tv Fixo De 13\" a 70\" Polegadas Até 60 Kg Para Televisão Parede/Painel Led LCD De Parede Preto PREMIUM ONYK",
            "sales": "4 classificações",
            "stars": "4,5 de 5 estrelas",
            "salePrice": "R$ 39,90",
            "originalPrice": ""
        }
    ]

    const dataToRender = fetchResults.length > 0 ? fetchResults : data
    return (
        <div className='bg-[#131313] min-h-screen flex flex-col'>
            <Header searchItem={true} botName="amazon" placeHolder="Televisão" />
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

export default Amazon