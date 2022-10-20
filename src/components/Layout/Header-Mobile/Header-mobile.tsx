import { Link } from "react-router-dom";
import Container from "../../container";
import type { DrawerProps } from "antd";
import { Dropdown, Menu, Drawer } from "antd";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import styles from "./Header-Mobile.module.scss";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

function HeaderMobile() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("left");

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

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

  return (
    <header className={styles["header-mobile"]}>
      <div className={styles["header-mobile__top"]}>
        <Container>
          <div className={styles["wrapper"]}>
            <div className={styles["hamburger"]}>
              <button onClick={showDrawer}>
                {open ? <AiOutlineClose /> : <AiOutlineMenu />}
              </button>
            </div>
            <div className={styles["logo"]}>
              <Link to="/">
                <img
                  src="https://asaxiy.uz/custom-assets/images/logos/asaxiy-logo.svg"
                  alt="logo"
                />
              </Link>
            </div>
          </div>
        </Container>
      </div>

      <Drawer
        title={
          <Link to="/">
            <img
              src="https://asaxiy.uz/custom-assets/images/logos/asaxiy-logo.svg"
              alt="logo"
            />
          </Link>
        }
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
        className={styles["header-mobile__drop-dawn"]}
      >
        <ul className={styles["header-mobile__drop-dawn__list"]}>
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
            <Link to="#">
              <img
                src="	https://asaxiy.uz/custom-assets/images/icons/header/cart.svg"
                alt="cart"
              />
              <p>{t("Корзинка")}</p>
            </Link>
          </li>
          <li>
            <Link to="/favorites">
              <img
                src="https://asaxiy.uz/custom-assets/images/icons/header/heart.svg"
                alt="heart"
              />
              <p>{t("Избранное")}</p>
            </Link>
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
      </Drawer>
    </header>
  );
}

export default HeaderMobile;
