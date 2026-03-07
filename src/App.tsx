// Styled
import { GlobalStyle } from "./styled/global";

// Components
import Home from "./components/Home/Home";
import MyTechnologies from "./components/MyTechnologies/MyTechnologies";
import Navbar from "./components/NavBar/Navbar";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Home />
      <MyTechnologies />
    </>
  );
}

export default App;
