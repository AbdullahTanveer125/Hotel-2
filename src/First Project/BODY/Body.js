import "./Body.css";

import { BrowserRouter,Routes,Route } from "react-router-dom";


function Body(props) {
  return (
    <div className="Body">
        <div className="Body_text">
            <p> {props.text_1} </p>
            <h1> {props.heading} </h1>
            {/* <p>"UE" stand for <b>University of Education</b>. I think department of IT(Information Technology) is good because UE have many good teachers.</p> */}
            <p> {props.text_2} </p>
        </div>
        <div className="Body_image">
            <img className="image" src={props.image} alt="loading...."/>
        </div>

    </div>
  );
}

export default Body;
