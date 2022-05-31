import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Container } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
import Meta from '../components/Meta'
import { listAProducts } from '../actions/productActions'

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword || 'latest product'

  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList
  const [pro,setPro] = useState({})

  useEffect(() => {
    listAProducts(keyword,pageNumber).then((d)=>setPro(d))
    // setPro(listAProducts(keyword, pageNumber))
    // dispatch(listAProducts(keyword, pageNumber))
    //console.log(listAProducts(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

  return (
    <>
   
       <Meta />
       <img class="image-image  image-hand" src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/223260f8-739d-4008-b12c-289bb8228bb71653585284419-Sportswear_Desk--1-.jpg" srcset=""></img>
      <br></br>
      <img class="image-image  image-hand" src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/29/66c8b8e7-783c-46bc-a4f6-8b3e88bd50c31653845168144-TravelFest_Desktop.jpg" srcset=""></img>
      
      
       
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to='/' className='btn btn-light'>
          Go Back
        </Link>
      )}
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            {
              (pro.search_results) ? pro?.search_results.map((product) => (
                (product?.price?.value) ?
                  <Col key={product.position} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                  </Col> :
                  console.log(product)
              )) : "Loading..."
          }
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )} 
     
      <Container className='homepage'>
      
      </Container>
    </>
  )
}

export default HomeScreen
