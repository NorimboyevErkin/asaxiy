import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Basket-List.module.scss";
import { AiOutlineClose } from "react-icons/ai";
import { deleteBasket } from "../../redux-toolkit/reducers/basket";

function BasketList() {
  const basket = useSelector((state: any) => state.basket.value);
  const [summa, setsumma] = useState(0);
  const dispatch = useDispatch();

  const Sum = () => {
    let count = 0;
    basket.forEach((item: any) => {
      count += item.presentPrice;
    });
    setsumma(count);
  };

  useEffect(() => {
    Sum();
  }, [basket]);

  return (
    <div className={styles["basket-box"]}>
      <div className={styles["basket-box__product-list"]}>
        <ul>
          {basket.map((item: any, index: number) => (
            <li key={index}>
              <img src={item.img} alt={item.title} />
              <Link to="#">{item.title}</Link>
              <span className={styles["price"]}>
                {item.presentPrice} - so'm
              </span>
              <button
                className={styles["close"]}
                onClick={() => {
                  dispatch(deleteBasket(item.id));
                }}
              >
                <AiOutlineClose />
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles["basket-box__action"]}>
        <div className={styles["summa"]}>
          <span className={styles["summa__all"]}>Jami:</span>
          <span className={styles["summa__total"]}>{summa} -sum</span>
        </div>
        <Button type="primary">Sotib olish</Button>
      </div>
    </div>
  );
}

export default BasketList;
