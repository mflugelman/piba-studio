import "./App.css";
import Layout from "./layout/Layout";
import Home from "./pages/Home";

import { ThemeProvider } from "@mui/material/styles";
import { themes } from "./theme/theme";
import Services from "./pages/Services";
import ThisIsPiba from "./pages/ThisIsPiba";
import TailoredInnovation from "./pages/TailoredInnovation";
import LetsTalk from "./pages/LetsTalk";
import Footer from "./pages/Footer";
import WorkWithUs from "./pages/WorkWithUs";

import { responsiveFontSizes } from "@mui/material/styles";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import OurWork from "./pages/OurWork";

let theme = responsiveFontSizes(themes.theme);

function App() {
  const [currentSection, setCurrentSection] = useState("");

  const [homeRef, inViewHome] = useInView();
  const [projectsRef, inViewProjects] = useInView();
  const [servicesRef, inViewServices] = useInView();
  const [aboutUsRef, inViewAboutUs] = useInView();
  const [sayHiRef, inViewSayHi] = useInView();

  const handleClickScroll = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (inViewProjects) {
      setCurrentSection("projects");
    } else if (inViewServices) {
      setCurrentSection("services");
    } else if (inViewAboutUs) {
      setCurrentSection("about-us");
    } else if (inViewSayHi) {
      setCurrentSection("say-hi");
    } else if (inViewHome) {
      setCurrentSection("");
    }
  }, [inViewHome, inViewProjects, inViewServices, inViewAboutUs, inViewSayHi]);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Layout>
          <NavBar
            onButtonClick={handleClickScroll}
            activeButton={currentSection}
          />
          <div ref={homeRef} id="home">
            <Home />
          </div>
          <div ref={projectsRef} id="projects">
            <OurWork />
          </div>
          <div ref={servicesRef} id="services">
            <Services />
          </div>
          <div>
            <ThisIsPiba />
          </div>
          <div ref={aboutUsRef} id="about-us">
            <TailoredInnovation />
          </div>
          <WorkWithUs />
          <div ref={sayHiRef} id="say-hi">
            <LetsTalk />
          </div>
          <Footer />
        </Layout>
      </ThemeProvider>
    </div>
  );
}

export default App;
