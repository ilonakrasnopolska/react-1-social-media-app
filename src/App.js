import React from 'react';
import './App.css';
import Header from "./modules/components/Header/Header";
import Sidebar from "./modules/components/Sidebar/Sidebar";
import Footer from "./modules/components/Footer/Footer";
import Main from "./modules/components/Main/Main";

const App = (props) => {
  return (
    <div className="app-container">
      <Header />
      <Sidebar sidebar={props.state.sideBar} />
      <Main state={props.state} />
      <Footer />
    </div>
   );
}

export default App;
