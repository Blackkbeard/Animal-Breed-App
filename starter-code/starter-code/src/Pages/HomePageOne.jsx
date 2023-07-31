import React from "react";
import { Link } from "react-router-dom";
import SingleDogOverlay from "./SingleDogOverlay";

const HomePageOne = () => {
  return (
    <>
    <div className="containter">The dog Element</div>
      <h2>Page One</h2>
      <ul>
        <Link to="/page-one/a">A</Link>
      </ul>
      <ul>
        <Link to="/page-one/b">B</Link>
      </ul>
      
    </>
  );
};

export default HomePageOne;
