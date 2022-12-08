import React from "react";
import style from "../componentsCSS/Paginated.module.css";

const Paginated = ({ currentPage, dogsPerPage, allDogs, pagination }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allDogs / dogsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className={style.nav}>
      <ul className={style.list}>
        {currentPage > 1 && (
          <li className={style.element}>
            <button
              onClick={() => pagination(currentPage - 1)}
              className={style.number}
            >
              Prev
            </button>
          </li>
        )}
        {pageNumbers &&
          pageNumbers.map((number) => (
            <li
              key={number}
              className={currentPage === number ? style.active : style.element}
            >
              <button
                onClick={() => pagination(number)}
                className={style.number}
              >
                {number}
              </button>
            </li>
          ))}
        {currentPage < allDogs / dogsPerPage && (
          <li className={style.element}>
            <button
              onClick={() => pagination(currentPage + 1)}
              className={style.number}
            >
              Next
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Paginated;