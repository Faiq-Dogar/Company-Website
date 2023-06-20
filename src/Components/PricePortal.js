import React, { Component } from 'react'
import price_design_img from './Images/09.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default class PricePortal extends Component {
    componentDidMount() {
        AOS.init({
          duration: 1500
        });
      }
    render() {
        return (
            <div>
                <div class="card pb-3">
                    <div className='price-top text-center text-light position-relative'>
                        <div className='price-top-gradient pt-5 pb-4'>
                            $ <span className='display-3 fw-bold'>{this.props.price}</span> /Month
                            <p className='fw-bold'>{this.props.type}</p>
                        </div>
                        <img className='position-absolute start-0 w-100 price-design' src={price_design_img} alt="Not Found" />
                    </div>
                    <div class="card-body text-center">
                        <div class="card-text">
                            <div className='pt-3 pb-3 text-dark-50' data-aos="fade-up">{this.props.mb} MB Disk Space</div>
                            <div className='pt-3 pb-3 text-dark-50' data-aos="fade-up">{this.props.domains} Subdomains</div>
                            <div className='pt-3 pb-3 text-dark-50' data-aos="fade-up">{this.props.accounts} Email Accounts</div>
                            <div className='pt-3 pb-3 text-dark-50' data-aos="fade-up">{this.props.webmail} Webmail Support</div>
                            <div className='pt-3 pb-3 text-dark-50' data-aos="fade-up">{this.props.support} Customer Support</div>
                        </div>
                        <button class="btn nav-back text-light ps-5 pe-5 pt-2 pb-2 mt-3" data-aos="zoom-in">Purchase</button>
                    </div>
                </div>
            </div>
        )
    }
}
