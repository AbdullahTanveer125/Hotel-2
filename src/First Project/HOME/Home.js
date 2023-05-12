import "./Home.css";
import Body from "../BODY/Body";



function Home() {

  let TEXT_2="UE stand for <b>University of Education</b>. I think department of IT(Information Technology) is good because UE have many good teachers."



  let home_data=[
      {
        text_1:"THIS IS WEBSITE",
        heading:"First Project In React",
        text_2:TEXT_2,
        image:"./IMAGES/mobile.png"
      }
  ];

  return (
    <div className="home_container">
      <Body 
        text_1={home_data[0].text_1} 
        heading={home_data[0].heading} 
        text_2={home_data[0].text_2}
        image={home_data[0].image}
      />
    </div>
  );
}

export default Home;
