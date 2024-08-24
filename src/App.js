import React from 'react';
import './App.css';
import Header from "./modules/components/Header/Header";
import Sidebar from "./modules/components/Sidebar/Sidebar";
import Footer from "./modules/components/Footer/Footer";
import Main from "./modules/components/Main/Main";
import {BrowserRouter} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
    <div className="app-container">
      <Header />
      <Sidebar />
      <Main />
      <Footer />
    </div>
    </BrowserRouter>
   );
}

export default App;
