import { NextPage } from "next";
import s from "./page.module.scss";
import TarifCard from "@/components/tarifCard/TarifCard";

const data = [
  {
    title: "Пробный",
    text: "Для максимальной автоматизации всех процессов в компании.",
    price: "1 990",
  },
  {
    title: "Стандарт",
    text: "Для максимальной автоматизации всех процессов в компании.",
    price: "4 990",
  },
  {
    title: "Про",
    text: "Для максимальной автоматизации всех процессов в компании.",
    price: "6 990",
  },
];

const Page: NextPage = ({}) => {
  return (
    <div className={s.Page}>
      <h1 className={s.Page__title}>Тарифы</h1>
      <div className={s.Page__content}>
        {data.map((elem, index) => (
          <TarifCard text={elem.text} title={elem.title} price={elem.price} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Page;
