import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Community from '../Components/Community'


function Home() {
  return (
    <>
    <div className='col-xs-6 col-lg-12' style={{textAlign:'center' ,marginTop:'18%'}}>
    <h2 className='fw-bold ' style={{fontSize:'60px'}}>Sell your products <br></br> hassle-free</h2>
    <h3>Easy-to-use eCommerce for creators. Sell merchandise or digital <br></br>products — all from one place.</h3>
    <button className='btn btn-success p-3 rounded'>Start 14-day free trial</button>
    <h6 className='mt-2 text-secondary'>No credit card required. Cancel anytime.</h6>
    <h5>Join a community <img src="https://assets-global.website-files.com/5f96916c846a8769a380ae65/65129c015cdfa1972fa200c0_RI5Ed1b.png" alt="" width={'5%'} /> of 32,000+ creators</h5>
    </div>
    <div className='col-xs-6 col-lg-12' style={{textAlign:'center',marginTop:'10%'}}>
      <img src="https://assets-global.website-files.com/5f96916c846a8769a380ae65/608011aa0b8aee8953ffaebc_sellfy-store-p-800.png" alt="" width={'100%'}/>
    </div>
    <div style={{backgroundColor:'whitesmoke',marginBottom:'10%'}}>
      <div style={{textAlign:"center"}}>
        <h2 className='fw-bold' style={{fontSize:"40px",marginTop:'10%'}}>Get your store up and <br></br>running in 5 minutes</h2>
        <h3 className='text-secondary'>Ideal for creators and online businesses who hate <br></br>complexity but want results.</h3>
      </div>
      <div className='row d-flex justify-content-center '>
        <div className='col-xs-6 col-lg-5  rounded' style={{backgroundColor:'limegreen'}}>
          <div className='text-light ms-5 mt-5' style={{marginRight:'20%'}}>
            <h3 className='fs-1 fw-bold' >Start easily</h3>
            <p>Create a store in a couple of clicks. Sign
              <br /> up, add your products, customize your
              <br /> store and you're live.</p>
          </div>
          <div className='mt-5 ms-5'>
            <img src="https://assets-global.website-files.com/5f96916c846a8769a380ae65/5f97f06772345e4c10c0f4e4_start-easily%403x.png" alt=""width={'80%'}/>
          </div>
        </div>
        <div className='col-xs-6 col-lg-5' style={{paddingLeft:'2%'}}>
 
           
            <div className='img3  rounded'>
            <div className='p-4'>
              <h3 className='fs-1 fw-bold text-light mt-3 ps-3'>Grow big</h3>
              <p className='text-light ps-3'>Use built-in marketing features <br></br>to grow your sales and business.</p>
           </div>
              </div>
         
          <div className='d-flex justify-content-center rounded' style={{backgroundColor:'white',paddingTop:'3%'}}>
            <div className='p-4'>
              <h3 className='fs-1 fw-bold'>Sell Anywhere</h3>
              <p>Reach your audience and sell directly on social media, your own website or anywhere else with a custom storefront</p>
            </div>
            <div style={{marginTop:'5%'}}>
              <img src="https://assets-global.website-files.com/5f96916c846a8769a380ae65/5f97f116c71943ce09f0f49e_sell-anywhere%403x-p-500.png" alt="" width={'100%'} />
            </div>
          </div>
        </div>
      </div>
    </div>


   



  
      <Row style={{padding:'20px',alignItems:'center'}}>
        <Col xs={6} md={6} lg={3} >
          <div>
            <img src="https://assets-global.website-files.com/5f96916c846a8769a380ae65/5fc907c963409abd54d5a5c7_built-in.svg" alt="" />
            <h3>Built-in print on demand</h3>
            <p>Launch your print on demand merch store within minutes. Design, create and sell from one storefront.</p>
          </div>
        </Col>
        <Col xs={6} md={6} lg={3} >
          <div>
            <img src="https://assets-global.website-files.com/5f96916c846a8769a380ae65/5fc907c9d026f3936ae2fe38_digital.svg" alt="" />
            <h3>Digital Products</h3>
            <p>Sell your digital goods without the technical headaches. File hosting, delivery — everything's included.</p>
          </div>
        </Col>
        <Col xs={6} md={6} lg={3} >
        <div >
          <img src="https://assets-global.website-files.com/5f96916c846a8769a380ae65/5fc907c83a282c41ea429e6f_website-embed.svg" alt=""/>
          <h3>Website embed</h3>
          <p>Easily add a “buy now” button, shopping cart and more to your website with just a simple copy— paste.</p>
        </div>
        </Col>
        <Col xs={6} md={6} lg={3} >
        <div>
          <img src="https://assets-global.website-files.com/5f96916c846a8769a380ae65/5fc907c8ff26a9bd6f00fa8c_support.svg" alt="" />
          <h3>24/7 Support</h3>
          <p>A helping hand whenever you need it. An excellent support team available 24/7.</p>
        </div>
        </Col>
       
      </Row>

      <div>
        <Community/>
      </div>


 
  <div className='img d-flex justify-content-center'>
    <div className='my-auto text-center'>
    <h2 className='text-light fs-1 fw-bold'>Open your online store today!</h2>
    <button className='btn text-success btn-secondary p-4 mt-4'>Start 14-day free trial</button>
    <p className='text-light mt-2'>No card required. Cancel anytime.</p>

  </div>
</div>

      
    </>
  )
}

export default Home