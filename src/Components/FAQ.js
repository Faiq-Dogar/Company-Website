import React, { Component } from 'react'
import SectionHeading from './SectionHeading'
import FAQ_img from './Images/15.png';
import dot_image from './Images/06.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default class FAQ extends Component {
    componentDidMount() {
        AOS.init({
          duration: 1100
        });
      }
    render() {
        return (
            <div className='mb-5 pb-5'>
                <SectionHeading heading="Frequently Asked Questions" discription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley," />
                <div className='container'>
                    <div className='row'>
                        <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
                        <div className='position-relative'>
                                <div className='row'>
                                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6'>
                                        <img className='w-50 float-end' data-aos="fade-right" src={dot_image} alt='Not found' />
                                    </div>
                                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6'>
                                        <div className="ms-auto me-auto floating-circle" data-aos="fade-left"></div>
                                    </div>
                                </div>
                                <img className='w-75 position-absolute top-0' data-aos="fade-up" src={FAQ_img} alt='Not found' />
                            </div>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
                            <div class="accordion" id="accordionExample">
                                <div class="accordion-item mb-4" data-aos="fade-up">
                                    <h2 class="accordion-header " id="headingOne">
                                        <button class="accordion-button acc-bg fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Ipsum is simply dummy he printing?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item mb-4" data-aos="fade-up">
                                    <h2 class="accordion-header" id="headingTwo">
                                        <button class="accordion-button collapsed acc-bg fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Dummy the printing andtype setting?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item mb-4" data-aos="fade-up">
                                    <h2 class="accordion-header" id="headingThree">
                                        <button class="accordion-button collapsed acc-bg fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Standard dummy since 1500?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                        </div>
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
