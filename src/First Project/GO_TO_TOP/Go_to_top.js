import { useEffect, useState } from "react";
import "./Go_to_top.css";
import { AiOutlineArrowUp } from "react-icons/ai";

function Go_to_top() {

  let [is_visible,set_visible]=useState(false);

  function scroll_calculate(){
    let scroll_limit=50;
    let current_scroll=document.body.scrollTop || document.documentElement.scrollTop;
    console.log(current_scroll);
    if(current_scroll>scroll_limit){
      set_visible(true);
    }
    else{
      set_visible(false);
    }
  }

  useEffect(function (){
    window.addEventListener("scroll",scroll_calculate);

    // Following function is to remove recent scroll data because it overload on webpage
    return () => window.removeEventListener("scroll", scroll_calculate)
  },[]);

  function go_to_top(){
      window.scrollTo({top:0, left:0, behavior:"smooth"});
  };

  return (
    <div>
      { is_visible && (
          <div className="go_to_top_button" onClick={go_to_top}> <AiOutlineArrowUp className="go_to_top_icon" /> </div>
        )
      }
    </div>
    
  );
}

export default Go_to_top;
