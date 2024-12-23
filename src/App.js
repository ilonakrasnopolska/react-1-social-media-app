import React from 'react';
import './App.css';
import {useContext} from "react";
import LanguageContext from "./contexts/LanguageContext";
import Header from "./modules/components/pages/Header/Header";
import Sidebar from "./modules/components/pages/Sidebar/Sidebar";
import Footer from "./modules/components/pages/Footer/Footer";
import Main from "./modules/components/pages/Main/Main";


const App = () => {
  const { t } = useContext(LanguageContext);

  return (
    <div className="app-container">
      <Header/>
      <Sidebar t={t}/>
      <Main t={t}/>
      <Footer/>
    </div>
  );
}

export default App;
