import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Seat from '../../assets/Bus_seat_Icon/seat-4.svg';
import Driver from '../../assets/Bus_seat_Icon/Driver.svg';
import { useLocation, useNavigate } from 'react-router-dom';

const initialValue={
  name:'',
  phoneNo:'',
  cnic:'',
totalPrice:'',
        busNo:'',
        from:'',
        to:'',
        seatSelected:'',
}
const SelectSeat = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [confirmSeats,setConfirmSeats]= useState(initialValue);
  const [bookedSeats, setBookedSeats] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const { price, busNo, from, to } = location.state;

//  const bookedSeats = localStorage.getItem('selectedSeats',selectedSeats);
//  console.log("bookedSeats",bookedSeats)

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3005/api/seats/bookedSeates');
      const data = await response.json();

      // Filter bookings based on current route
      const filteredSeats = data
        .filter((booking) => booking.from === from && booking.to === to)
        .flatMap((booking) => booking.seatSelected); // assuming seatSelected is an array

      setBookedSeats(filteredSeats);
    } catch (error) {
      console.error('Error fetching booked seats:', error);
    }
  };

  fetchData();
}, []);


 
 const ReserveSeat = (seatNo) => {
  setSelectedSeats((prev) => {
    let updatedSeats;

    if (prev.includes(seatNo)) {
      updatedSeats = prev.filter((seat) => seat !== seatNo);
    } else {
      if (prev.length >= 10) {
        alert('You can select a maximum of 10 seats.');
        return prev; // Don't update anything
      }
      updatedSeats = [...prev, seatNo];
    }

    // Update confirm seats using updatedSeats
    setConfirmSeats({
              seatSelected: updatedSeats,
    });

    return updatedSeats;
  });
};
  const currentPrice = selectedSeats?.length * price;

const handleChange=(e)=>{
const {name,value}=e.target;
setConfirmSeats((prevUser)=>({
  ...prevUser,
  [name]:value,
   busNo:busNo,
  from: from,
  to:to,
  totalPrice:currentPrice

}));
console.log(name,value);
}

const handleSubmit=async(e)=>{
e.preventDefault();
const responce =await  fetch('http://localhost:3005/api/seats/reservseat',
        {
          method : 'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body: JSON.stringify(confirmSeats),

        }
      )
      if(responce.ok){
    localStorage.setItem('user data', JSON.stringify(confirmSeats));

        navigate('/receipt-ticket',{state:{confirmSeats}});
        
      }

console.log("confoimr SEat", confirmSeats)

}

 

  return (
    <>
      <div className="flex justify-center mt-3">
        <p className="md:text-4xl text-2xl text-red-700 font-bold border-b-4 inline border-red-700 text-center">
          Reserve Your Seat
        </p>
      </div>

      <div className="lg:flex md:w-2/3 mx-auto gap-2 mt-5 mb-2 p-1">
        {/* Seat Grid */}
        <div className="border rounded-lg w-full lg:w-1/2">
          <div className="flex flex-col gap-3 items-center p-2">
            <div className="md:w-[320px] w-[250px] border flex justify-end">
              <img src={Driver} alt="Driver" className="md:w-[70px] w-[50px]" />
            </div>

            <div className="flex flex-col gap-4">
              {[...Array(8)].map((_, rowIndex) => (
                <div className="flex flex-row gap-8" key={rowIndex}>
                  {[0, 1].map((offset) => {
                    const seatNo = rowIndex * 4 + offset + 1;
                    return (
                      <div
  key={seatNo}
  className={`cursor-pointer text-center border rounded 
    ${bookedSeats.includes(seatNo) ? 'bg-gray-400 cursor-not-allowed' : ''}
    ${selectedSeats.includes(seatNo) ? 'bg-red-200' : ''}
  `}
  onClick={() => {
    if (!bookedSeats.includes(seatNo)) ReserveSeat(seatNo);
  }}
>
  <img src={Seat} alt={`Seat ${seatNo}`} className="md:w-[70px] w-[50px]" />
  <p className="text-sm">Seat {seatNo}</p>
</div>

                    );
                  })}
                  {[2, 3].map((offset) => {
                    const seatNo = rowIndex * 4 + offset + 1;
                    return (
                      <div
  key={seatNo}
  className={`cursor-pointer text-center border rounded 
    ${bookedSeats.includes(seatNo) ? 'bg-gray-400 cursor-not-allowed' : ''}
    ${selectedSeats.includes(seatNo) ? 'bg-red-200' : ''}
  `}
  onClick={() => {
    if (!bookedSeats.includes(seatNo)) ReserveSeat(seatNo);
  }}
>
  <img src={Seat} alt={`Seat ${seatNo}`} className="md:w-[70px] w-[50px]" />
  <p className="text-sm">Seat {seatNo}</p>
</div>

                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Form + Details */}
        <div className="p-4 w-full lg:w-1/2 border rounded-lg mt-1">
          <p className="text-red-700 font-bold text-xl mb-2">Details</p>

          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-1 font-medium">
                Your name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                onChange={handleChange}
                // onBlur={formik.handleBlur}
                value={confirmSeats.name}
                className="w-full p-2 border rounded"
              />
              
            </div>

            <div className="mb-4">
              <label htmlFor="phoneNo" className="block mb-1 font-medium">
                Phone No
              </label>
              <input
                type="text"
                name="phoneNo"
                id="phoneNo"
                onChange={handleChange}
                // onBlur={formik.handleBlur}
                value={confirmSeats.phoneNo}
                className="w-full p-2 border rounded"
              />
              
            </div>

            <div className="mb-4">
              <label htmlFor="cnic" className="block mb-1 font-medium">
                CNIC
              </label>
              <input
                type="text"
                name="cnic"
                id="cnic"
                onChange={handleChange}
                // onBlur={formik.handleBlur}
                value={confirmSeats.cnic}
                className="w-full p-2 border rounded"
              />
              
            </div>
 <div className="mb-4">
  <label htmlFor="date" className="block mb-1 font-medium">
    Select Date
  </label>
  <input
    type="date"
    name="date"
    id="date"
    onChange={handleChange}
    // onBlur={formik.handleBlur}
    value={confirmSeats.date}
    className="w-full p-2 border rounded"
  />
 
</div>

            <div className="mb-4">
              <strong>From: </strong> {from} <br />
              <strong>To: </strong> {to} <br />
              <strong>Bus No: </strong> {busNo} <br />
              <strong>Selected Seats: </strong>{' '}
              {selectedSeats.length > 0 ? selectedSeats.sort((a, b) => a - b).join(', ') : 'None'} <br />
              <strong>Total Price: </strong> {currentPrice}
            </div>

            <button
              type="submit"
             
            >
              Continue Booking
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SelectSeat;
