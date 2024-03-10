import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";
import Burger from "../utils/images/Burger.jpeg";
class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent constructor called");
    this.state = {
      show: "true",
    };
  }
  componentDidMount() {
    // console.log("Parent ComponentDidMount called")
  }
  render() {
    return (
      <div className="w-full flex flex-col items-center absolute top-24 z-0 bg-gray-100 h-[calc(100%-6rem)]">
        <button
          className="mt-[16px] mb-4 bg-green-800 p-3 rounded-lg text-white font-medium text-lg hover:bg-amber-700"
          onClick={() => {
            this.state.show === "true"
              ? this.setState({
                  show: "false",
                })
              : this.setState({
                  show: "true",
                });
          }}
        >
          {this.state.show === "true" ? "Hide my Profile" : "Show my Profile"}
        </button>

        {this.state.show==="true" ? <div className="bg-white rounded-xl p-5 shadow-2xl w-[25rem] md:w-[27rem] xl:w-[29rem] text-center">
          <UserClass name={"First"} location="Aurangabad" />
        </div> : null}

        <div className="flex flex-col items-center lg:flex-row gap-5 lg:justify-between pl-2 pr-2 lg:pl-4 lg:pr-4 xl:pl-20 xl:pr-20 mt-3">
        <div className="w-96 p-4 lg:w-[38rem] text-center">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-600 mb-2 lg:mb-4">
            Welcome to
          </h1>
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-600 mb-2 lg:mb-4">
            The world of
          </h1>
          <h1 className="text-3xl md:text-4xl lg:text-5xl bg-amber-400 text-white rounded-lg p-2 font-semibold mb-2 lg:mb-4 inline-block">
            Tasty & Fresh Food
          </h1>
          <p className="text-sm md:text-md xl:text-lg font-semibold">
            "Better you will feel if you eat a{" "}
            <span className="text-lg"> 🙏🏽 </span>
            <span className="bg-amber-300 text-white p-1 rounded-lg">
              Food
            </span>{" "}
            healthy meal"
          </p>
        </div>
        <div className="flex justify-center items-center">
          <img src={Burger} alt="burger" className="bg-white max-w-[90%] mt-8" />
        </div>
      </div>
        
      </div>
    );
  }
}

export default About;
