import { items, responsive } from "../utils/index";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Skill from "./Skill";

const SkillsList = () => {
  const renderList = items.map((item) => {
    return <Skill key={item} item={item} />;
  });

  return (
    <AliceCarousel
      mouseTracking
      infinite
      autoPlayInterval={1000}
      animationDuration={1500}
      disableDotsControls
      disableButtonsControls
      responsive={responsive}
      items={renderList}
      autoPlay
    />
  );
};

export default SkillsList;
