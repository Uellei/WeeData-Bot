import React from "react"
import { Header } from "../components/Header/Header"
import { useFetchContext } from "../contexts/FetchContext"
import ProductCarousel from "../components/Carousel/ProductCarousel"



const Kabum = () => {
    const { fetchResults, isLoading } = useFetchContext()

    const headers = {
        "accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
        "accept-language": "en-US,en;q=0.9,pt;q=0.8",
        "sec-ch-ua": "\"Chromium\";v=\"124\", \"Google Chrome\";v=\"124\", \"Not-A.Brand\";v=\"99\"",
    }

    const data = [
        {
            "productId": "https://www.kabum.com.br/produto/376154/ssd-externo-portatil-sandisk-extreme-pro-v2-1tb-usb-3-1-leitura-2-000-mb-s-gravacao-2-000-mb-s-preto-e-laranja-sdssde81-1t00-g25",
            "image": "https://images.kabum.com.br/produtos/fotos/376154/ssd-externo-portatil-sandisk-extreme-pro-1tb-leitura-2-000-mb-s-gravacao-2-000-mb-s-usb-3-1-preto-e-laranja-sdssde81-1t00-g25_1669137847_m.jpg",
            "nameItem": "SSD Externo Portátil SanDisk Extreme PRO V2, 1TB, USB 3.1, Leitura: 2.000 MB/s, Gravação: 2.000 MB/s, Preto e Laranja - SDSSDE81-1T00-G25",
            "sales": "",
            "stars": "",
            "salePrice": "R$ 899,99",
            "originalPrice": "R$ 1.294,11"
        },
        {
            "productId": "https://www.kabum.com.br/produto/380745/ssd-1-tb-kingston-nv2-m-2-2280-pcie-nvme-leitura-3500-mb-s-e-gravacao-2100-mb-s-snv2s-1000g",
            "image": "https://images.kabum.com.br/produtos/fotos/380745/ssd-kingston-nv2-1-tb-m-2-2280-pcie-nvme-leitura-2-100-mb-s-e-gravacao-1-700-mb-s-snv2s-1000g_1666033119_m.jpg",
            "nameItem": "SSD 1 TB Kingston NV2, M.2 2280 PCIe, NVMe, Leitura: 3500 MB/s e Gravação: 2100 MB/s - SNV2S/1000G",
            "sales": "",
            "stars": "",
            "salePrice": "R$ 399,99",
            "originalPrice": "R$ 555,54"
        },
        {
            "productId": "https://www.kabum.com.br/produto/85198/ssd-480-gb-kingston-a400-sata-leitura-500mb-s-e-gravacao-450mb-s-sa400s37-480g",
            "image": "https://images.kabum.com.br/produtos/fotos/85198/85198_1484306114_m.jpg",
            "nameItem": "SSD 480 GB Kingston A400, SATA, Leitura: 500MB/s e Gravação: 450MB/s - SA400S37/480G",
            "sales": "",
            "stars": "",
            "salePrice": "R$ 229,99",
            "originalPrice": "R$ 317,64"
        },
        {
            "productId": "https://www.kabum.com.br/produto/85197/ssd-240-gb-kingston-a400-sata-leitura-500mb-s-e-gravacao-350mb-s-sa400s37-240g",
            "image": "https://images.kabum.com.br/produtos/fotos/85197/85197_1484306076_m.jpg",
            "nameItem": "SSD 240 GB Kingston A400, SATA, Leitura: 500MB/s e Gravação: 350MB/s - SA400S37/240G",
            "sales": "",
            "stars": "",
            "salePrice": "R$ 169,99",
            "originalPrice": "R$ 235,28"
        },
        {
            "productId": "https://www.kabum.com.br/produto/380744/ssd-500-gb-kingston-nv2-m-2-2280-pcie-nvme-leitura-3500-mb-s-e-gravacao-2100-mb-s-snv2s-500g",
            "image": "https://images.kabum.com.br/produtos/fotos/380744/ssd-kingston-nv2-500-gb-m-2-2280-pcie-nvme-leitura-2-100-mb-s-e-gravacao-1-700-mb-s-snv2s-500g_1666032961_m.jpg",
            "nameItem": "SSD 500 GB Kingston NV2, M.2 2280 PCIe, NVMe, Leitura: 3500 MB/s e Gravação: 2100 MB/s - SNV2S/500G",
            "sales": "",
            "stars": "",
            "salePrice": "R$ 279,99",
            "originalPrice": "R$ 355,54"
        },
        {
            "productId": "https://www.kabum.com.br/produto/95217/ssd-960-gb-kingston-a400-sata-leitura-500mb-s-e-gravacao-450mb-s-sa400s37-960g",
            "image": "https://images.kabum.com.br/produtos/fotos/95217/95217_1520016025_m.jpg",
            "nameItem": "SSD 960 GB Kingston A400, SATA, Leitura: 500MB/s e Gravação: 450MB/s - SA400S37/960G",
            "sales": "",
            "stars": "",
            "salePrice": "R$ 389,99",
            "originalPrice": "R$ 544,43"
        },
        {
            "productId": "https://www.kabum.com.br/produto/483834/ssd-128gb-kbm-gaming-sata-iii-leitura-570-mb-s-gravacao-500-mb-s-kgssd100128",
            "image": "https://images.kabum.com.br/produtos/fotos/483834/ssd-128gb-kbm-gaming-sata-iii-leitura-570-mb-s-gravacao-500-mb-s-kgssd100128_1700654972_m.jpg",
            "nameItem": "SSD 128GB KBM! Gaming, SATA III, Leitura 570 MB/s, Gravação 500 MB/s - KGSSD100128",
            "sales": "",
            "stars": "",
            "salePrice": "R$ 79,99",
            "originalPrice": "R$ 117,64"
        },
        {
            "productId": "https://www.kabum.com.br/produto/105015/ssd-240-gb-adata-su650-sata-leitura-520mb-s-e-gravacao-450mb-s-asu650ss-240gt-r",
            "image": "https://images.kabum.com.br/produtos/fotos/105015/ssd-adata-su650-240gb-sata-leitura-520mb-s-gravacao-450mb-s-asu650ss-240gt-r_ssd-adata-su650-240gb-sata-leitura-520mb-s-gravacao-450mb-s-asu650ss-240gt-r_1570554676_m.jpg",
            "nameItem": "SSD 240 GB Adata SU650, SATA, Leitura: 520MB/s e Gravação: 450MB/s - ASU650SS-240GT-R",
            "sales": "",
            "stars": "",
            "salePrice": "R$ 139,99",
            "originalPrice": "R$ 211,75"
        },
        {
            "productId": "https://www.kabum.com.br/produto/483850/ssd-1tb-kbm-gaming-m-2-nvme-pcie-leitura-2400-mb-s-gravacao-1800-mb-s-kgssd300100",
            "image": "https://images.kabum.com.br/produtos/fotos/483850/ssd-1tb-kbm-gaming-m-2-nvme-pcie-leitura-2400-mb-s-gravacao-1800-mb-s-kgssd300100_1700655718_m.jpg",
            "nameItem": "SSD 1TB KBM! Gaming, M.2 NVMe, PCIe, Leitura 2400 MB/s, Gravação 1800 MB/s - KGSSD300100",
            "sales": "(31)",
            "stars": "5",
            "salePrice": "R$ 399,99",
            "originalPrice": ""
        },
        {
            "productId": "https://www.kabum.com.br/produto/483849/ssd-512gb-kbm-gaming-m-2-nvme-pcie-leitura-2200-mb-s-gravacao-1600-mb-s-kgssd300512",
            "image": "https://images.kabum.com.br/produtos/fotos/483849/ssd-512gb-kbm-gaming-m-2-nvme-pcie-leitura-2200-mb-s-gravacao-1600-mb-s-kgssd300512_1700657829_m.jpg",
            "nameItem": "SSD 512GB KBM! Gaming, M.2 NVMe, PCIe, Leitura 2200 MB/s, Gravação 1600 MB/s - KGSSD300512",
            "sales": "(22)",
            "stars": "5",
            "salePrice": "R$ 199,99",
            "originalPrice": ""
        },
        {
            "productId": "https://www.kabum.com.br/produto/147640/ssd-480gb-wd-green-pc-sn350-pcie-nvme-leitura-2400mb-s-e-gravacao-1650mb-s-wds480g2g0c",
            "image": "https://images.kabum.com.br/produtos/fotos/147640/ssd-wd-green-pc-sn350-480gb-pcie-nvme-leitura-2400mb-s-escrita-900mb-s-wds480g2g0c_1612534888_m.jpg",
            "nameItem": "SSD 480GB WD Green PC SN350, PCIe, NVMe, Leitura: 2400MB/s e Gravação: 1650MB/s - WDS480G2G0C",
            "sales": "",
            "stars": "",
            "salePrice": "R$ 219,99",
            "originalPrice": "R$ 329,53"
        },
        {
            "productId": "https://www.kabum.com.br/produto/483837/ssd-256gb-kbm-gaming-m-2-nvme-pcie-leitura-1800-mb-s-gravacao-1300-mb-s-kgssd300256",
            "image": "https://images.kabum.com.br/produtos/fotos/483837/ssd-256gb-kbm-gaming-m-2-nvme-pcie-leitura-1800-mb-s-gravacao-1300-mb-s-kgssd300256_1700657337_m.jpg",
            "nameItem": "SSD 256GB KBM! Gaming, M.2 NVMe, PCIe, Leitura 1800 MB/s, Gravação 1300 MB/s - KGSSD300256",
            "sales": "",
            "stars": "",
            "salePrice": "R$ 139,99",
            "originalPrice": "R$ 188,22"
        },
        {
            "productId": "https://www.kabum.com.br/produto/380746/ssd-kingston-nv2-2-tb-m-2-2280-pcie-nvme-leitura-3500-mb-s-e-gravacao-2800-mb-s-snv2s-2000g",
            "image": "https://images.kabum.com.br/produtos/fotos/380746/ssd-kingston-nv2-2-tb-m-2-2280-pcie-nvme-leitura-2-100-mb-s-e-gravacao-1-700-mb-s-snv2s-2000g_1666033248_m.jpg",
            "nameItem": "SSD Kingston NV2 2 TB, M.2 2280 PCIe, NVMe, Leitura: 3500 MB/s e Gravação: 2800 MB/s - SNV2S/2000G",
            "sales": "",
            "stars": "",
            "salePrice": "R$ 699,99",
            "originalPrice": "R$ 888,88"
        },
        {
            "productId": "https://www.kabum.com.br/produto/100014/ssd-120-gb-adata-su650-sata-leitura-520mb-s-e-gravacao-450mb-s-asu650ss-120gt-r",
            "image": "https://images.kabum.com.br/produtos/fotos/100014/ssd-adata-su650-120gb-sata-iii-leitura-520mb-s-gravacao-450mb-s-asu650ss-120gt-r_1548777922_m.jpg",
            "nameItem": "SSD 120 GB Adata SU650, SATA, Leitura: 520MB/s e Gravação: 450MB/s - ASU650SS-120GT-R",
            "sales": "",
            "stars": "",
            "salePrice": "R$ 99,99",
            "originalPrice": "R$ 141,16"
        },
        {
            "productId": "https://www.kabum.com.br/produto/338391/ssd-240-gb-wd-green-sata-leitura-545mb-s-e-gravacao-430mb-s-wds240g3g0a",
            "image": "https://images.kabum.com.br/produtos/fotos/338391/ssd-wd-green-240gb-sata-leitura-545mb-s-gravacao-430mb-s-wds240g3g0a_1652465445_m.jpg",
            "nameItem": "SSD 240 GB WD Green, SATA, Leitura: 545MB/s e Gravação: 430MB/s - WDS240G3G0A",
            "sales": "",
            "stars": "",
            "salePrice": "R$ 154,99",
            "originalPrice": "R$ 258,81"
        },
        {
            "productId": "https://www.kabum.com.br/produto/272356/ssd-1-tb-kingston-fury-renegade-m-2-2280-pcie-nvme-leitura-7300mb-s-e-gravacao-6000mb-s-preto-sfyrs-1000g",
            "image": "https://images.kabum.com.br/produtos/fotos/272356/ssd-kingston-fury-renegade-1000gb-m-2-2280-pcie-nvme-leituras-7-300mb-s-gravacao-6-000mb-s-sfyrs-1000g_1637328670_m.jpg",
            "nameItem": "SSD 1 TB Kingston Fury Renegade, M.2 2280 PCIe, NVMe, Leitura: 7300MB/s e Gravação: 6000MB/s, Preto - SFYRS/1000G",
            "sales": "",
            "stars": "",
            "salePrice": "R$ 799,99",
            "originalPrice": "R$ 1.058,81"
        },
        {
            "productId": "https://www.kabum.com.br/produto/483847/ssd-512gb-kbm-gaming-sata-iii-leitura-520-mb-s-gravacao-450-mb-s-kgssd100512",
            "image": "https://images.kabum.com.br/produtos/fotos/483847/ssd-512gb-kbm-gaming-sata-iii-leitura-520-mb-s-gravacao-450-mb-s-kgssd100512_1700659107_m.jpg",
            "nameItem": "SSD 512GB KBM! Gaming, SATA III, Leitura 520 MB/s, Gravação 450 MB/s - KGSSD100512",
            "sales": "",
            "stars": "",
            "salePrice": "R$ 229,99",
            "originalPrice": "R$ 317,64"
        },
        {
            "productId": "https://www.kabum.com.br/produto/476239/ssd-externo-portatil-kingston-1tb-usb-3-2-leitura-1-050mb-s-e-gravacao-1-050mb-s-sxs1000-1000g",
            "image": "https://images.kabum.com.br/produtos/fotos/476239/ssd-externo-portatil-kingston-1tb-usb-3-2-leitura-1-050mb-s-e-gravacao-1-050mb-s-sxs1000-1000g_1693847475_m.jpg",
            "nameItem": "SSD Externo Portátil Kingston 1TB, USB 3.2, Leitura: 1.050MB/s e Gravação: 1.050MB/s - SXS1000/1000G",
            "sales": "",
            "stars": "",
            "salePrice": "R$ 469,99",
            "originalPrice": "R$ 670,58"
        },
        {
            "productId": "https://www.kabum.com.br/produto/105016/ssd-480-gb-adata-ultimate-su650-leitura-520mb-s-gravacao-450mb-s-asu650ss-480gt-r",
            "image": "https://images.kabum.com.br/produtos/fotos/105016/ssd-adata-su650-480gb-sata-leitura-520mb-s-gravacao-450mb-s-asu650ss-480gt-r_ssd-adata-su650-480gb-sata-leitura-520mb-s-gravacao-450mb-s-asu650ss-480gt-r_1570555401_m.jpg",
            "nameItem": "SSD 480 GB Adata Ultimate SU650, Leitura: 520MB/s, Gravação: 450MB/s - ASU650SS-480GT-R",
            "sales": "(79)",
            "stars": "5",
            "salePrice": "R$ 219,99",
            "originalPrice": ""
        },
        {
            "productId": "https://www.kabum.com.br/produto/311954/ssd-1-tb-wd-black-sn770-m-2-pcie-gen4x4-nvme-leitura-5150mb-s-e-gravacao-4900mb-s-wds100t3x0e",
            "image": "https://images.kabum.com.br/produtos/fotos/311954/ssd-wd-black-sn770-1tb-m-2-pcie-gen4x4-nvme-leitura-5150mb-s-gravacao-4900mb-s-wds100t3x0e_1645633305_m.jpg",
            "nameItem": "SSD 1 TB WD Black SN770, M.2, PCIe Gen4x4, NVMe, Leitura: 5150MB/s e Gravação: 4900MB/s - WDS100T3X0E",
            "sales": "",
            "stars": "",
            "salePrice": "R$ 559,99",
            "originalPrice": "R$ 764,69"
        }
    ]

    const dataToRender = fetchResults.length > 0 ? fetchResults : data
    return (
        <div className='bg-[#131313] min-h-screen'>
            <Header searchItem={true} botName="kabum" />
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

export default Kabum