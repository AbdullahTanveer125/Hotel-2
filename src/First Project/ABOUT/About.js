import './About.css';
import Body from "../BODY/Body";

function About(){

    let TEXT_2="loremsdjvsdmj sdfjnvdjnvc djjcejkcjec decji jdcfeidcdec dcjndcvndjcvcniedcn dcjdcncidn djncjd cjdjdkc djcnidnc djcnidc djcndicd eifndjwi amsdidncjdid jdncis d jdnic sjncicd dscnidc djcinc jncic icnsoc cosncicw kmnid.";

    let about_data=[
        {
          text_1:"HAVE A GOOD DAY",
          heading:"About Section",
          text_2:TEXT_2,
          image:"./IMAGES/images.jpg"
        }
    ];


    return(
        <div className='about_container'>
        <Body 
            text_1={about_data[0].text_1} 
            heading={about_data[0].heading} 
            text_2={about_data[0].text_2}
            image={about_data[0].image}
        />
        </div>
    )

}

export default About;