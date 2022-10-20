import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../../container";
import Search from "../../Search";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { Dropdown, Menu, Badge } from "antd";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Header.module.scss";
// icons
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { leftMenu } from "../../../utils/mega-menu";
import BasketList from "../../Basket-List";

function Header() {
  const [rightMenu, setrightMenu] = useState(leftMenu[0].children);
  const [righActiveId, setrighActiveId] = useState(leftMenu[0].dataId);
  const [isActiveMegaMenu, setisActiveMegaMenu] = useState(false);
  const favorites = useSelector((state: any) => state.favorites.value);
  const basket = useSelector((state: any) => state.basket.value);

  const { t, i18n } = useTranslation();
  const menu = (
    <Menu
      items={[
        {
          label: (
            <div
              className={i18n.language === "Uz" ? styles["activeLanguege"] : ""}
              style={{ padding: "5px 10px" }}
              onClick={() => {
                i18next.changeLanguage("Uz");
              }}
            >
              Uzbek
            </div>
          ),
          key: "0",
        },
        {
          label: (
            <div
              className={i18n.language === "Ru" ? styles["activeLanguege"] : ""}
              style={{ padding: "5px 10px" }}
              onClick={() => {
                i18next.changeLanguage("Ru");
              }}
            >
              Русский
            </div>
          ),
          key: "1",
        },
      ]}
    />
  );

  const basketMenu = (
    <Menu
      items={[
        {
          label: <BasketList />,
          key: "0",
        },
      ]}
    />
  );

  return (
    <header className={styles["header"]}>
      <div className={styles["header-top"]}>
        <Container>
          <div className={styles["header-top__wrapper"]}>
            <div className={styles["header-top__wrapper__logo"]}>
              <Link to="/">
                <img
                  src="https://asaxiy.uz/custom-assets/images/logos/asaxiy-logo.svg"
                  alt="logo"
                />
              </Link>
            </div>
            <div className={styles["header-top__wrapper__search"]}>
              <Search />
            </div>
            <ul className={styles["header-top__wrapper__list"]}>
              <li>
                <Link to="#">
                  <img
                    src="https://asaxiy.uz/custom-assets/images/icons/header/payment.svg"
                    alt="payment"
                  />
                  <p>{t("Оплатить")}</p>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img
                    src="https://asaxiy.uz/custom-assets/images/icons/header/tracker.svg"
                    alt="tracker"
                  />
                  <p>{t("Отследить")}</p>
                </Link>
              </li>
              <li>
                <Dropdown overlay={menu} trigger={["click"]}>
                  <Link to="#">
                    <img
                      src="https://asaxiy.uz/custom-assets/images/icons/header/language.svg"
                      alt="language"
                    />
                    <p>{i18n.language === "Uz" ? "Uzbek" : "Русский"}</p>
                  </Link>
                </Dropdown>
              </li>
              <li>
                <Dropdown overlay={basketMenu}>
                  <Badge count={basket.length} showZero color="#008dff">
                    <Link to="#">
                      <img
                        src="	https://asaxiy.uz/custom-assets/images/icons/header/cart.svg"
                        alt="cart"
                      />
                      <p>{t("Корзинка")}</p>
                    </Link>
                  </Badge>
                </Dropdown>
              </li>
              <li>
                <Badge count={favorites.length} showZero color="#008dff">
                  <Link to="/favorites">
                    <img
                      src="https://asaxiy.uz/custom-assets/images/icons/header/heart.svg"
                      alt="heart"
                    />
                    <p>{t("Избранное")}</p>
                  </Link>
                </Badge>
              </li>
              <li>
                <Link to="#">
                  <img
                    src="https://asaxiy.uz/custom-assets/images/icons/header/avatar.svg"
                    alt="avatar"
                  />
                  <p>{t("Кабинет")}</p>
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </div>
      <div className={styles["header-bottom"]}>
        <Container>
          <ul>
            <li>
              <Link
                to="#"
                onClick={() => {
                  setisActiveMegaMenu(!isActiveMegaMenu);
                }}
              >
                <span className={styles["menu"]}>
                  {isActiveMegaMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
                </span>
                <span> {t("Все категории")}</span>
              </Link>
            </li>
            <li>
              <Link to="#">
                <span> {t("Новости")}</span>
              </Link>
            </li>
            <li>
              <Link to="#">
                <span> {t("Новинки")}</span>
              </Link>
            </li>
            <li>
              <Link to="#">
                <span> {t("Скидки")}</span>
              </Link>
            </li>
            <li>
              <Link to="#">
                <span> {t("Книги")}</span>
              </Link>
            </li>
            <li>
              <Link to="#">
                <span> {t("Мебель")}</span>
              </Link>
            </li>
            <li>
              <Link to="#">
                <span> {t("Телефоны и гаджеты")}</span>
              </Link>
            </li>
            <li>
              <Link to="#">
                <span> {t("Кондиционеры")}</span>
              </Link>
            </li>
          </ul>
        </Container>
      </div>
      {isActiveMegaMenu ? (
        <div className={styles["mega-menu"]}>
          <div className={styles["mega-menu__inner"]}>
            <div className={styles["mega-menu-left"]}>
              <ul className={styles["mega-menu-left__menu-list"]}>
                {leftMenu.map((item, index) => (
                  <li
                    key={index}
                    id={item.dataId}
                    onMouseMove={() => {
                      setrightMenu(item.children);
                      setrighActiveId(item.dataId);
                    }}
                    className={
                      item.dataId === righActiveId ? styles["active"] : ""
                    }
                  >
                    <Link to={item.href}>
                      <img src={item.img} alt={item.title} />
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles["mega-menu-right"]}>
              {rightMenu?.map((item, index) => (
                <ul key={index}>
                  <li>
                    <strong>{item.headTitle}</strong>
                  </li>
                  {item.list.map((item, index) => (
                    <li key={index}>
                      <Link to={item.href}>{item.text}</Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export default Header;
