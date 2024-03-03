import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
    constructor(props){
        super(props);
        // console.log("Parent constructor called");
    }
    componentDidMount(){
        // console.log("Parent ComponentDidMount called")
    }
    render(){
        // console.log("Parent render called")
        return (
            <div className="about">
            <h1>This is About page</h1> 
            <UserClass name={"First"} location="Aurangabad"/>
        </div>
        )
    }
}
// About in Functional component

// const About=()=>{
//     return (
//         <div className="about">
//             <h1>This is About page</h1>
//             {/* <User name={"Rani from function component"}/> */}
//             <UserClass name={"Rani from class component"} location="Aurangabad"/>
//         </div>
//     )
// }
export default About;