import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SingleDogOverlay from "./SingleDogOverlay";
import styles from "./HomePage.module.css";

const HomePageOne = () => {
  const [dogs, setDogs] = useState([]);
  const [text, setText] = useState("");
  useEffect(() => {
    const fetchDogData = async () => {
      try {
        const res = await fetch("https://api.thedogapi.com/v1/breeds");
        const data = await res.json();
        setDogs(data);
        // console.log(data);
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
      setDogs(data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dogSearch;
  };
  return (
    <>
      <div>
        <div className="">Welcome to The dog breed info list</div>
        <form onSubmit={handleSubmit}>
          <input
            className={styles.input}
            input="text"
            name="search"
            id="search"
            placeholder="What breed you want?"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></input>
        </form>
        <div className={styles.component} loading="lazy">
          {dogs.map((dog) => (
            <Link to={`/${dog.name}`}>
              <div key={dog.id}>
                <img
                  className={styles.size}
                  src={dog.image.url}
                  alt={dog.name}
                />
                <h3 className={styles.titletext}>{dog.name}</h3>
                <p className={styles.ptext}>Uses: {dog.bred_for}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* <div className="containter">The dog Element</div>
      <h2>Page One</h2>
      <ul>
        <Link to="/page-one/a">A</Link>
      </ul>
      <ul>
        <Link to="/page-one/b">B</Link>
      </ul> */}
    </>
  );
};

export default HomePageOne;
