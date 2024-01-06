import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from 'react-bootstrap/Card';

function Community() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <div>
        <div style={{textAlign:'center',marginTop:'10%'}}>
          <h3 className='fw-bold fs-1'>Join a community of 32,000+ <br></br>creators</h3>
          <h5 className='text-secondary'>Open your online store today and turn your passion <br /> into income.</h5>
        </div>
        <Carousel responsive={responsive}>
        <div style={{padding:'30px'}}>
  <Card >
      <Card.Img style={{backgroundPosition:'50% 50%',backgroundSize:'cover,cover'}} variant="top" src="https://blog.sellfy.com/wp-content/uploads/2022/06/Success-St.-Hero-image-Tobias-Friedrich-1067x600.png"  height={'300px'} />
    </Card>
    <div><h5 className='fw-bold fs-5 mt-2'>Tobias Friedrich</h5>
    <p>Underwater Photographer</p>
    
    </div>

    
  </div>
        <div style={{padding:'30px'}} >
  <Card >
      <Card.Img style={{backgroundPosition:'50% 50%',backgroundSize:'cover,cover'}} variant="top" src="https://blog.sellfy.com/wp-content/uploads/2022/05/Success-Stories-Hero-images-1067x600.png" height={'300px'} />
    </Card>
    <div><h5 className='fw-bold fs-5 mt-2'>Zara Simon-Ogan</h5>
    <p>Composer & Content creator</p>
    
    </div>

    
  </div>
  <div style={{padding:'30px'}} >
  <Card >
      <Card.Img style={{backgroundPosition:'50% 50%',backgroundSize:'cover,cover'}} variant="top" src="https://blog.sellfy.com/wp-content/uploads/2022/10/austin-5-899x600.jpg" height={'300px'} />
    </Card>
    <div><h5 className='fw-bold fs-5 mt-2'>Charlie Gocke(Cryptic)</h5>
    <p>Sound designer</p>
    
    </div>

    
  </div>
  <div style={{padding:'30px'}} >
  <Card >
      <Card.Img style={{backgroundPosition:'50% 50%',backgroundSize:'cover,cover'}} variant="top" src="https://blog.sellfy.com/wp-content/uploads/2023/02/austin-5-899x600.jpg" height={'300px'} />
    </Card>
    <div><h5 className='fw-bold fs-5 mt-2'>Mathew Coombs</h5>
    <p>Game publisher</p>
    
    </div>

    
  </div>
  <div style={{padding:'30px'}} >
  <Card >
      <Card.Img style={{backgroundPosition:'50% 50%',backgroundSize:'cover,cover'}} variant="top" src="https://blog.sellfy.com/wp-content/uploads/2019/03/pvlace-hq-1-1.png" height={'300px'} />
    </Card>
    <div><h5 className='fw-bold fs-5 mt-2'>PVLACE</h5>
    <p>Music producer</p>
    
    </div>

    
  </div>
  <div style={{padding:'30px'}} >
  <Card >
      <Card.Img style={{backgroundPosition:'50% 50%',backgroundSize:'cover,cover'}} variant="top" src="https://blog.sellfy.com/wp-content/uploads/2022/01/Success-Stories-Hero-images-6-1067x600.png" height={'300px'} />
    </Card>
    <div><h5 className='fw-bold fs-5 mt-2'>Ashley Renee</h5>
    <p>Food vlogger</p>
    
    </div>

    
  </div>
  <div style={{padding:'30px'}} >
  <Card >
      <Card.Img style={{backgroundPosition:'50% 50%',backgroundSize:'cover,cover'}} variant="top" src="https://blog.sellfy.com/wp-content/uploads/2022/12/Feature-image-1-1-899x600.jpg" height={'300px'} />
    </Card>
    <div><h5 className='fw-bold fs-5 mt-2'>Austin Farwell</h5>
    <p>Composer</p>
    
    </div>

    
  </div>
        </Carousel>
    </div>
  )
}

export default Community