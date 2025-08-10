import Navbar from "../components/navbar/Navbar"
import Footer from "../components/footer/Footer"
import whatsapp from "../assets/icons/wtsapp.png"

const Layout=({component:Component,navbar=true,footer=true})=>{


    return <>
    {navbar && <Navbar/>}
    <Component/>
    <a 
  href="https://wa.me/923096382191?text=Hello%2C%20I%20have%20a%20question" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <img 
    src={whatsapp} 
    alt="WhatsApp Icon" 
    className="w-16 fixed bottom-4 right-4 border z-50"
  />
</a>

    {footer && <Footer/>}
    </>


}

export default Layout