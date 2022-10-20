import { Link } from "react-router-dom";
import Button from "../Button";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Row-Card.module.scss";
import { deleteFavorites } from "../../redux-toolkit/reducers/favorites";
import { pushBasket } from "../../redux-toolkit/reducers/basket";

type Props = {
  data: {
    id: string;
    img: string;
    title: string;
    previousPrice?: number;
    presentPrice?: number;
    priceAtTime?: string;
  };
};

function RowCard({ data }: Props) {
  const { id, img, title, presentPrice, previousPrice, priceAtTime } = data;
  const favorites = useSelector((state: any) => state.favorites.value);

  const dispatch = useDispatch();
  return (
    <div className={styles["row-card"]}>
      <div className={styles["row-card__left"]}>
        <img src={img} alt={title} />
        <div className={styles["row-card__left__text"]}>
          <Link to="#">{title}</Link>
        </div>
      </div>
      <div className={styles["row-card__right"]}>
        <div className={styles["price"]}>
          {previousPrice ? (
            <span className={styles["price__previous"]}>
              {previousPrice} -sum
            </span>
          ) : null}
          {presentPrice ? (
            <span className={styles["price__present"]}>
              {presentPrice} -sum
            </span>
          ) : null}
          {priceAtTime ? (
            <span className={styles["price__at-time"]}>{priceAtTime}</span>
          ) : null}
        </div>
        <div className={styles["row-card__right__action"]}>
          <Button
            type="primary"
            handleClick={() => {
              dispatch(pushBasket(data));
            }}
          >
            Добавить в корзину
          </Button>
          <Button
            type="green"
            handleClick={() => {
              dispatch(deleteFavorites(id));
            }}
          >
            Удалить
          </Button>
        </div>
      </div>
    </div>
  );
}

export default RowCard;
