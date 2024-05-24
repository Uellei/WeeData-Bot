import React from "react"
import SearchIcon from '@mui/icons-material/Search';

const SearchInput = ({ inputValue, setInputValue, handleSearch }: any) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  return (
    <div className="w-full relative">
      <input
        type="text"
        className="w-full h-16 rounded-full pl-8 pr-16 text-3xl"
        placeholder="Fone de ouvido"
        value={inputValue}
        onChange={handleInputChange}
      />
      <div
        className="absolute right-2 top-1/2 transform -translate-y-1/2 w-20 h-14 bg-black rounded-full flex items-center justify-center text-white hover:bg-[#212121] cursor-pointer"
        onClick={handleSearch}
      >
        <SearchIcon fontSize="large" />
      </div>
    </div>
  )
}

export default SearchInput