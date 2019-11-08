import React, { useState, useEffect, useRef } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import injectSheet from 'react-jss';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SideBar from './SideBar';
import BookStack from './BookStack';

function Main({ filteredData, classes: c }: props) {
  const stackRef = useRef(null);
  const [showSideBar, setShowSideBar] = useState(false);
  const [viewportHeight, setViewportHeight] = useState(0);

  const handleScroll = () => {
    const bookStacksScrollPos = stackRef.current.getBoundingClientRect().top;
    const viewportCenter = viewportHeight / 2;

    if (bookStacksScrollPos <= viewportCenter) {
      setShowSideBar(true);
    } else {
      setShowSideBar(false);
    }
  }

  const updateViewportHeight = () => {
    setViewportHeight(Math.max(document.documentElement.clientHeight, window.innerHeight || 0));
  }
  
  useEffect(() => {
    updateViewportHeight();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updateViewportHeight);

    return function cleanup() {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateViewportHeight);
    }
  })

  return (
    <div className={c.container}>
      <header className={c.header}>
        <a className={c.aboutLink} href="/">about the project</a>
        <IconButton aria-label='menu' className={c.menuBtn} onClick={() => setShowSideBar(true)}>
          <MenuIcon fontSize='small'/>
        </IconButton>
      </header>
      <div className={c.intro}>
        <h3 className={c.projectTitle}>Agatha Christie Visualized</h3>
        <p className={c.projectDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div className={c.appBody}>
        <SideBar show={showSideBar}/>
        <div className={c.stackContainer} ref={stackRef}>
          <BookStack data={filteredData} />
        </div>
      </div>
      <Controller>
        <Scene duration={1000} triggerHook="onLeave">
          {progress => (
            <Timeline totalProgress={progress} paused wrapper={<div className={c.wrapper} />}>
              <Timeline
                target={
                  <div className={c.cheveronPattern}/>
                }
              >
                <Tween
                  from={{ opacity: 1, y: 0 }}
                  to={{ opacity: 0, y: '200%' }}
                />
              </Timeline>
            </Timeline>
          )}
        </Scene>
      </Controller>
      <div className={c.cheveronPattern}/>
      <footer className={c.footer}>Just another line of text.</footer>
    </div>
  );
}

const styles = theme => ({
  container: {
    textAlign: 'center',
    backgroundColor: theme.colorBackground,
    color: theme.colorWhite,
    position: 'relative'
  },
  wrapper: {
    width: '100vw',
    maxWidth: '100%',
    height: '100vh',
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    pointerEvents: 'none'
  },
  cheveronPattern: {
    background: 'url("/assets/cheveron_pattern.png") center bottom repeat-x',
    backgroundSize: 'contain',
    maxWidth: '100%',
    width: '100vw',
    height: '50vh',
    position: 'absolute',
    bottom: '0'
  },
  header: {
    height: '100px',
    maxWidth: '100%',
    width: '100vw',
    boxSizing: 'border-box',
    padding: '25px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  aboutLink: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    cursor: 'pointer',
    textDecoration: 'none',
    color: theme.colorText,
    transition: 'all .25s ease-in-out',
    '&:hover': {
      color: theme.colorPrimary
    }
  },
  menuBtn: {
    backgroundColor: `${theme.colorPrimary} !important`,
    color: `${theme.colorText} !important`
  },
  intro: {
    minHeight: '50vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.colorText
  },
  projectTitle: {
    fontSize: 'calc(10px + 2vmin)'
  },
  projectDesc: {
    maxWidth: '500px',
    '&:after': {
      backgroundColor: theme.colorGrey,
      boxSizing: 'border-box',
      content: '""',
      display: 'block',
      height: '200px',
      margin: '30px auto',
      width: '1px'
    }
  },
  appBody: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    minWidth: '1024px',
    paddingBottom: '200px'
  },
  stackContainer: {
    width: '100%'
  },
  footer: {
    paddingTop: '20px',
    paddingBottom: '20px'
  }
});

export default injectSheet(styles)(Main);