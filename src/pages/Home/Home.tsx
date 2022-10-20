import { Col, Row } from "antd";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Collapse from "../../components/Collapse";
import Container from "../../components/container";
import Grid from "../../components/Grid";
import OwlSlider from "../../components/Owl-Slider";
import ProductList from "../../components/Product-List";
import Search from "../../components/Search";
import Slider from "../../components/Slider";
import { owlCarouselItems } from "../../utils/owl-carousel";
import { productData } from "../../utils/product-data";
import { productList } from "../../utils/product-list";

import styles from "./Home.module.scss";

function Home() {
  const items = [
    "https://assets.asaxiy.uz/uploads/banner/desktop/62f4b37ece1f6.jpg.webp",
    "https://assets.asaxiy.uz/uploads/banner/desktop/628784f087071.jpg.webp",
    "https://assets.asaxiy.uz/uploads/banner/desktop/633520602d4ca.jpg.webp",
    "https://assets.asaxiy.uz/uploads/banner/desktop/625fe1f1373f3.jpg.webp",
    "https://assets.asaxiy.uz/uploads/banner/desktop/633ed75a7d00c.png.webp",
  ];

  const collapseItems = [
    {
      header: "Принцип работы компании",
      text: (
        <>
          <p>
            Каждый покупатель должен в комфортных условиях выбрать{" "}
            <a href="https://asaxiy.uz/product/telefony-i-gadzhety">
              телефоны и гаджеты
            </a>
            максимально быстро, поэтому мы создали интуитивно понятное меню,
            которое легко освоить новым пользователям сети. Для большего
            удобства мы раздели меню на соответствующие разделы, в которых вы
            найдете более 15 тысяч разновидностей оргтехники и сопутствующих
            товаров. Выглядят они следующим образом:
          </p>
        </>
      ),
    },
    {
      header: "Наши преимущества",
      text: (
        <>
          <p>
            Компания Asaxiy.uz стремительно прорабатывает все свои возможности,
            и сегодня мы предлагаем своим клиентам значительные{" "}
            <a href="https://asaxiy.uz/product?discount=1">скидки</a> и быструю
            доставку в ряды городов. В зону нашего обслуживания входят такие
            города как Андижане, Бухаре, Фергане, Джизак, Хорезм, Наманган,
            Навои, Кашкадарью,&nbsp;Самарканде, Сырдарье, Сурхандарье и всей
            Ташкентской области, а также Республика Каракалпакстан. И это
            неполная карта поставок. Уточнить все наши зоны обслуживания вы
            можете, позвонив специалисту интернет-магазина, который предоставит
            всю интересующую вас информацию.
          </p>

          <p>
            Каждый покупатель нашего магазина – достойный гость, которому мы
            предложим приятные скидки и бонусные программы. Мы полностью
            сопроводим весь процесс подбора товаров согласно требованиям
            клиентам и произведем&nbsp;доставку любым удобным способом.
          </p>
        </>
      ),
    },
  ];

  return (
    <div className={styles["home-page"]}>
      <Container>
        <div className={styles["home-page__search"]}>
          <Search />
        </div>

        <Row gutter={[32, 32]}>
          <Col
            span={18}
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 18 }}
            lg={{ span: 18 }}
          >
            <Slider items={items} />
          </Col>
          <Col
            span={6}
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 6 }}
            lg={{ span: 6 }}
          >
            <img
              className={styles["home-page__aksia"]}
              src="https://assets.asaxiy.uz/uploads/toptoday/mobile/635047a7b6dbe.jpeg"
              alt="aksia"
            />
          </Col>
        </Row>

        <Row gutter={[32, 32]}>
          <Col
            span={6}
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 6 }}
            lg={{ span: 6 }}
          >
            <div className={styles["home-page__card-box"]}>
              <ProductList {...productList} />
            </div>
          </Col>
          <Col
            span={18}
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 18 }}
            lg={{ span: 18 }}
          >
            {productData.map(({ category, list }, key) => (
              <div key={key} className={styles["home-page__card-box"]}>
                <h5>{category}</h5>

                <Grid minmax="250px" gap="16px">
                  {list.map((item, index) => (
                    <Card key={`item-${index}`} data={item} />
                  ))}
                </Grid>
              </div>
            ))}
          </Col>
        </Row>
        <div className={styles["info"]}>
          <h1>О компании Asaxiy</h1>
          <p>
            Главное преимущество нашей компании, которая занимается поставками
            бытовой техники и электроники в Узбекистане&nbsp;– многолетний опыт
            работы и заслуженное доброе имя. С момента своего развития
            интернет-магазин Asaxiy и его команда неустанно следит за
            тенденциями спроса потребительского рынка, что дает нам возможность
            всегда быть в курсе самых последних технологий и инновационных
            решений. Специалисты компании внимательно изучают желания наших
            клиентов, поэтому ресурс постоянно обновляется качественными
            новинками, имеющими доступную стоимость.
          </p>
          <Collapse items={collapseItems} />
          <br />
          <p>"Asaxiy Books" ООО</p>
          <p>Регистрация: 646439</p>
          <p>ИНН: 305829008</p>
          <p>Директор: Allayev Firuz Abdunasimovich</p>
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

export default Home;
