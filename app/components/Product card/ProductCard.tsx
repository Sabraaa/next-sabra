import React from "react";
import AddToCard from "../AddToCard";
import styles from "./productCard.module.css";

type Props = {};

const ProductCard = (props: Props) => {
  return (
    <div className={styles.card}>
      <AddToCard />
    </div>
  );
};

export default ProductCard;
