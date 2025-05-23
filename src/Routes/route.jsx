
import {Routes, Route } from "react-router-dom"
import Layout from "../layout/Section_Layout"
import Home from "../Pages/Home/home"
import About from '../Pages/About/about'
import ReserveTickets from "../components/ReserveTickets/ReserveTickets"
import BookSeat from "../components/ReserveTickets/BookSeat"
import Terminals from "../Pages/Terminals/terminals"
import Contact from "../Pages/Contact/contact"



const RouteComponent=()=>{

    return<>
    <Routes>
        <Route 
        path="/"
        element={<Layout component={Home} navbar={true} footer={true}/>}
        />
         <Route 
        path="/reserve-ticket"
        element={<Layout component={ReserveTickets} navbar={true} footer={true}/>}
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
        element={<Layout component={BookSeat} navbar={true} footer={true}/>}
        />

    </Routes>
    
    </>
}

export default RouteComponent