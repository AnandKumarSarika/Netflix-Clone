import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import hero from "../../assets/hero_banner.jpg";
import caption from "../../assets/hero_title.png";
import play from "../../assets/play_icon.png";
import info from "../../assets/info_icon.png";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero} alt="" className="banner" />
        <div className="hero-caption">
          <img src={caption} alt="" className="caption" />
          <p>
            Discovering his ties to a secret ancient order , a young man living
            in modern Istanbul embarks on a quest to save the city from an
            immortal enemy .
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={play} alt="" /> Play
            </button>
            <button className="btn dark-btn">
              <img src={info} alt="" /> More Info
            </button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"BlockBuster Movies"} category={"top_rated"} />
        <TitleCards title={"Only on Netflix"} category={"popular"} />
        <TitleCards title={"Upcoming"} category={"upcoming"} />
        <TitleCards title={"Top Picks for U"} category={"now_playing"} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
