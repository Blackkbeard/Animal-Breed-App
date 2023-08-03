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
        console.log(data1);
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
      const catsWithInfo = data1.map((cat) => ({ ...cat, showInfo: false }));
      setCats(catsWithInfo);
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
      <div className="container" style={{ backgroundColor: "#FDCEDF" }}>
        <div>
          <div className="container d-flex justify-content-center fs-2">
            CAT BREEDS LIST
          </div>
          <form
            onSubmit={handleSubmit}
            className="container d-flex justify-content-center"
          >
            <input
              input="text"
              name="search"
              id="search"
              placeholder="Enter Breed Name"
              value={texts}
              onChange={(e) => setTexts(e.target.value)}
            ></input>
            <button type="submit">Submit</button>
          </form>
        </div>

        <div className="container" loading="lazy">
          {cats.map((cat) => {
            return (
              <>
                <div
                  className="card  mb-4"
                  style={{
                    top: "10px",
                    width: "25%",
                    display: "inline-block",
                    height: "475px",
                    // padding: "0, 200px, 20px, 0",
                    position: "relative",
                    backgroundColor: "#D4E2D4",
                  }}
                  key={cat.id}
                >
                  <img
                    src={`https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`}
                    className={styles.size}
                    alt={cat.name}
                    style={{
                      position: "absolute",
                      top: "20px",
                      left: "5px",
                      width: "300px",
                      height: "250px",
                    }}
                  />
                  <div
                    className="card-body"
                    style={{ position: "absolute", bottom: "20px" }}
                  >
                    <h5 className="card-title">{cat.name}</h5>
                    <p className="card-text">Uses: {cat.temperament}</p>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleClick(cat.id)}
                      style={{ backgroundColor: "#FD8A8A" }}
                    >
                      Click here for info
                    </button>
                  </div>
                </div>
                {cat.showInfo && (
                  <OverlayModalCat
                    id={cat.id}
                    name={cat.name}
                    description={cat.description}
                    temperament={cat.temperament}
                    origin={cat.origin}
                    life={cat.life_span}
                    friend={cat.dog_friendly}
                    metric={cat.weight.metric}
                    setShowInfo={setShowInfos}
                    img={cat.reference_image_id}
                    setCats={setCats}
                  ></OverlayModalCat>
                )}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CatBreedTwo;
