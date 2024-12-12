import React from 'react';
import './App.css';
import Header from "./modules/components/pages/Header/Header";
import Sidebar from "./modules/components/pages/Sidebar/Sidebar";
import Footer from "./modules/components/pages/Footer/Footer";
import Main from "./modules/components/pages/Main/Main";

const App = () => {
  return (
    <div className="app-container">
      <Header/>
      <Sidebar />
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
