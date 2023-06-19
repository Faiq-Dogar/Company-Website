import React, { Component } from 'react'
import AboutCards from './AboutCards'
import SectionHeading from './SectionHeading';
import About_icon from './Images/icon1.png';
import AboutCardsComp from './AboutCardsComp';


export default class About extends Component {
  render() {
    return (
      <div>
        <SectionHeading heading="How It Works" discription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley," />
        <div className='mt-5 pt-5 container'>
          <div className='row'>
            <div className='col-xl-4 col-lg-4 col-md-6 xol-sm-12'>
              <AboutCardsComp About_img={About_icon} card_heading="EASY TO CUSTOMIZE" card_dis="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," />
            </div>
            <div className='col-xl-4 col-lg-4 col-md-6 xol-sm-12'>
              <AboutCardsComp About_img={About_icon} card_heading="MULTIPURPOSE LAYOUT" card_dis="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"/>
            </div>
            <div className='col-xl-4 col-lg-4 col-md-6 xol-sm-12'>
              <AboutCardsComp About_img={About_icon} card_heading="UNIQUE DESIGN" card_dis="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
              {/* <AboutCards card1_heading="EASY TO CUSTOMIZE" card1_dis="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
              card2_heading="MULTIPURPOSE LAYOUT" card2_dis="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
              card3_heading="UNIQUE DESIGN" card3_dis="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," /> */}
