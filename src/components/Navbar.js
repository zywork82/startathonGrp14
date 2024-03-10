import React, {useState} from 'react'
import Logo from "../assets/Kee+ transparent.png";
import { Link } from "react-router-dom";
import '../styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
const [openLinks, setOpenLinks] = useState(false)
const toggleNavbar = () =>{
    setOpenLinks(!openLinks);
}

  return (
    <div className="navbar">
        <div className="leftSide" id={openLinks ? "open" : "close"}>
            <img className="KeePlusLogo" src={Logo} />
            <div className='hiddenLinks'>
            <Link to ="/"> Home </Link>
            <Link to ="/product"> Product </Link>
            <Link to ="/customisation"> Customisation </Link>
            <Link to ="/help"> Help </Link>
            </div>
        </div>
        <div className="rightSide">
            <Link to ="/"> Home </Link>
            <Link to ="/product"> Product </Link>
            <Link to ="/customisation"> Customisation </Link>
            <Link to ="/help"> Help </Link>
            <button onClick={toggleNavbar}><ReorderIcon /></button>
        </div>
    </div>
  )
}

export default Navbar