import React from "react";
import styles from "./card.module.css";
import { Heart, Rating, ThinStar } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const rateStarsStyle = {
  itemShapes: ThinStar,
  activeFillColor: "#ffb700",
  inactiveFillColor: "#fbf1a9",
};

export default function Card({ data }) {
  return (
    <div className={`${styles.card} col-sm-12 col-md-4 col-lg-3 my-3`}>
      <figure className="w-100">
        <img src={data.img} alt="" className="w-100" />
      </figure>
      <div className={`${styles.card_info} p-3`}>
        <h2 className="title">{data.title}</h2>
        <div className={`${styles.rate} my-2`}>
          <Rating
            style={{ maxWidth: 180 }}
            value={data.rate}
            readOnly
            itemStyles={rateStarsStyle}
          />
        </div>
        <h3 className="price">{data.price} LE</h3>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}
