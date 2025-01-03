import { ReactNode } from 'react'

interface TitleProps {
  children: ReactNode;
  abs?: boolean;
  bg?: boolean;
}

const Title = ({ children, abs, bg }: TitleProps) => {
  if (abs == undefined) abs = false;
  if (bg == undefined) bg = false;

  return (
    <h2 className={"title " + (abs ? "title-abs " : " ") + (bg ? "title-bg " : " ")}>{children}</h2>
  )
}

export default Title