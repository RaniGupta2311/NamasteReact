import { CDN_IMG_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const FoodImageCard = ({ imageId, entityId }) => {
const navigate=useNavigate();
  let id = "";
  //    console.log(entityId.length);
  if (entityId.length === 5) id = entityId;
  else {
    let a = entityId.split("collection_id=");
    id = a[1].slice(0, 5);
  }
//   console.log(id);
  return (
    // <Link to={"collections/" + id}>
      <img
        className="w-40 bg-transparent"
        src={CDN_IMG_URL + imageId}
        alt="food-image"
        onClick={()=>navigate(`collections/${id}`)}
      />
    // </Link>
  );
};
export default FoodImageCard;
