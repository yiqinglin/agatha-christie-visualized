import React from 'react';
import cx from 'classnames';
import '../styles/SideBar.css';

function SideBar({ show }: props) {
  return (
    <div className={cx('SideBar', show && 'show')}>This is a Side Bar</div>
  );
}

export default SideBar;