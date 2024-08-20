//import { useState } from 'react'

import TypingAnimation from "./components/magicui/typing-animation";
import IconCloud from "./components/magicui/icon-cloud";

import Header from "./components/Header"
import Title from "./components/Title";

function App() {
  const slugs = [
    "typescript",
    "javascript",
    "react",
    "html5",
    "css3",
    "sass",
    "php",
    "csharp",
    "nodedotjs",
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

  return (
    <>
    <Header />
    <main>
      <TypingAnimation text="Lukáš Merta" className="main-h1"/>
      <TypingAnimation text="Software engineer" className="main-h2"/>
    </main>
    <section className="tech-pre">
      <div className="iconCloud"><IconCloud iconSlugs={slugs} /></div>
      <Title text="Co umím / s čím pracuji" abs={true} bg={true}/>
    </section>
    <section className="skola">
      <Title text="Školní projekty"></Title>
    </section>
    </>
  )
}

export default App
