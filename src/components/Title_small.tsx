import { ReactNode } from 'react'

interface TitleProps {
  children: ReactNode;
  abs?: boolean;
  bg?: boolean;
}

const Title_small = ({ children, abs, bg }: TitleProps) => {
  if (abs == undefined) abs = false;
  if (bg == undefined) bg = false;

  return (
    <h2 className={"title-small " + (abs ? "title-small-abs " : " ") + (bg ? "title-small-bg " : " ")}>{children}</h2>
  )
}

export default Title_small