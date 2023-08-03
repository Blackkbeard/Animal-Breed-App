import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import styles from "./Overlay.module.css";
// import styles from "./HomePage.module.css";

const Overlay = (props) => {
  const handleOnClick = (dogId) => {
    props.setDogs((prevDogs) =>
      prevDogs.map((dog) =>
        dog.id === dogId ? { ...dog, showInfo: !dog.showInfo } : dog
      )
    );
  };
  return (
    <>
      <div className={styles.backdrop}>
        <div className={styles.modal}>
          <img
            src={`https://cdn2.thedogapi.com/images/${props.img}.jpg`}
            className={styles.size}
          ></img>
          <ul className={styles.text}>
            <h2>
              <strong>{props.name}</strong>
            </h2>
            <li>{props.bred}</li>
            <li>{props.height} Cm</li>
            <li>{props.weight} Kg</li>
            <li>{props.temperament}</li>
            <li>{props.life}</li>
            {/* <li>{props.origin}</li> */}
          </ul>

          <button
            className={styles.button}
            onClick={() => handleOnClick(props.id)}
          >
            <strong>CLOSE</strong>
          </button>
        </div>
      </div>
    </>
  );
};

const OverlayModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Overlay
          name={props.name}
          setShowInfo={props.setShowInfo}
          weight={props.weight}
          img={props.img}
          id={props.id}
          setDogs={props.setDogs}
          temperament={props.temperament}
          origin={props.origin}
          height={props.height}
          life={props.life}
          bred={props.bred}
        ></Overlay>,
        document.querySelector("#modal-root")
      )}
    </>
  );
};

export default OverlayModal;
