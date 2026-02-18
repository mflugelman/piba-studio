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
import { Backdrop, Box, CircularProgress } from "@mui/material";
import illusPibaRegular from "./assets/illusPibaRegular.png";
import pibaStudio from "./assets/pibastudio.png";
import illusPiba from "./assets/illusPiba.png";

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

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const imgs = [illusPiba, illusPibaRegular, pibaStudio];
    cacheImages(imgs);
  }, []);

  const cacheImages = async (images: string[]) => {
    const promises: Promise<void>[] = images.map((src) => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve();
        img.onerror = () => reject();
      });
    });

    try {
      await Promise.all(promises);
      setIsLoading(false);
      setBackdropOpen(true);
    } catch (error) {
      console.error("An error occurred while caching images:", error);
    }
  };

  const [backdropOpen, setBackdropOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBackdropOpen(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [backdropOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setBackdropOpen(false);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const backDrop = () => {
    return (
      <>
        <Backdrop
          timeout={{ exit: 800 }}
          open={backdropOpen}
          sx={{
            backgroundColor: "rgba(255, 255, 255,0.87)",
            zIndex: 1000,
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="100%"
            m={4}
          >
            <img
              src={pibaStudio}
              alt="Piba Studio"
              width="100%"
              onClick={() => setBackdropOpen(false)}
            />
          </Box>
        </Backdrop>
      </>
    );
  };

  if (isLoading)
    return (
      <Box
        sx={{
          display: "flex",
          width: "100vw",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress color="primary" />
      </Box>
    );

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        {backDrop()}
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
          <div ref={aboutUsRef} id="about-us">
            <ThisIsPiba />
            <TailoredInnovation />
          </div>
          <div>
            <WorkWithUs />
          </div>
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
