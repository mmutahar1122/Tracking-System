import { useEffect } from 'react';
import faisalabad from '../../assets/Terminals_Img/faisalabad.jpeg'


import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () =>{
 useEffect(() => {
  AOS.init({
    duration: 1000, // optional animation duration
    // once: true,     // animation happens only once
  });
}, []);

    return <>
    <div className="md:flex block mt-2 gap-2"  data-aos="zoom-in">
        <div className="md:w-1/2"><img src={faisalabad} alt=""/>
        </div>
        <div className="md:w-1/2">
        <p className="text-4xl text-red-700 font-bold  border-b-4 inline border-red-700">About Us</p>
        <p className="mt-4 text-gray-500">Smart Safar is the first and the biggest foreign investment Company with an advanced and organized transport system in Pakistan. It is the only transport company to have a nationwide network with various international trade links. Being a transport service provider the company owns a large fleet of buses, Technically Advanced Workshops to maintain the fleet for the safety of the passengers, State of the Art Terminals, Training Institutes for Drivers and Mechanical Staff.

Smart Safar has been rendering transport facilities since its inception in 1997 to the people of Pakistan.</p></div>
    </div>
    <p className="mt-4 text-gray-500"  data-aos="zoom-in">It is appreciated by the masses as well as by the Governments of Pakistan as well as Korea for its consistent success. Media of both the countries often express appreciation for the revolutionary accomplishment of the Company in a transport sector, through various channels. Daewoo Express has been rendering transport facilities since its inception in 1997 to the people of Pakistan. It is appreciated by the masses as well as by the Governments of Pakistan as well as Korea for its consistent success. Media of both the countries often express appreciation for the revolutionary accomplishment of the Company in a transport sector, through various channels.</p>
    </>
}

export default About