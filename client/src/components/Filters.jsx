import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getDogs } from "../redux/actions"
import SearchBar from "./SearchBar";
import style from "../componentsCSS/Filters.module.css";

const Filters = ({
  handleOrderAlphabetically,
  handleOrderByWeight,
  handleTemperamentFilter,
  handleFilterCreated,

}) => {
const temperaments = useSelector((state) => state.temperaments);
const dispatch = useDispatch();
  
const handleClick = (e) => {
  e.preventDefault();
  dispatch(getDogs());
}

  return (
    <>
      <form action="" className={style.form}>
        <SearchBar />
        <div className={style.div}>
          <select
            name="Alphabetical order"
            onChange={(e) => handleOrderAlphabetically(e)}
            className={style.select}
          >
            <option hidden>Alphabetical Order</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </select>
        </div>
        <div className={style.div}>
          <select
            name="Order by weight"
            onChange={(e) => handleOrderByWeight(e)}
            className={style.select}
          >
            <option hidden>Order by weight</option>
            <option value="min weight">Min weight</option>
            <option value="max weight">Max weight</option>
          </select>
        </div>
        <div className={style.div}>
          <select
            name="Temperament filter"
            onChange={(e) => handleTemperamentFilter(e)}
            className={style.select}
          >
            <option hidden>All temperaments</option>
            {temperaments.length > 0 &&
              temperaments.map((t) => (
                <option value={t.name} key={t.id}>
                  {t.name}
                </option>
              ))}
          </select>
        </div>
        <div className={style.div}>
          <select
            name="Origin filter"
            onChange={(e) => handleFilterCreated(e)}
            className={style.select}
          >
            <option value="all dogs">All dogs</option>
            <option value="dogs from API">Dogs from API</option>
            <option value="dogs from database">Dogs from database</option>
          </select>
        </div>
        <div className={style.div}>
        <button className={style.button} onClick={handleClick}>
          <Link to={"/home"}>
            <span className={style.box}>Reset</span>
          </Link>
        </button>
        </div>
      </form>
    </>
  );
};

export default Filters;