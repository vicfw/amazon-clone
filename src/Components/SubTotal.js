import React from "react";
import "./SubTotal.css";
import { useStateValue } from "./StateProvider";

function SubTotal() {
  const [{ basket }] = useStateValue();
  const initaialValue = 0;
  let price = basket.reduce((item, amount) => {
    return item + amount.price;
  }, initaialValue);
  return (
    <div className="subtotal">
      <div className="subtotal-container">
        <div className="subtotal-price">
          <span>SubTotal</span>
          <span>({basket.length} items):</span>
          <span>{`$${price}`}</span>
        </div>

        <button className="subtotal-btn">Proceed To CheckOut</button>
      </div>
    </div>
  );
}

export default SubTotal;
