import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

  const lahoreRoutes = [
  { from: 'Lahore', to: 'Multan', duration: '6 Hrs', features: 'WiFi Snacks AC Charging Port', price: 1400, busNo: 'lhr-5001', dispatchTime: '07:00 AM', locat: 'Thokar Niaz Baig Terminal, Lahore' },
  { from: 'Lahore', to: 'Faisalabad', duration: '2 Hrs', features: 'AC Charging Port', price: 800, busNo: 'lhr-5002', dispatchTime: '08:30 AM', locat: 'Kalma Chowk Terminal, Lahore' },
  { from: 'Lahore', to: 'Islamabad', duration: '5 Hrs', features: 'WiFi Snacks AC', price: 1200, busNo: 'lhr-5003', dispatchTime: '10:00 AM', locat: 'Daewoo Terminal, Lahore' },
  { from: 'Lahore', to: 'Sialkot', duration: '2.5 Hrs', features: 'Snacks AC Charging Port', price: 900, busNo: 'lhr-5004', dispatchTime: '12:00 PM', locat: 'Shahdara Terminal, Lahore' },
  { from: 'Lahore', to: 'Karachi', duration: '16 Hrs', features: 'WiFi Snacks AC Charging Port Entertainment', price: 3000, busNo: 'lhr-5005', dispatchTime: '02:00 PM', locat: 'Lari Adda, Lahore' },
  { from: 'Lahore', to: 'Peshawar', duration: '8 Hrs', features: 'WiFi AC Charging Port', price: 1800, busNo: 'lhr-5006', dispatchTime: '05:00 PM', locat: 'General Bus Stand, Lahore' },
];
  const faisalabadRoutes = [
    { from: 'Faisalabad', locat:'Railway Road, near Railway Station, Faisalabad', busNo:'fsd-7878', dispatchTime:'8:00 AM', to: 'Sialkot', duration: '3.5 Hrs', features: 'AC Charging Port', price: 1600 },
    { from: 'Faisalabad', locat:'Jhang Road, near Motorway Bypass, Faisalabad', busNo:'fsd-9845', dispatchTime:'10:00 AM', to: 'Multan', duration: '4.5 Hrs', features: 'WiFi AC', price: 1100 },
    { from: 'Faisalabad', locat:'Main Samundri Road, near Sandal College, Faisalabad', busNo:'fsd-4534', dispatchTime:'12:00 PM', to: 'Lahore', duration: '2 Hrs', features: 'Snacks AC Charging Port', price: 800 },
    { from: 'Faisalabad', locat:'Main Susan Road, opposite Iqbal Stadium, Faisalabad', busNo:'fsd-6342', dispatchTime:'02:00 PM', to: 'Rawalpindi', duration: '6 Hrs', features: 'WiFi Snacks AC', price: 1300 },
    { from: 'Faisalabad', locat:'Jhang Road, near Bakar Mandi Market, Faisalabad', busNo:'fsd-6547', dispatchTime:'04:00 PM', to: 'Karachi', duration: '15 Hrs', features: 'WiFi Snacks AC Charging Port Entertainment', price: 2800 },
    { from: 'Faisalabad', locat:'Millat Road, Millat Town, Faisalabad', busNo:'fsd-1265', to: 'Hyderabad', dispatchTime:'05:00 PM', duration: '13 Hrs', features: 'AC Charging Port Snacks', price: 2500 },
  ];
  const karachiRoutes = [
  { from: 'Karachi', to: 'Hyderabad', duration: '2 Hrs', features: 'AC', price: 1000, busNo: 'krk-1001', dispatchTime: '07:00 AM', locat: 'Sohrab Goth Terminal, Karachi' },
  { from: 'Karachi', to: 'Lahore', duration: '16 Hrs', features: 'WiFi Snacks AC Charging Port', price: 3200, busNo: 'krk-1002', dispatchTime: '10:00 AM', locat: 'Al-Asif Terminal, Karachi' },
  { from: 'Karachi', to: 'Islamabad', duration: '17 Hrs', features: 'WiFi Snacks AC Charging Port Entertainment', price: 3300, busNo: 'krk-1003', dispatchTime: '12:00 PM', locat: 'Karachi Cantt Terminal' },
  { from: 'Karachi', to: 'Multan', duration: '14 Hrs', features: 'AC Charging Port Snacks', price: 2900, busNo: 'krk-1004', dispatchTime: '02:00 PM', locat: 'Super Highway Terminal, Karachi' },
  { from: 'Karachi', to: 'Sukkur', duration: '6 Hrs', features: 'Snacks AC Charging Port', price: 1400, busNo: 'krk-1005', dispatchTime: '04:00 PM', locat: 'Lyari Express Terminal, Karachi' },
  { from: 'Karachi', to: 'Quetta', duration: '11 Hrs', features: 'WiFi AC Charging Port', price: 2600, busNo: 'krk-1006', dispatchTime: '06:00 PM', locat: 'Baldia Town Terminal, Karachi' },
];

  const islamabadRoutes = [
  { from: 'Islamabad', to: 'Peshawar', duration: '2.5 Hrs', features: 'AC Charging Port Snacks', price: 900, busNo: 'isb-2001', dispatchTime: '06:30 AM', locat: 'Faizabad Terminal, Islamabad' },
  { from: 'Islamabad', to: 'Lahore', duration: '5 Hrs', features: 'WiFi Snacks AC Charging Port', price: 1200, busNo: 'isb-2002', dispatchTime: '08:00 AM', locat: 'Pirwadhai Bus Stand, Islamabad' },
  { from: 'Islamabad', to: 'Multan', duration: '7 Hrs', features: 'WiFi Snacks AC', price: 1500, busNo: 'isb-2003', dispatchTime: '10:00 AM', locat: 'G-9 Markaz Terminal, Islamabad' },
  { from: 'Islamabad', to: 'Faisalabad', duration: '5 Hrs', features: 'AC Charging Port', price: 1100, busNo: 'isb-2004', dispatchTime: '12:00 PM', locat: 'Rawal Town Terminal, Islamabad' },
  { from: 'Islamabad', to: 'Karachi', duration: '17 Hrs', features: 'WiFi AC Charging Port Entertainment', price: 3300, busNo: 'isb-2005', dispatchTime: '03:00 PM', locat: 'Faizabad Terminal, Islamabad' },
  { from: 'Islamabad', to: 'Sialkot', duration: '4.5 Hrs', features: 'Snacks AC Charging Port', price: 1000, busNo: 'isb-2006', dispatchTime: '05:00 PM', locat: 'Kashmir Highway Terminal, Islamabad' },
];

  const multanRoutes = [
  { from: 'Multan', to: 'Lahore', duration: '6 Hrs', features: 'WiFi Snacks AC', price: 1400, busNo: 'mlt-3005', dispatchTime: '07:00 AM', locat: 'Daewoo Terminal, Vehari Road, Multan' },
  { from: 'Multan', to: 'Karachi', duration: '14 Hrs', features: 'WiFi AC Charging Port Entertainment', price: 2800, busNo: 'mlt-3002', dispatchTime: '10:00 AM', locat: 'Multan Cantt Terminal' },
  { from: 'Multan', to: 'Islamabad', duration: '7 Hrs', features: 'Snacks AC Charging Port', price: 1500, busNo: 'mlt-3003', dispatchTime: '12:00 PM', locat: 'Vehari Chowk Terminal, Multan' },
  { from: 'Multan', to: 'Faisalabad', duration: '4.5 Hrs', features: 'WiFi Snacks AC', price: 1100, busNo: 'mlt-3004', dispatchTime: '02:00 PM', locat: 'New Multan Terminal' },
  { from: 'Multan', to: 'Larkana', duration: '5.5 Hrs', features: 'AC Charging Port', price: 1250, busNo: 'mlt-3005', dispatchTime: '04:00 PM', locat: 'Bus Stand Chowk, Multan' },
  { from: 'Multan', to: 'Quetta', duration: '10 Hrs', features: 'AC Charging Port Snacks', price: 2400, busNo: 'mlt-3006', dispatchTime: '06:00 PM', locat: 'Multan General Bus Stand' },
];

  const sialkotRoutes = [
  { from: 'Sialkot', to: 'Bahawalpur', duration: '6.5 Hrs', features: 'Snacks AC Charging Port', price: 1500, busNo: 'skt-4001', dispatchTime: '08:00 AM', locat: 'General Bus Stand, Sialkot' },
  { from: 'Sialkot', to: 'Lahore', duration: '2.5 Hrs', features: 'Snacks AC', price: 900, busNo: 'skt-4002', dispatchTime: '09:30 AM', locat: 'Defence Road Terminal, Sialkot' },
  { from: 'Sialkot', to: 'Islamabad', duration: '4.5 Hrs', features: 'WiFi AC Charging Port', price: 1000, busNo: 'skt-4003', dispatchTime: '11:00 AM', locat: 'Daska Road Terminal, Sialkot' },
  { from: 'Sialkot', to: 'Multan', duration: '5.5 Hrs', features: 'WiFi Snacks AC', price: 1250, busNo: 'skt-4004', dispatchTime: '01:00 PM', locat: 'New Sialkot Bus Terminal' },
  { from: 'Sialkot', to: 'Faisalabad', duration: '3.5 Hrs', features: 'AC Charging Port', price: 950, busNo: 'skt-4005', dispatchTime: '03:00 PM', locat: 'City Bus Stand, Sialkot' },
  { from: 'Sialkot', to: 'Karachi', duration: '17 Hrs', features: 'WiFi Snacks AC Charging Port Entertainment', price: 3400, busNo: 'skt-4006', dispatchTime: '06:00 PM', locat: 'Airport Road Terminal, Sialkot' },
];

            const routesByCity = {
  Lahore: lahoreRoutes,
  Faisalabad: faisalabadRoutes,
  Karachi: karachiRoutes,
  Islamabad: islamabadRoutes,
  Multan: multanRoutes,
  Sialkot: sialkotRoutes,
};

