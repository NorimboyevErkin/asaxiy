import Rate from "../Rate";
import styles from "./Card.module.scss";
import { BiComment } from "react-icons/bi";
import Button from "../Button";
import { useDispatch } from "react-redux";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { SlBasket } from "react-icons/sl";
import { pushBasket } from "../../redux-toolkit/reducers/basket";
import { pushFavorites } from "../../redux-toolkit/reducers/favorites";
import { useState } from "react";

type Props = {
  data: {
    img: string;
    title: string;
    previousPrice?: number;
    presentPrice?: number;
    priceAtTime?: string;
    rating?: number;
    commentLenght?: number;
    status: string;
  };
};
function Card({ data }: Props) {
  const {
    img,
    title,
    presentPrice,
    previousPrice,
    priceAtTime,
    rating = 1,
    commentLenght,
    status = "skitka",
  } = data;
  const [isLike, setisLike] = useState(false);
  const dispatch = useDispatch();

  const addBasket = () => {
    dispatch(pushBasket(data));
  };

  const addFavorite = () => {
    dispatch(pushFavorites(data));
    setisLike(!isLike);
  };
  return (
    <div className={styles["card-box"]}>
      <div className={styles["card-box__header"]}>
        <img src={img} alt={title} />
      </div>
      <div className={styles["card-box__info"]}>
        <a href="#" className={styles["title-link"]}>
          <span>{title}</span>
        </a>

        <div className={styles["info-rating"]}>
          <Rate rate={5} />
          <span className={styles["info-rating__rate"]}>
            <BiComment />
            {commentLenght} отзывов
          </span>
        </div>
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
      </div>
      <div className={styles["card-box__footer"]}>
        <Button type="green">Рассрочка</Button>
        <Button type="primary">Купить в 1 клик</Button>
      </div>

      <div className={styles["card-box__action"]}>
        <button className={styles["add-card-btn"]} onClick={addBasket}>
          <SlBasket />
        </button>
        <button className={styles["like-btn"]} onClick={addFavorite}>
          {isLike ? <BsHeartFill style={{ color: "#ff0000" }} /> : <BsHeart />}
        </button>
      </div>
    </div>
  );
}

export default Card;
