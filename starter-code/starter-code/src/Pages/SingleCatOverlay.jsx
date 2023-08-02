// import React, { useState, useEffect } from "react";
import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import styles from "./HomePage.module.css";

const SingleCatOverlay = () => {
  const [cat, setCat] = useState([]);
  const { catname } = useParams();
  useEffect(() => {
    const fetchSingleData1 = async () => {
      try {
        const res = await fetch(
          `https://api.thecatapi.com/v1/breeds/search?q=${catname}`
        );
        const data1 = await res.json();
        setCat(data1);
        console.log(data1);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSingleData1();
  }, [catname]);

  const navigate = useNavigate();

  // This function is used to navigate to the home page
  // It will be called when the button is clicked
  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div>
        {cat.map((item) => (
          <div key={item.id}>
            <div>
              <img
                className={styles.size}
                src={`https://cdn2.thecatapi.com/images/${item.reference_image_id}.jpg`}
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
                <li>Temperament:{item.temperament}</li>
              </ul>

              <button onClick={goBack}> &larr; Go Back</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SingleCatOverlay;
