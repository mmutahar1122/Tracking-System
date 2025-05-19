import { useState } from 'react';
import Seat from '../../assets/Bus_seat_Icon/seat-4.svg';
import Driver from '../../assets/Bus_seat_Icon/Driver.svg';
import busSeats from '../BusData/busdata'; // Assume this has array of seats
import { useLocation } from 'react-router-dom';
const BookSeat = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const location = useLocation();
  const seatPrice = location.state?.seatPrice;

  console.log('Seat Price:', seatPrice);
  const ReserveSeat = (seatNo) => {
    console.info("Clicked seat:", seatNo);
    setSelectedSeats((prev) =>
      prev.includes(seatNo) ? prev.filter((seat) => seat !== seatNo) : [...prev, seatNo]
    );
      
  };
if (selectedSeats.length >= 10) {
      alert("You can select a maximum of 10 seats.");
      return;
    }
    
  return (
    <>
      <div className="flex justify-center mt-3">
        <p className="md:text-4xl text-2xl text-red-700 font-bold border-b-4 inline border-red-700 text-center">
          Reserve Your Seat
        </p>
      </div>

      <div className="flex flex-wra md:w-2/3 mx-auto gap-2 mt-5 mb-2">
        <div className="border rounded-lg w-full md:w-1/2">
          <div className="flex flex-col gap-3 items-center p-2">
            {/* Driver Image */}
            <div className="md:w-[320px] w-[300px] border flex justify-end">
              <img src={Driver} alt="Driver" className="md:w-[70px] w-[50px]" />
            </div>

            {/* Dynamic Seats Grid */}
            <div className="flex flex-col gap-4">
              {[...Array(8)].map((_, rowIndex) => (
                <div className="flex flex-row gap-8" key={rowIndex}>
                  {/* Left side seats */}
                  <div className="flex gap-2">
                    {[0, 1].map((offset) => {
                      const seatNo = rowIndex * 4 + offset + 1;
                      return (
                        <div
                          key={seatNo}
                          className={`cursor-pointer text-center border rounded ${
                            selectedSeats.includes(seatNo) ? 'bg-red-200' : ''
                          }`}
                          onClick={() => ReserveSeat(seatNo)}
                        >
                          <img
                            src={Seat}
                            alt={`Seat ${seatNo}`}
                            className="md:w-[70px] w-[50px]"
                          />
                          <p className="text-sm">Seat {seatNo}</p>
                        </div>
                      );
                    })}
                  </div>

                  {/* Right side seats */}
                  <div className="flex gap-2">
                    {[2, 3].map((offset) => {
                      const seatNo = rowIndex * 4 + offset + 1;
                      return (
                        <div
                          key={seatNo}
                          className={`cursor-pointer text-center border rounded ${
                            selectedSeats.includes(seatNo) ? 'bg-red-200' : ''
                          }`}
                          onClick={() => ReserveSeat(seatNo)}
                        >
                          <img
                            src={Seat}
                            alt={`Seat ${seatNo}`}
                            className="md:w-[70px] w-[50px]"
                          />
                          <p className="text-sm">Seat {seatNo}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Section */}
        <div className="p-4 w-full md:w-1/2 border rounded-lg">
          <p className="text-red-700 font-bold text-xl mb-2">Details</p>
          <div className="mb-3">
            <div>Reserved (Female)</div>
            <div>Reserved (Male)</div>
          </div>

          <div className="mt-2 mb-2">For Refund/Cancelation Kindly Review</div>

          <div className='flex justify-between'>
            <div className="mt-1">
            <strong>Selected Seats:</strong>
            <br />
              {selectedSeats.length > 0 ? (
                selectedSeats.sort((a, b) => a - b).join(', ')
              ) : (
                <span className="text-gray-500">None</span>
              )}
            </div>
            <div> <strong>price</strong>
            <br />
            <p>{selectedSeats?.length * seatPrice}</p>
            </div>
          </div>
          <button className='bg-red-700 text-white w-full h-12 mt-2 font-bold'>Continue Booking</button>
        </div>
      </div>
    </>
  );
};

export default BookSeat;
