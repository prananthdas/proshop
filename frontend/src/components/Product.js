import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({ product }) => {
  console.log(product?.price?.value);
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product.position}`}>
        <Card.Img src={product.image} variant='top' />
      </Link>

      <Card.Body>
        <Link to={`/product/${product.position}`}>
          <Card.Title as='div'>
            <strong>{product.title}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.ratings_total} reviews`}
          />
        </Card.Text>

        <Card.Text as='h3'>₹{product?.price?.value}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
