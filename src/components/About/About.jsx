import React from 'react'
import './About.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  return (
    <>
    <div className='container'>
        <div className='About'>
        <div className='About_heading'>
            <h5 className='about_h5'>The numbers are lookin’ good</h5>
        </div>
        <div className='row'>
            <div className='col-md-3'>
            <div class="vl">
            <h1 className='About_nbr'>
                56 <span className='span_1' style={{fontSize: '2.2rem'}}>%</span>
            </h1>
            <p className='about_p'>Respond to 56% more customer <br /> messages in the first year.</p>
            </div>
            </div>
            <div className='col-md-3'>
            <div class="vl">
            <h1 className='About_nbr'>
            30 <span style={{fontSize: '2rem'}}>min</span>
            </h1>
            <p className='about_p'>Decrease your team's response times <br /> by an average of 30 minutes.</p>
            </div>
            </div>
            <div className='col-md-3'>
            <div class="vl">
            <h1 className='About_nbr'>
                92 <span className='span_1' style={{fontSize: '2.2rem'}}>%</span>
            </h1>
            <p className='about_p'>Businesses report increased loyalty <br /> by focusing on customer service.</p>
            </div>
            </div>
            <div className='col-md-3'>
            <div class="vl">
            <h1 className='About_nbr'>
                30 <span className='span_1' style={{fontSize: '2.2rem'}}>%</span>
            </h1>
            <p className='about_p'>Reduce email volume by 30% with <br /> self-serve support.</p>
            </div>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default About