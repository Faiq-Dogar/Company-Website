import React, { Component } from 'react'

export default class AboutCardsComp extends Component {
    render() {
        return (
            <div>
                <div className="card card-rotate service-box ps-3">
                    <img src={this.props.About_img} class="card-img-top w-25 mt-4 pt-3 ps-3" alt="..." />
                    <div class="card-body">
                        <h5 className="card-title mt-3 ">{this.props.card_heading}</h5>
                        <p className="card-text mt-3 mb-5 text-black-50">{this.props.card_dis}</p>
                    </div>
                </div>
            </div>
        )
    }
}
