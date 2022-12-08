import React from "react";
import { Link } from "react-router-dom";
import style from "../componentsCSS/LandingPage.module.css";

export default function LandingPage() {
  return (
    <>
      <div className={style.page}>
        <Link to="/home">
          <button className={style.btn}>Welcome</button>
        </Link>
        <div>
        <h1 className={style.intro}>Learn all about dogs</h1>
      </div>
      <div>
        <h1 className={style.intro2}>and their existing breeds</h1>
      </div>
      </div>
    </>
  );
}
