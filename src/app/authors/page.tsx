import { NextPage } from "next";
import s from "./page.module.scss";
import AuthorCard from "@/components/authorCard/AuthorCard";

const data = [
  {
    title: "Нерсес Багиян",
    text: "Head of DS в Raiffeisen CIB",
    number: "1",
  },
  {
    title: "Никита Табакаев ",
    text: "Аналитик в Raiffeisen CIB",
    number: "2",
  },
  {
    title: "Дмитрий Морозов",
    text: "Head of ML Яндекс Еда",
    number: "3",
  },
];

const Page: NextPage = ({}) => {
  return (
    <div className={s.Page}>
      <h1 className={s.Page__title}>Авторы курса</h1>
      <div className={s.Page__content}>
        {data.map((elem, index) => (
          <AuthorCard text={elem.text} title={elem.title} number={elem.number} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Page;
