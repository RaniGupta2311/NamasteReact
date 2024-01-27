import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", { id: "heading" }, "Namaste React");
// ReactElement using JSX
const heading=(
  <h1 id="heading" className="head">
    Namaste React using JSX
  </h1>
)

// Functional Component
const Heading = ()=>(
  <h1 id="heading" className="head">
    Namaste React using JSX
  </h1>
);

// multiline react element
const title=(
  <h2>This is title react element</h2>
)

// Functional component
// const HeadingComponent=()=>{
//   return <h1>Namaste React Functional Component</h1>
// }

// we can also write above code without return keyword like
// const HeadingComponent=()=><h1>Namaste React Functional Component</h1>

// if we want to write in multiline
// const HeadingComponent=()=>{
//   return (
//     <h1>
//       Namaste React
//     </h1>
//   )
// }
// and without return keyword
// const HeadingComponent=()=>(
//   <h1>
//     Namaste React in Functional Component
//   </h1>
// )


const HeadingComponent=()=>(
  <div>
    <h1>
    Namaste React in Functional Component
  </h1>
  {title}
  {/* <Heading/> */}
  {/* <Heading></Heading> */}
  {Heading()}
  </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// root.render(<HeadingComponent/>);
// we can write it as function also
// root.render(HeadingComponent())

root.render(<HeadingComponent/>);

