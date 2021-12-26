import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import Features from "./pages/features";
import Contact from "./pages/contact";
import Screenshots from "./pages/screenshots";
import Pricing from "./pages/pricing";

function App() {
  return (
    <Router>
      <link rel="icon" href="images/title-img.png" />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
        integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4"
        crossorigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat"
        rel="stylesheet"
      ></link>
      <Switch>
        <Route path="/" exact component={Home} />
        {/* <Route path="/features" component={Features} />
        <Route path="/contact" component={Contact} />
        <Route path="/screenshots" component={Screenshots} />
        <Route path="/pricing" component={Pricing} /> */}
      </Switch>
    </Router>
  );
}

export default App;
