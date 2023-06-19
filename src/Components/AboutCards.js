import React, { Component } from 'react'
import { FiEdit } from "react-icons/fi";
import { FiShare2 } from "react-icons/fi";
import { FiMonitor } from "react-icons/fi";


export default class AboutCards extends Component {
    render() {
        return (
            <div>
                <div className='row'>
                    <div className='col-xl-4 col-lg-4 col-md-6 xol-sm-12'>
                        <div className="card card-rotate service-box">
                            <div className="card-body">
                                <div className='icon-back w-25 mt-4 pt-3 pb-3 text-center border rounded-circle'><FiEdit /></div>
                                <h5 className="card-title mt-4 pt-2">{this.props.card1_heading}</h5>
                                <p className="card-text mt-3 mb-5 text-black-50">{this.props.card1_dis}</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-4 col-lg-4 col-md-6 xol-sm-12'>
                        <div className="card card-rotate service-box">
                            <div className="card-body">
                            <div className='icon-back w-25 mt-4 pt-3 pb-3 text-center border rounded-circle'><FiShare2 /></div>
                                <h5 className="card-title mt-4 pt-2">{this.props.card2_heading}</h5>
                                <p className="card-text mt-3 mb-5 text-black-50">{this.props.card2_dis}</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-4 col-lg-4 col-md-6 xol-sm-12'>
                        <div className="card card-rotate service-box">
                            <div className="card-body pt-4 pb-3 ps-4 pe-4">
                            <div className='icon-back mt-4 w-25 pt-3 pb-3 text-center border rounded-circle'><FiMonitor /></div>
                                <h5 className="card-title mt-4 pt-2">{this.props.card3_heading}</h5>
                                <p className="card-text mt-3 mb-5 text-black-50">{this.props.card3_dis}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
