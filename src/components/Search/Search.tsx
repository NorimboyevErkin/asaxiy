import { useTranslation } from "react-i18next";
import styles from "./Search.module.scss";

function Search() {
  const { t } = useTranslation();
  return (
    <form className={styles["search"]}>
      <input
        type="text"
        placeholder={t("Искать")}
        className={styles["search__input"]}
      />
      <button type="submit" className={styles["search__button"]}>
        <img
          src="https://asaxiy.uz/custom-assets/images/search-icon.svg"
          alt="search-icon"
        />
        {t("Искать")}
      </button>
    </form>
  );
}

export default Search;
