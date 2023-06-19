import './App.css';
import About from './Components/About';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import React from 'react'
import Services from './Components/Services';
import Numbers from './Components/Numbers';
import Features from './Components/Features';

export default function App() {
  return (
    <>
      <Navbar Logo_prop="Jugaad Studios" link1="Home" link2="About Us" link3="Services" link4="Features" link5="Pricing" link6="Team" link7="Contact"/>
      <Header/>
      <About/>
      <Services Service1="Web Development" Service2="Game Development" Service1Dis="Lorem Ipsum is simply dummy text of the printing and typesetting industry."  Service2Dis="Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
      <Features feature1="Boxed & Wide Layouts" feature1_dis="Stretch your Website to the Full Width or make it boxed to surprise your visitors."/>
      <Numbers projects="587" clients="370" users="409"/>
    </>
  )
}
