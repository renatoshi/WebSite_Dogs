import React from "react";
import style from "../componentsCSS/SelectTemperaments.module.css";

const SelectTemperaments = ({
  temperament,
  tempsSelected,
  handleAdd,
  handleRemove,
}) => {
  return (
    <>
      <div>
        <label htmlFor="Temperament">Temperaments: </label>
        <select className={style.input} name="Temperament" onChange={handleAdd}>
          <option value="Select">All</option>
          {temperament.length > 0 &&
            temperament.map((t) => (
              <option key={t.id} value={t.name}>
                {t.name}
              </option>
            ))}
        </select>
      </div>
      {tempsSelected.length > 0 && (
        <div className={style.temperaments}>
          {tempsSelected.map((temp) => (
            <span key={temp} className={style.selected}>
              {temp}
              <span
                className={style.x}
                id={`${temp}`}
                onClick={handleRemove}
                title={"Remove"}
              >
                x
              </span>
            </span>
          ))}
        </div>
      )}
    </>
  );
};

export default SelectTemperaments;
