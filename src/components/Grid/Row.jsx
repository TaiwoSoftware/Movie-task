import Col from "./Col";
import image1 from "../poster-cards/meg2.jpg";
import image2 from "../poster-cards/fastx.jpg";
import image3 from "../poster-cards/nun.jpg";
import ImbdLogo from "../images/IMDB - Copy.svg";
import Rotten from "../images/Rotten Tomatoes - Copy.svg";
const Row = () => {
  return (
    <div className="row">
      <Col
        src={image1}
        alt="image1"
        headerOne="Meg 2: The Trench"
        special="firstimagestyle"
        logo={ImbdLogo}
        tomatoes={Rotten}
        type="Adventure"
        adventure="changing"
        release='2023-08-02'
      />
      <Col
        src={image2}
        alt="image2"
        headerOne="Fast X"
        special="secondimagestyle"
        logo={ImbdLogo}
        tomatoes={Rotten}
        type="Action"
        adventure="changing"
        release='2023-05-17'
      />
      <Col
        src={image3}
        alt="image3"
        headerOne="The Nun II"
        special="secondimagestyle"
        logo={ImbdLogo}
        tomatoes={Rotten}
        type="Horror"
        adventure='changing'
        release="2023-09-06"
      />
      <div className="fix"></div>
    </div>
  );
};

export default Row;
