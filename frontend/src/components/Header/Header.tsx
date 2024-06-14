import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { useFetchContext } from '../../contexts/FetchContext'

interface HeaderProps {
  searchItem: boolean
  botName?: string
  placeHolder: string
  showInput?: boolean
}

export function Header({ searchItem, botName, placeHolder, showInput=true }: HeaderProps) {
  const { setInputValue, setBotName } = useFetchContext()
  const [searchVisible, setSearchVisible] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [localInputValue, setLocalInputValue] = useState('')

  const handleSearchToggle = () => {
    setSearchVisible(!searchVisible)
  }

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalInputValue(e.target.value)
  }

  const handleButtonClick = () => {
    setInputValue(localInputValue)
    if (searchItem) {
      setBotName(botName ? botName : "")
    }
  }

  return (
    <header className='fixed top-0 w-full z-50 bg-white'>
      <nav className='bg-[#131313] pt-7 border-gray-200 px-4 lg:px-6 dark:bg-[#131313] z-50'>
        <div className='flex flex-wrap pb-5 border-b items-center mx-auto max-w-screen-2xl justify-between'>
          <a href="/" className='flex items-center'>
            <img src="" alt="" />
            <span className='self-center text-3xl mr-10 font-semibold whitespace-nowrap text-white lg:text-none'>WeeData Bot</span>
          </a>
          <div className='flex-grow items-center flex'>
            <div>
              <a href="/" className='self-center ml-20 text-2xl font-semibold text-white border-r pr-8'>Home</a>
            </div>
            <div className={`${menuOpen ? 'block' : 'hidden'} justify-between ml-10 items-center w-full lg:flex lg:w-auto lg:order-1`}>
              <ul className='flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0'>
                <li>
                  <a href="/aliexpress" className={`text-2xl block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 ${botName === "aliexpress" ? "text-white lg:hover:text-primary-700 lg:p-0 lg:hover:text-white hover:bg-gray-700 hover:text-white": "text-gray-700 lg:hover:text-primary-700 lg:p-0 text-gray-400 lg:hover:text-white hover:bg-gray-700 hover:text-white"} lg:hover:bg-transparent border-gray-700`}>AliExpress</a>
                </li>
                <li>
                  <a href="/amazon" className={`text-2xl block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 ${botName === "amazon" ? "text-white lg:hover:text-primary-700 lg:p-0 lg:hover:text-white hover:bg-gray-700 hover:text-white": "text-gray-700 lg:hover:text-primary-700 lg:p-0 text-gray-400 lg:hover:text-white hover:bg-gray-700 hover:text-white"} lg:hover:bg-transparent border-gray-700`}>Amazon</a>
                </li>
                <li>
                  <a href="/nike" className={`text-2xl block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 ${botName === "nike" ? "text-white lg:hover:text-primary-700 lg:p-0 lg:hover:text-white hover:bg-gray-700 hover:text-white": "text-gray-700 lg:hover:text-primary-700 lg:p-0 text-gray-400 lg:hover:text-white hover:bg-gray-700 hover:text-white"} lg:hover:bg-transparent border-gray-700`}>Nike</a>
                </li>
                <li>
                  <a href="/adidas" className={`text-2xl block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 ${botName === "adidas" ? "text-white lg:hover:text-primary-700 lg:p-0 lg:hover:text-white hover:bg-gray-700 hover:text-white": "text-gray-700 lg:hover:text-primary-700 lg:p-0 text-gray-400 lg:hover:text-white hover:bg-gray-700 hover:text-white"} lg:hover:bg-transparent border-gray-700`}>Adidas</a>
                </li>
                <li>
                  <a href="/kabum" className={`text-2xl block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 ${botName === "kabum" ? "text-white lg:hover:text-primary-700 lg:p-0 lg:hover:text-white hover:bg-gray-700 hover:text-white": "text-gray-700 lg:hover:text-primary-700 lg:p-0 text-gray-400 lg:hover:text-white hover:bg-gray-700 hover:text-white"} lg:hover:bg-transparent border-gray-700`}>Kabum</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='flex items-center lg:order-2'>
            <button onClick={handleSearchToggle} className='p-2 text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'>
              <SearchIcon fontSize='large' />
            </button>
            <button onClick={handleMenuToggle} type='button' className='inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600' aria-controls='mobile-menu-2' aria-expanded={menuOpen}>
              <span className='sr-only'>Open main menu</span>
              <svg className={`${menuOpen ? 'hidden' : 'block'} w-6 h-6`} fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clipRule='evenodd'></path></svg>
              <svg className={`${menuOpen ? 'block' : 'hidden'} w-6 h-6`} fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z' clipRule='evenodd'></path></svg>
            </button>
          </div>
          {showInput && (
            <div className={`${searchVisible ? 'flex' : 'hidden'} justify-end w-96 lg:flex lg:w-auto lg:order-1 relative mt-4 lg:mt-0`}>
              <input type='text' className='w-96 h-8 rounded-full pl-4 text-lg items-center justify-center relative' placeholder={placeHolder} value={localInputValue} onChange={handleInputChange}/>
              <div className='absolute top-4 right-1 transform -translate-y-1/2 w-10 h-7 bg-black rounded-full flex items-center justify-center text-white hover:bg-[#212121] cursor-pointer' onClick={handleButtonClick}>
                <SearchIcon fontSize='medium' />
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}
