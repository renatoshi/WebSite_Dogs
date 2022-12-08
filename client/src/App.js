import "./App.css";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import DogDetails from "./components/DogDetails";
import Home from "./components/Home";
import DogCreate from "./components/DogCreate";
import axios from "axios";
axios.default.baseURL = "http://localhost:3001/";


function App() {
  return (
    <BrowserRouter>
      <div className="App"> 
          <Route exact path={"/"} component={LandingPage} />
          <Route path={"/dog/:name"} component={DogDetails}/>
          <Route path={"/home"} component={Home}/>
          <Route path={"/createdog"} component={DogCreate} />
      </div>
    </BrowserRouter>
  );
}

export default App;
