import React, { Component } from 'react'
import SectionHeading from './SectionHeading'
import TeamMembers from './TeamMembers'
import Member1_img from './Images/CEO.png';
import Member2_img from './Images/Faiq Dogar.png';

export default class Team extends Component {
    render() {
        return (
            <div id={this.props.Sec_id}>
                <SectionHeading heading="Meet the Team" discription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley," />
                <div className='container'>
                        <div className='row'>
                            <div className='col-xl-6 col-lg-6 col-md-12 col-sm-6'>
                                <TeamMembers Name="Hamza Jamil" Designation="CEO" pic={Member1_img}/>
                            </div>
                            <div className='col-xl-6 col-lg-6 col-md-12 col-sm-6'>
                                <TeamMembers Name="Faiq Dogar" Designation="React Developer" pic={Member2_img}/>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}
