import React, { Component } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default class Purchase extends Component {
    componentDidMount() {
        AOS.init({
          duration: 1500
        });
      }
    render() {
        return (
            <div className='pt-5 pb-5 nav-back mt-5'>
                <div className='w-75 ms-auto me-auto'>
                    <div className=' text-center fw-bold h1 mt-5 text-light' data-aos="fade-up">
                        Get Sofoffice Today Only
                    </div>
                    <div className='text-center mt-4'>
                        <input type='button' data-aos="zoom-in" className='btn btn-outline-light mt-3' value="Purchase" />
                    </div>
                </div>
            </div>
        )
    }
}
