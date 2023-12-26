import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { products } from "../data"
import { Button, Card, Spinner } from "react-bootstrap"

const ProductDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const foundProduct = products.find((el) => el.id === Number(id))
    setProduct(foundProduct)
    setInterval(() => {
      setLoading(false)
    }, 2000)
  }, [id])

  return (
    <div>
      {loading ? 
        <Spinner animation="border" variant="primary" />
       : 
        <>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={product.imgUrl} />
            <Card.Body>
              <Card.Title>{product.price}</Card.Title>
              <Card.Text>{product.brand}</Card.Text>
              <Card.Text>{product.description}</Card.Text>

              <Button variant="primary" onClick={() => navigate(-1)}>
                Back
              </Button>
            </Card.Body>
          </Card>
        </>
      }
    </div>
  )
}

export default ProductDetails
