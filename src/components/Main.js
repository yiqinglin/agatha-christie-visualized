import React, { useState, useEffect, useRef } from 'react';
// import { Controller, Scene } from 'react-scrollmagic';
// import { Tween, Timeline } from 'react-gsap';
import injectSheet from 'react-jss';
import SideBar from './SideBar';
import BookStack from './BookStack';
import Filters from './Filters';

function Main({ filteredData, classes: c }: props) {
  const stackRef = useRef(null);
  const patternRef = useRef(null);
  const [showSideBar, setShowSideBar] = useState(false);
  const [viewportHeight, setViewportHeight] = useState(0);
  // const [scrollTop, setScrollTop] = useState(0)

  const handleScroll = () => {
    const bookStacksScrollPos = stackRef.current.getBoundingClientRect().top;
    const viewportCenter = viewportHeight / 2;

    if (bookStacksScrollPos <= viewportCenter) {
      setShowSideBar(true);
    } else {
      setShowSideBar(false);
    }

    window.requestAnimationFrame(handleAnimation);
    // setScrollTop(document.documentElement.scrollTop);
    // let offset = Math.min(viewportHeight/2 + document.documentElement.scrollTop * 1.8, document.body.clientHeight - viewportHeight/2);
    // if (offset > 2 * viewportHeight ) {
    //   offset = document.body.clientHeight - viewportHeight/2;
    // }
    // patternRef.current.style.top = `${offset}px`;
  }
  
  const handleAnimation = () => {
    let offset = window.scrollY * 2.5;
    if (offset > 2 * viewportHeight) {
      offset = document.body.clientHeight - viewportHeight;
    }
    patternRef.current.style.transform = `translate3d(0, ${offset}px, 0)`;
  }

  const updateViewportHeight = () => {
    setViewportHeight(Math.max(document.documentElement.clientHeight, window.innerHeight || 0));
  }
  
  useEffect(() => {
    updateViewportHeight();
    handleAnimation();
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
        <h3 className={c.projectTitle}>Agatha Christie Visualized</h3>
        <p className={c.projectDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </header>
      <div className={c.appBody}>
        <SideBar show={showSideBar}>
          <Filters/>
        </SideBar>
        <div className={c.stackContainer} ref={stackRef}>
          <BookStack data={filteredData} />
        </div>
      </div>
      <div className={c.cheveronPattern} ref={patternRef}/>
      <footer className={c.footer}>Just another line of text.</footer>
      {/* <Controller>
        <Scene duration={1000} triggerHook="onLeave">
          {progress => (
            <Timeline totalProgress={progress} paused>
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
      </Controller> */}
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
  cheveronPattern: {
    background: 'url("/assets/cheveron_pattern.png") center bottom repeat-x',
    backgroundSize: 'contain',
    width: '100%',
    height: '50vh',
    position: 'absolute',
    top: '50vh'
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
});


export default injectSheet(styles)(Main);