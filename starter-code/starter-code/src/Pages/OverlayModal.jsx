import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import styles from "./Overlay.module.css";
// import styles from "./HomePage.module.css";

const Overlay = (props) => {
  const handleOnClick = () => {
    props.setShowInfo(false);
  };
  return (
    <>
      <div className={styles.backdrop}>
        <div className={styles.modal}>
          <div> {props.name}</div>
          <div>{props.metric} </div>
          <img
            src={`https://cdn2.thedogapi.com/images/${props.img}.jpg`}
            className={styles.size}
          ></img>
          <button onClick={handleOnClick}>close</button>
        </div>
      </div>
    </>
  );
};

{
  /* const [dog, setDog] = useState([]);
  const { name } = useParams();
  useEffect(() => {
    const fetchSingleData = async () => {
      try {
        const res = await fetch(
          `https://api.thedogapi.com/v1/breeds/search?q=${name}`
        );
        const data = await res.json();
        setDog(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSingleData();
  }, [name]); */
}
{
  /* 
  const navigate = useNavigate();

  // This function is used to navigate to the home page
  // It will be called when the button is clicked
  const goBack = () => {
    navigate(-1);
  }; */
}

{
  /* return (
    <>
      <h1>hello</h1>
      <div>
        <div className={styles.backdrop}>
          <div className={styles.modal}>
            <div>
             
              {dog.map((item) => (
                <div key={item.id}>
                  <div>
                    <img
                      className={styles.size}
                      src={`https://cdn2.thedogapi.com/images/${item.reference_image_id}.jpg`}
                      alt=""
                    ></img>
                  </div>
                  <div>
                    <h1>{item.name}</h1>
                    <p>
                      {item.description ? (
                        <p>{item.description}</p>
                      ) : (
                        <p>Bred For: {item.bred_for}</p>
                      )}
                    </p>
                    <ul>
                      <li>Height: {item.height.metric} Cms</li>
                      <li>Weight: {item.weight.metric} Kgs</li>
                      <li>Life-Span: {item.life_span} </li>
                      <li>Temperament: {item.temperament}</li>
                    </ul>

                    <button onClick={goBack}> &larr; Go Back</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  ); */
}

const OverlayModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Overlay
          name={props.name}
          setShowInfo={props.setShowInfo}
          metric={props.metric}
          img={props.img}
        ></Overlay>,
        document.querySelector("#modal-root")
      )}
    </>
  );
};

export default OverlayModal;
