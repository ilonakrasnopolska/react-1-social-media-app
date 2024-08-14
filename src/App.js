import React from 'react';
import './App.css';
import Header from "./modules/Header";
import Sidebar from "./modules/Sidebar";
import Footer from "./modules/Footer";
import Main from "./modules/Main";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Sidebar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
