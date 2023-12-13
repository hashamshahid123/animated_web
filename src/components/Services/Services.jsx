import React from 'react'
import './Services.css'
import myImg3 from '../../assets/img3.jpg'
import myImg12 from '../../assets/img12.png'
import myImg13 from '../../assets/img13.jpg'


const Services = () => {
  return (
    
       <div className='container'>
        <div className='Service_box'>
            <div className='service_img'>
                <img src={myImg12} alt="" className='img_service_1'/>
                <img src={myImg3} alt="" className='img_service'/>
            </div>
            <div className='service_heading'>
                <p className='service_heading_1'> Our team was able to teach themselves Help Scout in a day. It’s like using a shared email inbox — just way more robust and better looking.</p>
                <div className='child_img'>
                <img src={myImg13} alt="" className='child_img1' />
                <p className='service_heading_2'>Brianne Henderlong</p>
            </div>
            </div>
            
        </div>
       </div>
  )
}

export default Services