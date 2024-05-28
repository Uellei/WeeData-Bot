import React, { useState } from 'react'
import { Header } from '../components/Header/Header'
import { useNavigate, } from 'react-router-dom'
import { useFetchContext } from '../contexts/FetchContext'
import SearchInput from '../components/SearchInput/SearchInput'
import Dropdown from '../components/MenuDropdown/Dropdown'

import { ReactComponent as RoboIcon } from "../assets/img/robot.svg"
import { ReactComponent as RoboHandIcon } from "../assets/img/robot-hand.svg"
// Marcas
import { ReactComponent as NikeIcon } from "../assets/img/nike-logo.svg"
import { ReactComponent as AliexpressIcon } from "../assets/img/aliexpress-logo.svg"
import { ReactComponent as AmazonIcon } from "../assets/img/amazon-logo.svg"
import { ReactComponent as AdidasIcon } from "../assets/img/adidas-logo.svg"
import { ReactComponent as KabumIcon } from "../assets/img/logo_kabum_TPcDkR.svg"

// Technologies
import { ReactComponent as FigmaIcon } from "../assets/img/figma-logo.svg"
import { ReactComponent as TypeScriptIcon } from "../assets/img/typescript-logo.svg"
import { ReactComponent as ReactIcon } from "../assets/img/react-logo.svg"
import { ReactComponent as PythonIcon } from "../assets/img/python-logo.svg"
import { ReactComponent as TailwindIcon } from "../assets/img/tailwind-logo.svg"


function Home() {
  const [choseWebsite, setChoseWebsite] = useState<string>("Chose Website")

  const navigate = useNavigate()
  const { inputValue, setInputValue, setBotName, fetchData } = useFetchContext()

  const handleSearch = async () => {
    const routes = ['aliexpress', 'amazon', 'nike', 'adidas'];
    if (routes.includes(choseWebsite)) {
      setBotName(choseWebsite);
      fetchData();
      navigate(`/${choseWebsite}`);
    } else {
      showPopupError();
    }
  }

  const showPopupError = () => {
    alert('A rota não existe. Por favor, verifique e tente novamente.')
  }

  return (
    <div className="bg-[#131313] min-h-screen overflow-hidden pt-24">
      {/* <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <RoboHandIcon className="drop-shadow-custom" />
        </div>
      </div> */}
      <Header searchItem={false} />
      <div className="relative container p-8 mt-20 mx-auto xl:px-0 flex w-full flex-col items-center justify-center text-center">
        <div className="text-2xl font-semibold tracking-tight text-[#e5bf7f]">
          Designed by Weslley
        </div>
        <h2 className="inline-block text-white max-w-3xl mt-10 text-4xl font-medium leading-snug tracking-tight lg:leading-tight lg:text-6xl">
          High-quality Data Scrapping
        </h2>
        <div className="absolute right-0 top-3 rotate-30 bg-inherit">
          <RoboIcon className='drop-shadow-custom animate-float' />
        </div>
        <p className="inline-block max-w-2xl mt-8 py-4 text-lg leading-normal text-gray-500 lg:text-xl dark:text-gray-600">
          A collection of products and well-extracted data from renowned websites.
        </p>
      </div>
      <div className="flex items-center mt-16 flex-col container justify-center mx-auto text-center w-full relative">
        <SearchInput inputValue={inputValue} setInputValue={setInputValue} handleSearch={handleSearch} />
        <Dropdown choseWebsite={choseWebsite} setChoseWebsite={setChoseWebsite} />
      </div>
      <div className="py-4 flex items-center justify-center mt-20 relative">
        <div className="flex border-r h-14 mr-14 mt-5 pr-14 items-center space-x-10">
          <NikeIcon className='hover:scale-125 duration-500 cursor-pointer' />
          <AliexpressIcon className='hover:scale-125 duration-500 cursor-pointer' />
          <AmazonIcon className='hover:scale-125 duration-500 cursor-pointer' />
          <AdidasIcon className='hover:scale-125 duration-500 cursor-pointer' />
          <KabumIcon className='hover:scale-125 duration-500 cursor-pointer' />
        </div>
        <div className="flex items-center space-x-10 mt-5">
          <p className="text-2xl text-white mr-12 font-medium">Created with</p>
          <FigmaIcon className='hover:scale-125 duration-500 cursor-pointer' />
          <TypeScriptIcon className='hover:scale-125 duration-500 cursor-pointer' />
          <ReactIcon className='hover:scale-125 duration-500 cursor-pointer' />
          <PythonIcon className='hover:scale-125 duration-500 cursor-pointer' />
          <TailwindIcon className='hover:scale-125 duration-500 cursor-pointer' />
        </div>
      </div>
    </div>
  )
}

export default Home
