import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({product}) => {
    const navigate = useNavigate()
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={product.imgUrl} />
        <Card.Body>
          <Card.Title>{product.price}</Card.Title>
          <Card.Text>
            {product.brand}
          </Card.Text>
          <Button variant="primary" onClick={()=> navigate(`/products/${product.id}`)}>More details</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ProductCard