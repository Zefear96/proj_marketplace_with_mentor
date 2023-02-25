import Navbar from "./components/Navbar/Navbar";
import MainRoutes from "./MainRoutes";
import React from "react";
import AuthContextProvider from "./contexts/AuthContextProvider";
import Footer from "./components/Footer/Footer";
import ProductContextProvider from "./contexts/ProductContextProvider";

function App() {
  return (
    <ProductContextProvider>
      <AuthContextProvider>
        <Navbar />
        <MainRoutes />
        <Footer />
      </AuthContextProvider>
    </ProductContextProvider>
  );
}

export default App;
