import React, { Component } from 'react'
import SectionHeading from './SectionHeading'
import PricePortal from './PricePortal'

export default class Pricing extends Component {
    render() {
        return (
            <div className='features pb-5' id={this.props.Sec_id}>
                <SectionHeading heading="Affordable Price" discription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley," />
                <div className='container'>
                    <div className='row'>
                        <div className='col-xl-4 col-lg-4 col-md-12 col-sm-12'>
                            <PricePortal price="19" type="BASIC" mb="0" domains="2" accounts="5" webmail="No" support="No" />
                        </div>
                        <div className='col-xl-4 col-lg-4 col-md-12 col-sm-12'>
                            <PricePortal price="29" type="STANDARD" mb="100" domains="2" accounts="5" webmail="No" support="24/7" />
                        </div>
                        <div className='col-xl-4 col-lg-4 col-md-12 col-sm-12'>
                            <PricePortal price="49" type="ADVANCE" mb="100" domains="No" accounts="No" webmail="No" support="24/7" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
