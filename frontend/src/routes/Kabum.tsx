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

    const data = [""]

    const dataToRender = fetchResults.length > 0 ? fetchResults : data
    return (
        <div className='bg-[#131313] min-h-screen max-h-screen overflow-hidden'>
            <Header searchItem={true} botName="kabum"/>
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