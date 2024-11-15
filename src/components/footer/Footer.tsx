import { NextPage } from "next";
import s from "./Footer.module.scss";
import Link from "next/link";
import Image from "next/image";
import telegram from "./TelegramIcon.svg";
import vk from "./VkIcon.svg";

const Footer: NextPage = ({}) => {
  return (
    <footer className={s.Footer}>
      <div className={s.Footer__links}>
        <Link href={"/"}>Главная</Link>
        <Link href={"/tariffs"}>Тарифы</Link>
        <Link href={"/authors"}>Авторы курса</Link>
        <Link href={"/about"}>О компании</Link>
      </div>
      <div className={s.Footer__socials}>
        <Image src={telegram} width={24} height={24} alt="Телеграм" />
        <Image src={vk} width={24} height={24} alt="Вконтакте" />
      </div>
    </footer>
  );
};

export default Footer;
