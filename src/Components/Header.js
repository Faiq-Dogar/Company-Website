import React, { Component } from 'react';
import header_img from './Images/01.png';

export default class Header extends Component {
  render() {
    return (
      <div className=' header-back position-relative text-light' id={this.props.Sec_id}>
        <div className='container '>
          <div className='row'>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
            <div className='display-5 fw-normal'>WE ARE BUILDING <span className='fw-bold'>SOFTWARE</span> TO HELP</div>
            <div className='fw-light mt-4 header-dis'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley,</div>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>

            </div>
          </div>
        </div>
              <img className='header-lap-img img-fluid position-absolute' src={header_img} alt="Header not found"/>
      </div>
    )
  }
}
