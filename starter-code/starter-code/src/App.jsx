import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import HomePageOne from "./Pages/HomePageOne";
import CatBreedTwo from "./Pages/CatBreedTwo";

import NavBar from "./Navigate/NavBar";
// import SingleDogOverlay from "./Pages/SingleDogOverlay";
// import SingleCatOverlay from "./Pages/SingleCatOverlay";

function App() {
  return (
    <div className="container">
      <NavBar></NavBar>
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
