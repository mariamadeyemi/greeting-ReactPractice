import React from "react";
import ReactDOM from "react-dom";

const currentDate= new Date();
const currentTime= currentDate.getHours();

const customstyle= {
  color: ""
}

let Greetings;
 
  if (currentTime < 12){
    Greetings= "Good Morning"
    customstyle.color = "red"

  }else if(currentTime < 18){
    Greetings= "Good Afternoon"
    customstyle.color = "green"
  } else{
    Greetings= "Good Evening"
    customstyle.color = "blue"
  }


ReactDOM.render(
<h1 className="heading" style={customstyle}>{Greetings}</h1>, 
document.getElementById("root"));


