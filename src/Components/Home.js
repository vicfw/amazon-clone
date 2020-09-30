import React from "react";
import "./Home.css";
import Slider from "./Slider";
import Product from "./Product";

function Home() {
  return (
    <div className="home-container">
      <div className="home-slider">
        <Slider />
      </div>
      <div className="product-container">
        <div className="product-row">
          <Product
            id={121231}
            title={
              'TCL 65" Class 6-Series 4K UHD QLED Dolby Vision HDR Roku Smart TV'
            }
            image={
              "https://images-na.ssl-images-amazon.com/images/I/91ZrvnzneML._AC_SL1500_.jpg"
            }
            price={1100}
            rating={5}
          />
          <Product
            id={3123123}
            title={
              "SkyGenius 10 x 50 Powerful Binoculars for Adults Durable Full-Size"
            }
            image={
              "https://images-na.ssl-images-amazon.com/images/I/61YaLg-nAlL._AC_SL1500_.jpg"
            }
            price={100}
            rating={4}
          />
          <Product
            id={6123213}
            title={"Echo (3rd Gen)- Smart speaker with Alexa- Charcoal"}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/61zQN-TujQL._AC_SL1000_.jpg"
            }
            price={200}
            rating={3}
          />
        </div>
        <div className="product-row">
          <Product
            id={4123123}
            title={"$10 Xbox Gift Card [Digital Code]"}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/618mZBoZXNL._SL1500_.jpg"
            }
            price={1012}
            rating={5}
          />
          <Product
            id={5123123}
            title={"Under Armour Men's UA Tech 1/2 Zip Pullover"}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/3161bG%2BV1aL._AC_.jpg"
            }
            price={850}
            rating={2}
          />
        </div>
        <div className="product-row">
          <Product
            id={2123123}
            title={"Apple AirPods with Wired Charging Case"}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/71NTi82uBEL._AC_SX679_.jpg"
            }
            price={800}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
