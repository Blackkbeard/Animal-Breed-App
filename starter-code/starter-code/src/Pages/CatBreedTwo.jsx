import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
 import styles from "./HomePage.module.css";

const CatBreedTwo = () => {
  const [cats, setCats] = useState([]);
  const [texts, setTexts] = useState("");
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
      
    };
    fetchCatData();
  }, []);

  const catSearch = async () => {
    try {
      const res = await fetch(
        `https://api.thecatapi.com/v1/breeds/search?q=${texts}`
      );
      const data = await res.json();
      setCats(data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    catSearch();
  };
  return (
    <>
      <div>
        <div className="">Welcome to The Cat breed info list </div>
        <form onSubmit={handleSubmit}>
          <input
            className={styles.input}
            input="text"
            name="search"
            id="search"
            placeholder="What breed you want?"
            value={texts}
            onChange={(e) => setTexts(e.target.value)}
          ></input>
        </form>
        <div className={styles.component} loading="lazy">
          {/* {cats.map((cat) => (
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
          ))} */}
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
