import React, { useState, useEffect, createRef } from 'react';
import SideBar from './components/SideBar';
import BookStack from './components/BookStack';
import data from './data';
import injectSheet from 'react-jss';

function App({ classes: c }: props) {
  const [showSideBar, setShowSideBar] = useState(false);
  const ref = createRef();
  
  var viewportHeight;

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
    <div className={c.container}>
      <header className={c.header}>
        <h3 className={c.projectTitle}>Agatha Christie Visualized</h3>
        <p className={c.projectDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </header>
      <div className={c.appBody}>
        <SideBar show={showSideBar} />
        <SideBar right show={showSideBar} />
        <div className={c.stackContainer} ref={ref}>
          <BookStack data={data} />
        </div>
      </div>
      <footer className={c.footer}>Just another line of text.</footer>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    backgroundColor: '#282c34',
    color: 'white'
  },
  header: {
    minHeight: '50vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  projectTitle: {
    fontSize: 'calc(10px + 2vmin)'
  },
  projectDesc: {
    maxWidth: '720px'
  },
  appBody: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    minWidth: '1024px',
    paddingTop: '200px',
    paddingBottom: '200px'
  },
  stackContainer: {
    width: '100%'
  },
  footer: {
    paddingTop: '20px',
    paddingBottom: '20px'

  }
};

export default injectSheet(styles)(App);
