import React from "react";
import ReactDOM from "react-dom/client";

/*
        <div id= "parent">
     <div id = "child">
  <h1>I am ayisha
  </h1>
  <h2>I am ayisha
  </h2>

     </div>
        </div>


*/
 
const parent = React.createElement(
    "div", 
    {id :"parent"},
    React.createElement(
      "div",
      {id:"child"},
      [React.createElement("h1",{},"I am ayisha"),React.createElement("h1",{},"Namaste React ")]
));


const root = ReactDOM.createRoot(document.getElementById("root"))


root.render(parent);




// const heading = React.createElement("h1",{id : "heading"},"HELLO WORLD FROM REACT");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);