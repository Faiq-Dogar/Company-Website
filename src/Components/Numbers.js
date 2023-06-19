import React, { Component } from 'react'


export default class Numbers extends Component {
  render() {
    return (
        <div className='Number-back pt-5 pb-5 '>
      <div className='container text-center '>
        <div className='row'>
            <div className='col-xl-4 col-lg-4 col-md-12 col-sm12'>
                <div className='h2'>Total Projects</div>
                <div className='display-5'>{this.props.projects}</div>
            </div>
            <div className='col-xl-4 col-lg-4 col-md-12 col-sm12'>
                <div className='h2'>Happy Clients</div>
                <div className='display-5'>{this.props.clients}</div>
            </div>
            <div className='col-xl-4 col-lg-4 col-md-12 col-sm12'>
                <div className='h2'>Active Users</div>
                <div className='display-5'>{this.props.users}</div>
            </div>
        </div>
      </div>
      </div>
    )
  }
}
