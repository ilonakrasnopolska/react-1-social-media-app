import React from 'react';
import './App.css';
import Header from "./modules/components/Header";
import Sidebar from "./modules/components/Sidebar";
import Footer from "./modules/components/Footer";
import Profile from "./modules/components/Profile";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Sidebar />
      <Profile />
      <Footer />
    </div>
  );
}

export default App;
