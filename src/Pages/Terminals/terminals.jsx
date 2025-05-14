import { useEffect } from "react";
import IMG from "../../assets/bus1.png"
import AOS from "aos";
import 'aos/dist/aos.css';

const Terminals=()=>{
 useEffect(() => {
  AOS.init({
    duration: 1000, // optional animation duration
    // once: true,     // animation happens only once
  });
}, []);
const busTerminals = [
  {
    city: "Faisalabad",
    terminal: "General Bus Stand",
    address: "Railway Road, General Bus Stand, Faisalabad, Punjab, Pakistan",
    img: "public/terminals_Img/faisalabad.jpeg"
  },
  {
    city: "Lahore",
    terminal: "Lahore Daewoo Terminal",
    address: "231 Ferozepur Road, Near Kalma Chowk, Lahore, Punjab, Pakistan",
    img: "public/terminals_Img/lahore.jpeg"
  },
  {
    city: "Gujranwala",
    terminal: "General Bus Stand",
    address: "GT Road, General Bus Stand, Gujranwala, Punjab, Pakistan",
    img: "public/terminals_Img/gujranwala.jpeg"
  },
  {
    city: "Islamabad",
    terminal: "Daewoo Express Terminal",
    address: "Motorway Chowk, Main Peshawar Road, Islamabad, Pakistan",
    img: "public/terminals_Img/Islamabad.jpg"
  },
  {
    city: "Rawalpindi",
    terminal: "Skyways Bus Terminal",
    address: "Opposite Railway Station, Liaquat Road, Rawalpindi, Pakistan",
    img: "public/terminals_Img/Rawalpindi.jpg"
  },
  {
    city: "Multan",
    terminal: "Faisal Movers Terminal",
    address: "Khanewal Road, Near Chowk Kumharan Wala, Multan, Punjab, Pakistan",
    img: "public/terminals_Img/Multan.jpg"
  },
  {
    city: "Karachi",
    terminal: "Daewoo Express Karachi Terminal",
    address: "Plot #4, Main Super Highway, Sohrab Goth, Karachi, Sindh, Pakistan",
    img: "public/terminals_Img/Karachi.jpg"
  },
  {
    city: "Peshawar",
    terminal: "General Bus Stand (Haji Camp)",
    address: "GT Road, Near Haji Camp, Peshawar, Khyber Pakhtunkhwa, Pakistan",
    img: "public/terminals_Img/Peshawar.jpg"
  },
  {
    city: "Quetta",
    terminal: "Sada Bahar Bus Terminal",
    address: "Sariab Road, Sada Bahar Terminal, Quetta, Balochistan, Pakistan",
    img: "public/terminals_Img/Quetta.jpg"
  },
  {
    city: "Bahawalpur",
    terminal: "Faisal Movers Bus Terminal",
    address: "Opposite General Bus Stand, Bahawalpur, Punjab, Pakistan",
    img: "public/terminals_Img/BahawalPure.jpg"
  }
];


    return <>
    <h1 className="text-red-700 text-4xl font-bold text-center mt-2" data-aos="zoom-in">SMART SAFAR TERMINALS</h1>

    <div className="flex flex-wrap gap-3 mt-5 mx-auto p-2 justify-center">  
        {busTerminals?.map((item,index)=>{
            return <div className="w-[400px] text-center  relative group overflow-hidden" data-aos="zoom-in">
  <img src={item?.img} alt="" className="object-cover w-full h-48" />
  <p className="text-2xl font-medium text-white bg-red-700 rounded-lg mt-2">{item?.city}</p>

  <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <p className="text-white text-lg"><span className="text-white text-2xl font-semibold">{item?.city}</span> <br/> {item?.address}</p>
  </div>
</div>

        })}
    </div>
    </>
}

export default Terminals