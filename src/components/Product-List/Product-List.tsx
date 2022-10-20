import { Link } from "react-router-dom";
import styles from "./Product-List.module.scss";

type Products = {
  path: string;
  img?: string;
  title?: string;
  description?: string;
};

type Props = {
  img: string;
  title: string;
  products: Array<Products>;
};
function ProductList({ title, img, products }: Props) {
  return (
    <div className={styles["products-box"]}>
      <div className={styles["products-box__head"]}>
        <p>{title}</p>
        <img src={img} alt={title} />
      </div>
      <ul className={styles["products-box__list"]}>
        {products.map((item, index) => (
          <li key={index}>
            <Link to={item.path}>
              <img src={item.img} alt={item.title} />
              <div className={styles["text"]}>
                <h6>{item.title}</h6>
                <p>{item.description}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
