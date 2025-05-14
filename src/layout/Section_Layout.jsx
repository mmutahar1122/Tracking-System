import Navbar from "../components/navbar/Navbar"
import Footer from "../components/footer/Footer"

const Layout=({component:Component,navbar=true,footer=true})=>{


    return <>
    {navbar && <Navbar/>}
    <Component/>
    {footer && <Footer/>}
    </>


}

export default Layout