import React, { Component } from 'react';
import header_img from './Images/01.png';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default class Header extends Component {
  componentDidMount() {
    AOS.init({
      duration: 1500
    });
  }

  componentDidUpdate() {
    AOS.refresh();
  }
  render() {
    return (
      <div className=' header-back position-relative text-light aos-init' id={this.props.Sec_id}>
        <div className='container '>
          <div className='row'>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
            <div className='display-5 fw-normal' data-aos="fade-up">WE ARE BUILDING <span className='fw-bold'>SOFTWARE</span> TO HELP</div>
            <div className='fw-light mt-4 header-dis' data-aos="fade-up">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley,</div>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>

            </div>
          </div>
        </div>
        {/* <img className='design img-fluid position-absolute' src={header_img} alt="Design not found"/> */}
        <div class="design"></div>

              <img className='header-lap-img img-fluid position-absolute'  src={header_img} alt="Header not found"/>
      </div>
    )
  }
}
