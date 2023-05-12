import Service_box from "./SERVICE_BOX/Service_box";
import "./Service.css";

function Service() {

    let detail="Kou kfy yfiuf klju kfyd jfyfd kcyd ctudf jgfdfd dfydfiyfd jduiydf jydfuiydf kyfif kfikf khfif iihjii cfdr cvdrt cxtry kjlij kjjujt cytr cfdr cguu kutv kiuyc kuuv liuyu iuujjo.";

    let Service_data=[
        {
            // id:e1,
            image:"./IMAGES/download (1).jpg",
            detail:detail
        },
        {
            // id:e2,
            image:"./IMAGES/download (2).jpg",
            detail:detail
        },
        {
            // id:e3,
            image:"./IMAGES/download (3).jpg",
            detail:detail
        },
        {
            // id:e4,
            image:"./IMAGES/download (4).jpg",
            detail:detail
        },
        {
            // id:e5,
            image:"./IMAGES/download (5).jpg",
            detail:detail
        },
        {
            // id:e6,
            image:"./IMAGES/download (6).jpg",
            detail:detail
        }
    ]


  return (
    <div className="Service_container">

        <h1 className="Service_container_heading">Our Services</h1>
        <Service_box className="Service_container_box" image={Service_data[0].image} detail={Service_data[0].detail} />
        <Service_box image={Service_data[1].image} detail={Service_data[1].detail} />
        <Service_box image={Service_data[2].image} detail={Service_data[2].detail} />
        <Service_box image={Service_data[3].image} detail={Service_data[3].detail} />
        <Service_box image={Service_data[4].image} detail={Service_data[4].detail} />
        <Service_box image={Service_data[5].image} detail={Service_data[5].detail} />
        
    </div>
  );
}

export default Service;
