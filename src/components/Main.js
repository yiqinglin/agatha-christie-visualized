import React, { useState, useEffect, useRef } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import injectSheet from 'react-jss';
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
      </header>
      <div className={c.intro}>
        <h3 className={c.projectTitle}>Agatha Christie Visualized</h3>
        <div className={c.projectDesc}>
          <p>
          Agatha Christie is the world's best known mystery novelist. With her sixty-six detective novels
          and fourteen short story collections, her mystery puzzles has become the source of great delight
          to generations of readers. </p>
          <p> Here we present all her detective novels with filters such as publish date and page
          count, and also more interestingly recurring characters (including but not limited to the
          beloved detectives) and murder methods. Whether of not you are a fan of Christie's, we
          hope this visualization tool provides you new perspectives to see the body of the work
          of the Queen of Mystery. Or better yet, you will be able to find your next great read of
          Chrsitie's here.</p>
          <p><b>Note: </b>this is a work in progress.</p>
        </div>
      </div>
      <div className={c.appBody}>
        <SideBar show={showSideBar}/>
        <div className={c.stackContainer} ref={stackRef}>
          <BookStack data={filteredData} />
          <p className={c.bookCount}>There are <strong className={c.strong}>{filteredData.length}</strong> books in this stack</p>
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
      <footer className={c.footer}>
        <h3 className={c.projectTitle}>Agatha Christie Visualized</h3>
        <div className={c.socialLinks}>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/yiqinglin/" className={c.social}>Linkedin</a>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/yiqinglin/agatha-christie-visualized" className={c.social}>Github</a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/yiqinglin/" className={c.social}>Instagram</a>
        </div>
      </footer>
      <div className={c.cheveronPattern}/>
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
  intro: {
    minHeight: '50vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  projectTitle: {
    fontSize: 'calc(10px + 2vmin)',
    color: theme.colorText
  },
  projectDesc: {
    maxWidth: '500px',
    color: theme.colorText,
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
    minWidth: '1024px'
  },
  stackContainer: {
    width: '100%',
    zIndex: '2'
  },
  bookCount: {
    fontFamily: 'roboto',
    fontSize: '0.8em',
    marginTop: '30px',
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
  strong: {
    fontSize: '1em'
  },
  footer: {
    paddingTop: '20px',
    paddingBottom: '80px',
    zIndex: '2',
    position: 'relative',
    margin: 'auto',
    width: '390px',
  },
  socialLinks: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  social: {
    textDecoration: 'none',
    color: theme.colorText,
    transform: 'all .25s ease-in-out',
    '&:hover': {
      color: theme.colorWhite
    }
  }
});

export default injectSheet(styles)(Main);