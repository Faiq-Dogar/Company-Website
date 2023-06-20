import React, { Component } from 'react'
import SectionHeading from './SectionHeading';
import Feature_img from './Images/11-removebg-preview.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default class Features extends Component {
    componentDidMount() {
        AOS.init({
          duration: 900
        });
      }
    render() {
        return (
            <div className='features mt-5 pb-4' id={this.props.Sec_id}>
                <SectionHeading heading="Even more feature rich" discription="Providing you with the best features for your website" />
                <div className='container'>
                    <div className='row'>
                        <div className='col-xl-5 col-lg-4 col-md-12 col-sm-12'>
                            <div className='row' data-aos="zoom-in">
                                <div className='col-xl-8 col-lg-8 col-md-8 col-sm-8'>
                                    <div className='ms-3 mb-5 text-end'>
                                        <div className='h6'>{this.props.feature1}</div>
                                        <div className='fw-light text-black-50'>{this.props.feature1_dis}</div>
                                    </div>
                                </div>
                                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-3'>
                                </div>
                            </div>
                            <div className='row' data-aos="zoom-in">
                                <div className='col-xl-8 col-lg-8 col-md-8 col-sm-8'>
                                    <div className='ms-3 mb-5 text-end'>
                                        <div className='h6'>{this.props.feature1}</div>
                                        <div className='fw-light text-black-50'>{this.props.feature1_dis}</div>
                                    </div>
                                </div>
                                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-3'>
                                </div>
                            </div>
                            <div className='row' data-aos="zoom-in">
                                <div className='col-xl-8 col-lg-8 col-md-8 col-sm-8'>
                                    <div className='ms-3 mb-5 text-end'>
                                        <div className='h6'>{this.props.feature1}</div>
                                        <div className='fw-light text-black-50'>{this.props.feature1_dis}</div>
                                    </div>
                                </div>
                                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-3'>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-2 col-lg-4 col-md-12 col-sm-12'>
                            <img className='w-100' data-aos="fade-up" src={Feature_img} alt='Not found' />
                        </div>
                        <div className='col-xl-5 col-lg-4 col-md-12 col-sm-12'>
                            <div className='row' data-aos="zoom-in">
                                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-3'>
                                </div>
                                <div className='col-xl-8 col-lg-8 col-md-8 col-sm-8'>
                                    <div className='ms-3 mb-5 '>
                                        <div className='h6'>{this.props.feature1}</div>
                                        <div className='fw-light text-black-50'>{this.props.feature1_dis}</div>
                                    </div>
                                </div>
                            </div>
                            <div className='row' data-aos="zoom-in">
                                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-3'>
                                </div>
                                <div className='col-xl-8 col-lg-8 col-md-8 col-sm-8'>
                                    <div className='ms-3 mb-5'>
                                        <div className='h6'>{this.props.feature1}</div>
                                        <div className='fw-light text-black-50'>{this.props.feature1_dis}</div>
                                    </div>
                                </div>
                            </div>
                            <div className='row' data-aos="zoom-in">
                                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-3'>
                                </div>
                                <div className='col-xl-8 col-lg-8 col-md-8 col-sm-8'>
                                    <div className='ms-3 mb-5'>
                                        <div className='h6'>{this.props.feature1}</div>
                                        <div className='fw-light text-black-50'>{this.props.feature1_dis}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
