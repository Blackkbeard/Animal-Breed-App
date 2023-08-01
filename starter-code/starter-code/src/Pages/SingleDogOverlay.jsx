// import React, { useState, useEffect } from "react";
import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import styles from "./HomePage.module.css";

const SingleDogOverlay = () => {
  const [dog, setDog] = useState([]);
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
  }, [name]);

  const navigate = useNavigate();

  // This function is used to navigate to the home page
  // It will be called when the button is clicked
  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div>
        {dog.map((item) => (
          <div key={item.id}>
            <div>
              {`https://cdn2.thedogapi.com/images/${item.reference_image_id}.jpg` ? (
                <img
                  className={styles.size}
                  src={`https://cdn2.thedogapi.com/images/${item.reference_image_id}.jpg`}
                  alt=""
                ></img>
              ) : (
                <img
                  className={styles.size}
                  src={`https://cdn2.thedogapi.com/images/${item.reference_image_id}.png`}
                  alt=""
                ></img>
              )}
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
                <li>Temperament:{item.temperament}</li>
              </ul>
              {/* Way 1 */}
              {/* <Link to="/HomePage">&larr; Go back</Link> */}
              {/* Way 2 */}
              <button onClick={goBack}> &larr; Go Back</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SingleDogOverlay;
