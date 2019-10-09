import React from 'react';
import cx from 'classnames';
import injectSheet from 'react-jss';

function SideBar({ show, right, classes: c, children }: props) {
  return (
    <div className={cx(c.sidebar, show && c.show, right && c.right)}>
      {children}
    </div>
  );
}

const styles = {
  sidebar: {
    position: 'fixed',
    height: '100vh',
    width: '0',
    backgroundColor: '#c0aba5',
    top: '0',
    bottom: '0',
    right: '0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'width 0.25s ease-in-out',
    overflow: 'hidden',
    zIndex: '5'
  },
  show: {
    width: '200px'
  },
  right: {
    left: '0',
    right: 'auto'
  }
}

export default injectSheet(styles)(SideBar);