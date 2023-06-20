import React, { Component } from 'react'
import SectionHeading from './SectionHeading'

export default class Contact extends Component {
    render() {
        return (
            <div className='pb-5 mb-3'  id={this.props.Sec_id}>
                <SectionHeading heading="Get In Touch With Us" discription="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                <div className='container'>
                    <div className='row'>
                        <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
                            <form class="row g-3 needs-validation" novalidate>
                                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                    <input type="text" class="form-control" id="validationCustom01" placeholder='Your Name' required />
                                    <div class="valid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                    <input type="text" class="form-control" id="validationCustom02" placeholder='Your Email' required />
                                    <div class="valid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                    <input type="text" class="form-control" id="validationCustomUsername" placeholder='Your Subject' required />
                                    <div class="invalid-feedback">
                                        Please choose a username.
                                    </div>
                                </div>
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                    <textarea className='form-control' id="validationCustomUsername" placeholder='Your Massgae' rows={6} required></textarea>
                                    <div class="invalid-feedback">
                                        Please choose a username.
                                    </div>
                                </div>
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                    <button class="btn btn-outline-primary" type="submit">Submit form</button>
                                </div>
                            </form>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
                            <div className='w-50 ms-auto me-auto mt-2'>
                                <div className='h3'>
                                    Office Address
                                </div>
                                <p>
                                    1234 North Avenue Luke Lane, South Bend, IN 360001
                                </p>
                            </div>
                            <div className='w-50 ms-auto me-auto mt-5'>
                                <div className='h3'>
                                    Phone
                                </div>
                                <p>
                                    Phone: +123456789
                                </p>
                                <p>
                                    Fax: (+00)12345
                                </p>
                                <p>
                                    Email: jugaadStudio@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
