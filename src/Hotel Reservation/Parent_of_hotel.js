import "./Parent_of_hotel.css";

import Body from "./components/Body/Body";
import Header from "./components/Header/Header";
import Service_box from "./components/Services/Service_box/Service_box";
import Services from "./components/Services/Services";

import {AiOutlinePlus} from "react-icons/ai"//to add an icon

function Parent_of_hotel() {
  return (
    <div className="">
      {/* <AiOutlinePlus /> */}

      <Header />
      <Body />
      <Services />
      
    </div>
  );
}

export default Parent_of_hotel;
