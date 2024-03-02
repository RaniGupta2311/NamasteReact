import { useState, useEffect } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { SWIGGY_API_URL } from "../utils/constants";
import FoodImageCard from "./FoodImageCard";
const OnYourMind = () => {
  const [listOfImages, setListOfImages] = useState([]);
  const [activeIndex, setActiveIndex] = useState(3);

  useEffect(() => {
    getImagesData();
  }, []);
  async function getImagesData() {
    const data = await fetch(SWIGGY_API_URL);
    const jsonData = await data.json();
    console.log(
      "what's on your mind",
      jsonData.data.cards[0].card.card.gridElements.infoWithStyle.info
    );
    setListOfImages(
      jsonData.data.cards[0].card.card.gridElements.infoWithStyle.info
    );
  }
  return (
    <div className="yourmind-container">
      <div className="yourmind-info">
        <h1>What's on your mind?</h1>
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

      <div className="slider-wrapper">
        <div className="image-list">
          {listOfImages.map((image, index) => {
            return (
              <FoodImageCard
                key={image.id}
                imageId={image.imageId}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default OnYourMind;
