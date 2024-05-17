import React, { useState } from "react";
import styles from "./header.module.css";
import SearchBar from "../searchBarForm/SearchBar";

export default function Header() {
  const [activeSearchDrop, setActiveSearchDrop] = useState(false);
  return (
    <header>
      <div
        className={`container d-flex px-0 justify-content-between align-items-center ${styles.container}`}
      >
        <figure
          className={`d-flex h-100 my-0 align-items-center ${styles.logo}`}
        >
          <img src="assets/logo.png" alt="" />
        </figure>
        <div className={`${styles.search_bar} d-none d-lg-block`}>
          <SearchBar />
        </div>
        <div
          className={`actions d-flex justify-content-around  ${styles.actions}`}
        >
          <div className="search_dropdown h-100">
            <button
              onClick={(e) => {
                setActiveSearchDrop((prev) => !prev);
              }}
              className={`d-flex mx-3 d-lg-none d-xl-none d-xxl-none border-0 bg-transparent align-items-center gap-2 ${styles.search_icon}`}
            >
              {" "}
              <img src="assets/search.png" alt="" />
              <img src="assets/downArrow.png" alt="" />
            </button>
            <div
              className={`${styles.search_drop} ${
                activeSearchDrop && styles.active
              }`}
            >
              <SearchBar />
            </div>
          </div>
          <div className="lang d-none d-sm-block ">
            <a className="text-decoration-none text-dark fw-medium" href="">
              EN/العربية
            </a>
          </div>
          <div className="more">
            <a href="" className="cart_btn position-relative">
              <img src="assets/cart.png" alt="" />
              <span
                className={`position-absolute ${styles.cart_counter}`}
              ></span>
            </a>
            <a href="">
              <img src="assets/fav.png" alt="" />
            </a>
            <a href="">
              <img src="assets/user.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
