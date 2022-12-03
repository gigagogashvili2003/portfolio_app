import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles, { MainPageWrapper } from "theme/Global.styles";
import themes from "theme/themes";
import routes from "routes";
import Header from "ui/components/header/Header";
import Footer from "ui/components/footer/Footer";
import GlobalFonts from "theme/GlobalFonts";

function App() {
  return (
    <>
      <ThemeProvider theme={themes.dark}>
        <Header />
        HELLo
        <GlobalStyles />
        <GlobalFonts />
        <MainPageWrapper>
          <Routes>
            {routes.map((route, idx) => (
              <Route key={idx} path={route.path} element={route.component} />
            ))}
          </Routes>
        </MainPageWrapper>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
