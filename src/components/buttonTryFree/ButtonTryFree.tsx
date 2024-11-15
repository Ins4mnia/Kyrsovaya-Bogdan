import { NextPage } from "next";
import s from "./ButtonTryFree.module.scss";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const ButtonTryFree: NextPage<Props> = ({ children }) => {
  return <button className={s.ButtonTryFree}>{children}</button>;
};

export default ButtonTryFree;
