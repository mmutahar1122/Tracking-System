
import {Routes, Route } from "react-router-dom"
import DriverSignup from "../Authentication/driverSignup"
import Signup from "../Authentication/signup"
import Signin from "../Authentication/signin"
import AuthLayout from "../layout/authLayout"
import Layout from "../layout/Section_Layout"
import Home from "../Pages/Home/home"
import About from '../Pages/About/about'
import ReserveTickets from "../components/ReserveTickets/ReserveTickets"
import SelectSeat from "../components/ReserveTickets/SelectSeat"
import TicketReceipt from "../components/ReserveTickets/TicketReceipt"
import Terminals from "../Pages/Terminals/terminals"
import Contact from "../Pages/Contact/contact"
import LiveLocation from "../components/Location/location"
import EmergencyMessage from "../components/alertmsg/alertmsg"




const RouteComponent=()=>{

    return<>
    <Routes>
        <Route 
        path="/signup"
        element={<AuthLayout component={Signup}/>}
        />
         <Route 
        path="/driver-signup"
        element={<AuthLayout component={DriverSignup}/>}
        />
         {/* <Route 
        path="/"
        element={<AuthLayout component={Signin}/>}
        /> */}
        <Route 
        path="/"
        element={<Layout component={Home} navbar={true} footer={true}/>}
        />
         <Route 
        path="/reserve-ticket"
        element={<Layout component={ReserveTickets} navbar={true} footer={true}/>}
        />
        <Route 
        path="/receipt-ticket"
        element={<Layout component={TicketReceipt} navbar={false} footer={false}/>}
        />
        <Route 
        path="/about"
        element={<Layout component={About} navbar={true} footer={true}/>}
        />
        <Route 
        path="/terminals"
        element={<Layout component={Terminals} navbar={true} footer={true}/>}
        />
         <Route 
        path="/contact-us"
        element={<Layout component={Contact} navbar={true} footer={true}/>}
        />
         <Route 
        path="/book-seat"
        element={<Layout component={SelectSeat} navbar={true} footer={true}/>}
        />
         <Route 
        path="/live-location"
        element={<Layout component={LiveLocation} navbar={true} footer={true}/>}
        />
        <Route 
        path="/emergencyMessage"
        element={<Layout component={EmergencyMessage} navbar={true} footer={true}/>}
        />

    </Routes>
    
    </>
}

export default RouteComponent