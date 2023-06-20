import React, { Component } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default class TeamMembers extends Component {
    componentDidMount() {
        AOS.init({
          duration: 1100
        });
      }
    render() {
        return (
            <div>
                <div class="card w-50 ms-auto me-auto" data-aos="zoom-in">
                    <img src={this.props.pic} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <div class="card-text text-center">
                            <div className='h4'>{this.props.Name}</div>
                            <div className='h6 text-black-50 mt-2'>{this.props.Designation}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
