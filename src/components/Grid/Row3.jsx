import Col from "./Col";
import image1 from "../poster-cards/elemental.jpg";
import image2 from "../poster-cards/strays.jpg";
import image3 from "../poster-cards/sound.jpg";
import ImbdLogo from "../images/IMDB - Copy.svg";
import Rotten from "../images/Rotten Tomatoes - Copy.svg";
const Row3 = () => {
    return (
        <div className="row row3">
      <Col
        src={image1}
        alt="image1"
        headerOne="Elemental"
        special="firstimagestyle"
        logo={ImbdLogo}
        tomatoes={Rotten}
        type="Adventure"
        adventure="changing"
        release="2023-06-14"
      />
      <Col
        src={image2}
        alt="image2"
        headerOne="Strays"
        special="secondimagestyle"
        logo={ImbdLogo}
        tomatoes={Rotten}
        type="Fantasy"
        adventure="changing"
        release="2023-08-17"
      />
      <Col
        src={image3}
        alt="image3"
        headerOne="Sound of Freedom"
        special="secondimagestyle"
        logo={ImbdLogo}
        tomatoes={Rotten}
        type="Drama"
        adventure="changing"
        release="2023-07-03"
      />
      <div className="fix"></div>
    </div>
    );
}

export default Row3;
