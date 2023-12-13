import React from 'react'
import './Detail.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import myImg10 from '../../assets/img10.png'
import myImg12 from '../../assets/img1.jpg'
import myImg5 from '../../assets/img5.jpg'
import myImg2 from '../../assets/img2.png'

const Detail = () => {
  return (
    <div className='container'>
        <div className='details'>
            <h1 className='detail__heading'>Happy to help, every step of the way</h1>
           <div className='detail_card'>
         <div className='row'>
        <div className='col-md-8'>
            <div className="card">
             <div className="card-body">
                <h5 className="card-title">Our people are your people</h5>
                <div className='detail_flex'>
                 <p className="card-text">These friendly and knowledgeable folks are here to help answer your questions 24/6 <br /> via chat or email.</p>
                 <button type="button" className="btn btn-primary btn-sm">Primary</button>
                 </div>
               </div>
            <img src={myImg10} className="card-img-bottom" alt="..."/>
          </div>
          </div>
        <div className='col-md-4'>
            <div className="card">
             <div className="card-body">
                <h5 className="card-title">Support trends, delivered weekly</h5>
                 <p className="card-text">A dose of weekly support news you’ll actually want to read.</p>           
               </div>
            <img src={myImg12} className="card-img-bottom"  style={{marginTop: '90px'}} alt="..."/>
          </div>
          </div>
       </div>
           </div>
           <div className='detail_card_2'>
         <div className='row'>
        <div className='col-md-6'>
            <div className="card">
             <div className="card-body">
                <h5 className="card-title">Guides, courses, and content (for free)</h5>
                <div className='detail_flex'>
                 <p className="card-text">Level up your skills with free resources, created for teams just like yours.</p>
                 </div>
               </div>
            <img src={myImg5} className="card-img-bottom " style={{marginTop: '1.54rem'}} alt="..."/>
          </div>
          </div>
        <div className='col-md-6'>
            <div className="card">
             <div className="card-body">
                <h5 className="card-title">Customer-centric inspiration</h5>
                 <p className="card-text">A quarterly publication for curious people who want to lead with values and grow with grit.</p>           
               </div>
            <img src={myImg2} className="card-img-bottom" style={{marginTop: '1.45rem'}} alt="..."/>
          </div>
          </div>
       </div>
           </div>
        </div>
    </div>
  )
}

export default Detail