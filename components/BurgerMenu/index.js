import styles from "./BurgerMenu.module.css";
import { useState } from "react";

const Index = ({ toggleNav, isCrossed }) => {
  return (
    <div
      className=" p-4 cursor-pointer md:hidden order-1"
      onClick={() => {
        toggleNav();
      }}
    >
      <div className={styles.burger_menu + ` ${isCrossed ? styles.burger_menu_active : ""}`}></div>
    </div>
  );
};

export default Index;
