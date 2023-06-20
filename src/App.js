import './App.css';
import About from './Components/About';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import React from 'react'
import Services from './Components/Services';
import Numbers from './Components/Numbers';
import Features from './Components/Features';
import Pricing from './Components/Pricing';
import Team from './Components/Team';
import FAQ from './Components/FAQ';
import Purchase from './Components/Purchase';
import Footer from './Components/Footer';
import Contact from './Components/Contact';

export default function App() {
  return (
    <>
      <Navbar Logo_prop=" STUDIOS"  link1="Home" home_id="Homeid" link2="About" about_id="Aboutid" link3="Services" serve_id="Serviceid" link4="Features" feature_id="Featureid" link5="Pricing" price_id="Priceid" link6="Team" team_id="Teamid" link7="Contact" con_id="Contactid"/>
      <Header Sec_id="Homeid"/>
      <About Sec_id="Aboutid"/>
      <Services Sec_id="Serviceid" Service1="Web Development" Service2="Game Development" Service1Dis="Lorem Ipsum is simply dummy text of the printing and typesetting industry."  Service2Dis="Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
      <Features Sec_id="Featureid" feature1="Boxed & Wide Layouts" feature1_dis="Stretch your Website to the Full Width or make it boxed to surprise your visitors."/>
      <Numbers Sec_id="Projectid" projects="587" clients="370" users="409"/>
      <Pricing Sec_id="Priceid"/>
      <Team Sec_id="Teamid"/>
      <FAQ/>
      <Purchase/>
      <Contact Sec_id="Contactid"/>
      <Footer service1="Web Development" service2="Game Development" feature1="Boxed & Wide Layouts" feature2="Boxed & Wide Layouts" feature3="Boxed & Wide Layouts"/>
    </>
  )
}
