import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import MenuCategory from "./MenuCategory";
import { useRestaurantMenu } from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
  const params = useParams();
  const { resId } = params;
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    sla,
    areaName,
    avgRating,
    totalRatingsString,
  } = resInfo.cards[0]?.card?.card?.info;
  const { cards } = resInfo?.cards[2]?.groupedCard.cardGroupMap.REGULAR;

  return (
    <div className="menu">
      <div className="res-menu-info">
        <div className="res-info">
          <h1>{name}</h1>
          <h2>{cuisines.join(",")}</h2>
          <p>{costForTwoMessage}</p>
          <p>
            {areaName}, {sla.lastMileTravelString}
          </p>
        </div>

        <div className="res-rating-info">
          <p>{avgRating}</p>
          <p>{totalRatingsString}</p>
        </div>
      </div>

      <div>
        {cards.map((menu, index) => {
          return Array.isArray(menu.card.card.itemCards) ? (
            <MenuCategory
              key={index}
              title={menu.card.card.title}
              itemCards={menu.card.card.itemCards}
            />
          ) : null;
        })}
      </div>
    </div>
  );
};
export default RestaurantMenu;
