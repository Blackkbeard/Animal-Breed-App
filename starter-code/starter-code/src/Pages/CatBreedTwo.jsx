import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";
import OverlayModalCat from "./OverlayModalCat";

const CatBreedTwo = () => {
  const [cats, setCats] = useState([]);
  const [texts, setTexts] = useState("");
  const [showInfos, setShowInfos] = useState(false);

  useEffect(() => {
    const fetchCatData = async () => {
      try {
        const res = await fetch("https://api.thecatapi.com/v1/breeds");
        const data1 = await res.json();
        const catsWithInfo = data1.map((cat) => ({ ...cat, showInfo: false }));

        setCats(catsWithInfo);
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
      const data1 = await res.json();
      setCats(data1);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = (catId) => {
    setCats((prevCats) =>
      prevCats.map((cat) =>
        cat.id === catId ? { ...cat, showInfo: !cat.showInfo } : cat
      )
    );
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
          <button type="submit">Submit</button>
        </form>
        <div className={styles.component} loading="lazy">
          {cats.map((cat) => {
            return (
              <>
                <div key={cat.id}>
                  <img
                    className={styles.size}
                    src={`https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`}
                    alt={cat.name}
                  ></img>
                  <h3 className={styles.titletext}>{cat.name}</h3>
                  <p className={styles.ptext}>Uses: {cat.bred_for}</p>
                  <button
                    className={styles.button}
                    onClick={() => handleClick(cat.id)}
                  >
                    Click here for info
                  </button>
                  {cat.showInfo && (
                    <OverlayModalCat
                      id={cat.id}
                      name={cat.name}
                      bred_for={cat.bred_for}
                      metric={cat.weight.metric}
                      setShowInfo={setShowInfos}
                      img={cat.reference_image_id}
                      setCats={setCats}
                    ></OverlayModalCat>
                  )}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CatBreedTwo;
