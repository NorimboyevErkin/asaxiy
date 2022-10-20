import { Link } from "react-router-dom";
import styles from "./NavigationDawn.module.scss";

import { BiCategory } from "react-icons/bi";
import { RiHome2Line } from "react-icons/ri";
import { SlBasket } from "react-icons/sl";
import { BiUser } from "react-icons/bi";

function NavigationDawn() {
  return (
    <nav className={styles["fixed-navigate"]}>
      <ul className={styles["fixed-navigate__list"]}>
        <li className={styles["fixed-navigate__list__item"]}>
          <Link to="#">
            <span>
              <RiHome2Line />
            </span>
            Home
          </Link>
        </li>
        <li className={styles["fixed-navigate__list__item"]}>
          <Link to="#">
            <span>
              <BiCategory />
            </span>
            Category
          </Link>
        </li>
        <li className={styles["fixed-navigate__list__item"]}>
          <Link to="#">
            <span>
              <SlBasket />
            </span>
            Karzinka
          </Link>
        </li>
        <li className={styles["fixed-navigate__list__item"]}>
          <Link to="#">
            <span>
              <BiUser />
            </span>
            Account
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationDawn;
