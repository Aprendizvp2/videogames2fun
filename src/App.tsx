import { ThemeProvider } from "@mui/material";
import Header from "./components/header/Header";
import theme from "./types/theme";
import Games from "./views/games/Games";
import Home from "./views/home/Home";
import Footer from "./components/footer/Footer";
import Deals from "./views/deals/Deals";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Home />
        <Games />
        <Deals />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
