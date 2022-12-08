import React from "react";
import Button from "./Button";
import warning from "../images/error.png";
import check from "../images/check.jpg";
import style from "../componentsCSS/Modal.module.css";

const Modal = ({ modal, onClose }) => {
  const { text, error, success } = modal;

  return (
    <>
      <section className={style.section}>
        <div className={style.container}>
          {error && <img src={warning} alt="" width="100px"/>}
          {success && <img src={check} alt="" width="80px"/>}
          <p>{text}</p>
          <Button text={"OK"} onClick={onClose} />
        </div>
      </section>
    </>
  );
};

export default Modal;