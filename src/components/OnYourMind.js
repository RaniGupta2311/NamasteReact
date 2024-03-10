import { useState, useEffect } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { SWIGGY_API_URL } from "../utils/constants";
import FoodImageCard from "./FoodImageCard";
import OnYourMindShimmer from "./OnYourMindShimmer";

const OnYourMind = ({listOfImages}) => {
  // const [listOfImages, setListOfImages] = useState([]);
  const [activeIndex, setActiveIndex] = useState(3);

  // useEffect(() => {
  //   getImagesData();
  // }, []);
  // async function getImagesData() {
  //   const data = await fetch(SWIGGY_API_URL);
  //   const jsonData = await data.json();
  //   console.log(
  //     "what's on your mind",
  //     jsonData.data.cards[0].card.card.gridElements.infoWithStyle.info
  //   );
  //   setListOfImages(
  //     jsonData.data.cards[0].card.card.gridElements.infoWithStyle.info
  //   );
  // }

  return (
    <div className="flex flex-col pl-4 pr-4">

      <div className="flex justify-between items-center pt-2 pb-4">
        <h1 className="text-2xl font-medium text-gray-700">
          What's on your mind?
        </h1>
        <div className="btn-container">
          <button
            onClick={() => {
              setActiveIndex(activeIndex - 1);
            }}
          >
            <MdKeyboardArrowLeft />
          </button>
          <button
            onClick={() => {
              setActiveIndex(activeIndex + 1);
            }}
          >
            <MdKeyboardArrowRight />
          </button>
        </div>
      </div>

      <div className="flex shadow-sm">
        <div className="flex overflow-x-auto">
          {listOfImages.map((item, index) => {
            return (
              <FoodImageCard
                key={item.id}
                imageId={item.imageId}
                index={index}
                entityId={item.entityId}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default OnYourMind;
