import React from "react";
import style from '../componentsCSS/Loader.module.css'
import loading from '../images/loadingDog.gif'
export default function Loading(){
  return(
   
    <div className={style.loaderContainer}>
      <img className={style.loader} src={loading} alt='Loading'/>
      <h4>Loading...</h4>
    </div>
    
  )
}