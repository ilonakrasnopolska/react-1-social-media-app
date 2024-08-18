import React from 'react';
import './App.css';
import Header from "./modules/components/Header/Header";
import Sidebar from "./modules/components/Sidebar/Sidebar";
import Footer from "./modules/components/Footer/Footer";
import Profile from "./modules/components/Profile/Profile";

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
