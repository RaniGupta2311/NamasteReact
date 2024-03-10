import React from "react";
import { Link } from "react-router-dom";
import { GITHUB_PROFILE_URL } from "../utils/constants";
import LinkedIn from "../utils/images/linkedin.webp";
import Github from "../utils/images/github.webp";
import Gmail from "../utils/images/gmail.webp";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    // this.state={
    //     count:0,
    //     count2:5
    // }
    // console.log(this.props.name,"Child Contructor called")
    this.state = {
      userInfo: {
        name: "Dummmy",
        location: "Dummy",
        avatar_url: "",
      },
    };
  }

  async componentDidMount() {
    // console.log(this.props.name,"Child ComponentDidMount called")
    // API Calls
    const data = await fetch(GITHUB_PROFILE_URL);
    const jsonData = await data.json();
    console.log("github user", jsonData);
    this.setState({
      userInfo: jsonData,
    });

    this.timer = setInterval(() => {
      console.log("Namaste React");
    }, 1000);
  }

  componentDidUpdate() {
    // console.log("componentDidUpdate called")
  }

  componentWillUnmount() {
    // console.log("componentWillUmnount Called");
    clearInterval(this.timer);
  }

  render() {
    const { name, location, avatar_url, bio, company } = this.state.userInfo;
    // console.log(this.props.name,"Child Render called")
    // debugger;
    return (
      <div className="flex flex-col items-center">
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
        <img
          src={avatar_url}
          alt="github_image"
          className="rounded-[50%] m-4"
        />
        <h1 className="text-2xl">{name}</h1>
        <h1 className="text-xl">{bio}</h1>
        <h1 className="text-lg">{company}</h1>
        <h3 className="text-md">{location}</h3>

        <div className="mt-3 mb-5 p-2 flex justify-center items-center gap-5">
          <Link to="https://www.linkedin.com/in/rani-gupta-366873198/">
            <div className="w-14 h-14 bg-[#0551a9dc] rounded-[100%] hover:cursor-pointer">
              <img src={LinkedIn} alt="linkedIn" className="rounded-[100%]" />
            </div>
          </Link>
          <Link to="https://github.com/RaniGupta2311">
            <div className="w-14 h-14 bg-black rounded-[100%] hover:cursor-pointer">
              <img src={Github} alt="github" className="rounded-[100%] p-1" />
            </div>
          </Link>
          <Link to="mailto:rani.gupta259@gmail.com">
            <div className="w-14 h-14 bg-[#db4d29] rounded-[100%] hover:cursor-pointer">
              <img src={Gmail} alt="gmail" className="rounded-[100%] p-1" />
            </div>
          </Link>
        </div>
      </div>
    );
  }
}
export default UserClass;
