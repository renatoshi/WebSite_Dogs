import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getQuery } from "../redux/actions";
import style from "../componentsCSS/SearchBar.module.css";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getQuery(name));
    setName("");
  };

  return (
    <>
      <div className={style.container}>
        <input
          className={style.input}
          type="text"
          name="search"
          placeholder="Search..."
          autoComplete={"off"}
          value={name}
          onChange={(e) => handleChange(e)}
        />
        <button
          className={style.button}
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          <span>Search</span>
        </button>
      </div>
    </>
  );
};

export default SearchBar;