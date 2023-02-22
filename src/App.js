import Navbar from "./components/Navbar/Navbar";
import MainRoutes from "./MainRoutes";
import React from "react";
import AuthContextProvider from "./contexts/AuthContextProvider";

function App() {
  return (
    <AuthContextProvider>
      <Navbar />
      <MainRoutes />
    </AuthContextProvider>
  );
}

export default App;
