import { Link } from "react-router-dom";
import "./Header.css";

import logo from "../../images/logo.png";

import {AiOutlinePlus} from "react-icons/ai"//to add an icon

function Header() {
  return (
    <div className="header_parent">
      {/* <AiOutlinePlus /> */}
      
      <div>
        <img src={logo} alt="Loading...." className="logo"></img>
      </div>

      <div className="links">
        <Link to="" className=""> Home </Link>
        <Link to="" className=""> Rooms </Link>
      </div>


    </div>
  );
}

export default Header;
