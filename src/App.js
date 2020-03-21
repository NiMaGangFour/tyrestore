import React, { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Landing from "./components/Pages/Landing";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import FAQ from "./components/Pages/FAQ";
import News from "./components/Pages/News";
import Tyres from "./components/Pages/Tyres";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/faq" component={FAQ} />
        <Route exact path="/news" component={News} />

        <Route exact path="/tyres" component={Tyres} />
      </Switch>
      <Footer />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
