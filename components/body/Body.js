import Style from "../../styles/Body.module.css";
import About from "../About/About";
import Slider from "../Slider/Slider";
export default function Body() {
  return (
    <div className={Style.ContainerBody}>
      <About />
      <Slider />
    </div>
  );
}
