import React, { useState, useEffect, createRef } from 'react';
import SideBar from './components/SideBar';
import './App.css';
import { truncate } from 'fs';

function App() {
  const [showSideBar, setShowSideBar] = useState(false);
  const ref = createRef();
  
  var viewportHeight;

  const updateSideBar = (newValue) => {
    setShowSideBar(newValue);
  };
  const handleScroll = () => {
    const bookStacksScrollPos = ref.current.getBoundingClientRect().top;
    const viewportCenter = viewportHeight / 2;

    if (bookStacksScrollPos <= viewportCenter) {
      setShowSideBar(true)
    } else {
      setShowSideBar(false)
    }
  };
  const updateViewportHeight = () => {
    viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updateViewportHeight);
    updateViewportHeight();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateViewportHeight);
  }
  })

  return (
    <div className="App">
      <header className="App-header">
        <h3 className="project-title">Agatha Visualized</h3>
        <p className="project-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </header>
      <div className="App-body">
        <SideBar show={showSideBar} />
        <SideBar right show={showSideBar} />
        <img ref={ref} src="./book_stacks.png" alt="a stack of books" className="placeholder-img"/>
      </div>
      <footer className="App-footer">Just another line of text.</footer>
    </div>
  );
}

export default App;
