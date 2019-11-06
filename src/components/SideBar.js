import React from 'react';
import cx from 'classnames';
import injectSheet from 'react-jss';

function SideBar({ show, classes: c, children }: props) {
  return (
    <div className={cx(c.sidebar, show && c.show)}>
      {children}
    </div>
  );
}

const styles = theme => ({
  sidebar: {
    position: 'fixed',
    height: '100vh',
    width: '0',
    backgroundColor: theme.colorPrimary,
    color: theme.colorText,
    top: '0',
    bottom: '0',
    right: '0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'width 0.25s ease-in-out',
    overflow: 'hidden',
    zIndex: '5',
    overflowY: 'scroll'
  },
  show: {
    width: '250px'
  },
  right: {
    left: '0',
    right: 'auto'
  }
});

export default injectSheet(styles)(SideBar);