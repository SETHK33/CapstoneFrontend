import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function importAllImages(i) {
  let importedImages = [];
  i.keys().forEach((item, index) => {
    importedImages.push(i(item));
  });
  return importedImages;
}

const images = importAllImages(
  require.context(
    "../../assets/images/carousel images",
    false,
    /\.(png|jpe?g|svg)$/
  )
);

export default function Home() {
  return (
    <div className="home-page page-container">
      <h1>2950 WORLDWIDE</h1>
      <div className="box">
        <Carousel useKeyboardArrows={true}>
          {images.map((URL, index) => (
            <div className="slide">
              <img alt="sample" src={URL} key={index} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
