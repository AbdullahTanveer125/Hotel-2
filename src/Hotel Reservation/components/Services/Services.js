import "./Services.css";
import Service_box from "./Service_box/Service_box";
import  { serviceData } from "../../Content Data/Services_data";


function Services() {
  return (
    <div className="">

      <div>
        <h1>Services</h1>
        <hr />
      </div>

      <div>
        {serviceData.map(function (element){
            <div key={element.id}>
                <Service_box icon={element.icon} heading={element.heading} detail={element.detail}/>
            </div>
        })
        }
      </div>


    </div>
  );
}

export default Services;
