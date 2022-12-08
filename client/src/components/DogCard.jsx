import React from "react";
import style from "../componentsCSS/DogCard.module.css";
import { Link } from "react-router-dom";
import img from "../images/perro1.jpg";


const DogCard = ({ image, name, }) => {
  return (
    <>
      {<Link className={style.link} to={`/dog/${name}`}>
          <div className={style.content}>
            <div className={style.front}>
              <img
                className={style.img}
                src={image ? image : img}
                alt={`dog-${name}`}
              />
              <p className={style.subtitle}>{name}</p>
            </div>
          </div>
      </Link>}
    </>
  );
};

export default DogCard;