import { useState, useEffect } from 'react'

import TypingAnimation from "./components/magicui/typing-animation";
import IconCloud from "./components/magicui/icon-cloud";
import DotPattern from "./components/magicui/dot-pattern";
import ScrollVelocity from "./components/magicui/scroll-based-velocity";
import WordRotate from "./components/magicui/word-rotate";

import Header from "./components/Header";
import Title from "./components/Title";
import Title_small from "./components/Title_small";
import SinCanvas from "./components/SinCanvas";
import Video from "./components/Video";

import jsonData from './../public/scripts/json/data.json'; 

function App() {
  console.log(jsonData);
  const [techClass, setTechClass] = useState("tech-hidden");
  //const [winPopupClass, setWinPopupClass] = useState("");

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
  /*
  function setWinPopupVis(vis: boolean) {
    if(vis) {
      setWinPopupClass("");
    }
    else {
      setWinPopupClass("disabled");
    }
  }
  function setWebInfoData(data: any) {
    const webInfo: any = document.querySelector(".web-info");
    webInfo.classList.remove("web-info-hidden");
    webInfo.querySelector(".cont .text p").innerHTML = data.name;
    webInfo.querySelector(".cont .button").href = data.link;
  }
  */

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      newCcMain();
    }, 2 * 1000);
  
    return () => clearTimeout(timeoutId); // Cleanup on unmount/re-mount
  }, []);
  function newCcMain() {
    console.log("newCcMain");
    const colorChangerCont: any = document.querySelector("main .colorChangerCont");
    const newCC: any = document.createElement('div');
    newCC.classList = "colorChanger colorChangerAnimate";
    colorChangerCont.appendChild(newCC, colorChangerCont.children[colorChangerCont.children.length]);
  }

  return (
    <>
    <Header />
    <main>
      <TypingAnimation text="Lukáš Merta" className="main-h1"/>
      {/* <TypingAnimation text="Software engineer" className="main-h2"/> */}
      <h2 className="main-h2"><WordRotate words={["Frontend", "Backend", "Fullstack"]}></WordRotate> developer</h2>
      <div className="links">
        <a href="#skola" onMouseEnter={()=>{newCcMain()}}>Školní projekty</a>
        <a href="#vlastni" onMouseEnter={()=>{newCcMain()}}>Vlastní projekty</a>
      </div>
      <div className="colorChangerCont">
        <div className="colorChanger"></div>
      </div>
      {/* <img src="images/stickers/programmer.png" className="sticker sticker1" /> */}
    </main>
    <section className="tech-pre">
      <a href="#tech" onClick={()=>{setTechVis(true)}}>
        <div className="bg"></div>
        <i className="fa-light fa-arrow-down"></i>
      </a>
      <div className="iconCloud"><IconCloud iconSlugs={slugs} /></div>
      <Title abs={true} bg={true}>
        <img src="images/ui/arrow_down.png" />
        <span>Co umím / s čím pracuji</span>
        <img src="images/ui/arrow_down.png" />
        {/* <i className="fa-regular fa-hand-pointer"></i> */}
      </Title>
      <img src="images/stickers/code_editor.png" className="sticker sticker1" />
      <img src="images/stickers/laptop.png" className="sticker sticker2" />
    </section>
    <a id="tech" className="anchor"></a>
    <section className={"tech " + (techClass)}>
      <img src="images/stickers/bot.png" className="sticker sticker1" />
      <img src="images/stickers/git_req.png" className="sticker sticker2" />
      <img src="images/stickers/api.png" className="sticker sticker3" />
      <div className="dotPatern-parent">
        <div className="vignete"></div>
        <DotPattern className="dotPatern"></DotPattern>
      </div>
      <div className="tech-list">
        <Title_small>Webové technologie</Title_small>
        {jsonData.tech.languages.map((item: any) => (
          <div className="tech-item">
            <img src={"images/tech/"+(item.icon)} />
            <div className="text">
              <span className="name">{item.name}</span>
              <span className="time">od <span>{item.date}</span></span>
            </div>
          </div>
        ))}
        <Title_small>Ostatní technologie</Title_small>
        {jsonData.tech.software.map((item: any) => (
          <div className="tech-item">
            <img src={"images/tech/"+(item.icon)} />
            <div className="text">
              <span className="name">{item.name}</span>
              <span className="time">od <span>{item.date}</span></span>
            </div>
          </div>
        ))}
      </div>
    </section>
    <section className="skola">
      <a id="skola" className="anchor"></a>
      <img src="images/stickers/web.png" className="sticker sticker1" />
      <Title><span>Školní projekty</span></Title>
      <SinCanvas />
      <div className="cont">
        {jsonData.skola.map((item: any) => (
          <a href={"skola/"+item.folder} target='_blank' className="web">
            <div className="border"></div>
            <div className="img-cont">
              <img src={"images/skola/"+item.image} />
            </div>
            <h4>{item.name}</h4>
          </a>
        ))}
      </div>
    </section>
    <div className="velocityScroll-cont">
      <ScrollVelocity text={"SOFTWARE ENGINEER"}></ScrollVelocity>
    </div>
    <section className="vlastni">
      <a id="vlastni" className="anchor"></a>
      <Video source={"videos/bg_topographic.mp4"}/>
      <Title><span>Vlastní projekty</span></Title>
      <div className="cont">
        <img className="web-img" src="https://unsplash.it/1920/1080" />
        <div className="web-list">
          <div className="web-item">web item</div>
          <div className="web-item">web item</div>
          <div className="web-item">web item</div>
          <div className="web-item">web item</div>
          <div className="web-item">web item</div>
        </div>
      </div>
      <div className="colorChangerCont">
        <div className="colorChanger"></div>
      </div>
    </section>
    </>
  )
}

export default App
