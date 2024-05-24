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
            "productId": "1005006437109214",
            "image": "//ae01.alicdn.com/kf/S7a0ec9d1449f43fcac19c76d1416a60b4/KZ-ZSN-Pro-X-1DD-1BA-HIFI-Hybrid-Driver-In-Ear-Earphone-Metal-Monitor-Earphone-Bass.jpg_350x350xz.jpg",
            "nameItem": "KZ ZSN Pro X 1DD 1BA HIFI Híbrido Driver In Ear Fone De Ouvido Metal Fone De Ouvido Baixo Fones De Ouvido Esporte Headset",
            "sales": "1,000+  vendido(s)",
            "salePrice": "R$ 65,26",
            "originalPrice": ""
        },
        {
            "productId": "1005006538020939",
            "image": "//ae01.alicdn.com/kf/S753f752695104471a342c5a2a72162490/X15-TWS-Wireless-Bluetooth-Headset-LED-Display-Gamer-Earbuds-with-Mic-Wireless-Headphones-Noise-Cancelling-Bluetooth.jpg_350x350xz.jpg",
            "nameItem": "X15 TWS Sem Fio Bluetooth Headset, Display LED Gamer Earbuds com Microfone, Auscultadores com Cancelamento de Ruído",
            "sales": "10,000+  vendido(s)",
            "salePrice": "R$ 15,99",
            "originalPrice": "R$ 44,13"
        },
        {
            "productId": "1005006097509988",
            "image": "//ae01.alicdn.com/kf/S325d5076e65847899cb99c53300fdd3ea/ONIKUMA-Gaming-Headphones-Esports-Package-with-Dynamic-RGB-Light-Detachable-Cat-Ears-Mouse-Holder-Wired-Headset.jpg_350x350xz.jpg",
            "nameItem": "ONIKUMA-Auscultadores Gaming, Pacote Esports com Luz RGB Dinâmica, Orelhas de Gato Desmontáveis, Suporte Mouse, Fone de Ouvido com Microfone Gamer",
            "sales": "46  vendido(s)",
            "salePrice": "R$ 15,99",
            "originalPrice": "R$ 45,27"
        },
        {
            "productId": "1005004193115981",
            "image": "//ae01.alicdn.com/kf/Sc0b4b4d2a5f34c5b854ce748fbbc8e3fw/Fifine-Dynamic-RGB-Gaming-Headset-with-Mic-Over-Ear-Headphones-7-1-Surround-Sound-PC-PS4.jpg_350x350xz.jpg",
            "nameItem": "Fifine Dynamic RGB Gaming Headset com Mic Over-Earphones 7.1 Surround Sound PC PS4 PS5 3 EQ Opções Game Movie Music",
            "sales": "2,000+  vendido(s)",
            "salePrice": "R$ 187,04",
            "originalPrice": ""
        },
        {
            "productId": "1005006650811263",
            "image": "//ae01.alicdn.com/kf/S59d9b80e375e4f129f58728e54e3d236y/E-Sports-Gaming-with-Microphone-In-ear-Headphones-Noise-cancelling-Plug-in-Mobile-Computer-Earbuds-Wired.jpg_350x350xz.jpg",
            "nameItem": "Fones de ouvido intra-auriculares com microfone, cancelamento de ruído, plug-in, celular, computador, PUBG Headset, E Sports Gaming",
            "sales": "700+  vendido(s)",
            "salePrice": "R$ 12,99",
            "originalPrice": "R$ 32,24"
        },
        {
            "productId": "1005006289093232",
            "image": "//ae01.alicdn.com/kf/S07988f3b83af4f77bcc48cc09289d0220/X15-Wholesale-Tws-Earphone-Bluetooth-Wireless-Without-Box-V5-1-in-Ear-Headphones-Blutooth-Hearing-Aids.jpg_350x350xz.jpg",
            "nameItem": "Sem Fio Bluetooth Na Orelha Fones De Ouvido, Fone De Ouvido, Aparelhos Auditivos, Esporte Gamer Headset, Telefone, TWS, Sem Caixa, V5.1, X15, Atacado",
            "sales": "10,000+  vendido(s)",
            "salePrice": "R$ 4,99",
            "originalPrice": ""
        },
        {
            "productId": "1005004470339106",
            "image": "//ae01.alicdn.com/kf/Se9e2b02ce2fc4f639f4c5529d0ae9b744/Gaming-Headset-Inear-Wired-With-Wheat-Esports-Pubg-Mobile-Game-Computer-Mobile-Phone-Universal-Listening-Sound.jpg_350x350xz.jpg",
            "nameItem": "Gaming Headset Inear Com Fio De Trigo Esports Pubg Jogo Móvel Computador Telefone Móvel Escuta Universal Som Reconhecimento Pos",
            "sales": "3,000+  vendido(s)",
            "salePrice": "R$ 4,99",
            "originalPrice": ""
        },
        {
            "productId": "1005004984225583",
            "image": "//ae01.alicdn.com/kf/S82b68eb3a0274e14bf54ed21c63a8056w/Fifine-Dynamic-RGB-Gaming-Headset-with-Mic-Over-Ear-Headphones-7-1-Surround-Sound-PC-PS4.jpg_350x350xz.jpg",
            "nameItem": "Fifine-Auscultadores Dinâmicos RGB para Jogos com Microfone, Auscultadores Over-Ear, Som Surround 7.1, PC, PS4, PS5, 3 Opções de EQ, Jogo, Filme, Música",
            "sales": "4,000+  vendido(s)",
            "salePrice": "R$ 164,96",
            "originalPrice": ""
        },
        {
            "productId": "1005006161718805",
            "image": "//ae01.alicdn.com/kf/S6a2796b55c454e0a8f09faba4058fbcdO/X15Pro-TWS-Wireless-Bluetooth-Earphones-Stereo-5-0-Headset-Sport-Earbuds-Microphone-With-Charging-Box-for.jpg_350x350xz.jpg",
            "nameItem": "TWS X15Pro Bluetooth 5.0 Fones De Ouvido com Caixa De Carregamento, Sem Fio, Fone De Ouvido Estéreo, Esporte Earbuds, Microfone para Smartphones, Xiaomi, IOS",
            "sales": "10,000+  vendido(s)",
            "salePrice": "R$ 4,99",
            "originalPrice": ""
        },
        {
            "productId": "1005005801596736",
            "image": "//ae01.alicdn.com/kf/S99768c1b51144defb621542442d513c9b/Headphones-3-5mm-Wired-Gaming-Headset-Earphones-Music-For-PS4-Play-Station-4-Game-PC-Chat.jpg_350x350xz.jpg",
            "nameItem": "Headset Gaming Wired com Microfone, Fones de Ouvido, Música, PS4, Play Station 4, Jogo, PC, Computador, Chat, 3,5mm",
            "sales": "5,000+  vendido(s)",
            "salePrice": "R$ 12,73",
            "originalPrice": ""
        },
        {
            "productId": "1005005705108210",
            "image": "//ae01.alicdn.com/kf/Sbc896883729c4cbfb0bb9ae37081b494n/Lenovo-TH30-Wireless-Headphones-Bluetooth-5-3-Earphones-Foldable-Gaming-Headset-Sport-Headphone-with-Mic-Music.jpg_350x350xz.jpg",
            "nameItem": "Lenovo-TH30 Fones de ouvido sem fio com microfone, Bluetooth 5.3 fones de ouvido, fone de ouvido esportivo, música Earbuds, 250mAh",
            "sales": "10,000+  vendido(s)",
            "salePrice": "R$ 37,00",
            "originalPrice": ""
        },
        {
            "productId": "1005006868268319",
            "image": "//ae01.alicdn.com/kf/S2c68fc34932148a6a4258ae9c0f37374f/New-P9-Pro-Max-Air-Wireless-Bluetooth-Headphones-Noise-Cancelling-Mic-Pods-Over-Ear-Sports-Gaming.jpg_350x350xz.jpg",
            "nameItem": "P9 Pro Max Air Sem Fio Bluetooth Auscultadores, Cancelamento de Ruído, Mic Pods, Sports Gaming Headset para Apple, Novo",
            "sales": "500+  vendido(s)",
            "salePrice": "R$ 82,09",
            "originalPrice": ""
        },
        {
            "productId": "1005003205163384",
            "image": "//ae01.alicdn.com/kf/Hdeef93813ec14c77a2d1613efec43f387/KZ-EDX-Pro-Earphones-Dynamic-In-Ear-Monitor-HiFi-Wired-Headphones-Bass-Stereo-Game-Music-Earplugs.png_350x350xz.png",
            "nameItem": "KZ-EDX Pro Fones De Ouvido Com Fio, Dinâmico No Monitor De Ouvido, Fones De Ouvido HiFi, Baixo Estéreo, Tampões De Música Do Jogo, Noice Cancelando Auricular",
            "sales": "10,000+  vendido(s)",
            "salePrice": "R$ 11,59",
            "originalPrice": ""
        },
        {
            "productId": "1005006144917000",
            "image": "//ae01.alicdn.com/kf/S13854ad5914146f3a38e57e7dea9b7c2K/G11-Bluetooth-Headphones-Gaming-Wireless-Bluetooth-Headset-Earphone-Bluetooth-Earbuds-HIFI-With-Mic-Charging-Box-Free.jpg_350x350xz.jpg",
            "nameItem": "G11 Bluetooth Gaming Headphones com microfone e caixa de carregamento, fone de ouvido sem fio, fone de ouvido, HIFI, frete grátis",
            "sales": "3,000+  vendido(s)",
            "salePrice": "R$ 4,99",
            "originalPrice": ""
        },
        {
            "productId": "1005005882204047",
            "image": "//ae01.alicdn.com/kf/Se5d5227c833345dbb6d72dfbba7f3e016/Stereo-P47-Headset-5-0-Bluetooth-Headset-Folding-Series-Wireless-Sports-Game-Headset-for-iPhone-XiaoMi.jpg_350x350xz.jpg",
            "nameItem": "Bluetooth 5.0 Stereo P47 Headset, Jogo Desportivo Sem Fio, Série Dobrável, iPhone, Xiaomi",
            "sales": "10,000+  vendido(s)",
            "salePrice": "R$ 4,99",
            "originalPrice": ""
        },
        {
            "productId": "1005006034035163",
            "image": "//ae01.alicdn.com/kf/S2ed610ab4d4347d686185b3835f983b0F/FIFINE-RGB-Gaming-Headset-with-7-1-Surround-Sound-3-EQ-MIC-Over-ear-Headphone-with.jpg_350x350xz.jpg",
            "nameItem": "FIFINE-RGB Gaming Headset com som surround 7.1 e microfone, fone de ouvido Over-ear, controle em linha para PC, PS4, PS5, Ampligame-H6W",
            "sales": "3,000+  vendido(s)",
            "salePrice": "R$ 157,81",
            "originalPrice": ""
        },
        {
            "productId": "1005006379038912",
            "image": "//ae01.alicdn.com/kf/S06b73065477446ca91a4d229190496edo/M30-TWS-Bluetooth-5-3-Headphones-Noise-Reduction-Wireless-Earphones-9D-Stereo-Sports-Waterproof-Earbuds-Headsets.jpg_350x350xz.jpg",
            "nameItem": "M30 TWS Bluetooth 5.3 Fones De Ouvido, Redução De Ruído, Fones De Ouvido Sem Fio, Estéreo 9D, Esportes, Fones De Ouvido Impermeável, Fones De Ouvido para Todos os Telefones",
            "sales": "13  vendido(s)",
            "salePrice": "R$ 5,72",
            "originalPrice": ""
        },
        {
            "productId": "1005006286360305",
            "image": "//ae01.alicdn.com/kf/S994ce3d53ed84b7c90dbb76b82614ef7w/BINNUNE-BW06-2-4G-Wireless-Gaming-Headset-with-Flip-ENC-Mic-for-PC-PS4-PS5-Gamer.jpg_350x350xz.jpg",
            "nameItem": "Binnune-Auscultadores sem fios para jogos com Flip ENC Mic, Auscultadores Bluetooth Dual-Mode, PC, PS4, PS5, Gamer, BW06, 2.4G",
            "sales": "3,000+  vendido(s)",
            "salePrice": "R$ 144,91",
            "originalPrice": ""
        },
        {
            "productId": "1005005557220339",
            "image": "//ae01.alicdn.com/kf/Sa54c4aa4026e4e97b4de0a77a9adf510t/FIFINE-Headset-3-5-mm-jack-USB-Headphone-with-7-1-Surround-Sound-volum-contral-Mute.jpg_350x350xz.jpg",
            "nameItem": "FIFINE-7.1 Fone de ouvido surround com controle de volume, fone USB, controle de volume, mudo, 3,5mm, PC, Mac, PS4, PS5, Mixer-H9",
            "sales": "3,000+  vendido(s)",
            "salePrice": "R$ 147,08",
            "originalPrice": ""
        },
        {
            "productId": "1005006885525848",
            "image": "//ae01.alicdn.com/kf/Se013d94435cf4aafa0fd98ea6c696166k/New-P9-Pro-Max-Air-Wireless-Bluetooth-Headphones-Noise-Cancelling-Mic-Pods-Over-Ear-Sports-Gaming.jpg_350x350xz.jpg",
            "nameItem": "P9 Pro Max Air Sem Fio Bluetooth Auscultadores, Cancelamento de Ruído, Mic Pods, Sports Gaming Headset para Apple, Novo",
            "sales": "444  vendido(s)",
            "salePrice": "R$ 81,40",
            "originalPrice": ""
        },
        {
            "productId": "1005005274144047",
            "image": "//ae01.alicdn.com/kf/Sfee98e6f52b5440594c3b6c35848b2b9O/G58-computer-headphone-E-sports-game-7-1-channel-wired-headset-with-microphone-headset.jpg_350x350xz.jpg",
            "nameItem": "G58 computador fone de ouvido e-esportes jogo 7.1 canais com fio fone de ouvido com microfone fone de ouvido",
            "sales": "1,000+  vendido(s)",
            "salePrice": "R$ 35,46",
            "originalPrice": ""
        },
        {
            "productId": "1005006381571327",
            "image": "//ae01.alicdn.com/kf/S76630ac5ffde49a49c0075bb97b72d82A/Razer-BlackShark-V2-X-Wired-Esports-Headset-Advanced-Passive-Noise-Cancellation-7-1-Surround-Sound-Hyperclear.jpg_350x350xz.jpg",
            "nameItem": "Razer-BlackShark V2 X Wired Headset, Esports Headset, Cancelamento de Ruído Passivo Avançado, 7.1 Surround Sound, Microfone Cardióide Hyperclear",
            "sales": "5,000+  vendido(s)",
            "salePrice": "R$ 118,99",
            "originalPrice": ""
        },
        {
            "productId": "1005006078953088",
            "image": "//ae01.alicdn.com/kf/Sf32fc01d864247f5ad6441649b96ff814/NUBWO-G06-Gaming-Headset-for-PS5-PS4-XBOX-PC-Mac-2-4GHz-Ultra-Low-Latency-Noise.jpg_350x350xz.jpg",
            "nameItem": "NUBWO-G06 Gaming Headset com cancelamento de ruído, fones de ouvido Bluetooth com microfone, latência ultra baixa, apto para PS5, PS4, XBOX,PC, Mac, 2,4 GHz",
            "sales": "5,000+  vendido(s)",
            "salePrice": "R$ 179,04",
            "originalPrice": ""
        },
        {
            "productId": "1005006885650071",
            "image": "//ae01.alicdn.com/kf/S54b5cb1efc614b05a4c1cde0da23c542h/New-P9-Pro-Max-Air-Wireless-Bluetooth-Headphones-Noise-Cancelling-Mic-Pods-Over-Ear-Sports-Gaming.jpg_350x350xz.jpg",
            "nameItem": "P9 Pro Max Air Sem Fio Bluetooth Auscultadores, Cancelamento de Ruído, Mic Pods, Sports Gaming Headset para Apple, Novo",
            "sales": "316  vendido(s)",
            "salePrice": "R$ 81,40",
            "originalPrice": ""
        },
        {
            "productId": "1005005551383818",
            "image": "//ae01.alicdn.com/kf/S3a9f556948f1484f822a8fb53ea4b6aan/TWS-E6S-Bluetooth-Earphones-Wireless-bluetooth-headset-Noise-Cancelling-Headsets-With-Microphone-Headphones-For-Xiaomi-Redmi.jpg_350x350xz.jpg",
            "nameItem": "E6S E6S Bluetooth Fones De Ouvido Sem Fio bluetooth headset Auscultadores Com Microfone Com Cancelamento De Ruído Auscultadores Para Xiaomi Redmi",
            "sales": "75  vendido(s)",
            "salePrice": "R$ 4,99",
            "originalPrice": ""
        },
        {
            "productId": "1005006082158748",
            "image": "//ae01.alicdn.com/kf/S2bb23e72277349c2bfcb5801bf854c68q/M3-Light-emitting-Bluetooth-Headset-Folding-LED-Card-Wireless-Headset-TYPE-C-Charging-Multi-scene-Use.jpg_350x350xz.jpg",
            "nameItem": "M3 Headset Bluetooth emissor de luz Folding LED Card Headset sem fio TYPE-C Carregamento Multi-cena Use Game Office",
            "sales": "1,000+  vendido(s)",
            "salePrice": "R$ 17,08",
            "originalPrice": ""
        },
        {
            "productId": "1005006660776200",
            "image": "//ae01.alicdn.com/kf/S7ba6846931c24bfdafc598c76b4f2f538/KZ-EDX-PRO-X-IEM-Earphones-Dynamic-Drive-HiFi-Deep-Bass-Sound-Earbud-Sport-Music-Noise.jpg_350x350xz.jpg",
            "nameItem": "KZ-EDX PRO X Auriculares IEM, Auriculares IEM, Dynamic Drive, HiFi, Graves Profundos, Cancelador de Ruído, Auriculares com Cabo Destacável, Sport Música",
            "sales": "4,000+  vendido(s)",
            "salePrice": "R$ 5,40",
            "originalPrice": ""
        },
        {
            "productId": "1005006047300536",
            "image": "//ae01.alicdn.com/kf/Sc0614d47d6104f3ea0548c23f9832bb2r/luetooth-5-1-Gaming-Headsets-Gamer-Wireless-Headphones-With-Noise-Cancelling-Microphone-Wired-Earphone-For-Phone.jpg_350x350xz.jpg",
            "nameItem": "Gaming Headphones sem fio com microfone com cancelamento de ruído Gamer Headsets, fone de ouvido com fio para telefone Bluetooth 5.1",
            "sales": "5,000+  vendido(s)",
            "salePrice": "R$ 20,58",
            "originalPrice": ""
        },
        {
            "productId": "1005006672490459",
            "image": "//ae01.alicdn.com/kf/S2d8d04e630244cc3bd9c57c55e9a6f03d/Psh-300-Wired-Gaming-Headset-7-1-Channel-Surround-Sound-Bass-Boost-Overhead-Design-For-Computer.jpg_350x350xz.jpg",
            "nameItem": "Psh-300 Wired Gaming Headset, 7.1 Channel, Surround Sound, Bass Boost, Overhead Design, Jogos de Computador, Microfone",
            "sales": "85  vendido(s)",
            "salePrice": "R$ 42,65",
            "originalPrice": ""
        },
        {
            "productId": "1005005218865912",
            "image": "//ae01.alicdn.com/kf/Sad17533adb6d441dbf5c61a4eee49358Z/Baseus-Bowie-D05-Wireless-Headphone-3D-Spatial-Audio-Earphone-Bluetooth-5-3-Headset-40mm-Driver-Foldable.jpg_350x350xz.jpg",
            "nameItem": "Baseus-Bowie D05 fone de ouvido sem fio, 3D espacial fone de ouvido Bluetooth 5.3, driver 40 milímetros, dobrável sobre a orelha Headphone, 70H",
            "sales": "5,000+  vendido(s)",
            "salePrice": "R$ 122,39",
            "originalPrice": ""
        },
        {
            "productId": "1005005691555624",
            "image": "//ae01.alicdn.com/kf/S14681d1666694c379df99eebdd9ce930E/Cat-s-Ears-Headset-RGB-Light-Smile-Face-TWS-Headset-Gradient-New-Headphone-Pink-Little-Girl.jpg_350x350xz.jpg",
            "nameItem": "Cat's Ears RGB Light Headset, Rosto Sorriso, TWS Gradiente, Fone de Ouvido Rosa, Little Girl Fone De Ouvido, Presente Adequado Para Qualquer Telefone, Novo",
            "sales": "4,000+  vendido(s)",
            "salePrice": "R$ 45,40",
            "originalPrice": "R$ 148,65"
        },
        {
            "productId": "1005006486661972",
            "image": "//ae01.alicdn.com/kf/Sde8a5b83837f428f8db4deb93a88c7c5d/NEW-P9-PRO-MAX-Air-Wireless-Headphones-Noise-Cancelling-Bluetooth-Earphones-Mic-Pods-Over-Ear-Gaming.jpg_350x350xz.jpg",
            "nameItem": "P9 Pro MAX Air Headphones sem fio, cancelamento de ruído, fones de ouvido Bluetooth, Mic Pods, Over Ear Gaming Sports Headset para Apple, novo",
            "sales": "266  vendido(s)",
            "salePrice": "R$ 79,57",
            "originalPrice": ""
        },
        {
            "productId": "1005005739678925",
            "image": "//ae01.alicdn.com/kf/S866ea9c2f5e24a56bc7e9aec8034d67eg/ONIKUMA-X15-Pro-Over-Ear-Headphones-Gaming-Headset-Wired-Cancelling-Earphones-Pink-Cat-Ears-Rgb-Light.jpg_350x350xz.jpg",
            "nameItem": "ONIKUMA X15 Pro Over-Ear Headphones Gaming Headset Wired Cancelando Fones De Ouvido Pink Cat Orelhas Rgb Luz Com Mic Para PC PS4",
            "sales": "5,000+  vendido(s)",
            "salePrice": "R$ 54,22",
            "originalPrice": "R$ 164,97"
        },
        {
            "productId": "1005005962602478",
            "image": "//ae01.alicdn.com/kf/S675af58188ad401bb082fe56510622e84/KZ-ZSN-Pro-X-1DD-1BA-HIFI-Hybrid-Driver-In-Ear-Earphone-Metal-Monitor-Earphone-Bass.jpg_350x350xz.jpg",
            "nameItem": "KZ ZSN Pro X 1DD 1BA HIFI Híbrido Driver In Ear Fone De Ouvido Metal Fone De Ouvido Baixo Fones De Ouvido Esporte Headset",
            "sales": "5,000+  vendido(s)",
            "salePrice": "R$ 37,37",
            "originalPrice": "R$ 124,76"
        },
        {
            "productId": "1005004471694845",
            "image": "//ae01.alicdn.com/kf/Sb7ffb2f0a17547b2843a75cb061fa5c7U/Wireless-Bluetooth-Headset-Touch-Light-Mini-High-Quality-Earplugs-Anti-Sweat-HD-Sound-Quality-Stereo-Universal.jpg_350x350xz.jpg",
            "nameItem": "Sem fio Bluetooth Headset Toque Luz Mini Alta Qualidade Tampões Anti Suor HD Som Qualidade Estéreo Universal Headset",
            "sales": "4,000+  vendido(s)",
            "salePrice": "R$ 4,99",
            "originalPrice": "R$ 37,14"
        },
        {
            "productId": "1005005543641427",
            "image": "//ae01.alicdn.com/kf/S45b7764a1982407eb76e123dc9cbd7673/FIFINE-Gaming-Headset-with-Stereo-Sound-Detachable-MIC-RGB-Line-Control-Over-Ear-Headphone-for-PC.jpg_350x350xz.jpg",
            "nameItem": "FIFINE-Auscultadores para jogos com som estéreo, microfone destacável, RGB, controlo de linha, auscultadores over-ear para PC, PS4, PS5, Xbox, AMPLIGAME H3",
            "sales": "194  vendido(s)",
            "salePrice": "R$ 156,46",
            "originalPrice": ""
        },
        {
            "productId": "1005006038492076",
            "image": "//ae01.alicdn.com/kf/S9217841516844409b1178828f345025en/Type-C-In-Ear-Wired-Karaoke-Headphones-3-5mm-Stereo-Music-Earbud-Handfree-Headset-Earphones-with.png_350x350xz.png",
            "nameItem": "Auriculares Karaoke com fios intra-auriculares, auriculares estéreo para música, auriculares handfree, auriculares com microfone, Xiaomi, Huawei, 3,5mm, tipo C",
            "sales": "23  vendido(s)",
            "salePrice": "R$ 4,99",
            "originalPrice": "R$ 23,74"
        },
        {
            "productId": "1005006128272541",
            "image": "//ae01.alicdn.com/kf/Sd8f24ae97da643fe8a52deaca392a983Z/New-Xiaomi-Redmi-Airdots-2-Wireless-Bluetooth-Headset-with-Mic-Earbuds-Airdots-2-Fone-Bluetooth-Earphones.jpg_350x350xz.jpg",
            "nameItem": "Xiaomi-Redmi Airdots 2 Wireless Bluetooth Headset com microfone, fones de ouvido, fones de ouvido, novos",
            "sales": "10,000+  vendido(s)",
            "salePrice": "R$ 14,33",
            "originalPrice": "R$ 74,26"
        },
        {
            "productId": "1005005856985732",
            "image": "//ae01.alicdn.com/kf/S133f33f102e841b391bc3b29c46d4455Y/New-Disney-Stitch-Wireless-Bluetooth-Headphones-AH-806-HIFI-Sound-Stereo-Foldable-Headsets-with-Mic-for.jpg_350x350xz.jpg",
            "nameItem": "Disney-Auscultadores Bluetooth sem fios com microfone para crianças, auscultadores de ponto, estéreo de som HIFI, auscultadores dobráveis, desenhos animados anime, novo, AH-806",
            "sales": "900+  vendido(s)",
            "salePrice": "R$ 29,52",
            "originalPrice": "R$ 49,52"
        },
        {
            "productId": "1005005818503084",
            "image": "//ae01.alicdn.com/kf/Sb70cb953b4974147897bd72aaf8c4c70M/QCY-H3-ANC-Wireless-Headphones-Bluetooth-5-4-Hi-Res-Audio-Over-Ear-Headset-43dB-Hybrid.jpg_350x350xz.jpg",
            "nameItem": "QCY-H3 ANC Auscultadores sem fios, Bluetooth 5.4, Hi-Res Audio, Over Ear Headset, híbrido Active Cancelamento de Ruído, Auscultadores, 60H, 43dB",
            "sales": "10,000+  vendido(s)",
            "salePrice": "R$ 183,15",
            "originalPrice": ""
        },
        {
            "productId": "1005005995856150",
            "image": "//ae01.alicdn.com/kf/S334030124351461584169c0b4a01dfb5H/New-Disney-Lilo-Stitch-Angel-Wireless-Bluetooth-Earbuds-HiFi-Sound-HD-Call-Headsets-Smart-Touch-Low.jpg_350x350xz.jpg",
            "nameItem": "Disney-Lilo e Stitch Angel Fones De Ouvido Bluetooth Sem Fio, HiFi Sound, HD Chamada Headsets, Smart Touch, Baixa Latência, Longa Resistência, Novo",
            "sales": "900+  vendido(s)",
            "salePrice": "R$ 16,86",
            "originalPrice": "R$ 79,72"
        },
        {
            "productId": "1005005733264062",
            "image": "//ae01.alicdn.com/kf/S7839654865d947eaa147e8431beadb5fO/E6S-TWS-Wireless-Bluetooth-Headset-Waterproof-Noise-Cancelling-LED-Earbuds-with-Mic-Wireless-Headphones-Bluetooth-Earphones.jpg_350x350xz.jpg",
            "nameItem": "E6S TWS Wireless Bluetooth Headset, cancelamento de ruído, LED Earbuds com microfone, auscultadores à prova d'água",
            "sales": "2,000+  vendido(s)",
            "salePrice": "R$ 4,99",
            "originalPrice": "R$ 38,38"
        },
        {
            "productId": "1005005805520210",
            "image": "//ae01.alicdn.com/kf/S9636a7c40e2947b6bcacfe2e7d90d463I/ONIKUMA-K19-Gaming-Headset-Headphones-Wired-Noise-Cancelling-Stereo-Earphones-With-Mic.jpg_350x350xz.jpg",
            "nameItem": "ONIKUMA K19 Gaming Headset Headphones Wired Ruído Cancelando Fones De Ouvido Estéreo Com Microfone",
            "sales": "700+  vendido(s)",
            "salePrice": "R$ 36,30",
            "originalPrice": "R$ 152,21"
        },
        {
            "productId": "1005005705103231",
            "image": "//ae01.alicdn.com/kf/S4e0f5fa8ae5f4b10b3593b8a2cbdc5ae3/Lenovo-TH30-Wireless-Headphones-Bluetooth-5-3-Earphones-Foldable-Gaming-Headset-Sport-Headphone-with-Mic-Music.jpg_350x350xz.jpg",
            "nameItem": "Lenovo-TH30 Fones de ouvido sem fio com microfone, Bluetooth 5.3 fones de ouvido, fone de ouvido esportivo, música Earbuds, 250mAh",
            "sales": "10,000+  vendido(s)",
            "salePrice": "R$ 39,74",
            "originalPrice": "R$ 138,97"
        },
        {
            "productId": "1005006297387794",
            "image": "//ae01.alicdn.com/kf/S361f1bb6026b4d42b3b38f080f6b1bdaK/NEW-Anime-Pokemon-Pikachu-Bluetooth-Headphone-Wireless-Headsets-Cartoon-Stereo-Headset-Earphone-With-Mic-Hottie-Fashion.jpg_350x350xz.jpg",
            "nameItem": "Anime Pokémon Pikachu Fone de ouvido sem fio fone de ouvido estéreo dos desenhos animados fone de ouvido com microfone, hottie moda presentes, novo",
            "sales": "106  vendido(s)",
            "salePrice": "R$ 32,95",
            "originalPrice": "R$ 52,95"
        },
        {
            "productId": "1005006421239565",
            "image": "//ae01.alicdn.com/kf/S010235cc1d88475b8894e0f0854c25adU/NEW-Bluetooth-5-3-Wireless-Bone-Conduction-Headphones-T75-Clip-Ear-Music-Noise-Canceling-Headset-HD.jpg_350x350xz.jpg",
            "nameItem": "T75 Sem Fio Bone Condução Headphones, Clip Ear Música, Cancelamento de Ruído Headset, Chamada HD, Esportes e Gaming Fone de Ouvido, Bluetooth 5.3, Novo",
            "sales": "4,000+  vendido(s)",
            "salePrice": "R$ 4,99",
            "originalPrice": "R$ 17,80"
        },
        {
            "productId": "1005004909257691",
            "image": "//ae01.alicdn.com/kf/S64b0da97befc481f8d5a79d583a4697dA/Gaming-Headset-Noise-Isolating-Overear-Headphone-with-Mic-Volume-Control-Bass-Surround-Video-Game-for-PC.jpg_350x350xz.jpg",
            "nameItem": "Gaming Headset Noise Isolando Overear Headphone com Mic.Volume Controle Bass Surround Video Game para PC PS4 PS5 XBOX",
            "sales": "5,000+  vendido(s)",
            "salePrice": "R$ 27,63",
            "originalPrice": "R$ 125,30"
        },
        {
            "productId": "1005005395474337",
            "image": "//ae01.alicdn.com/kf/Sda73f9f9480c4339b79d5b0d82f8956a3/Lenovo-HD200-Bluetooth-Earphones-Over-ear-Foldable-Computer-Wireless-Headphones-Noise-Cancellation-HIFI-Stereo-Gaming-Headset.jpg_350x350xz.jpg",
            "nameItem": "Lenovo-auscultadores Bluetooth com cancelamento de ruído, auscultadores sem fios dobráveis, estéreo HIFI, auscultadores para jogos, auriculares de computador, HD200, over-ear",
            "sales": "5,000+  vendido(s)",
            "salePrice": "R$ 61,56",
            "originalPrice": "R$ 176,40"
        },
        {
            "productId": "1005005729874767",
            "image": "//ae01.alicdn.com/kf/S8368889a58354803950f7b2746df3d08i/Macaron-Headphones-Kids-Wireless-Bluetooth-Headphone-Stereo-Headband-Gaming-Headset-with-Mic-Gamer-Girl-Gift-for.jpg_350x350xz.jpg",
            "nameItem": "Auscultadores Macaron sem fio para crianças, Auscultadores Bluetooth, Headband estéreo, Gaming Headset com microfone, Gamer Girl Gift, Tablet móvel",
            "sales": "3,000+  vendido(s)",
            "salePrice": "R$ 4,99",
            "originalPrice": "R$ 50,38"
        },
        {
            "productId": "1005005702630939",
            "image": "//ae01.alicdn.com/kf/S50ba2e41e76a4ff28eb8164cbf9f6423g/Professional-Led-Light-Wired-Gaming-Headphones-With-Microphone-For-Computer-PS4-PS5-Xbox-Bass-Stereo-PC.jpg_350x350xz.jpg",
            "nameItem": "fone gamer Profissional auriculares gamer luz led gaming fones de ouvido gamer para computador ps4 ajustável baixo estéreo pc gamer wired headset masculino presentes dos namorados fifa 21",
            "sales": "1,000+  vendido(s)",
            "salePrice": "R$ 32,59",
            "originalPrice": "R$ 111,89"
        },
        {
            "productId": "1005006081759937",
            "image": "//ae01.alicdn.com/kf/Saf4cc4eb9a5944458eafabbd3b7a8c06i/KZ-D-Fi-Earphones-HIFI-Bass-Earbuds-Monitor-4-Level-Tuning-Switch-Headphone-Sport-Stereo-Sound.jpg_350x350xz.jpg",
            "nameItem": "KZ-D-Fi Fones De Ouvido com Redução De Ruído, HiFi Bass Earbuds Monitor, 4-Level Tuning Switch Headphone, Esporte Stereo Sound Headset",
            "sales": "2,000+  vendido(s)",
            "salePrice": "R$ 60,52",
            "originalPrice": "R$ 161,09"
        },
        {
            "productId": "1005006876031308",
            "image": "//ae01.alicdn.com/kf/S4f50dfd9964b41839072f3332d680d138/QCY-H3-Lite-ANC-Wireless-Headphones-Bluetooth-5-3-Active-Noise-Cancelling-Over-Ear-Headset-40mm.jpg_350x350xz.jpg",
            "nameItem": "QCY-H3 Lite ANC Fones De Ouvido Sem Fio, Bluetooth 5.3, Cancelamento De Ruído Ativo, Over Ear Headset, 40mm Driver, HiFi Som Fones De Ouvido",
            "sales": "144  vendido(s)",
            "salePrice": "R$ 150,76",
            "originalPrice": ""
        },
        {
            "productId": "1005006658968177",
            "image": "//ae01.alicdn.com/kf/S67c590b1f60c49fabebb879e2b9a3155k/Original-Lenovo-LP75-TWS-Bluetooth-V5-3-Headphones-Wireless-LED-Digital-Display-Earphones-Noise-Reduction-Headset.jpg_350x350xz.jpg",
            "nameItem": "Lenovo-LP75 TWS Bluetooth V5.3 Fones De Ouvido Sem Fio LED Digital Display Fones De Ouvido, Redução De Ruído Headset, Original",
            "sales": "3,000+  vendido(s)",
            "salePrice": "R$ 29,76",
            "originalPrice": "R$ 49,76"
        },
        {
            "productId": "1005003614954548",
            "image": "//ae01.alicdn.com/kf/Hfc635def2a124256b0b951c644923be1k/CCA-CRA-Hanging-In-Ear-Wired-HiFi-Headset-Monitor-Headphones-Noice-Cancelling-Sport-Gamer-Earbuds-Earphones.jpg_350x350xz.jpg",
            "nameItem": "CCA CRA Wired HiFi Headset, Pendurado no ouvido, Monitor de Auscultadores, Cancelamento de Ruído, Esporte Gamer Earbuds, KZ ZEX Pro NRA CA4",
            "sales": "700+  vendido(s)",
            "salePrice": "R$ 21,87",
            "originalPrice": "R$ 44,08"
        },
        {
            "productId": "1005006273432044",
            "image": "//ae01.alicdn.com/kf/Sf2344c32d686460baab7b30529391cb2o/Wireless-Bluetooth-Headphones-Children-s-Multi-color-Light-Headsets-with-Microphone-can-be-Inserted-SD-Card.jpg_350x350xz.jpg",
            "nameItem": "Fones de ouvido Bluetooth sem fio infantis, fones de ouvido multicoloridos com microfone, podem ser inseridos em cartão SD, fone de ouvido estéreo HIFi",
            "sales": "210  vendido(s)",
            "salePrice": "R$ 36,24",
            "originalPrice": "R$ 121,63"
        },
        {
            "productId": "1005006442452857",
            "image": "//ae01.alicdn.com/kf/Sf6e11dfd73c14559babe169a9f0b1274F/HAYLOU-S30-Wireless-Bluetooth-5-4-Headphones-43dB-Adaptive-Noise-Cancelling-Headsets-40mm-Driver-80H-Playtime.jpg_350x350xz.jpg",
            "nameItem": "HAYLOU S30 Fones de ouvido sem fio com Bluetooth 5.4 Fones de ouvido com cancelamento de ruído adaptável de 43 dB e driver de 40 mm Fones de ouvido com 80 horas de reprodução",
            "sales": "4,000+  vendido(s)",
            "salePrice": "R$ 286,98",
            "originalPrice": ""
        },
        {
            "productId": "1005005904358433",
            "image": "//ae01.alicdn.com/kf/S21789913337a4ee0bd59e05bff6aa5baF/Headphone-Wireless-Bluetooth-TWS-HIFI-Headset-Passiv-Noise-Reduction-Game-Earphone-Subwoofer-Earplug-for-Iphone-Sumsamg.jpg_350x350xz.jpg",
            "nameItem": "Sem Fio Bluetooth TWS Hifi Headphone, Hifi Headset, Passiv, Redução De Ruído, Fone De Ouvido Do Jogo, Subwoofer Earplug para iPhone, Samsung Fone De Ouvido",
            "sales": "700+  vendido(s)",
            "salePrice": "R$ 44,07",
            "originalPrice": "R$ 145,61"
        },
        {
            "productId": "1005006349013197",
            "image": "//ae01.alicdn.com/kf/S32349a232f3e4509b7ee6474040544e2u/Hanging-neck-sports-running-binaural-wireless-bluetooth-headset-Ultra-long-standby-time-bluetooth-headphones-wireless-headphones.jpg_350x350xz.jpg",
            "nameItem": "Auscultadores Sem Fios Bluetooth, Ultra Longo Tempo De Espera, Pescoço Pendurado, Esportes Correndo, Binaural, Auscultadores",
            "sales": "21  vendido(s)",
            "salePrice": "R$ 14,87",
            "originalPrice": "R$ 32,17"
        },
        {
            "productId": "1005006152108308",
            "image": "//ae01.alicdn.com/kf/S95d826dfa620476fadc332786b50750dO/USB-Headphones-Bluetooth-Physical-Noise-Reduction-Headsets-Stereo-Sound-Earphones-for-Phone-PC-Gaming-Earpiece-on.jpg_350x350xz.jpg",
            "nameItem": "USB Bluetooth Físico Noise Reduction Headphones, Fones de ouvido estéreo para telefone, PC, Gaming Earpiece on Head Gift",
            "sales": "461  vendido(s)",
            "salePrice": "R$ 10,53",
            "originalPrice": "R$ 66,02"
        },
        {
            "productId": "1005005114719500",
            "image": "//ae01.alicdn.com/kf/S19aebbb64cad43f5ba3f9c6693f9c04cy/Siindoo-JH919-Wireless-Bluetooth-Headphones-Foldable-Stereo-Earphones-Super-Bass-Noise-Reduction-Mic-For-Laptop-PC.jpg_350x350xz.jpg",
            "nameItem": "Siindoo JH919 Sem Fio Bluetooth Fones De Ouvido Estéreo Dobrável Super Bass Redução de Ruído Mic Para Laptop PC TV",
            "sales": "3,000+  vendido(s)",
            "salePrice": "R$ 25,70",
            "originalPrice": "R$ 106,25"
        }
    ]
    
    const dataToRender = fetchResults.length > 0 ? fetchResults : data
    return (
        <div className='bg-[#131313] min-h-screen max-h-screen overflow-hidden'>
            <Header searchItem={true} botName="aliexpress"/>
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

export default AliExpress