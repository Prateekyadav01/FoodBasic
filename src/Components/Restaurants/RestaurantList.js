import "./restaurantList.css";
import {useState} from "react";
import Data from "./restaurant.json";
import Restaurant from "./Restaurant";
import { v4 as uuidv4 } from 'uuid';

export default function RestaurantList() {
    let [filteredRestaurants, setFilteredRestaurant] = useState(Data);
    let searchValue = "";
    let ratingValue = "";

    function filterData(e){
        if(e.target.id === "searchValue"){
            searchValue = e.target.value;
        }else if(e.target.id === "rating"){
            ratingValue = Number(e.target.value);
        }

        let filteredList = Data.filter((ele)=>{
            return ele.name.toLowerCase().includes(searchValue.toLowerCase()) && ele.rating >= ratingValue;
        });

        setFilteredRestaurant(filteredList);
    }

  return (
    <div className="listOfRestaurants">
      <div className="searchForm">
        <input type="text" id="searchValue" placeholder="Search restaurant..." onChange={filterData} />
        <div className="ratingInput">
            <label htmlFor="rating">Minimum Rating: </label>
            <input type="number" name="rating" id="rating" min= "1" max="5" placeholder="0" onChange={filterData} />
        </div>
      </div>
      <div className="restaurantList">
        {filteredRestaurants.map((ele) => {
          const newKey = uuidv4();
          return <Restaurant {...ele} key={newKey} />;
        })}
      </div>
    </div>
  );
}
