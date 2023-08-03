import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import styles from "./Overlay.module.css";

const Overlay = (props) => {
  const handleOnClick = (catId) => {
    props.setCats((prevCats) =>
      prevCats.map((cat) =>
        cat.id === catId ? { ...cat, showInfo: !cat.showInfo } : cat
      )
    );
  };
  return (
    <>
      <div className={styles.backdrop}>
        <div className={styles.modal}>
          <div> {props.name}</div>
          <div>{props.metric} </div>
          <div>{props.id}</div>
          <img
            src={`https://cdn2.thecatapi.com/images/${props.img}.jpg`}
            className={styles.size}
          ></img>
          <button onClick={() => handleOnClick(props.id)}>close</button>
        </div>
      </div>
    </>
  );
};

const OverlayModalCat = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Overlay
          name={props.name}
          setShowInfo={props.setShowInfo}
          metric={props.metric}
          img={props.img}
          id={props.id}
          setCats={props.setCats}
        ></Overlay>,
        document.querySelector("#modal-root")
      )}
    </>
  );
};

export default OverlayModalCat;
