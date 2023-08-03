import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";
import OverlayModal from "./OverlayModal";

const HomePageOne = () => {
  const [dogs, setDogs] = useState([]);
  const [text, setText] = useState("");
  const [showInfo, setShowInfo] = useState(false);
  useEffect(() => {
    const fetchDogData = async () => {
      try {
        const res = await fetch("https://api.thedogapi.com/v1/breeds");
        const data = await res.json();
        const dogsWithInfo = data.map((dog) => ({ ...dog, showInfo: false }));

        setDogs(dogsWithInfo);
        console.log(data);
      } catch (error) {
        // console.log(error);
      }
    };
    fetchDogData();
  }, []);
  const dogSearch = async () => {
    try {
      const res = await fetch(
        `https://api.thedogapi.com/v1/breeds/search?q=${text}`
      );
      const data = await res.json();
      const dogsWithInfo = data.map((dog) => ({ ...dog, showInfo: false }));

      setDogs(dogsWithInfo);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = (dogId) => {
    setDogs((prevDogs) =>
      prevDogs.map((dog) =>
        dog.id === dogId ? { ...dog, showInfo: !dog.showInfo } : dog
      )
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dogSearch();
  };
  return (
    <>
      <div className="container" style={{ backgroundColor: "#FDCEDF" }}>
        <div>
          <div className="container d-flex justify-content-center fs-2">
            DOG BREEDS LIST
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
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></input>
            <button type="submit">Submit</button>
          </form>
        </div>

        <div loading="lazy" className="container">
          {dogs.map((dog) => {
            return (
              <>
                <div
                  className="card"
                  style={{
                    top: "10px",
                    width: "25%",
                    display: "inline-block",
                    height: "455px",
                    // padding: "0, 200px, 20px, 0",
                    position: "relative",
                    backgroundColor: "#D4E2D4",
                  }}
                  key={dog.id}
                >
                  <img
                    style={{
                      position: "absolute",
                      top: "20px",
                      left: "5px",
                      width: "300px",
                      height: "250px",
                    }}
                    src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`}
                    className="card-img-top"
                    alt={dog.name}
                  />
                  <div
                    className="card-body"
                    style={{ position: "absolute", bottom: "20px" }}
                  >
                    <h5 className="card-title">{dog.name}</h5>
                    <p className="card-text">Uses: {dog.bred_for}</p>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleClick(dog.id)}
                      style={{ backgroundColor: "#FD8A8A" }}
                    >
                      Click here for info
                    </button>
                  </div>
                </div>

                {dog.showInfo && (
                  <OverlayModal
                    id={dog.id}
                    name={dog.name}
                    bred={dog.bred_for}
                    weight={dog.weight.metric}
                    height={dog.height.metric}
                    life={dog.life_span}
                    setShowInfo={setShowInfo}
                    img={dog.reference_image_id}
                    setDogs={setDogs}
                    temperament={dog.temperament}
                    origin={dog.origin}
                  ></OverlayModal>
                )}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HomePageOne;

{
  /* <img
                    className={styles.size}
                    src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`}
                    alt={dog.name}
                  ></img>
                  <h3 className={styles.titletext}>{dog.name}</h3>
                  <p className={styles.ptext}>Uses: {dog.bred_for}</p>
                  <button
                    className={styles.button}
                    onClick={() => handleClick(dog.id)}
                  >
                    Click here for info
                  </button> */
}
