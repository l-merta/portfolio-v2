import React from 'react'

interface TitleProps {
  text: string;
  abs?: boolean;
  bg?: boolean;
}

const Title = ({ text, abs, bg }: TitleProps) => {
  if (abs == undefined) abs = false;
  if (bg == undefined) bg = false;

  return (
    <h2 className={"title " + (abs ? "title-abs " : " ") + (bg ? "title-bg " : " ")}>{text}</h2>
  )
}

export default Title