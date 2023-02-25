import React from "react";
import "../styles/pageStyles/home.css";
import { Parallax } from "react-parallax";

const HomePage = () => {
  return (
    <>
      <Parallax blur={10} strength={200}>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div
          className="content"
          style={{ textAlign: "center", color: "whitesmoke" }}
        >
          <h1 style={{ fontSize: "4em" }}>iPhone 14 Pro</h1>
          <h3 style={{ fontSize: "2em" }}>Pro. Beyond.</h3>
          <img
            src="https://i.ibb.co/Rc1DgXs/hero-endframe-dtzvajyextyu-large-removebg-preview-2.png"
            alt=""
            width="35%"
            height="35%"
          />
          <br />
          <p
            style={{
              color: "whitesmoke",
              margin: "1.5%",
              fontWeight: "bold",
              fontSize: "1.2rem",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
            asperiores culpa eveniet error repellendus aut, quas nemo recusandae
            commodi hic, architecto provident neque! Laborum accusantium, atque
            eum incidunt maxime odit! Fugiat, dolorum. Temporibus natus dolore
            quod, eum, deleniti neque vitae repudiandae ut, vero enim quas
            corporis facere dignissimos dolorum! Maiores et adipisci doloribus
            perspiciatis consequatur atque neque ullam non sint? Repudiandae nam
            minus fuga labore, quidem asperiores provident nisi voluptas facilis
            tempora qui, doloremque aliquam praesentium ut tempore aspernatur.
            Quo, molestiae corporis! Quaerat modi commodi ut ullam explicabo?
          </p>

          <br />
          <img
            src="https://i.ibb.co/H2RJyzV/220907-iphone-14-pro-and-pro-max-colors-removebg-preview.png"
            alt=""
            width="35%"
            height="35%"
            style={{ margin: "3% auto" }}
          />
        </div>
      </Parallax>

      {/* </div> */}
    </>
  );
};

export default HomePage;
