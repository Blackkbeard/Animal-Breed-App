import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import styles from "./HomePage.module.css";

const CatBreedTwo = () => {
  const [cats, setCats] = useState([]);
  useEffect(() => {
    const fetchCatData = async () => {
      try {
        const res = await fetch("https://api.thecatapi.com/v1/breeds");
        const data = await res.json();
        setCats(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
      // const url = "https://cats-by-api-ninjas.p.rapidapi.com/v1/cats";
      // const options = {
      //   method: "GET",
      //   headers: {
      //     "X-RapidAPI-Key":
      //       "5c00b726e6mshdf89a17ad9252cbp172fc7jsnb58b183e7c73",
      //     "X-RapidAPI-Host": "cats-by-api-ninjas.p.rapidapi.com",
      //   },
      // };

      // try {
      //   const response = await fetch(url, options);
      //   const result = await response.text();
      //   console.log(result);
      // } catch (error) {
      //   console.error(error);
      // }
    };
    fetchCatData();
  }, []);
  return (
    <>
      <div>
        <div className="">Welcome to The Cat breed info list </div>
        <form>
          <input
            className={styles.input}
            input="text"
            name="search"
            id="search"
            placeholder="What breed you want?"
          ></input>
        </form>
        <div className={styles.component} loading="lazy">
          {cats.map((cat) => (
            <Link to={`/${cat.name}`}>
              <div key={cat.id}>
                <img
                  className={styles.size}
                  src={`https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`}
                  // src={cat.url}
                  alt={cat.name}
                />
                <h3 className={styles.titletext}>{cat.name}</h3>
                <p className={styles.ptext}>Uses: {cat.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default CatBreedTwo;
