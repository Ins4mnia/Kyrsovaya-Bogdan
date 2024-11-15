import { NextPage } from "next";
import s from "./Header.module.scss";
import Link from "next/link";
import { Krona_One } from "next/font/google";

const krona_one = Krona_One({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

const Header: NextPage = ({}) => {
  return (
    <header className={s.Header}>
      <Link href={"/"} className={`${s.Header__logo} ${krona_one.className}`}>
        <span className={s.Header__logo__highlight}>Math</span>Practic
      </Link>
      <div className={s.Header__links}>
        <Link href={"/tariffs"}>Тарифы</Link>
        <Link href={"/authors"}>Авторы курса</Link>
        <Link href={"/about"}>О компании</Link>
      </div>
      <button className={s.Header__button}>Начать обучение</button>
    </header>
  );
};

export default Header;
