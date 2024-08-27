import { useState, useEffect } from 'react'

import TypingAnimation from "./components/magicui/typing-animation";
import IconCloud from "./components/magicui/icon-cloud";
import DotPattern from "./components/magicui/dot-pattern";
import ScrollVelocity from "./components/magicui/scroll-based-velocity";

import Header from "./components/Header";
import Title from "./components/Title";
import Title_small from "./components/Title_small";
import SinCanvas from "./components/SinCanvas";

import jsonData from './scripts/json/data.json'; 

function App() {
  console.log(jsonData);
  const [techClass, setTechClass] = useState("tech-hidden");

  const [tech_lang, setTech_lang] = useState([{

  }]);
  const [tech_software, setTech_software] = useState([{

  }]);

  const slugs = [
    "typescript",
    "javascript",
    "react",
    "html5",
    "css3",
    "sass",
    "php",
    "csharp",
    "mysql",
    "firebase",
    "docker",
    "github",
    "visualstudiocode",
    "figma",
    "unity",
    "blender",
    "adobephotoshop"
  ];

  function setTechVis(vis: boolean) {
    if(vis) {
      setTechClass("");
    }
    else {
      setTechClass("tech-hidden");
    }
  }

  return (
    <>
    <Header />
    <main>
      <TypingAnimation text="Lukáš Merta" className="main-h1"/>
      <TypingAnimation text="Software engineer" className="main-h2"/>
      <div className="buttons">
      </div>
    </main>
    <section className="tech-pre">
      <a href="#tech" onClick={()=>{setTechVis(true)}}>
        <div className="bg"></div>
        <i className="fa-light fa-arrow-down"></i>
      </a>
      <div className="iconCloud"><IconCloud iconSlugs={slugs} /></div>
      <Title abs={true} bg={true}>
        Co umím / s čím pracuji
        <i className="fa-solid fa-arrow-pointer"></i>
      </Title>
    </section>
    <a id="tech" className="anchor"></a>
    <section className={"tech " + (techClass)}>
      <div className="dotPatern-parent">
        <div className="vignete"></div>
        <DotPattern className="dotPatern"></DotPattern>
      </div>
      <div className="tech-list">
        <Title_small>Webové technologie</Title_small>
        {jsonData.tech.languages.map((item: any) => (
          <div className="tech-item">
            <img src={"images/"+(item.icon)} />
            <div className="text">
              <span className="name">{item.name}</span>
              <span className="time">od <span>{item.date}</span></span>
            </div>
          </div>
        ))}
        <Title_small>Ostatní technologie</Title_small>
        {jsonData.tech.software.map((item: any) => (
          <div className="tech-item">
            <img src={"images/"+(item.icon)} />
            <div className="text">
              <span className="name">{item.name}</span>
              <span className="time">od <span>{item.date}</span></span>
            </div>
          </div>
        ))}
      </div>
    </section>
    <section className="skola">
      <SinCanvas />
      <Title>Školní projekty</Title>
    </section>
    <div className="velocityScroll-cont">
      <ScrollVelocity text={"FRONTEND BACKEND FULLSTACK SOFTWARE HARDWARE"}></ScrollVelocity>
    </div>
    </>
  )
}

export default App
