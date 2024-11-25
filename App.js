import React from "react";
import ReactDOM from "react-dom/client";

//react create element  =>  object => html element(render)

// const heading = React.createElement("h1",{id:"heading"},"namaste react 🚀 ");
// console.log(heading);/


//jsx (transpiled before it reaches the JS ) - Parcel -Babel 

 // jsx => react.createElement => reactElement => HTML element(rendering)
 


 
  const jsxHeading = (<h1 id="heading"> namaste react  using jsx🚀 </h1>);

  console.log(jsxHeading);



//  root.render(jsxHeading)



 //react components

 //class based components - old 
 // functional component - new 


 // # React functional component

//  a function that return jsx code that functional component 

const Title = () => (
  <h1 className="head" tableIndex="5"> 
  Namaste Aayisha.!😍
  </h1>
)

 const HeadingComponent = ()=> (

  <div id="container"> 
  <Title />
   <h1 className="heading">namasteReact functional component.!</h1> 
  </div>
 );

//  const HeadingComponent = ()=>(
//    <h1>namasteReact functional component.!</h1>
//  );



  //  const fn = ()=> true;    

   const root = ReactDOM.createRoot(document.getElementById("root"));

   root.render(<HeadingComponent/>)
