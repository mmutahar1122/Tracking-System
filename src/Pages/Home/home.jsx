
import BGImg from '../../assets/bg.jpg'
// import ReserveTickets from '../../components/ReserveTickets/ReserveTickets';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Home=()=>{

  const navigate=useNavigate();

  const handleReserveClick=(data)=>{
    console.log(data)
    navigate('/reserve-ticket',{state:{data}});
  }
  useEffect(() => {
  AOS.init({
    duration: 1000, // optional animation duration
    // once: true,     // animation happens only once
  });
}, []);

    const bookingData = [
    {
      from: 'Faisalabad',
      to: 'Sialkot',
      duration: '8 Hrs',
      features: 'Internet Snacks TV Mobile Charging',
      price: 1600
    },
    {
      from: 'Lahore',
      to: 'Multan',
      duration: '6 Hrs',
      features: 'WiFi Snacks AC Charging Port',
      price: 1400
    },
    {
      from: 'Karachi',
      to: 'Hyderabad',
      duration: '3 Hrs',
      features: 'TV Water AC Mobile Charging',
      price: 1000
    },
    {
      from: 'Islamabad',
      to: 'Peshawar',
      duration: '4 Hrs',
      features: 'WiFi TV Tea Snacks',
      price: 1200
    },
    {
      from: 'Multan',
      to: 'Larkana',
      duration: '9 Hrs',
      features: 'Internet TV Blanket Charging Port',
      price: 1800
    },
    {
      from: 'Sialkot',
      to: 'Bahawalpur',
      duration: '7 Hrs',
      features: 'TV Snacks AC Mobile Charging',
      price: 1500
    }
  ];
  

    return <>
    <div className=''>
       <img src={BGImg} alt="" className="w-full h-[700px] object-cover opacity-75" />
       <h1 className="absolute top-80 left-1/2 transform -translate-x-1/2 z-10 text-white md:text-5xl text-xl text-center font-bold">
 <div data-aos="zoom-in">
  <span className="block mb-2" >Welcome to</span>
  <span className="bg-[#FFCE32] text-red-700 rounded-xl px-2" >SMART SAFAR</span>
  </div>
</h1>

       {/* <h1 className="absolute top-80 left-1/2 transform -translate-x-1/2 z-10 text-white md:text-5xl  text-xl text-center font-bold">Welcome to <br /><span className="bg-[#FFCE32] text-red-600 rounded-xl px-2">SMART SAFAR</span></h1> */}
  </div>
    <div className='px-2'>

  {/* <div className='flex justify-center gap-3 mt-2 w-2/3 mx-auto'>
    <div className='w-1/2 flex items-center'><p className='font-medium'>Dawo Flexibility refers to the dynamic and adaptable nature of "Dawo", which is often used in software or modular systems to describe a framework or structure designed for extensibility, integration, and adaptability.</p></div>
    <div className='w-1/2'><img src={Bus} alt="" className='w-[500px]'/></div>
  </div>

  <div className='flex justify-center gap-3 mt-4 w-2/3 mx-auto'>
    <div className='w-1/2'><img src={Bus1} alt="" className='w-[500px]'/></div>
    <div className='w-1/2 flex items-center'><p className='font-medium'>Dawo Flexibility refers to the dynamic and adaptable nature of "Dawo", which is often used in software or modular systems to describe a framework or structure designed for extensibility, integration, and adaptability.</p></div>
  </div> */}
  <div className='text-center mt-4'>
    <div  data-aos="zoom-in"><h1 className='font-bold text-3xl text-[#333333]'>Our <span className=''>Services</span></h1></div>
    <div className='flex flex-wrap justify-center lg:w-2/3 gap-2 mx-auto mt-4'  data-aos="zoom-in">
      <div className='md:basis-1/3 w-full border rounded-lg p-2 bg-gray-100'>
      <div className='flex gap-2 justify-center mt-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg><h3 className='font-bold'>Secure Payment</h3></div> <p className='text-gray-600'>Integrate Secure Payment Gateways for users to pay for their tickets</p></div>
      <div className='md:basis-1/3 w-full border rounded-lg p-2 bg-gray-100'>
        <div className='flex gap-2 justify-center mt-2'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9.75h4.875a2.625 2.625 0 0 1 0 5.25H12M8.25 9.75 10.5 7.5M8.25 9.75 10.5 12m9-7.243V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185Z" />
</svg>
<h3 className='font-bold'>Refund Policy</h3></div>
<p className='text-gray-600'>Offer options for the users to purchase refundable tickets with clear terms</p></div>
      <div className='md:basis-1/3 w-full border rounded-lg p-2 bg-gray-100'> <div className='flex gap-2 justify-center mt-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
</svg>
<h3 className='font-bold'>24/7 Support</h3>
</div>
<p className='text-gray-600'>Get assistance anytime through chat, email, or phone</p></div>
    </div>
  </div>
  <div className='text-center mt-4'>
    <div className='font-bold text-3xl text-[#333333]'  data-aos="zoom-in">Top Search <span className=''>Routes</span></div>

  <div className='flex flex-wrap gap-2 mx-auto mt-4 justify-center mb-2'>
  {bookingData?.map((item,index)=>{
    return <>
   <div className='w-1/4 min-w-[310px] border rounded-lg p-2 bg-gray-100 text-gray-600' key={index}  data-aos="zoom-in">
    <div className='flex justify-between'><p>{item?.from}</p><p>--- {item?.duration} ---</p><p>{item?.to}</p></div>
    <div>
      {item?.features}
    </div>
    <div className='flex justify-between items-center mt-5'>
      <div className='font-bold'>Rs. {item?.price}</div>
<div><button className='bg-red-700 text-white p-2 rounded-lg cursor-pointer' onClick={()=>handleReserveClick(item)}>Reserve Seat</button></div> </div>
</div>
</>
  })}
</div>
  </div>
  </div>
    </>
}

export default Home