import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SingleDogOverlay from "./SingleDogOverlay";

const HomePageOne = () => {
  const [dogs, setDogs] = useState([]);
  useEffect(() => {
    const fetchDogData = async () => {
      try {
        const res = await fetch("https://api.thedogapi.com/v1/breeds");
        const data = await res.json();
        setDogs(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDogData();
  }, []);
  return (
    <>
      <div>
        <div className="">Welcome to The dog breed info list</div>
        <form>
          <input
            input="text"
            name="search"
            id="search"
            placeholder="What breed you want?"
          ></input>
        </form>
        <div>
          {dogs.map((dog) => (
            <divdiv key={dog.id}></divdiv>
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
