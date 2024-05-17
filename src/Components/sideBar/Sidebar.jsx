import React from "react";
import styles from "./sidebar.module.css";

import Breadcrumb from "react-bootstrap/Breadcrumb";
// import Form from "react-bootstrap/Form";

export default function Sidebar() {
  return (
    <aside
      className={`${styles.aside} d-flex flex-column gap-2 d-none d-md-block`}
    >
      <div className="breadcrumb">
        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
            Categories
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Rings</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <form
        className={`${styles.filter} d-flex flex-column align-items-center gap-3`}
      >
        <input type="text" placeholder="Filter by" />
        <div className={`${styles.category} position-relative w-100 `}>
          <h2 className={`${styles.filter_headings}`}>Category</h2>
          <div className={`${styles.checks} d-flex flex-column`}>
            <div className="all_check d-flex gap-2">
              <input type="checkbox" id="all" />
              <label className="fs-5" htmlFor="all">
                All
              </label>
            </div>
            <div className="all_check d-flex gap-2">
              <input type="checkbox" id="ringsOne" />
              <label className="fs-5" htmlFor="ringsOne">
                Rings
              </label>
            </div>
            <div className="all_check d-flex gap-2">
              <input type="checkbox" id="ringTwo" />
              <label className="fs-5" htmlFor="ringTwo">
                Rings
              </label>
            </div>
            <div className="all_check d-flex gap-2">
              <input type="checkbox" id="earingsOne" />
              <label className="fs-5" htmlFor="earingsOne">
                Earings
              </label>
            </div>
            <div className="all_check d-flex gap-2">
              <input type="checkbox" id="earingsTwo" />
              <label className="fs-5" htmlFor="earingsTwo">
                Earings
              </label>
            </div>
          </div>
        </div>
        <div className={`${styles.category} position-relative w-100`}>
          <h2 className={`${styles.filter_headings}`}>Category</h2>
          <div className={`${styles.checks} d-flex flex-column`}>
            <div className="all_check d-flex gap-2">
              <input type="checkbox" id="newest" />
              <label className="fs-5" htmlFor="newest">
                Newest
              </label>
            </div>
            <div className="all_check d-flex gap-2">
              <input type="checkbox" id="highly" />
              <label className="fs-5" htmlFor="highly">
                Highly Rated
              </label>
            </div>
            <div className="all_check d-flex gap-2">
              <input type="checkbox" id="nost" />
              <label className="fs-5" htmlFor="nost">
                Nost Ordered
              </label>
            </div>
          </div>
        </div>
        <div className={`${styles.category} position-relative w-100`}>
          <h2 className={`${styles.filter_headings}`}>Show Product</h2>
          <div className={`${styles.checks} d-flex flex-column`}>
            <div className="all_check d-flex gap-2">
              <input type="checkbox" id="newestTwo" />
              <label className="fs-5" htmlFor="newestTwo">
                Newest
              </label>
            </div>
            <div className="all_check d-flex gap-2">
              <input type="checkbox" id="allProducts" />
              <label className="fs-5" htmlFor="allProducts">
                All Products{" "}
              </label>
            </div>
          </div>
        </div>
        <div className={`${styles.price} position-relative w-100`}>
          <div className="title d-flex justify-content-between">
            <h2 className={`${styles.filter_headings}`}>Price</h2>
            <figure>
              <img src="assets/filter.png" alt="" />
            </figure>
          </div>
        </div>
      </form>
    </aside>
  );
}
