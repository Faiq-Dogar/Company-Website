import React, { Component } from 'react'

export default class SectionHeading extends Component {
    render() {
        return (
            <div className='mb-5 mt-5 pt-5'>
                <div className=' text-center fw-bold h1 mt-2'>{this.props.heading}</div>
                <div className='mt-4 w-75 ms-auto me-auto text-center text-black-50'>{this.props.discription}</div>
            </div>
        )
    }
}
