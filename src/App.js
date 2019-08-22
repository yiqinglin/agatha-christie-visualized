import React, { useState, useEffect } from 'react';
import SideBar from './components/SideBar';
import './App.css';

function App() {
  const [showSideBar, setShowSideBar] = useState(false);
  const updateSideBar = (newValue) => {
    setShowSideBar(newValue);
  }
  const handlePositionChange = (props) => {
    console.log(props)
  }

  useEffect(() => {
  })

  return (
    <div className="App">
      <header className="App-header">
        <h3 className="project-title">Agatha Visualized</h3>
        <p className="project-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </header>
      <div className="App-body">
        <SideBar show={showSideBar} />
        <img src="./book_stacks.png" alt="a stack of books" className="placeholder-img"/>
      </div>
      <footer className="App-footer">Just another line of text.</footer>
    </div>
  );
}

export default App;
