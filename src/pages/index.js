import React from "react";
import Navbar from "../components/Navbar";
import CodeChallenge from "../components/CodeChallenge";
import phone from "../images/thumb-1.png";
import Pricing from "../components/Pricing";

const Home = () => {
  return (
    <>
      <header>
        <Navbar />

        <div class="text-light text-md-right text-center banner">
          <div class="banner-heading2">
            <h1>Creative way to Showcase your App </h1>
            <p id="Lorem">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div class="blue-btn">
              <a class="first-link" href="">
                Get Started
              </a>
              <a href="">Learn More</a>
            </div>
          </div>

          <img class="banner-heading" src={phone} alt="Logo" />
        </div>
      </header>
      <CodeChallenge />
      <Pricing />
    </>
  );
};

export default Home;
