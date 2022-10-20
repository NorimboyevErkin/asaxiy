import { Link } from "react-router-dom";
import styles from "./Banner.module.scss";
function Banner() {
  return (
    <div className={styles["banner-app"]}>
      <div className={styles["banner-app__img"]}>
        <img
          src="https://asaxiy.uz/custom-assets/images/asaxiy-app.png"
          alt="asaxiy-app"
        />
      </div>
      <div className={styles["banner-app__content"]}>
        <div className={styles["banner-app__content__header"]}>
          <Link to="/">
            <img
              src="https://asaxiy.uz/custom-assets/images/logos/asaxiy-logo-white.svg"
              alt="logo"
            />
          </Link>
          <p>Ваш интернет магазин</p>
        </div>
        <div className={styles["banner-app__content__footer"]}>
          <Link to="#">
            <img
              src="https://asaxiy.uz/custom-assets/images/app-store.svg"
              alt="app-store"
            />
          </Link>
          <Link to="#">
            <img
              src="https://asaxiy.uz/custom-assets/images/google-play.svg"
              alt="google-play"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
