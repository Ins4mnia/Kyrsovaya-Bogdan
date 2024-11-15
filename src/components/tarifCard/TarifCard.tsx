import { NextPage } from "next";
import s from "./TarifCard.module.scss";
import ButtonTryFree from "../buttonTryFree/ButtonTryFree";

interface Props {
  title: string;
  text: string;
  price: string;
}

const TarifCard: NextPage<Props> = ({ title, text, price }) => {
  return (
    <div className={s.TarifCard}>
      <div className={s.TarifCard__wrapper}>
        <h2 className={s.TarifCard__title}>{title}</h2>
        <p className={s.TarifCard__text}>{text}</p>
      </div>
      <p className={s.TarifCard__price}>{price} ₽/мес</p>
      <ButtonTryFree>Попробовать бесплатно</ButtonTryFree>
    </div>
  );
};

export default TarifCard;
