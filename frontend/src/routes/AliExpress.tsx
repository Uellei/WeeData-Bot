import React from "react"
import { Header } from "../components/Header/Header"
import { useFetchContext } from "../contexts/FetchContext"
import ProductCarousel from "../components/Carousel/ProductCarousel"



const AliExpress = () => {
    const { fetchResults, isLoading } = useFetchContext()

    const headers = {
        "accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
        "accept-language": "en-US,en;q=0.9,pt;q=0.8",
        "sec-ch-ua": "\"Chromium\";v=\"124\", \"Google Chrome\";v=\"124\", \"Not-A.Brand\";v=\"99\"",
        "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
    }

    const data = [
        {
            "productId": "1005006289093232",
            "image": "//ae01.alicdn.com/kf/S07988f3b83af4f77bcc48cc09289d0220/X15-Wholesale-Tws-Earphone-Bluetooth-Wireless-Without-Box-V5-1-in-Ear-Headphones-Blutooth-Hearing-Aids.jpg_350x350xz.jpg",
            "nameItem": "Sem Fio Bluetooth Na Orelha Fones De Ouvido, Fone De Ouvido, Aparelhos Auditivos, Esporte Gamer Headset, Telefone, TWS, Sem Caixa, V5.1, X15, Atacado",
            "sales": "10,000+  vendido(s)",
            "stars": "4.3",
            "salePrice": "R$ 4,99",
            "originalPrice": "R$ 52,47"
        },
        {
            "productId": "1005006377930020",
            "image": "//ae01.alicdn.com/kf/S4cb0257449c84b23a9ffa3f1df07aedcq/New-X15-TWS-Wireless-earbuds-Gaming-Earbuds-Bluetooth-Gaming-Earphone-With-Mic-Bass-Audio-Sound-Stereo.jpg_350x350xz.jpg",
            "nameItem": "X15 TWS Fones De Ouvido Sem Fio Para Jogos, Fone De Ouvido Bluetooth com Microfone, Baixo Som De Áudio, Música Estéreo, Hifi Headphone, Novo",
            "sales": "236  vendido(s)",
            "stars": "4.4",
            "salePrice": "R$ 17,17",
            "originalPrice": "R$ 17,17"
        },
        {
            "productId": "1005006538020939",
            "image": "//ae01.alicdn.com/kf/S753f752695104471a342c5a2a72162490/X15-TWS-Wireless-Bluetooth-Headset-LED-Display-Gamer-Earbuds-with-Mic-Wireless-Headphones-Noise-Cancelling-Bluetooth.jpg_350x350xz.jpg",
            "nameItem": "X15 TWS Sem Fio Bluetooth Headset, Display LED Gamer Earbuds com Microfone, Auscultadores com Cancelamento de Ruído",
            "sales": "10,000+  vendido(s)",
            "stars": "4.4",
            "salePrice": "R$ 15,99",
            "originalPrice": "R$ 74,38"
        },
        {
            "productId": "1005006868268319",
            "image": "//ae01.alicdn.com/kf/S2c68fc34932148a6a4258ae9c0f37374f/New-P9-Pro-Max-Air-Wireless-Bluetooth-Headphones-Noise-Cancelling-Mic-Pods-Over-Ear-Sports-Gaming.jpg_350x350xz.jpg",
            "nameItem": "P9 Pro Max Air Sem Fio Bluetooth Auscultadores, Cancelamento de Ruído, Mic Pods, Sports Gaming Headset para Apple, Novo",
            "sales": "600+  vendido(s)",
            "stars": "4.8",
            "salePrice": "R$ 82,49",
            "originalPrice": ""
        },
        {
            "productId": "1005006144917000",
            "image": "//ae01.alicdn.com/kf/S13854ad5914146f3a38e57e7dea9b7c2K/G11-Bluetooth-Headphones-Gaming-Wireless-Bluetooth-Headset-Earphone-Bluetooth-Earbuds-HIFI-With-Mic-Charging-Box-Free.jpg_350x350xz.jpg",
            "nameItem": "G11 Bluetooth Gaming Headphones com microfone e caixa de carregamento, fone de ouvido sem fio, fone de ouvido, HIFI, frete grátis",
            "sales": "4,000+  vendido(s)",
            "stars": "4.4",
            "salePrice": "R$ 4,99",
            "originalPrice": "R$ 43,00"
        },
        {
            "productId": "1005003205163384",
            "image": "//ae01.alicdn.com/kf/Hdeef93813ec14c77a2d1613efec43f387/KZ-EDX-Pro-Earphones-Dynamic-In-Ear-Monitor-HiFi-Wired-Headphones-Bass-Stereo-Game-Music-Earplugs.png_350x350xz.png",
            "nameItem": "KZ-EDX Pro Fones De Ouvido Com Fio, Dinâmico No Monitor De Ouvido, Fones De Ouvido HiFi, Baixo Estéreo, Tampões De Música Do Jogo, Noice Cancelando Auricular",
            "sales": "10,000+  vendido(s)",
            "stars": "4.8",
            "salePrice": "R$ 11,96",
            "originalPrice": "R$ 33,53"
        },
        {
            "productId": "1005006660776200",
            "image": "//ae01.alicdn.com/kf/S7ba6846931c24bfdafc598c76b4f2f538/KZ-EDX-PRO-X-IEM-Earphones-Dynamic-Drive-HiFi-Deep-Bass-Sound-Earbud-Sport-Music-Noise.jpg_350x350xz.jpg",
            "nameItem": "KZ-EDX PRO X Auriculares IEM, Auriculares IEM, Dynamic Drive, HiFi, Graves Profundos, Cancelador de Ruído, Auriculares com Cabo Destacável, Sport Música",
            "sales": "4,000+  vendido(s)",
            "stars": "4.8",
            "salePrice": "R$ 16,74",
            "originalPrice": "R$ 36,74"
        },
        {
            "productId": "1005006691983498",
            "image": "//ae01.alicdn.com/kf/S43b3aefb6ae0410fa869aada55c7d21df/Original-Apple-Airpods-Pro-3-Wireless-Bluetooth-Earbuds-Active-Noise-Cancellation-with-Charging-Case-for-IPhone.jpg_350x350xz.jpg",
            "nameItem": "Apple-Earbuds Bluetooth sem fio originais Airpods Pro 3 com estojo de carregamento, cancelamento de ruído ativo, iPhone, iPad",
            "sales": "500+  vendido(s)",
            "stars": "4.9",
            "salePrice": "R$ 153,20",
            "originalPrice": ""
        },
        {
            "productId": "1005004990782182",
            "image": "//ae01.alicdn.com/kf/S9fc83d98d83a440e8cc3190228adf998T/Original-Lenovo-GM2-Pro-5-3-Earphone-Bluetooth-Wireless-Earbuds-Low-Latency-Headphones-HD-Call-Dual.jpg_350x350xz.jpg",
            "nameItem": "Lenovo Fone de Ouvido GM2 Pro sem Fio, Bluetooth 5.3, Chamadas em Alta Definição, Headset com Microfone para Jogos, Modo Duplo, Baixa Latência, Original",
            "sales": "10,000+  vendido(s)",
            "stars": "4.8",
            "salePrice": "R$ 23,77",
            "originalPrice": "R$ 99,98"
        },
        {
            "productId": "1005006599154606",
            "image": "//ae01.alicdn.com/kf/S7a57b034d8ce438c9ed470f1902522a1K/Original-QKZ-AK2-3-5mm-Wired-Earphones-Dynamic-HIFI-Bass-In-ear-Earbuds-Music-Headphone-Sport.jpg_350x350xz.jpg",
            "nameItem": "Auriculares com microfone, dinâmicos, HIFI, graves, intra-auriculares, música, auscultadores, desportivos, com cancelamento de ruído, auriculares, 3,5mm, originais",
            "sales": "43  vendido(s)",
            "stars": "4.5",
            "salePrice": "R$ 4,99",
            "originalPrice": "R$ 32,72"
        },
        {
            "productId": "1005005751294204",
            "image": "//ae01.alicdn.com/kf/S1dc68a6f76504389ac6c0478ea79b691G/X15-Wireless-Gaming-bluetooth-Headset-TWS-5-0-Stereo-Earbuds-Low-Latency-Earphone-Bluetooth-Headphone-With.jpg_350x350xz.jpg",
            "nameItem": "X15 Fone De Ouvido Bluetooth Sem Fio, Fones De Ouvido Estéreo TWS 5.0, Fone De Ouvido De Baixa Latência, Fone De Ouvido Com Microfone, iPhone, Xiaomi",
            "sales": "4,000+  vendido(s)",
            "stars": "4.4",
            "salePrice": "R$ 4,99",
            "originalPrice": "R$ 42,47"
        },
        {
            "productId": "1005006486661972",
            "image": "//ae01.alicdn.com/kf/Sde8a5b83837f428f8db4deb93a88c7c5d/NEW-P9-PRO-MAX-Air-Wireless-Headphones-Noise-Cancelling-Bluetooth-Earphones-Mic-Pods-Over-Ear-Gaming.jpg_350x350xz.jpg",
            "nameItem": "P9 Pro MAX Air Headphones sem fio, cancelamento de ruído, fones de ouvido Bluetooth, Mic Pods, Over Ear Gaming Sports Headset para Apple, novo",
            "sales": "381  vendido(s)",
            "stars": "4.9",
            "salePrice": "R$ 79,96",
            "originalPrice": ""
        },
        {
            "productId": "1005004643966631",
            "image": "//ae01.alicdn.com/kf/S2b06f6986a0e4dcd8d1a20be640da9a4t/Original-Lenovo-GM2-Pro-5-3-Earphone-Bluetooth-Wireless-Earbuds-Low-Latency-Headphones-HD-Call-Dual.jpg_350x350xz.jpg",
            "nameItem": "Lenovo-GM2 Pro 5.3 Fones de ouvido sem fio Bluetooth com microfone, fone de ouvido original, baixa latência auscultadores, HD Call, modo duplo, Gaming Headset",
            "sales": "3,000+  vendido(s)",
            "stars": "4.7",
            "salePrice": "R$ 58,66",
            "originalPrice": ""
        },
        {
            "productId": "1005006454165155",
            "image": "//ae01.alicdn.com/kf/S32cf4889fd7246adb10894215e3ea1bbd/TWS-E6S-Fone-Bluetooth-Earphones-Wireless-Bluetooth-Headset-Noise-Cancelling-Headset-with-Mic-Headphones-for-Xiaomi.jpg_350x350xz.jpg",
            "nameItem": "TWS E6S Fone Fones de ouvido Bluetooth com microfone, fone de ouvido sem fio, cancelamento de ruído, Xiaomi, Huawei, Oppo",
            "sales": "4,000+  vendido(s)",
            "stars": "4.4",
            "salePrice": "R$ 5,33",
            "originalPrice": "R$ 37,48"
        },
        {
            "productId": "1005005120536936",
            "image": "//ae01.alicdn.com/kf/Sc9383266a0614985bfb791073254ac2ec/Macaron-Universal-3-5mm-Stereo-Earphones-Sports-Music-Earplugs-Wired-Microphone-for-Xiaomi.jpg_350x350xz.jpg",
            "nameItem": "Macaron Universal 3.5mm Stereo Earphones Sports Music Earplugs Microfone com Fio para Xiaomi",
            "sales": "229  vendido(s)",
            "stars": "4.7",
            "salePrice": "R$ 4,99",
            "originalPrice": "R$ 17,39"
        },
        {
            "productId": "1005005067069001",
            "image": "//ae01.alicdn.com/kf/S70dabe77ae374250a07f373ba72fcb232/Original-Lenovo-lp40-Bluetooth-Earphone-5-0-Immersive-Sound-HIFI-TWS-With-Microphone-Touch-Control-For.jpg_350x350xz.jpg",
            "nameItem": "Original lenovo lp40 bluetooth fone de ouvido 5.0 som imersivo alta fidelidade tws com microfone controle toque para longo tempo de espera movimento",
            "sales": "5,000+  vendido(s)",
            "stars": "4.4",
            "salePrice": "R$ 14,64",
            "originalPrice": "R$ 74,91"
        },
        {
            "productId": "1005005058178512",
            "image": "//ae01.alicdn.com/kf/Sc27891d2ad9b4ed8ad7b6fa7fd903b4an/Macaron-Universal-3-5mm-Stereo-Earphones-Sports-Music-Earplugs-Wired-Microphone-for-Xiaomi.jpg_350x350xz.jpg",
            "nameItem": "Macaron Universal 3.5mm Stereo Earphones Sports Music Earplugs Microfone com Fio para Xiaomi",
            "sales": "242  vendido(s)",
            "stars": "4.5",
            "salePrice": "R$ 4,99",
            "originalPrice": "R$ 14,41"
        },
        {
            "productId": "1005006691409729",
            "image": "//ae01.alicdn.com/kf/S400dcbf76987432c88d2917fdbbc3725M/E6S-TWS-Wireless-Bluetooth-Headset-Waterproof-Noise-Cancelling-LED-Earbuds-with-Mic-Wireless-Headphones-Bluetooth-Earphones.jpg_350x350xz.jpg",
            "nameItem": "E6S TWS Wireless Bluetooth Headset, cancelamento de ruído, LED Earbuds com microfone, auscultadores à prova d'água",
            "sales": "94  vendido(s)",
            "stars": "4.8",
            "salePrice": "R$ 4,99",
            "originalPrice": "R$ 14,19"
        },
        {
            "productId": "1005006391394980",
            "image": "//ae01.alicdn.com/kf/Sf78ad3b484814740b55cfd83e3bc6f4cJ/Y30-TWS-Bluetooth-Earphones-5-0-Wireless-Stereo-Earbuds-In-ear-Noise-Reduction-Waterproof-Headphones-With.jpg_350x350xz.jpg",
            "nameItem": "Y30 TWS Bluetooth 5.0 Fones de ouvido estéreo sem fio, redução de ruído intra-auricular, fones de ouvido à prova d'água com estojo de carregamento, PK Y50",
            "sales": "2  vendido(s)",
            "stars": "",
            "salePrice": "R$ 18,18",
            "originalPrice": "R$ 39,32"
        },
        {
            "productId": "1005006090313170",
            "image": "//ae01.alicdn.com/kf/S938ea8d3d98d47ad984de2df920c2da1g/KZ-ZS10-PRO-X-HIFI-Bass-Metal-Hybrid-In-ear-Earphone-Sport-Noise-Cancelling-Headset-Earbuds.jpg_350x350xz.jpg",
            "nameItem": "KZ-ZS10 PRO X Fone de ouvido intra-auricular híbrido HiFi Bass Metal, Cancelamento de ruído, ZSN PRO, AS16 PRO, AS12, ZSX, ZEX",
            "sales": "5,000+  vendido(s)",
            "stars": "4.9",
            "salePrice": "R$ 130,18",
            "originalPrice": "R$ 346,82"
        },
        {
            "productId": "1005006082300046",
            "image": "//ae01.alicdn.com/kf/Sf927d52e1ad94c84ae1ce95c48bc38bb7/TOPK-F20-3-5mm-In-ear-Headphone-HiFi-Sound-Quality-with-Mic-Type-C-Jack-Earphone.jpg_350x350xz.jpg",
            "nameItem": "TOPK-F20 In-Ear Headphone, In-Ear Headset, HiFi Sound Qualidade com Mic, Tipo C Jack Fone De Ouvido, Alta Qualidade Esporte Headset, Original",
            "sales": "166  vendido(s)",
            "stars": "4.7",
            "salePrice": "R$ 4,99",
            "originalPrice": "R$ 21,67"
        },
        {
            "productId": "1005006132794345",
            "image": "//ae01.alicdn.com/kf/S2d1c8a97e47f4700a19e7eaba6263f54a/3-5mm-Earphones-Portable-In-Ear-High-Definition-InEar-Microphone-Noise-Canceling-Deep-Bass-Earbuds-For.jpg_350x350xz.jpg",
            "nameItem": "Fones de ouvido portáteis de alta definição, microfone InEar, cancelamento de ruído, graves profundos, fones de ouvido para celulares, 3,5mm",
            "sales": "58  vendido(s)",
            "stars": "4.8",
            "salePrice": "R$ 4,99",
            "originalPrice": "R$ 18,39"
        },
        {
            "productId": "1005006666521622",
            "image": "//ae01.alicdn.com/kf/Sc8e3bb0e86c04c80b81d6fb5d76a20fco/9D-HIFI-Heavy-Bass-In-Ear-Earphone-3-5MM-AUX-Type-C-Digital-Headphone-Stereo-Wired.jpg_350x350xz.jpg",
            "nameItem": "Hifi Heavy Bass In Ear Earphone, Fone de ouvido digital, 9D, 3,5mm, AUX, tipo C, estéreo, fone de ouvido com microfone, Samsung, Android",
            "sales": "1,000+  vendido(s)",
            "stars": "4.7",
            "salePrice": "R$ 12,99",
            "originalPrice": "R$ 55,20"
        },
        {
            "productId": "1005005818503084",
            "image": "//ae01.alicdn.com/kf/Sb70cb953b4974147897bd72aaf8c4c70M/QCY-H3-ANC-Wireless-Headphones-Bluetooth-5-4-Hi-Res-Audio-Over-Ear-Headset-43dB-Hybrid.jpg_350x350xz.jpg",
            "nameItem": "QCY-H3 ANC Auscultadores sem fios, Bluetooth 5.4, Hi-Res Audio, Over Ear Headset, híbrido Active Cancelamento de Ruído, Auscultadores, 60H, 43dB",
            "sales": "10,000+  vendido(s)",
            "stars": "4.8",
            "salePrice": "R$ 187,01",
            "originalPrice": ""
        },
        {
            "productId": "1005004741056311",
            "image": "//ae01.alicdn.com/kf/S9212eb7c87d34977a4e3a35e5d6cde1eb/Wired-Headphones-With-Microphone-Hands-free-Calls-Subwoofer-Music-Earplugs-Ergonomic-Comfortable-Earphones-Auriculares.jpg_350x350xz.jpg",
            "nameItem": "Fones de ouvido com fio com microfone chamadas mãos-livres subwoofer música tampões de ouvido ergonômico confortável auriculares fone",
            "sales": "53  vendido(s)",
            "stars": "3.8",
            "salePrice": "R$ 4,99",
            "originalPrice": "R$ 6,77"
        },
        {
            "productId": "1005006082179874",
            "image": "//ae01.alicdn.com/kf/Sb02467de96dc4b55be684afc2f927d43b/Pro6-Wireless-Bluetooth-Headphones-Tws-Earphones-Mini-Heaset-with-Charging-Case-Waterproof-Earbuds-for-All-Phone.jpg_350x350xz.jpg",
            "nameItem": "Auscultadores Bluetooth Sem Fio Pro6, Fones De Ouvido TWS, Mini Headset Com Estojo De Carregamento, Fones De Ouvido Impermeável Para Todos Os Telefones, Huawei, iPhone",
            "sales": "122  vendido(s)",
            "stars": "4.6",
            "salePrice": "R$ 4,99",
            "originalPrice": "R$ 32,40"
        },
        {
            "productId": "1005005681692114",
            "image": "//ae01.alicdn.com/kf/S035ae0ea9a2041299cd0719d1ac91e1d4/Wireless-Bluetooth-compatible-5-3-Ear-Clip-Bone-Conduction-Headphones-Business-Sport-Headset-Gaming-Earphone-With.jpg_350x350xz.jpg",
            "nameItem": "Sem fio Bluetooth-Compatível 5.3 Ear Clip Bone Condução Headphones com microfone, Business Headset, Esporte Gaming Earphone, Xiaomi Headphones",
            "sales": "111  vendido(s)",
            "stars": "4.5",
            "salePrice": "R$ 4,99",
            "originalPrice": "R$ 11,43"
        },
        {
            "productId": "1005006841269911",
            "image": "//ae01.alicdn.com/kf/Sb497855995a748789445def79cbf0b64L/NEW-TWS-5-3-Bluetooth-Earphones-Active-Noise-Cancelling-ANC-Sport-Wireless-Headphones-HiFI-Stereo-Sound.jpg_350x350xz.jpg",
            "nameItem": "TWS 5.3 Active Ruído Cancelando Fones De Ouvido Bluetooth, ANC Esporte Fones De Ouvido Sem Fio, Hi Fi Stereo Sound Headset, Fones De Ouvido com Microfone, Novo",
            "sales": "700+  vendido(s)",
            "stars": "5",
            "salePrice": "R$ 67,12",
            "originalPrice": "R$ 67,12"
        },
        {
            "productId": "1005006880293827",
            "image": "//ae01.alicdn.com/kf/A3eeeb55886164b20a89f1b2d1d46e68ch/P2-High-Definition-Sound-Wire-Earphone-For-Mobile-Phone-and-Computer.jpeg_350x350xz.jpeg",
            "nameItem": "Fone de Ouvido com Fio P2 Som Alta Definição Para Celular e Computador",
            "sales": "1  vendido(s)",
            "stars": "",
            "salePrice": "R$ 4,99",
            "originalPrice": "R$ 14,90"
        },
        {
            "productId": "1005005688242058",
            "image": "//ae01.alicdn.com/kf/S3ec744e0fe1a42428fb65fadcd2e39160/Nomi-Sound-Neckband-Bluetooth-Earphones-Long-Standby-G03-Sports-Running-Magnetic-Absorption-In-ear-Hanging-G05.png_350x350xz.png",
            "nameItem": "Nomi-Long Standby Neckband Bluetooth Earphones, G03, Esportes, Corrida, Absorção Magnética, In-ear, Pendurado, G05",
            "sales": "500+  vendido(s)",
            "stars": "4.3",
            "salePrice": "R$ 4,99",
            "originalPrice": "R$ 22,75"
        },
        {
            "productId": "1005005733183452",
            "image": "//ae01.alicdn.com/kf/Sb2b36b5459894cb48c9e401f20cc04b6X/TWS-Pro60-Wireless-Bluetooth-Headset-with-Mic-Earbuds-Noise-Cancelling-Stereo-Bluetooth-Earphones-Air-Pro-60.jpg_350x350xz.jpg",
            "nameItem": "TWS Air Pro 60 Wireless Bluetooth Headset com Microfone, Auscultadores com Cancelamento de Ruído, Auscultadores Estéreo",
            "sales": "5,000+  vendido(s)",
            "stars": "4.5",
            "salePrice": "R$ 4,99",
            "originalPrice": "R$ 44,80"
        },
        {
            "productId": "1005005058330126",
            "image": "//ae01.alicdn.com/kf/S3fc6b049e9774281be1382fb7506a955H/Wireless-Bluetooth-Headset-Single-Ear-Earplugs-Ultra-Long-Battery-Life-Business-Earphones-Mobile-Phone-Headphones-Earbuds.jpg_350x350xz.jpg",
            "nameItem": "Sem fio Bluetooth Headset Único Ear Earplugs Ultra Long Life Battery Business Earphones Mobile Phone Headphones Earbuds Mono",
            "sales": "600+  vendido(s)",
            "stars": "4.6",
            "salePrice": "R$ 4,99",
            "originalPrice": "R$ 22,97"
        },
        {
            "productId": "1005005406568455",
            "image": "//ae01.alicdn.com/kf/S9b1b932f71cc4a09a1db76790e56c663s/X2-Sports-Earphones-Wired-Headphones-HIFI-Bass-3-5MM-Wired-in-Ear-Headset-Common-Headset-Game.jpg_350x350xz.jpg",
            "nameItem": "X2 Sports Fones De Ouvido Com Fio HIFI Bass 3.5MM Wired in-Ear Headset Comum Headset Jogo Subwoofer Auricular Do Telefone Móvel",
            "sales": "900+  vendido(s)",
            "stars": "4.5",
            "salePrice": "R$ 4,99",
            "originalPrice": "R$ 10,24"
        },
        {
            "productId": "1005006525850577",
            "image": "//ae01.alicdn.com/kf/Sb3cae8d2414e4a57b6fef8ee9f2a53ccb/F9-Wireless-Bluetooth-Headphones-Tws-Waterproof-Earbuds-Earphones-Digital-Display-Heaset-Large-Capacity-Charging-Case.jpg_350x350xz.jpg",
            "nameItem": "Fones De Ouvido Sem Fio Bluetooth, TWS À Prova D' Água Earbuds, Display Digital Fones De Ouvido, Grande Capacidade De Carregamento Caso, F9",
            "sales": "10,000+  vendido(s)",
            "stars": "4.6",
            "salePrice": "R$ 19,99",
            "originalPrice": "R$ 71,02"
        },
        {
            "productId": "1005006398674705",
            "image": "//ae01.alicdn.com/kf/S87368fe349174b718484e9cd8fcc675dv/Lenovo-XT80-Sports-Wireless-Headphones-with-Mics-Button-Control-LED-Power-Display-Hifi-Stereo-Sound.jpg_350x350xz.jpg",
            "nameItem": "Lenovo-XT80 Esportes Fones De Ouvido Sem Fio Com Microfones, Controle De Botão, Display De Potência LED, Som Estéreo Hifi",
            "sales": "4,000+  vendido(s)",
            "stars": "4.8",
            "salePrice": "R$ 36,81",
            "originalPrice": "R$ 122,86"
        },
        {
            "productId": "1005005592950871",
            "image": "//ae01.alicdn.com/kf/Sd7080ccc917e475cb76bd9471406cec9m/Popular-V9-PUBG-Headphones-Business-Bluetooth-Headset-Ear-Mounted-Wireless-CSR-Stereo-with-Voice-Control-Earphones.jpg_350x350xz.jpg",
            "nameItem": "V9 PUBG Headphones Negócios Bluetooth Headset Ear-Montado CSR Sem Fio Estéreo com Controle de Voz Fones De Ouvido",
            "sales": "101  vendido(s)",
            "stars": "4.8",
            "salePrice": "R$ 9,12",
            "originalPrice": "R$ 9,12"
        },
        {
            "productId": "1005006358609461",
            "image": "//ae01.alicdn.com/kf/S57081283a9b648aea32b83a440e8a3c8L/Y50-TWS-Wireless-Headphones-Sport-Earphone-5-0-Bluetooth-Gaming-Headset-Microphone-Phone-Wireless-Earbuds-For.jpg_350x350xz.jpg",
            "nameItem": "Y50 TWS Fones De Ouvido Sem Fio, Esporte Fone De Ouvido, 5.0 Bluetooth, Gaming Headset, Microfone, Telefone Earbuds, Xiaomi, Huawei, LG",
            "sales": "500+  vendido(s)",
            "stars": "4.3",
            "salePrice": "R$ 4,99",
            "originalPrice": "R$ 35,16"
        },
        {
            "productId": "1005006344477921",
            "image": "//ae01.alicdn.com/kf/S6509a96937b94bd8bcb872b8a84d90dcW/Original-T2-Wireless-Bluetooth-Earphone-Transparent-HIFI-Headphones-LED-Power-Digital-Display-Stereo-Sound-Earphones-for.jpg_350x350xz.jpg",
            "nameItem": "Fone de ouvido Bluetooth sem fio para Xiaomi, auscultadores HIFI transparentes, LED Power Digital Display, fones de ouvido estéreo, Original T2",
            "sales": "100k +  vendido(s)",
            "stars": "4.6",
            "salePrice": "R$ 15,99",
            "originalPrice": "R$ 70,59"
        },
        {
            "productId": "1005006602451789",
            "image": "//ae01.alicdn.com/kf/Sbae3f052b1c848eaa96390f00aeb791aV/Baseus-Bass-30-Max-Wireless-Headphones-Bluetooth-5-3-40mm-Bass-Enhancing-Diaphragm-50H-Over-Headset.jpg_350x350xz.jpg",
            "nameItem": "Baseus-Bass 30 Max, fones de ouvido sem fio, Bluetooth 5.3, 40mm, diafragma para melhorar os baixos, fone de ouvido 50H Over, latência ultrabaixa",
            "sales": "700+  vendido(s)",
            "stars": "4.6",
            "salePrice": "R$ 157,01",
            "originalPrice": ""
        },
        {
            "productId": "1005006176489469",
            "image": "//ae01.alicdn.com/kf/Sf502e28fcc574630a947c1181db5e8c4q/Wired-Earphone-In-Ear-Sports-Walking-Video-Portable-Pocket-Travel-Smartphone-Universal-Headphones-with-3-5mm.jpg_350x350xz.jpg",
            "nameItem": "Universal Wired In-Ear Headphones, Esportes, Caminhada, Vídeo, Bolso Portátil, Smartphone, Viagem, 3 5mm Jack",
            "sales": "23  vendido(s)",
            "stars": "5",
            "salePrice": "R$ 8,88",
            "originalPrice": "R$ 8,88"
        },
        {
            "productId": "1005005705108210",
            "image": "//ae01.alicdn.com/kf/Sbc896883729c4cbfb0bb9ae37081b494n/Lenovo-TH30-Wireless-Headphones-Bluetooth-5-3-Earphones-Foldable-Gaming-Headset-Sport-Headphone-with-Mic-Music.jpg_350x350xz.jpg",
            "nameItem": "Lenovo-TH30 Fones de ouvido sem fio com microfone, Bluetooth 5.3 fones de ouvido, fone de ouvido esportivo, música Earbuds, 250mAh",
            "sales": "10,000+  vendido(s)",
            "stars": "4.7",
            "salePrice": "R$ 38,73",
            "originalPrice": "R$ 139,88"
        },
        {
            "productId": "1005006879612545",
            "image": "//ae01.alicdn.com/kf/A5ee130b311104de2935b4d5502faf3ecC/P2-High-Definition-Sound-Wire-Earphone-For-Mobile-Phone-and-Computer.jpeg_350x350xz.jpeg",
            "nameItem": "Fone de Ouvido com Fio P2 Som Alta Definição Para Celular e Computador",
            "sales": "6  vendido(s)",
            "stars": "5",
            "salePrice": "R$ 14,90",
            "originalPrice": ""
        },
        {
            "productId": "1005006090209875",
            "image": "//ae01.alicdn.com/kf/S9a065239dff2409b95888c39bb96a6f6J/KZ-AS16-Pro-In-Ear-Earphones-16BA-Balanced-Armature-HIFI-Bass-Monitor-Headphones-Noise-Cancelling-Earbuds.jpg_350x350xz.jpg",
            "nameItem": "KZ-AS16 Pro Em Fones De Ouvido, Armadura Equilibrada, Baixo HIFI, Fones De Ouvido Do Monitor, Auscultadores Com Cancelamento De Ruído, Headset Esportivo, AS12, ZSX",
            "sales": "1,000+  vendido(s)",
            "stars": "4.8",
            "salePrice": "R$ 192,06",
            "originalPrice": "R$ 444,37"
        },
        {
            "productId": "1005006044627670",
            "image": "//ae01.alicdn.com/kf/Ade32476333c647849362be2621e5cfb5Z/Wired-Earphone-In-Ear-Earphone-P2-Fo-11.png_350x350xz.png",
            "nameItem": "Fone De Ouvido Com Fio Microfone In Ear Auricular P2 Fo-11",
            "sales": "41  vendido(s)",
            "stars": "4.3",
            "salePrice": "R$ 4,99",
            "originalPrice": "R$ 16,41"
        },
        {
            "productId": "1005006828236440",
            "image": "//ae01.alicdn.com/kf/S16fc9e1d5b1c427d91591452786dc84d3/U24-Wired-Headphones-Stereo-3-5MM-IN-Ear-Running-Music-Game-Noise-Cancel-Earphone-With-Mic.jpg_350x350xz.jpg",
            "nameItem": "Fones de ouvido estéreo com fio, cancelamento de ruído fone de ouvido, microfone para celular, PC, Pad, laptop, corrida, música, jogos, U24, 3,5mm",
            "sales": "7  vendido(s)",
            "stars": "",
            "salePrice": "R$ 6,53",
            "originalPrice": "R$ 6,53"
        },
        {
            "productId": "1005006421239565",
            "image": "//ae01.alicdn.com/kf/S010235cc1d88475b8894e0f0854c25adU/NEW-Bluetooth-5-3-Wireless-Bone-Conduction-Headphones-T75-Clip-Ear-Music-Noise-Canceling-Headset-HD.jpg_350x350xz.jpg",
            "nameItem": "T75 Sem Fio Bone Condução Headphones, Clip Ear Música, Cancelamento de Ruído Headset, Chamada HD, Esportes e Gaming Fone de Ouvido, Bluetooth 5.3, Novo",
            "sales": "5,000+  vendido(s)",
            "stars": "4.1",
            "salePrice": "R$ 18,38",
            "originalPrice": "R$ 18,38"
        },
        {
            "productId": "1005006219548818",
            "image": "//ae01.alicdn.com/kf/S910713baef56499aa5e2b17bd09a9c84a/Type-C-3-5mm-Headset-Stereo-Music-Earbud-Wired-Headphones-With-Mic-DAC-Chip-For-Samsung.png_350x350xz.png",
            "nameItem": "Auscultadores com fio tipo C com microfone, Stereo Music Earbud, Headset, Chip DAC, Samsung Galaxy S23, S22, S21 Ultra, S20, Nota 20, 10, 3,5mm",
            "sales": "5,000+  vendido(s)",
            "stars": "4.6",
            "salePrice": "R$ 4,99",
            "originalPrice": "R$ 16,66"
        },
        {
            "productId": "1005006856511360",
            "image": "//ae01.alicdn.com/kf/S93694d2e1dc84534a70b230b1c07fe2ev/NEW-Lenovo-Air-Pro-6-TWS-Wireless-Headphones-Fone-Bluetooth-Earphones-Mic-In-Ear-Earbuds-Earbuds.jpg_350x350xz.jpg",
            "nameItem": "Lenovo-Air Pro 6 TWS sem fio, fones de ouvido Bluetooth com microfone, fones de ouvido intra-auriculares, fones de ouvido esportivos, original, novo",
            "sales": "49  vendido(s)",
            "stars": "5",
            "salePrice": "R$ 14,92",
            "originalPrice": "R$ 21,82"
        },
        {
            "productId": "1005006333963809",
            "image": "//ae01.alicdn.com/kf/S778f343d351d425089a2824d8d9ebc23i/E7S-TWS-Wireless-Headphones-Bluetooth-earphone-Control-Sport-Headset-Waterproof-Microphone-Music-Earphone-Work-On-All.jpg_350x350xz.jpg",
            "nameItem": "E7S TWS Fones De Ouvido Sem Fio, Bluetooth Fone De Ouvido, Controle Esporte Headset, Microfone À Prova D 'Água, Trabalho Em Todos Smartphone",
            "sales": "10,000+  vendido(s)",
            "stars": "4.4",
            "salePrice": "R$ 4,99",
            "originalPrice": "R$ 38,21"
        },
        {
            "productId": "1005006648978636",
            "image": "//ae01.alicdn.com/kf/S14cae74bebb4477d9a0c5a5a6e87c0fb8/Original-Lenovo-LP40-Pro-TWS-Earphones-Wireless-Bluetooth-5-1-Sport-Noise-Reduction-Headphones-Touch-Control.jpg_350x350xz.jpg",
            "nameItem": "Lenovo-LP40 Pro TWS Fones De Ouvido Sem Fio Bluetooth 5.1, Redução De Ruído Fones De Ouvido, Controle De Toque, 250mAh Fones De Ouvido, Original",
            "sales": "4,000+  vendido(s)",
            "stars": "4.6",
            "salePrice": "R$ 26,36",
            "originalPrice": "R$ 82,98"
        },
        {
            "productId": "1005006368567852",
            "image": "//ae01.alicdn.com/kf/Sffcd148123e44194be3feee442c4874fI/Beatfade-S20-Pro-Touch-Screen-ANC-Wireless-Earphones-TWS-Noise-Cancelling-Earbud-Bluetoth-5-3-Support.png_350x350xz.png",
            "nameItem": "Smithing s20 pro fones de ouvido sem fio, tela sensível ao toque, anc, tss, sem ruído, bluetooth 5.3, bateria de longa duração, suporte a aplicativos, hi-fi",
            "sales": "2,000+  vendido(s)",
            "stars": "4.6",
            "salePrice": "R$ 97,88",
            "originalPrice": "R$ 117,88"
        },
        {
            "productId": "1005005822220661",
            "image": "//ae01.alicdn.com/kf/Scf9b1a37b6fe49a28d63b829f6e3b10dU/Wired-Earphone-For-P2-Input-With-Voice-Audio-Microphone.png_350x350xz.png",
            "nameItem": "Fone De Ouvido Com Fio Para Entrada P2 Com Microfone Áudio Voz",
            "sales": "10  vendido(s)",
            "stars": "3",
            "salePrice": "R$ 8,02",
            "originalPrice": "R$ 23,55"
        },
        {
            "productId": "1005005847138170",
            "image": "//ae01.alicdn.com/kf/S27db59df70d945a09ad0912c7357d94cL/Lenovo-Thinkplus-Earphone-XT60B-Wireless-Bluetooth-Sport-Headphones-Touch-TWS-With-Mic-Noise-Reduction-Earbud-Waterproof.jpg_350x350xz.jpg",
            "nameItem": "Lenovo-Thinkplus fone de ouvido Bluetooth sem fio com microfone, fone de ouvido, fone impermeável, redução de ruído, XT60B",
            "sales": "10,000+  vendido(s)",
            "stars": "4.8",
            "salePrice": "R$ 28,81",
            "originalPrice": "R$ 108,46"
        },
        {
            "productId": "1005006194078679",
            "image": "//ae01.alicdn.com/kf/Sf36342c63b754b168fefdad13f283eb6h/G9S-TWS-Wireless-Bluetooth-Headset-LED-Display-Air-Pro-Earbuds-with-Mic-Wireless-Headphones-Noise-Cancelling.jpg_350x350xz.jpg",
            "nameItem": "Auscultadores Bluetooth sem fios com microfone, auscultadores com cancelamento de ruído, ecrã LED, auriculares Air Pro, G9S TWS",
            "sales": "18  vendido(s)",
            "stars": "5",
            "salePrice": "R$ 5,46",
            "originalPrice": "R$ 50,92"
        },
        {
            "productId": "1005004786288333",
            "image": "//ae01.alicdn.com/kf/Sf83523150ab941a2a85504503332dcbap/QCY-HT05-ANC-Wireless-Earphone-40dB-Noise-Cancelling-Bluetooth-5-2-Headphone-6-Mic-ENC-HD.jpg_350x350xz.jpg",
            "nameItem": "QCY HT05 ANC fone de ouvido sem fio 40dB cancelamento de ruído Bluetooth 5.2 fone de ouvido 6 microfone ENC HD chamada TWS fones de ouvido modo de transparência",
            "sales": "10,000+  vendido(s)",
            "stars": "4.8",
            "salePrice": "R$ 135,92",
            "originalPrice": ""
        },
        {
            "productId": "1005006117716187",
            "image": "//ae01.alicdn.com/kf/Sde49b6b784ac45989880cc1dda15d1afD/Original-Pro-6-TWS-Wireless-Bluetooth-Earphones-Headphones-Mini-Fone-Earphone-Stereo-Sport-Headset-For-Xiaomi.jpg_350x350xz.jpg",
            "nameItem": "TWS Fones De Ouvido Sem Fio Bluetooth, Pro 6 Original, Mini Fones De Ouvido, Fone De Ouvido Estéreo, Esporte Headset para Xiaomi, Android",
            "sales": "10,000+  vendido(s)",
            "stars": "4.4",
            "salePrice": "R$ 4,99",
            "originalPrice": "R$ 30,01"
        },
        {
            "productId": "1005005901364425",
            "image": "//ae01.alicdn.com/kf/S6fe60f523bc7489680fd664304d2e8ebY/A4-Wired-Stereo-in-Ear-Earphones-Super-Bass-Headset-Earbuds-Earphone-for-Huawei.jpg_350x350xz.jpg",
            "nameItem": "Fones de ouvido estéreo com fio, Super Bass Headset, fones de ouvido para Huawei, A4",
            "sales": "10  vendido(s)",
            "stars": "4",
            "salePrice": "R$ 11,52",
            "originalPrice": "R$ 23,51"
        },
        {
            "productId": "1005004764392671",
            "image": "//ae01.alicdn.com/kf/Sdb48439cb6ae430eb522207cb3e30af36/New-Original-Lenovo-GM2-Pro-Buletooth-5-3-Earphones-Gaming-Wireless-Headphones-E-Sports-Music-Earbuds.jpg_350x350xz.jpg",
            "nameItem": "Lenovo-GM2 Pro Fones De Ouvido Sem Fio Bluetooth com Microfone, Gaming Headphones, E-Sports Music Earbuds, Dual Mode Headset, Original, Novo, 5.3",
            "sales": "10,000+  vendido(s)",
            "stars": "4.7",
            "salePrice": "R$ 24,37",
            "originalPrice": "R$ 44,37"
        },
        {
            "productId": "1005006879062966",
            "image": "//ae01.alicdn.com/kf/S273766c549f745cda83fd62d076e3b67f/Original-Air-Pro-6-TWS-Wireless-Bluetooth-Earphones-Mini-Pods-Earbuds-Sport-Headset-For-Xiaomi-Android.jpg_350x350xz.jpg",
            "nameItem": "Air Pro 6 TWS Fones De Ouvido Sem Fio Bluetooth, Mini Pods Originais, Esporte Headset para Xiaomi, Android, Apple iPhone Fones De Ouvido",
            "sales": "389  vendido(s)",
            "stars": "5",
            "salePrice": "R$ 18,16",
            "originalPrice": "R$ 38,16"
        }
    ]

    const dataToRender = fetchResults.length > 0 ? fetchResults : data
    return (
        <div className='bg-[#131313] min-h-screen flex flex-col'>
            <Header searchItem={true} botName="aliexpress" placeHolder="Fone de ouvido" />
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

export default AliExpress