import './Parent_of_gym.css';
import  Hero  from './components/Hero/Hero';
import   Plan  from './components/Plan/Plan';
import  Program  from './components/Program/Program';
import  Reasons  from './components/Reasons/Reasons';
import Testimonials from './components/Testimonials/Testimonials';
import   Join  from './components/Join/Join';
import   Footer  from './components/Footer/Footer';

function Parent_of_gym() {
  return (
   <div className="Parent_of_gym"> 
 <Hero/>
 <Program/>
 <Reasons/>
 <Plan/>
 <Testimonials/>
 <Join/>
 <Footer/>
     </div>
    );
}

export default Parent_of_gym;
