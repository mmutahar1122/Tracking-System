import { useLocation,useNavigate } from "react-router-dom";
import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';
const lahoreRoutes = [
    { from: 'Lahore', to: 'Multan', duration: '6 Hrs', features: 'WiFi Snacks AC Charging Port', price: 1400 },
    { from: 'Lahore', to: 'Faisalabad', duration: '2 Hrs', features: 'AC Charging Port', price: 800 },
    { from: 'Lahore', to: 'Islamabad', duration: '5 Hrs', features: 'WiFi Snacks AC', price: 1200 },
    { from: 'Lahore', to: 'Sialkot', duration: '2.5 Hrs', features: 'Snacks AC Charging Port', price: 900 },
    { from: 'Lahore', to: 'Karachi', duration: '16 Hrs', features: 'WiFi Snacks AC Charging Port Entertainment', price: 3000 },
    { from: 'Lahore', to: 'Peshawar', duration: '8 Hrs', features: 'WiFi AC Charging Port', price: 1800 },
  ];
  const faisalabadRoutes = [
    { from: 'Faisalabad', to: 'Sialkot', duration: '3.5 Hrs', features: 'AC Charging Port', price: 1600 },
    { from: 'Faisalabad', to: 'Multan', duration: '4.5 Hrs', features: 'WiFi AC', price: 1100 },
    { from: 'Faisalabad', to: 'Lahore', duration: '2 Hrs', features: 'Snacks AC Charging Port', price: 800 },
    { from: 'Faisalabad', to: 'Rawalpindi', duration: '6 Hrs', features: 'WiFi Snacks AC', price: 1300 },
    { from: 'Faisalabad', to: 'Karachi', duration: '15 Hrs', features: 'WiFi Snacks AC Charging Port Entertainment', price: 2800 },
    { from: 'Faisalabad', to: 'Hyderabad', duration: '13 Hrs', features: 'AC Charging Port Snacks', price: 2500 },
  ];
  const karachiRoutes = [
    { from: 'Karachi', to: 'Hyderabad', duration: '2 Hrs', features: 'AC', price: 1000 },
    { from: 'Karachi', to: 'Lahore', duration: '16 Hrs', features: 'WiFi Snacks AC Charging Port', price: 3200 },
    { from: 'Karachi', to: 'Islamabad', duration: '17 Hrs', features: 'WiFi Snacks AC Charging Port Entertainment', price: 3300 },
    { from: 'Karachi', to: 'Multan', duration: '14 Hrs', features: 'AC Charging Port Snacks', price: 2900 },
    { from: 'Karachi', to: 'Sukkur', duration: '6 Hrs', features: 'Snacks AC Charging Port', price: 1400 },
    { from: 'Karachi', to: 'Quetta', duration: '11 Hrs', features: 'WiFi AC Charging Port', price: 2600 },
  ];
  const islamabadRoutes = [
    { from: 'Islamabad', to: 'Peshawar', duration: '2.5 Hrs', features: 'AC Charging Port Snacks', price: 900 },
    { from: 'Islamabad', to: 'Lahore', duration: '5 Hrs', features: 'WiFi Snacks AC Charging Port', price: 1200 },
    { from: 'Islamabad', to: 'Multan', duration: '7 Hrs', features: 'WiFi Snacks AC', price: 1500 },
    { from: 'Islamabad', to: 'Faisalabad', duration: '5 Hrs', features: 'AC Charging Port', price: 1100 },
    { from: 'Islamabad', to: 'Karachi', duration: '17 Hrs', features: 'WiFi AC Charging Port Entertainment', price: 3300 },
    { from: 'Islamabad', to: 'Sialkot', duration: '4.5 Hrs', features: 'Snacks AC Charging Port', price: 1000 },
  ];
  const multanRoutes = [
    { from: 'Multan', to: 'Lahore', duration: '6 Hrs', features: 'WiFi Snacks AC', price: 1400 },
    { from: 'Multan', to: 'Karachi', duration: '14 Hrs', features: 'WiFi AC Charging Port Entertainment', price: 2800 },
    { from: 'Multan', to: 'Islamabad', duration: '7 Hrs', features: 'Snacks AC Charging Port', price: 1500 },
    { from: 'Multan', to: 'Faisalabad', duration: '4.5 Hrs', features: 'WiFi Snacks AC', price: 1100 },
    { from: 'Multan', to: 'Larkana', duration: '5.5 Hrs', features: 'AC Charging Port', price: 1250 },
    { from: 'Multan', to: 'Quetta', duration: '10 Hrs', features: 'AC Charging Port Snacks', price: 2400 },
  ];
  const sialkotRoutes = [
    { from: 'Sialkot', to: 'Bahawalpur', duration: '6.5 Hrs', features: 'Snacks AC Charging Port', price: 1500 },
    { from: 'Sialkot', to: 'Lahore', duration: '2.5 Hrs', features: 'Snacks AC', price: 900 },
    { from: 'Sialkot', to: 'Islamabad', duration: '4.5 Hrs', features: 'WiFi AC Charging Port', price: 1000 },
    { from: 'Sialkot', to: 'Multan', duration: '5.5 Hrs', features: 'WiFi Snacks AC', price: 1250 },
    { from: 'Sialkot', to: 'Faisalabad', duration: '3.5 Hrs', features: 'AC Charging Port', price: 950 },
    { from: 'Sialkot', to: 'Karachi', duration: '17 Hrs', features: 'WiFi Snacks AC Charging Port Entertainment', price: 3400 },
  ];
            
