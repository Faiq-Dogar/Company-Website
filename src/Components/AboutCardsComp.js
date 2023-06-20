import React, { Component } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default class AboutCardsComp extends Component {
    componentDidMount() {
        AOS.init({
          duration: 1100
        });
      }
    render() {
        return (
            <div>
                <div className="card card-rotate service-box ps-3">
                    <img src={this.props.About_img} class="card-img-top w-25 mt-4 pt-3 ps-3" data-aos="zoom-in" alt="..." />
                    <div class="card-body">
                        <h5 className="card-title mt-3 " data-aos="zoom-in">{this.props.card_heading}</h5>
                        <p className="card-text mt-3 mb-5 text-black-50" data-aos="zoom-in">{this.props.card_dis}</p>
                    </div>
                </div>
            </div>
        )
    }
}