const ReserveTickets = (data) => {
const location = useLocation();
  const receiveData = location.state?.data;
  console.log("receive data", receiveData);
  const navigate = useNavigate();

  // state for inputs
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [date, setDate] = useState("");
  const [arrivalOptions, setArrivalOptions] = useState([]);
  const [filteredRoutes, setFilteredRoutes] = useState([]);


  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // update arrival options whenever departure changes
  useEffect(() => {
    if (departure && routesByCity[departure]) {
      const destinations = routesByCity[departure].map((r) => r.to);
      setArrivalOptions(destinations);
    } else {
      setArrivalOptions([]);
    }
    setArrival("");
  }, [departure]);

  const handleReserveClick = ({ price, busNo, from, to }) => {
    navigate("/book-seat", { state: { price, busNo, from, to } });
  };

  const locationTracker = () => navigate("/live-location");
  const EmergencyAlert = () => navigate("/emergencyMessage");

  // 🔎 Search button click
  const handleSearch = () => {
    if (departure && arrival) {
      const routes = routesByCity[departure] || [];
      const filtered = routes.filter((r) => r.to === arrival);
      setFilteredRoutes(filtered);
    } else {
      setFilteredRoutes([]);
    }
  };
    return  <>
      {/* Inputs */}
      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row gap-2 text-2xl text-black mt-4 w-full md:w-3/4">
          {/* Departure */}
          <input
            type="text"
            list="cities"
            value={departure}
            onChange={(e) => setDeparture(e.target.value ? e.target.value : receiveData.from)}
            placeholder="Departure"
            className="rounded-xl p-2 h-12 font-normal border border-red-700 w-full md:w-1/4
                   focus:outline-none focus:border-red-700 focus:ring-2 focus:ring-red-300"
          />
          <datalist id="cities">
            {Object.keys(routesByCity).map((city) => (
              <option key={city} value={city} />
            ))}
          </datalist>

          {/* Arrival */}
          <input
            type="text"
            list="arrivalCities"
            value={arrival}
            onChange={(e) => setArrival(e.target.value ? e.target.value : receiveData.to)}
            placeholder="Arrival"
            disabled={!departure}
            className="rounded-xl p-2 h-12 font-normal border border-red-700 w-full md:w-1/4
                   focus:outline-none focus:border-red-700 focus:ring-2 focus:ring-red-300 disabled:bg-gray-200"
          />
          <datalist id="arrivalCities">
            {arrivalOptions.map((city, idx) => (
              <option key={idx} value={city} />
            ))}
          </datalist>

          {/* Date */}
          {/* <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="rounded-xl p-2 h-12 font-normal border border-red-700 w-full md:w-1/4
                   focus:outline-none focus:border-red-700 focus:ring-2 focus:ring-red-300"
          /> */}

          {/* 🔎 Search button */}
          <button
            onClick={handleSearch}
            className="bg-red-700 text-white rounded-xl p-2 h-12 font-medium w-full md:w-1/6 hover:bg-red-800"
          >
            Search
          </button>
        </div>
      </div>

      {/* Routes */}
      <div className="flex flex-wrap gap-2 mx-auto mt-4 justify-center mb-2">
        {filteredRoutes.length > 0 ? (
          filteredRoutes.map((item, index) => (
            <div
              className="w-1/2 min-w-[310px] border rounded-lg p-2 bg-gray-100 text-gray-600"
              key={index}
              data-aos="zoom-in"
            >
              <div className="flex justify-between">
                <p>{item.from}</p>
                <p>{item.dispatchTime}</p>
                <p>{item.to}</p>
              </div>
              <div>
                <span className="font-medium">Features: </span>
                {item.features}
              </div>
              <div>
                <p>
                  <span className="font-medium">Dispatch:</span>{" "}
                  {item.dispatchTime}
                </p>
                <p>
                  <span className="font-medium">Location:</span> {item.locat}
                </p>
                <p>
                  <span className="font-medium">Bus No:</span> {item.busNo}
                </p>
              </div>
              <div className="flex justify-between items-center mt-5">
                <div className="font-medium">Rs. {item.price}</div>
                <div>
                  <button
                    className="bg-red-700 text-white p-2 m-1 rounded-lg cursor-pointer"
                    onClick={() =>
                      handleReserveClick({
                        price: item.price,
                        busNo: item.busNo,
                        from: item.from,
                        to: item.to,
                      })
                    }
                  >
                    Reserve Seat
                  </button>
                  <button
                    className="bg-red-700 text-white p-2 m-1 rounded-lg cursor-pointer"
                    onClick={locationTracker}
                  >
                    Live Location
                  </button>
                  <button
                    className="bg-red-700 text-white p-2 m-1 rounded-lg cursor-pointer"
                    onClick={EmergencyAlert}
                  >
                    Panic Button
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 mt-4">
            {departure && arrival
              ? "No buses found for this route."
              : "Please select departure, arrival and click Search."}
          </p>
        )}
      </div>
    </>
}
export default ReserveTickets