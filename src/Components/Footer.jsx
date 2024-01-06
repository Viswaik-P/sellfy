import React from 'react'

function Footer() {
  return (
<>

   <div className='row d-flex flex-wrap ' style={{justifyContent:'center',padding:'5%' }}>
      <div className='col-6  col-lg-2  '>
        <h3>Product</h3>
         <ul style={{listStyle:'none',padding:'1%',marginTop:'15%'}}>
          <li>Home</li>
          <li>Features</li>
          <li>Pricing</li>
         </ul>
      </div>
      <div className='col-6 col-sm-6 col-lg-2 '>
        <h3>Use Cases</h3>
         <ul style={{listStyle:'none',padding:'1%',marginTop:'15%'}}>
          <li>Digital Downloads</li>
          <li>Merchandise</li>
          <li>Subscriptions</li>
         </ul>
      </div>
      <div className='col-6 col-lg-2  '>
        <h3>Company</h3>
         <ul style={{listStyle:'none',padding:'1%',marginTop:'15%'}}>
          <li>About</li>
          <li>Affilates</li>
          <li>Sitemap</li>
         </ul>
      </div>
      <div className='col-6 col-lg-2  '>
        <h3>Useful resources</h3>
         <ul style={{listStyle:'none',padding:'1%',marginTop:'15%'}}>
          <li>Blog</li>
          <li>Podcast</li>
          <li>Getting started</li>
          <li>Digital product ideas</li>
          <li>Creating merch</li>
         </ul>
      </div>
      <div className='col-6 col-lg-2  '>
        <h3>Contact</h3>
         <ul style={{listStyle:'none',padding:'1%',marginTop:'15%'}}>
          <li>Contact support</li>
          <li>Help Docs</li>
         </ul>
      </div>
      <div className='col-6 col-lg-2  '>
         <ul style={{listStyle:'none',padding:'1%',marginTop:'25%'}}>
          <li>Terms</li>
          <li>Privacy policy</li>
         </ul>
      </div>
    </div>

    <hr />
    <div className=' d-flex flex-row'>
    <div className='col-xs-6 col-lg-6 d-flex m-3 ms-5'>
    <i class="fa-solid fa-globe mt-1 me-2"></i>
      <h5>English</h5>
    </div>
    <div className='col-xs-6 col-lg-6' style={{marginLeft:'20%',marginTop:'1%'}} >
    <i class="fa-brands fa-instagram ms-3"></i>
    <i class="fa-brands fa-twitter ms-3"></i>
    <i class="fa-brands fa-facebook ms-3"></i>
    <i class="fa-brands fa-youtube ms-3 me-4"></i>
    </div>
    </div>

</>
  )
}

export default Footer