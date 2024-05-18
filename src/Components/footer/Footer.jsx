import React from "react";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="d-flex justify-content-between flex-wrap">
          <div className="about col-sm-10 col-md-6 col-lg-4 mb-5 d-flex flex-column gap-2 ">
            <h3 className={styles.section_title}>ABOUT THE SHOP</h3>
            <p className={styles.section_desc}>
              An accessories store offers a wide range of items that complement
              and enhance one's appearance or lifestyle{" "}
            </p>
          </div>
          <div className="menu col-sm-10 col-md-5 col-lg-2 mb-5 d-flex flex-column gap-2">
            <h3 className={styles.title}>MENU</h3>
            <ul className={styles.section_list}>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/necklaces">Necklaces</a>
              </li>
              <li>
                <a href="/braceletes">Braceletes</a>
              </li>
              <li>
                <a href="/rings">Rings</a>
              </li>
              <li>
                <a href="/earrings">Earrings</a>
              </li>
              <li>
                <a href="/watches">Watches</a>
              </li>
            </ul>
          </div>
          <div className="support col-sm-10 col-md-6 col-lg-3 mb-5 d-flex flex-column gap-2">
            <h3 className={styles.title}>SUPPORT</h3>
            <ul className={styles.section_list}>
              <li>
                <a href="#">Frequently Asked Qustion</a>
              </li>
              <li>
                <a href="#">Returns and refunds</a>
              </li>
              <li>
                <a href="#">CGV</a>
              </li>
              <li>
                <a href="#">Legal Notice</a>
              </li>
              <li>
                <a href="#">Track my order</a>
              </li>
            </ul>
          </div>
          <div className="reach col-sm-10 col-md-6 col-lg-3 mb-5 d-flex flex-column gap-2">
            <h3 className={styles.section_title}>REACHABLE 24/7</h3>
            <p className={styles.section_desc}>
              A question? we can be reached by email 24/7 do not hesitate to
              send us a message for any request
            </p>
            <span className={styles.domain}>Karmen.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
