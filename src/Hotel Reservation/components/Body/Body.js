import "./Body.css";

import body_background from "../../images/body_background.jpg";

import {AiOutlinePlus} from "react-icons/ai"//to add an icon
import Button from "../Button/Button";

function Body() {
  return (
    <div className="body_parent">
      {/* <AiOutlinePlus /> */}

      <div className="container_on_image">
        <h1>Luxurious Rooms</h1>
        <hr className="hr"/>
        <p>Deluxe Rooms Starting At $299</p>
        <Button content="OUR ROOMS"/>
      </div>

    </div>
  );
}

export default Body;
