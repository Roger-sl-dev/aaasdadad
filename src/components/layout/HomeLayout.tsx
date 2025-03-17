import Navbar from "../ui/Navbar"

import Logo from '../../assets/logo.png';
import { FaInstagram } from "react-icons/fa";



export default({children}:any)=>{
    return(
      <main className="absolute top-0 z-[-2]  w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        <nav className=" fixed w-full z-40 px-4 py-2">
            <Navbar/>

        </nav>
 <div className=" ">
        {children}

 </div>

 <footer className=" border-t-2 border-white p-2 flex flex-row justify-around ">
  <img className=" w-1/5" src={Logo} alt="" />
  <p className=" text-center text-white text-lg w-3/5 ">O jeito mais fácil e rápido de pedir, delivery online é no Topedindo. As principais lojas de sua cidade em um único lugar.</p>
  <span className="w-1/5 flex flex-row gap-2">
    <FaInstagram className=" text-3xl  text-white"/>
    <FaInstagram className=" text-3xl  text-white"/>
    <FaInstagram className=" text-3xl  text-white"/>


  </span>
 </footer>
      </main>
    )
}