import "./App.css";
import Layout from "./layout/Layout";
import Home from "./pages/Home";

import { ThemeProvider } from "@mui/material/styles";
import { themes } from "./theme/theme";
import Banner from "./components/Banner";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={themes.theme}>
        <Layout>
          <Home />
          <Banner />
          {/* <Information /> */}
        </Layout>
      </ThemeProvider>
    </div>
  );
}

export default App;