const ReserveTickets=(data)=>{
    const location = useLocation();
    // console.log('data',location.state?.data);
    const receiveData= location.state?.data;
    const navigate=useNavigate();
     useEffect(() => {
      AOS.init({
        duration: 1000, // optional animation duration
        // once: true,     // animation happens only once
      });
    }, []);

    const handleReserveClick=(seatPrice)=>{
      console.log("--seatPrice--",seatPrice)
navigate('/book-seat',{state:{seatPrice}})
    }


    return <>
     {/* <div className='flex flex-wrap gap-2 mx-auto mt-4 justify-center mb-2'>
   <div className='w-1/2 min-w-[310px] border rounded-lg p-2 bg-gray-100 text-gray-600'  data-aos="zoom-in">
    <div className='flex justify-between'><p>{receiveData?.from}</p><p>{receiveData?.duration}</p><p>{receiveData?.to}</p></div>
    <div>
      {receiveData?.features}
    </div>
    <div className='flex justify-between items-center mt-5'>
      <div className='font-bold'>Rs. {receiveData?.price}</div>
<div><button className='bg-red-700 text-white p-2 rounded-lg cursor-pointer'>Reserve Seat</button></div> </div>
</div>
</div> */}
<div className='flex flex-wrap gap-2 mx-auto mt-4 justify-center mb-2'>
  {
    receiveData?.from === 'Faisalabad'
      ? faisalabadRoutes.map((item, index) => (
          <div className='w-1/2 min-w-[310px] border rounded-lg p-2 bg-gray-100 text-gray-600' key={index} data-aos="zoom-in">
            <div className='flex justify-between'>
              <p>{item.from}</p>
              <p>{item.duration}</p>
              <p>{item.to}</p>
            </div>
            <div>{item.features}</div>
            <div className='flex justify-between items-center mt-5'>
              <div className='font-bold'>Rs. {item.price}</div>
              <div>
                <button
                  className='bg-red-700 text-white p-2 rounded-lg cursor-pointer'
                  onClick={() => handleReserveClick(item.price)}
                >
                  Reserve Seat
                </button>
              </div>
            </div>
          </div>
        ))
      : receiveData?.from === 'Lahore'
      ? lahoreRoutes.map((item, index) => (
          <div className='w-1/2 min-w-[310px] border rounded-lg p-2 bg-gray-100 text-gray-600' key={index}  data-aos="zoom-in">
            <div className='flex justify-between'>
              <p>{item.from}</p>
              <p>{item.duration}</p>
              <p>{item.to}</p>
            </div>
            <div>{item.features}</div>
            <div className='flex justify-between items-center mt-5'>
              <div className='font-bold'>Rs. {item.price}</div>
              <div>
                <button
                  className='bg-red-700 text-white p-2 rounded-lg cursor-pointer'
                  onClick={() => handleReserveClick(item)}
                >
                  Reserve Seat
                </button>
              </div>
            </div>
          </div>
        ))
      :receiveData?.from === 'Karachi'
      ? karachiRoutes.map((item, index) => (
          <div className='w-1/2 min-w-[310px] border rounded-lg p-2 bg-gray-100 text-gray-600' key={index}  data-aos="zoom-in">
            <div className='flex justify-between'>
              <p>{item.from}</p>
              <p>{item.duration}</p>
              <p>{item.to}</p>
            </div>
            <div>{item.features}</div>
            <div className='flex justify-between items-center mt-5'>
              <div className='font-bold'>Rs. {item.price}</div>
              <div>
                <button
                  className='bg-red-700 text-white p-2 rounded-lg cursor-pointer'
                  onClick={() => handleReserveClick(item)}
                >
                  Reserve Seat
                </button>
              </div>
            </div>
          </div>
        ))
      :receiveData?.from === 'Islamabad'
      ? islamabadRoutes.map((item, index) => (
          <div className='w-1/2 min-w-[310px] border rounded-lg p-2 bg-gray-100 text-gray-600' key={index}  data-aos="zoom-in">
            <div className='flex justify-between'>
              <p>{item.from}</p>
              <p>{item.duration}</p>
              <p>{item.to}</p>
            </div>
            <div>{item.features}</div>
            <div className='flex justify-between items-center mt-5'>
              <div className='font-bold'>Rs. {item.price}</div>
              <div>
                <button
                  className='bg-red-700 text-white p-2 rounded-lg cursor-pointer'
                  onClick={() => handleReserveClick(item)}
                >
                  Reserve Seat
                </button>
              </div>
            </div>
          </div>
        ))
      :receiveData?.from === 'Multan'
      ? multanRoutes.map((item, index) => (
          <div className='w-1/2 min-w-[310px] border rounded-lg p-2 bg-gray-100 text-gray-600' key={index}  data-aos="zoom-in">
            <div className='flex justify-between'>
              <p>{item.from}</p>
              <p>{item.duration}</p>
              <p>{item.to}</p>
            </div>
            <div>{item.features}</div>
            <div className='flex justify-between items-center mt-5'>
              <div className='font-bold'>Rs. {item.price}</div>
              <div>
                <button
                  className='bg-red-700 text-white p-2 rounded-lg cursor-pointer'
                  onClick={() => handleReserveClick(item)}
                >
                  Reserve Seat
                </button>
              </div>
            </div>
          </div>
        ))
      :receiveData?.from === 'Sialkot'
      ? sialkotRoutes.map((item, index) => (
          <div className='w-1/2 min-w-[310px] border rounded-lg p-2 bg-gray-100 text-gray-600' key={index}  data-aos="zoom-in">
            <div className='flex justify-between'>
              <p>{item.from}</p>
              <p>{item.duration}</p>
              <p>{item.to}</p>
            </div>
            <div>{item.features}</div>
            <div className='flex justify-between items-center mt-5'>
              <div className='font-bold'>Rs. {item.price}</div>
              <div>
                <button
                  className='bg-red-700 text-white p-2 rounded-lg cursor-pointer'
                  onClick={() => handleReserveClick(item)}
                >
                  Reserve Seat
                </button>
              </div>
            </div>
          </div>
        ))
      : null
  }
</div>

    </>

}
export default ReserveTickets