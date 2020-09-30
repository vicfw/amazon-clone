import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
function Header() {
  const [{ basket }] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header--logo"
          src="https://hax.co/wp-content/uploads/2017/11/amazon.png"
          alt="logo"
        ></img>
      </Link>
      <div className="header-searchbar">
        <input className="header--input" type="text" />
        <SearchIcon className="header--searchicon" />
      </div>
      <div className="header-options">
        <div>
          <p>Hello,Farid</p>
          <span>Account & Lists</span>
        </div>
        <div>
          <p>Retruns</p>
          <span>& Orders</span>
        </div>
        <div>
          <span>Try Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header-cart">
            <ShoppingCartIcon />
            <span>{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
