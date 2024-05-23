import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { useFetchContext } from '../../contexts/FetchContext'

interface HeaderProps {
  searchItem: boolean
}

export function Header({ searchItem }: HeaderProps) {
  const { inputValue, setInputValue, fetchData } = useFetchContext()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleButtonClick = () => {
    fetchData()
  }

  return (
    <header className=''>
      <nav className='bg-white pt-7 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-[#131313]'>
        <div className='flex flex-wrap pb-5 border-b items-center mx-auto max-w-screen-2xl'>
          <a href="/" className='flex items-center'>
            <img src="" alt="" />
            <span className='self-center text-3xl mr-10 font-semibold whitespace-nowrap dark:text-white'>SEILA LINDA</span>
          </a>
          <div className='flex-grow items-center flex'>
            <div>
              <a href="/" className='self-center ml-20 text-2xl font-semibold dark:text-white border-r pr-8'>Home</a>
            </div>
            <div className='hidden justify-between ml-10 items-center w-full lg:flex lg:w-auto lg:order-1'>
              <ul className='flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0'>
                <li>
                  <a href="/aliexpress" className='text-2xl block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700'>AliExpress</a>
                </li>
                <li>
                  <a href="/amazon" className='text-2xl block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700'>Amazon</a>
                </li>
                <li>
                  <a href="/nike" className='text-2xl block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700'>Nike</a>
                </li>
                <li>
                  <a href="/adidas" className='text-2xl block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700'>Adidas</a>
                </li>
              </ul>
            </div>
          </div>
          {searchItem && (
          <div className='hidden justify-end w-96 lg:flex lg:w-auto lg:order-1 relative'>
            <input type="text" className='w-96 h-8 rounded-full w-full h-16 pl-4 text-lg items-center justify-center relative' placeholder='Fone de ouvido' value={inputValue} onChange={handleInputChange} />
            <div className="absolute top-4 right-1 transform -translate-y-1/2 w-10 h-7 bg-black rounded-full flex items-center justify-center text-white hover:bg-[#212121] cursor-pointer" onClick={handleButtonClick}>
              <SearchIcon fontSize='medium' />
            </div>
          </div>
          )}
        </div>
      </nav>
    </header>
  )
}
