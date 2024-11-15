import { NextPage } from "next";
import s from "./AuthorCard.module.scss";

interface Props {
  number: string;
  title: string;
  text: string;
}

const AuthorCard: NextPage<Props> = ({ number, title, text }) => {
  return (
    <div className={s.AuthorCard} style={{ backgroundImage: `url("/AuthorImage${number}.jpg")` }}>
      <div className={s.AuthorCard__InfoWrapper}>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default AuthorCard;
