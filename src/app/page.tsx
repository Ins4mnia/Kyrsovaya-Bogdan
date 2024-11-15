import { NextPage } from "next";
import s from "./page.module.scss";
import Image from "next/image";
import ButtonTryFree from "@/components/buttonTryFree/ButtonTryFree";

const Page: NextPage = ({}) => {
  return (
    <div className={s.Page}>
      <div className={s.Page__content}>
        <div className={s.Page__content__wrapper}>
          <h1 className={s.Page__content__title}>
            Открой мир математики абсолютно <span className={s.Page__content__title__highlight}>бесплатно</span>
          </h1>
          <p className={s.Page__content__text}>
            Наши бесплатные курсы помогут тебе разобраться в математике с нуля, подготовиться к экзаменам или улучшить текущие знания
          </p>
        </div>
        <ButtonTryFree>Попробовать бесплатно</ButtonTryFree>
      </div>
      <Image src={"/MainImage.png"} width={604} height={604} alt="Фотография"></Image>
    </div>
  );
};

export default Page;
