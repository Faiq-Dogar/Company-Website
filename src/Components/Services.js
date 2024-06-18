import React, { Component } from 'react';
import SectionHeading from './SectionHeading';
import dot_image from './Images/06.png'
import Service_img from './Images/04.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default class Services extends Component {
    componentDidMount() {
        AOS.init({
          duration: 800
        });
      }
    render() {
        return (
            <div id={this.props.Sec_id}>
                <SectionHeading heading="How can we help you?" discription="If you are planning to developing a product website" />
                <div className='container'>
                    <div className='row'>
                        <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
                            <div className='service-box w-75 ps-3 pt-3 pe-3 pb-3 mt-3 card-rotate'>
                                <div className='h5' data-aos="zoom-in">{this.props.Service1}</div>
                                <p className='fw-light text-black-50' data-aos="zoom-in"> {this.props.Service1Dis}</p>
                                <a href="/" className='text-success fw-bold text-decoration-none' data-aos="zoom-in">Explore More</a>
                            </div>
                            <div className='service-box w-75 ps-3 pt-3 pe-3 pb-3 mt-4 card-rotate'>
                                <div className='h5' data-aos="zoom-in">{this.props.Service2}</div>
                                <p className='fw-light text-black-50' data-aos="zoom-in"> {this.props.Service2Dis}</p>
                                <a href="/" className='text-success fw-bold text-decoration-none' data-aos="zoom-in">Explore More</a>
                            </div>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
                            <div className='position-relative'>
                                <div className='row'>
                                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6'>
                                        <img className='w-50 ms-auto me-auto dots' data-aos="fade-right" src={dot_image} alt='Not found' />
                                    </div>
                                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6'>
                                        <div className="ms-auto me-auto floating-circle" data-aos="fade-left"></div>
                                    </div>
                                </div>
                                <img className='w-100 position-absolute top-0' data-aos="fade-up" src={Service_img} alt='Not found' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
