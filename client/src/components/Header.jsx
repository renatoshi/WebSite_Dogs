import React from "react";
import { Link } from "react-router-dom";
import style from "../componentsCSS/Header.module.css";

const Header = () => {

  return (
    <>
      <header className={style.header}>
        <button className={style.button}>
          <Link to={"/home"}>
            <span className={style.box}>🏡 HOME</span>
          </Link>
        </button>
        <button className={style.button}>
          <Link to={"/createDog"}> 
            <span className={style.box}>🐶 CREATE DOG</span>
          </Link>
        </button>
      </header>
    </>
  );
};

export default Header;