import React from "react";
import StarIcon from "@material-ui/icons/Star";
import "./CheckOutItem.css";
import { useStateValue } from "./StateProvider";

function Checkoutitem({ id, title, image, price, rating }) {
  const [state, dispatch] = useStateValue();
  const handelClick = () => {
    dispatch({
      type: "remove_item",
      id,
    });
  };
  return (
    <div className="checkoutitem">
      <div className="checkoutitem-img">
        {" "}
        <img className="checkoutitem-img" src={image} alt="" />
      </div>

      <div className="checkoutitem-box2">
        {" "}
        <h2 className="checkoutitem-title">{title}</h2>
        <p className="checkoutitem-price">Price:{price}</p>
        <div className="checkoutitem-rating">
          {" "}
          {Array(rating)
            .fill()
            .map((_, index) => {
              return (
                <p key={index}>
                  <StarIcon />
                </p>
              );
            })}
        </div>
      </div>
      <button className="checkoutitem-add" onClick={handelClick}>
        Remove From Basket
      </button>
    </div>
  );
}

export default Checkoutitem;
