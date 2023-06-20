import React, { Component } from 'react'

export default class Purchase extends Component {
    render() {
        return (
            <div className='pt-5 pb-5 nav-back mt-5'>
                <div className='w-75 ms-auto me-auto'>
                    <div className=' text-center fw-bold h1 mt-5 text-light'>
                        Get Sofoffice Today Only
                    </div>
                    <div className='text-center mt-4'>
                        <input type='button' className='btn btn-outline-light mt-3' value="Purchase" />
                    </div>
                </div>
            </div>
        )
    }
}
