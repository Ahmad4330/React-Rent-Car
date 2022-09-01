import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

import { Scrollbars } from "react-custom-scrollbars";

import Home from "./Pages/Home-Page/Main-Home-Page";
import Category from "./Pages/Category/Category";
// import Detail from "./Pages/Detail/Detail";
import Form from "./Pages/Form/Form";
import DetailWithoutFillter from "./Pages/Detail/DetailWithoutFillter";
import "./Responsive.css";
import Check from "./Pages/Detail/Check";

function App() {
  return (
    <>
      <Scrollbars style={{ height: "100vh", width: "100%" }}>
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/Category" element={<Category />} />
          {/* <Route path="/Detail" element={<Detail />} /> */}
          <Route path="/Details" element={<DetailWithoutFillter />} />
          <Route path="/Form" element={<Form />} />
          <Route path="/Check/:id" element={<Check />} />
        </Routes>
      </Scrollbars>
    </>
  );
}

export default App;
