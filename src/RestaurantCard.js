import { CDN_URL } from "../utils/constants";
const RestaurantCard=(props)=>{
    const {resData}=props;
    return(
      <div className="res-card">
        <img src={CDN_URL + resData.info.cloudinaryImageId}></img>
        <h3>{resData.info.name}</h3>
        <h4>{resData.info.cuisines.join(", ")}</h4>
        <h4>{resData.info.costForTwo}</h4>
        <h4>{resData.info.avgRating}</h4>
        <h4>{resData.info.sla.deliveryTime} mins</h4>
      </div>
    )
  }

  export default RestaurantCard;