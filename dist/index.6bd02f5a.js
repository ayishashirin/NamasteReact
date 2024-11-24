impo;
/*
        <div id= "parent">
     <div id = "child">
  <h1>I am ayisha
  </h1>
  <h2>I am ayisha
  </h2>

     </div>
        </div>


*/ const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, [
    React.createElement("h1", {}, "I am ayisha"),
    React.createElement("h1", {}, "I am ayisha")
]));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); // const heading = React.createElement("h1",{id : "heading"},"HELLO WORLD FROM REACT");
 // const root = ReactDOM.createRoot(document.getElementById("root"));
 // root.render(heading);

//# sourceMappingURL=index.6bd02f5a.js.map
