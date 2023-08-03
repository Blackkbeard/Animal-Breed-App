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
        <div className={styles.modal1}>
          <img
            src={`https://cdn2.thecatapi.com/images/${props.img}.jpg`}
            className={styles.size}
          ></img>
          <ul className={styles.text}>
            <h2>
              <strong>{props.name}</strong>
            </h2>
            <li>{props.description}</li>
            <li>{props.weight} Kg</li>
            <li>{props.temperament}</li>
            <li>{props.life}</li>
            <li>{props.origin}</li>
          </ul>
          <button
            className={styles.button1}
            onClick={() => handleOnClick(props.id)}
          >
            <strong>CLOSE</strong>
          </button>{" "}
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
          description={props.description}
          temperament={props.temperament}
          origin={props.origin}
          life={props.life}
          friend={props.friend}
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
