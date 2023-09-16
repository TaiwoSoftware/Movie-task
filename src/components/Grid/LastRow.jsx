import Col from "./Col";
import image1 from "../poster-cards/rage.jpg";
const LastRow = () => {
  return (
    <div className="row lastRow">
      <Col
        src={image1}
        alt="image1"
        headerOne="I Am Rage"
        special="firstimagestyle"
        
        release="2023-09-14"
      />
      <div className="fix"></div>
    </div>
  );
};

export default LastRow;
