import './styles.css';
import telegram from "./image/telegram.svg";
import github from "./image/github.png";
import viber from "./image/viber.svg";
import whatsapp from "./image/whatsapp.svg";
import vk from "./image/vk.svg";
import Logo from '../Logo/logo';
import { Link } from "react-router-dom";
import { ROUTELINKFAQ } from '../../utils/constants';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__col">
            <Logo className="logo footer__logo" title="Логотип" />
            <p className="footer__copyright">
              © «Интернет-магазин DogFood.ru»
            </p>
          </div>
          <div className="footer__col">
            <nav className="menu-bottom">
              <a href="/catalogue" className="menu-bottom__item">
                Оплата и доставка
              </a>
             <Link to={ROUTELINKFAQ} className="menu-bottom__item">Часто спрашивают</Link>
              <a href="/catalogue" className="menu-bottom__item">
                Обратная связь
              </a>
              <a href="/catalogue" className="menu-bottom__item">
                Контакты
              </a>
            </nav>
          </div>
          <div className="footer__col">
            <div className="contacts">
              <p className="contacts__title">Мы на связи</p>
              <a className="contacts__tel contacts__link" href="tel:89177172179">
                8 (999) 00-00-00
              </a>
              <a className="contacts__mail contacts__link" href="mailto:hordog.ru@gmail.com">
                dogfood.ru@gmail.com
              </a>
              <ul className="socials contacts__socials">
                <li className="socials__item">
                  <a className="socials__link" href="/#">
                    <img src={telegram} alt="telegram" className="socials__icon" />
                  </a>
                </li>

                <li className="socials__item">
                  <a className="socials__link" href="/#">
                    <img src={whatsapp} alt="whatsapp" className="socials__icon" />
                  </a>
                </li>
                <li className="socials__item">
                  <a className="socials__link" href="/#">
                    <img src={viber} alt="viber" className="socials__icon" />
                  </a>
                </li>
                <li className="socials__item">
                  <a className="socials__link" href="/#">
                    <img src={github} alt="github" className="socials__icon_git" />
                  </a>
                </li>
                <li className="socials__item">
                  <a className="socials__link" href="/#">
                    <img src={vk} alt="vk" className="socials__icon" />
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};



export default Footer;
