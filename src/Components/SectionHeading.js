import React, { Component } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default class SectionHeading extends Component {
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
            <div className='mb-5 mt-5 pt-5 aos-init'>
                <div className=' text-center fw-bold h1 mt-2' data-aos="fade-up">{this.props.heading}</div>
                <div className='mt-4 w-75 ms-auto me-auto text-center text-black-50' data-aos="fade-up">{this.props.discription}</div>
            </div>
        )
    }
}
