// Styled
import { GlobalStyle } from "./styled/global";

// Components
import Home from "./components/Home/Home";
import MyTechnologies from "./components/MyTechnologies/MyTechnologies";
import Navbar from "./components/NavBar/Navbar";
import MyProjects from "./components/MyProjects/MyProjects";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Home />
      <MyTechnologies />
      <MyProjects />
      <Footer />
    </>
  );
}

export default App;
