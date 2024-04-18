import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh]  w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
        "url(https://img.freepik.com/free-photo/top-close-up-view-vegetables-tomatoes-with-pedicels-garlic-bell-peppers-lemon-oil-onion_140725-72203.jpg)",
        backgroundSize: "cover",
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}
        >
          Go and Grab It <br /> from Your Favorite Restaurants
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
          No more waiting in long queues or wasting time standing at the
          restaurant. Order your favorite dishes from home and grab them
          quickly with Grab It!
        </p>
        <Link to="/products" className="inline-block">
          <div className={`${styles.button} mt-5`}>
            <span className="text-[#fff] font-[Poppins] text-[12px] p-2">
              Explore Restaurants
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
