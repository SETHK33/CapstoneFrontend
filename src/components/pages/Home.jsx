import homePhoto1 from "../../assets/images/carousel-images/2950-1.png";
import homePhoto2 from "../../assets/images/carousel-images/2950-2.png";
import homePhoto3 from "../../assets/images/carousel-images/2950-3.png";
import homePhoto4 from "../../assets/images/carousel-images/2950-4.png";
import homePhoto6 from "../../assets/images/carousel-images/2950-6.png";
import homePhoto7 from "../../assets/images/carousel-images/2950-7.png";

export default function Home() {
  return (
    <div className="home-page page-container">
      <h1>2950 WORLDWIDE</h1>

      <div className="home-content-wrapper">
        <div className="home-grid">
          <div className="home-image">
            <img src={homePhoto1} alt="home" />
          </div>

          <div className="home-image">
            <img src={homePhoto2} alt="home" />
          </div>

          <div className="home-image">
            <img src={homePhoto3} alt="home" />
          </div>

          <div className="home-image">
            <img src={homePhoto4} alt="home" />
          </div>

          <div className="home-image">
            <img src={homePhoto6} alt="home" />
          </div>

          <div className="home-image">
            <img src={homePhoto7} alt="home" />
          </div>
        </div>
      </div>
    </div>
  );
}
