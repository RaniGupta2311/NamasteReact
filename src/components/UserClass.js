import React from "react";
import { GITHUB_PROFILE_URL } from "../utils/constants";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        // console.log(props);
        // this.state={
        //     count:0,
        //     count2:5
        // }
        // console.log(this.props.name,"Child Contructor called")
        this.state={
            userInfo:{
                name:"Dummmy",
                location:"Dummy",
                avatar_url:""
            }
        }
    }
   
    async componentDidMount(){
        // console.log(this.props.name,"Child ComponentDidMount called")
        // API Calls
        const data=await fetch(GITHUB_PROFILE_URL);
        const jsonData=await data.json();
        // console.log(jsonData);
        this.setState({
            userInfo:jsonData
        })
        
        this.timer=setInterval(()=>{
            console.log("Namaste React");
        },1000)
    }

    componentDidUpdate(){
        // console.log("componentDidUpdate called")
    }

    componentWillUnmount(){
        // console.log("componentWillUmnount Called");
        clearInterval(this.timer)
    }
    
    render(){
        const {name,location,avatar_url}=this.state.userInfo;
        // console.log(this.props.name,"Child Render called")
        // debugger;
        return(
            <div className="user-card">
            {/* <h2>Count : {this.state.count}</h2> */}
            {/* <button onClick={()=>{
                // NEVER UPDATE STATE DIRECTLY
                this.setState({
                    count:this.state.count+1
                })
            }}>Increase</button> */}
            {/* <h3>Couunt2 : {this.state.count2}</h3> */}
            {/* <button onClick={()=>{
                // NEVER UPDATE STATE DIRECTLY
                this.setState({
                    count2:this.state.count2+1
                })
            }}>Increase2</button> */}
            <h1>{name}</h1>
            <h3>Location:{location}</h3>
            <h4>Contact </h4>
            <img src={avatar_url} alt="github_image"/>
        </div>
        )
    }
}
export default UserClass;