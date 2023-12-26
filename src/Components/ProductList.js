import React from "react"
import { products } from "../data"
import ProductCard from "./ProductCard"

const ProductList = () => {
  return (
    <div>
      {
        <div
          style={{
            display: "flex",
            margin: "20px",
          }}
        >
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      }
    </div>
  )
}

export default ProductList
