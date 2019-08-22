import React from 'react';
import cx from 'classnames';
import '../styles/SideBar.css';

function SideBar({ show, right }: props) {
  return (
    <div className={cx('SideBar', show && 'show', right && 'right')}>
      <div>This is a Side Bar</div>
    </div>
  );
}

export default SideBar;