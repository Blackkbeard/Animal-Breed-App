import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import HomePageOne from "./Pages/HomePageOne";
import CatBreedTwo from "./Pages/CatBreedTwo";
import NavBar from "./Navigate/NavBar";

function App() {
  return (
    <div className="container">
      <img
        className="gif"
        src="https://media.tenor.com/ql1_oqEH5k8AAAAd/dog-cat.gif"
      ></img>
      <h1> Test</h1>
      <img
        className="gif2"
        src="https://media.tenor.com/ql1_oqEH5k8AAAAd/dog-cat.gif"
      ></img>
      <NavBar className="w-25 p-3"></NavBar>
      <Routes>
        <Route path="/" element={<Navigate replace to="/HomePage" />} />

        <Route path="/HomePage" element={<HomePageOne />} />
        {/* <Route path="/:name" element={<SingleDogOverlay />}></Route> */}

        {/* <Route path="/page-one/:item" element={<Details />} /> */}

        <Route path="/page-two" element={<CatBreedTwo />} />
        {/* <Route path="/:name" element={<SingleCatOverlay />}></Route> */}

        {/* <Route path="/page-three" element={<PageThree />} /> */}
      </Routes>
    </div>
  );
}

export default App;
