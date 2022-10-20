import { Link } from "react-router-dom";
import Container from "../../container";
import styles from "./Footer.module.scss";
import anons from "../../../assets/images/anons.png";
// icons
import {
  FaFacebookF,
  FaTelegramPlane,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className={styles["footer"]}>
      <Container>
        <div className={styles["footer__wrapper"]}>
          <div className={styles["features"]}>
            <ul className={styles["features__list"]}>
              <li className={styles["features__list__item"]}>
                <img
                  src="https://asaxiy.uz/custom-assets/images/icons/market.svg"
                  alt="market"
                />
                <div className={styles["text"]}>
                  <h5>Больше не нужно ходить на базар</h5>
                  <p>У нас выгодные цены и доставка до дома</p>
                </div>
              </li>

              <li className={styles["features__list__item"]}>
                <img
                  src="https://asaxiy.uz/custom-assets/images/icons/fast-delivery.svg"
                  alt="fast-delivery"
                />
                <div className={styles["text"]}>
                  <h5>Быстрая доставка</h5>
                  <p>Наш сервис удивит вас</p>
                </div>
              </li>

              <li className={styles["features__list__item"]}>
                <img
                  src="https://asaxiy.uz/custom-assets/images/icons/return.svg"
                  alt="return"
                />
                <div className={styles["text"]}>
                  <h5>Удобства для вас</h5>
                  <p>
                    Быстрое оформление и гарантия на возврат в случае
                    неисправности
                  </p>
                </div>
              </li>

              <li className={styles["features__list__item"]}>
                <img
                  src="https://asaxiy.uz/custom-assets/images/icons/card.svg"
                  alt="card"
                />
                <div className={styles["text"]}>
                  <h5>Рассрочка</h5>
                  <p>Без предоплаты на 3, 6, 9 и 12 месяцев</p>
                </div>
              </li>
            </ul>
          </div>

          <div className={styles["footer-links"]}>
            <ul>
              <li>
                <strong>Информация</strong>
              </li>
              <li>
                <Link to="#">
                  Публичная оферта (Пользовательское соглашение)
                </Link>
              </li>
              <li>
                <Link to="#">Оферта для покупок в рассрочку</Link>
              </li>
              <li>
                <Link to="#">Условия рассрочки</Link>
              </li>
              <li>
                <Link to="#">Оплата и доставка товара</Link>
              </li>
              <li>
                <Link to="#">Отмена заказа и возврат товара</Link>
              </li>
              <li>
                <Link to="#">О нас</Link>
              </li>
            </ul>

            <ul>
              <li>
                <strong>Для связи</strong>
              </li>
              <li>
                <Link to="#">
                  <img
                    src="https://asaxiy.uz/custom-assets/images/phone.svg"
                    alt="phone"
                  />
                  +998 71 200 01 05
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img
                    src="https://asaxiy.uz/custom-assets/images/mail.svg"
                    alt="email"
                  />
                  info@asaxiy.uz
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img
                    src="https://asaxiy.uz/custom-assets/images/location.svg"
                    alt=""
                  />
                  Чиланзар 3, Ташкент
                </Link>
              </li>
            </ul>

            <ul>
              <li>
                <strong>Наш Facebook</strong>
              </li>
              <Link to="#">
                <img src={anons} alt="anons" className={styles["anons-img"]} />
              </Link>
            </ul>
          </div>

          <div className={styles["footer-payments"]}>
            <ul>
              <li>
                <strong>Виды оплаты :</strong>
              </li>
              <li>
                <Link to="#">
                  <img
                    src="https://asaxiy.uz/custom-assets/images/click-logo.svg"
                    alt="click"
                  />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img
                    src="https://asaxiy.uz/custom-assets/images/payme.svg"
                    alt="payme"
                  />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img
                    src="https://asaxiy.uz/custom-assets/images/visa.svg"
                    alt="visa"
                  />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img
                    src="https://asaxiy.uz/custom-assets/images/mastercard.svg"
                    alt="mastercard"
                  />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img
                    src="https://asaxiy.uz/custom-assets/images/humo.svg"
                    alt="humo"
                  />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img
                    src="https://asaxiy.uz/custom-assets/images/uzcard.svg"
                    alt="uzcard"
                  />
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <strong>Мы в соц. сетях :</strong>
              </li>
              <li>
                <Link to="#">
                  <FaFacebookF />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <FaTelegramPlane />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <FaInstagram />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <FaYoutube />
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles["footer-info"]}>
            <p>
              2015-2022 Интернет-магазин asaxiy.uz: Бытовая техника и др.
              Доставка товаров осуществляется во все регионы. Все права
              защищены.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
