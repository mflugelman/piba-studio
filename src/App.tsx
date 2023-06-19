import "./App.css";
import Layout from "./layout/Layout";
import Home from "./pages/Home";

import { ThemeProvider } from "@mui/material/styles";
import { themes } from "./theme/theme";
import Banner from "./components/Banner";
import OurWork from "./pages/OurWork";
import Services from "./pages/Services";
import ThisIsPiba from "./pages/ThisIsPiba";
import TailoredInnovation from "./pages/TailoredInnovation";
import LetsTalk from "./pages/LetsTalk";
import Footer from "./pages/Footer";
import WorkWithUs from "./pages/WorkWithUs";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={themes.theme}>
        <Layout>
          <Home />
          <OurWork />
          <Services />
          <ThisIsPiba />
          <TailoredInnovation />
          <WorkWithUs />
          <LetsTalk />
          <Footer />
          {/* <Banner /> */}
        </Layout>
      </ThemeProvider>
    </div>
  );
}

export default App;
