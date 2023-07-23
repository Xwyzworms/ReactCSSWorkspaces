import React from "react";
import ReactDom from "react-dom";
import "./index.css";

function App() {
  return <Card />;
}

function Avatar() {
  return <img className="avatar" src="hero-image.jpeg" alt=""></img>;
}

function Card() {
  return (
    <div className="card">
      <Avatar />
      <div class="data">
        <h1> Tiny Rick </h1>
        <p >
          Tiny Rick is a quirky and miniature version of the eccentric scientist
          Rick Sanchez from the animated TV show "Rick & Morty." Transferring
          his consciousness into a younger clone, Tiny Rick becomes a rebellious
          and energetic teenager with all of Rick's intelligence and wit.
          Despite his diminutive size, he possesses an unyielding spirit and a
          penchant for adventure, always ready to embark on wild escapades with
          his grandson Morty and the rest of the family. With his trademark
          catchphrase "I'm Tiny Rick!" and a penchant for catchy tunes, Tiny
          Rick adds a unique and entertaining twist to the already zany world of
          "Rick & Morty."
        </p>
        <Skills />
      </div>
    </div>
  );
}

function Skills() {
  return (
    <ul className="skill-list">
      <Skill skill="React" emoji="💪" color="blue" />
      <Skill skill="HTML+CSS" emoji="💪" color="orange" />
      <Skill skill="JavaScript" emoji="💪" color="yellow" />
      <Skill skill="Svelte" emoji="👶" color="orangered" />
    </ul>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
