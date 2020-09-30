import React from "react";
import classes from "./Product.css";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "./StateProvider";

function Product({ id, title, price, rating, image }) {
  const [state, dispatch] = useStateValue();
  function handelClick() {
    dispatch({
      type: "add_to_basket",
      item: {
        id,
        title,
        price,
        rating,
        image,
      },
    });
  }
  return (
    <div className="product">
      <h2 className="product-title">{title}</h2>
      <p className="product-price">Price:${price}</p>
      <div className="rating">
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
      <div className="product-img-box">
        {" "}
        <img className="product-img" src={image} alt="" />
      </div>
      <button className="product-add" onClick={handelClick}>
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
