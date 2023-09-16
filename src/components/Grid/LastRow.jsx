import Col from "./Col";
import image1 from "../poster-cards/rage.jpg";
import ImbdLogo from "../images/IMDB - Copy.svg";
import Rotten from "../images/Rotten Tomatoes - Copy.svg";
const LastRow = () => {
  return (
    <div className="row lastRow">
      <Col
        src={image1}
        alt="image1"
        headerOne="I Am Rage"
        special="firstimagestyle"
        logo={ImbdLogo}
        tomatoes={Rotten}
        type="Horror"
        adventure="changing"
        release="2023-09-14"
      />
      <div className="fix"></div>
    </div>
  );
};

export default LastRow;
