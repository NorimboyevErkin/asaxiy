import Banner from "../../components/Banner";
import Container from "../../components/container";
import OwlSlider from "../../components/Owl-Slider";
import RowCard from "../../components/Row-Card";
import { owlCarouselItems } from "../../utils/owl-carousel";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Favorites.module.scss";
import { deleteFavorites } from "../../redux-toolkit/reducers/favorites";

function Favorites() {
  const favorites = useSelector((state: any) => state.favorites.value);
  const dispatch = useDispatch();

  return (
    <div className={styles["favorites-page"]}>
      <Container>
        <div className={styles["favorites-page__list-box"]}>
          {favorites.map((item: any, index: number) => (
            <RowCard key={index} data={item} />
          ))}
        </div>
        <OwlSlider>
          {owlCarouselItems.map((item, index) => (
            <a href="#" key={index}>
              <img src={item} alt={`slider-${index}`} key={index} />
            </a>
          ))}
        </OwlSlider>
        <Banner />
      </Container>
    </div>
  );
}

export default Favorites;
