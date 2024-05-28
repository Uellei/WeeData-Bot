// ProductList.tsx
import React from "react"
import Cards, { Card, CustomHeaders } from "../Cards/Cards"

interface ProductListProps {
  data: Card[]
  headers: CustomHeaders
}

const ProductList = ({ data, headers }: ProductListProps) => {
  return (
    <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3 overflow-hidden pt-24 pb-5">
      {data.map((product, index) => (
        <Cards key={index} card={product} headers={headers} />
      ))}
    </div>
  )
}

export default ProductList
