import React, { useEffect, useRef, useState } from "react";

const Dropdown = ({ choseWebsite, setChoseWebsite }: any) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const websites = [
    { name: "aliexpress", label: "Aliexpress" },
    { name: "amazon", label: "Amazon" },
    { name: "nike", label: "Nike" },
    { name: "adidas", label: "Adidas" }
  ]

  const handleClick = (website: string) => {
    setChoseWebsite(website)
    setIsOpen(false)
  }

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("click", handler)

    return () => document.removeEventListener("click", handler)
  }, [])

  return (
    <div className="mt-10 relative">
      <button
        id="dropdownDefaultButton"
        onClick={() => setIsOpen(!isOpen)}
        className="text-xl bg-[#e5bf7f] focus:outline-none font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center min-w-52"
        type="button"
      >
        {choseWebsite}
        <svg className={`w-5 h-5 ml-auto ease-in-out duration-300 ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
        </svg>
      </button>

      {isOpen && (
        <div id="dropdown" className="z-10 bg-white divide-y rounded-lg shadow w-full dark:bg-[#e5bf7f] absolute mt-2" style={{ minWidth: 'max-content' }}>
          <ul className="text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
            {websites.map((website) => (
              <li key={website.name}>
                <span onClick={() => handleClick(website.name)} className="block px-4 py-2 hover:bg-white dark:hover:bg-white dark:hover:text-black text-black cursor-pointer text-xl">
                  {website.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Dropdown