import Intro from "../components/intro";
import Services from "../components/services";
import Projects from "../components/projects";
import ContactUs from "../components/contact";
import ScrollToNavbarButton from "../components/backtotopbutton";

export default function Homepage() {
  return (
    <div style={{ padding: "0px 0px 20px 0px" }} className="cont">
      <Intro />
      <Services />
      <Projects />
      <ContactUs />
      <ScrollToNavbarButton />
    </div>
  );
}
