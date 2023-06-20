import React, { Component } from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

export default class Footer extends Component {
    render() {
        return (
            <div className='nav-back pt-5 pb-5 mt-3'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12'>
                            <div className='display-6 text-light mb-5'>
                                Jugaad Studios
                            </div>
                            <input type='email' className='form-control w-75' placeholder='Email' />
                            <input type='button' className='btn btn-outline-light mt-4' value="Subscribe" />
                        </div>
                        <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12'>
                            <div className='text-center'>
                                <div className='h3 text-light mb-5'>
                                    Services
                                </div>
                                <p className='mt-5 pt-3 text-light'>{this.props.service1}</p>
                                <p className='mt-4 text-light'>{this.props.service2}</p>
                            </div>
                        </div>
                        <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12'>
                            <div className='text-center'>
                                <div className='h3 text-light mb-5'>
                                    Features
                                </div>
                                <p className='mt-5 text-light'>{this.props.feature1}</p>
                                <p className='mt-4 text-light'>{this.props.feature2}</p>
                                <p className='mt-4 text-light'>{this.props.feature3}</p>
                            </div>
                        </div>
                        <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12'>
                            <div className='mt-5 pt-5'>
                                <div className='row'>
                                    <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12'>
                                        <a href='/' className='text-decoration-none text-light fs-3'><FaFacebookF /></a>
                                    </div>
                                    <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12'>
                                        <a href='/' className='text-decoration-none text-light fs-3'><FaInstagram /></a>
                                    </div>
                                    <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12'>
                                        <a href='/' className='text-decoration-none text-light fs-3'><FaLinkedinIn /></a>
                                    </div>
                                    <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12'>
                                        <a href='/' className='text-decoration-none text-light fs-3'><FaGoogle /></a>
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
