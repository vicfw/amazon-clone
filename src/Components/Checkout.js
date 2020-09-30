import React from "react";
import { useStateValue } from "./StateProvider";
import CheckOutItem from "./CheckOutItem";
import "./Checkout.css";
function Checkout() {
  const [{ basket }] = useStateValue();
  const img = (
    <div className="checkout-basket">
      <div className="checkout-img">
        <img
          src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg"
          alt="3"
        />
      </div>
      <h2>Your Amazon Cart is empty</h2>
    </div>
  );

  const shoopingCart = (
    <div className="checkout-fill">
      <div className="checkout-fill-img">
        <img
          src="https://cdn.electronicfirst.com/uploads/2020/04/24102257/Amazon-Gift-Cards-Banner.jpg"
          alt="4"
        />
      </div>

      <h2>Shooping Cart</h2>
    </div>
  );

  return (
    <div className="checkout-container">
      {basket?.length === 0 ? img : shoopingCart}
      {basket?.length === 0 ? (
        <p>
          The price and availability of items at Amazon.com are subject to
          change. The Cart is a temporary place to store a list of your items
          and reflects each item's most recent price. Shopping CartLearn more Do
          you have a gift card or promotional code? We'll ask you to enter your
          claim code when it's time to pay.
        </p>
      ) : null}

      {basket.map(item => {
        return (
          <CheckOutItem
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        );
      })}
    </div>
  );
}

export default Checkout;
