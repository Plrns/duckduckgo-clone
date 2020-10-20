import React from "react";
import { BrowserRouter } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";
import Header from "./pages/Header";
import Footer from "./pages/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Footer />
        <GlobalStyles />
      </BrowserRouter>
    </>
  );
}

export default App;
