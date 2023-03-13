import { Footer } from "./Components/Footer/Footer";
import { GalleryPage, Home } from "./Pages";
import { GlobalStyle } from "./Styles/globalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Home />
      <GalleryPage />
      <Footer />
    </>
  );
}

export default App;
