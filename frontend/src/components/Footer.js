import React from 'react'


const Footer = () => {
  return (
    // <footer>
    //   <Container>
    //     <Row>
    //       <Col className='text-center py-3'>Copyright &copy; ProShop</Col>
    //     </Row>
    //   </Container>
    // </footer>
    <footer  bgColor='light' className='footer'>
    {/* <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
      <div className='me-5 d-none d-lg-block'>
        <span>Get connected with us on social networks:</span>
      </div>

      <div>
        <a href='' className='me-4 text-reset'>
          <i className='fab fa-facebook-f'></i>
        </a>
        <a href='' className='me-4 text-reset'>
          <i className='fab fa-twitter'></i>
        </a>
        <a href='' className='me-4 text-reset'>
          <i className='fab fa-google'></i>
        </a>
        <a href='' className='me-4 text-reset'>
          <i className='fab fa-instagram'></i>
        </a>
        <a href='' className='me-4 text-reset'>
          <i className='fab fa-linkedin'></i>
        </a>
        <a href='' className='me-4 text-reset'>
          <i className='fab fa-github'></i>
        </a>
      </div>
    </section> */}

    <section className='footergreen'>
      <div className='container text-center text-md-start mt-5'>
        <div className='row mt-3'>
          <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>
              <i className='fas fa-gem me-3'></i>PROSHOP
            </h6>
            <p>
              PROSHOP is a shopping website since 2022 building trust of customers and provide the best  products.
              
             
            </p>
          </div>

         

          <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
            <p>
              <a href='#!' className='text-reset'>
                Pricing
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Settings
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Orders
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Help
              </a>
            </p>
          </div>

          <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Follow us</h6>
            <p>
              {/* <a href='#!' className='text-reset'>
                facebook
              </a> */}
            
              <a href='' className='me-4 text-reset'>
          <i className='fab fa-facebook-f'></i>
         
        </a>
            </p>
            <p>
            <a href='https://www.instagram.com/dinesh_kumar5050/?hl=en' className='me-4 text-reset'>
          <i className='fab fa-instagram'></i>
        </a>
            </p>
            <p>
            <a href='' className='me-4 text-reset'>
          <i className='fab fa-github'></i>
        </a>


            </p>
            <p>
               <a href='' className='me-4 text-reset'>
          <i className='fab fa-linkedin'></i>
        </a>
            </p>
          </div>

          <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
            <p>
              <i className='fas fa-home me-3'></i> TALCHER IGIT SARANGA
            </p>
            <p>
              <i className='fas fa-envelope me-3'></i>
              proshopinyourhand@gmail.com
            </p>
            <p>
              <i className='fas fa-phone me-3'></i> +91 9861947389
            </p>
            <p>
              <i className='fas fa-print me-3'></i> +91 7377380586
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      © 2022 Copyright:
      <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
        MDBootstrap.com
      </a>
    </div> */}
  </footer>
  )
}

export default Footer
// import React from "react";

// // reactstrap components
// // import {
// //
// // } from "reactstrap";

// // Core Components
// import Footer3 from "components/footers/Footer3.js";

// function Example() {
//   return (
//     <>
//       <Footer3 />
//     </>
//   );
// }

// export default Example;
