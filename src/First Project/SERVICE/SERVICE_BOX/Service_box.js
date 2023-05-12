import { Link } from "react-router-dom";
import Button from "../../BUTTON/Button";
import "./Service_box.css";

function Service_box(props) {
  
  return (
    <div className="service_box_container">

        <img className="service_box_container_image" src={props.image} alt="Loading....." />
        <p>{props.detail}</p>
        <Link to="*">
          <Button button_name="read more" />
        </Link>
    </div>
  );
}

export default Service_box;
