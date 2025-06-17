import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Seat from '../../assets/Bus_seat_Icon/seat-4.svg';
import Driver from '../../assets/Bus_seat_Icon/Driver.svg';
import { useLocation, useNavigate } from 'react-router-dom';

const SelectSeat = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const { price, busNo, from, to } = location.state;

 const bookedSeats = localStorage.getItem('selectedSeats',selectedSeats);
 console.log("bookedSeats",bookedSeats)

  const ReserveSeat = (seatNo) => {
    if (selectedSeats.length >= 10 && !selectedSeats.includes(seatNo)) {
      alert('You can select a maximum of 10 seats.');
      return;
    }
    setSelectedSeats((prev) =>
      prev.includes(seatNo) ? prev.filter((seat) => seat !== seatNo) : [...prev, seatNo]
    );
  };

  const currentPrice = selectedSeats?.length * price;

  const continueBooking = (values) => {
localStorage.setItem("selectedSeats", JSON.stringify(selectedSeats));
      console.log("selectedSeats:", selectedSeats);
    console.log("values",values);
    if (!selectedSeats.length) return;
    navigate('/receipt-ticket', {
      state: {
        TotalPrice: currentPrice,
        BusNo: busNo,
        From: from,
        To: to,
        selectedSeats,
        userData: values
      }
    });
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      phoneNo: '',
      cnic: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      phoneNo: Yup.string()
        .matches(/^\d{11}$/, 'Phone number must be exactly 11 digits')
        .required('Phone number is required'),
      cnic: Yup.string()
        .matches(/^\d{13}$/, 'CNIC must be exactly 13 digits')
        .required('CNIC is required')
    }),
    onSubmit: continueBooking
  });

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
                        className={`cursor-pointer text-center border rounded ${
                          selectedSeats.includes(seatNo) ? 'bg-red-200' : ''
                        }`}
                        onClick={() => ReserveSeat(seatNo)}
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
                        className={`cursor-pointer text-center border rounded ${
                          selectedSeats.includes(seatNo) ? 'bg-red-200' : ''
                        }`}
                        onClick={() => ReserveSeat(seatNo)}
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

          <form onSubmit={formik.handleSubmit} noValidate>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-1 font-medium">
                Your name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                className="w-full p-2 border rounded"
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-red-500 text-sm">{formik.errors.name}</p>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="phoneNo" className="block mb-1 font-medium">
                Phone No
              </label>
              <input
                type="text"
                name="phoneNo"
                id="phoneNo"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phoneNo}
                className="w-full p-2 border rounded"
              />
              {formik.touched.phoneNo && formik.errors.phoneNo && (
                <p className="text-red-500 text-sm">{formik.errors.phoneNo}</p>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="cnic" className="block mb-1 font-medium">
                CNIC
              </label>
              <input
                type="text"
                name="cnic"
                id="cnic"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.cnic}
                className="w-full p-2 border rounded"
              />
              {formik.touched.cnic && formik.errors.cnic && (
                <p className="text-red-500 text-sm">{formik.errors.cnic}</p>
              )}
            </div>
 <div className="mb-4">
  <label htmlFor="date" className="block mb-1 font-medium">
    Select Date
  </label>
  <input
    type="date"
    name="date"
    id="date"
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    value={formik.values.date}
    className="w-full p-2 border rounded"
  />
  {formik.touched.date && formik.errors.date && (
    <p className="text-red-500 text-sm">{formik.errors.date}</p>
  )}
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
              className={`w-full h-12 mt-2 font-bold ${
                selectedSeats.length && formik.isValid
                  ? 'bg-red-700 text-white'
                  : 'bg-gray-400 text-white cursor-not-allowed'
              }`}
              disabled={!selectedSeats.length || !formik.isValid}
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
