import { Link } from "react-router-dom";
import Button from "../BUTTON/Button";
import "./Error.css";

function Error() {
  return (
    <div className="error_container">

        <img className="error_container_image" src="../IMAGES/download (7).jpg"/>

        <p>You are illegible to use this page.</p>

        <Link to="/">
            <Button className="error_container_button" button_name="back to home" />
        </Link>

        

    </div>
  );
}

export default Error;
