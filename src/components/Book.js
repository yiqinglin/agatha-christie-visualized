import React, { useState } from 'react';
import tinycolor from 'tinycolor2';
import cx from 'classnames';
import injectSheet from 'react-jss';

const Book = ({ title, bookColor, order, classes : c }: props) => {
  const [ randomOffset ] = useState(Math.floor(Math.random() * 100));

  return (
    <div
      className={c.book}
      style={{ left: `${randomOffset}px` }}
    > 
      <div className={c.spine} style={{backgroundColor: bookColor}}>{title}</div>
      <div className={c.backbone} style={{backgroundColor: tinycolor(bookColor).lighten(10)}} />
      <div className={c.pages}>
        <div className={cx(c.cover, c.frontCover)} style={{backgroundColor: tinycolor(bookColor).lighten(10)}}/>
        <div className={c.bookblock}/>
        <div className={c.cover} style={{backgroundColor: tinycolor(bookColor).lighten(10)}} />
      </div>
    </div>
  );
}

const styles = {
  book: {
    width: '360px',
    height: '70px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    cursor: 'pointer',
    transition: 'transform 0.25s ease-in-out',
    position: 'absolute',
    zIndex: '2',
    right: '0',
    marginLeft: 'auto',
    marginRight: 'auto',
    top: props => `${props.order*70}px`,
    '&:hover': {
      transform: 'translateX(50px)'
    }
  },
  spine: {
    width: '60%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '3px 0 0 3px'
  },
  backbone: {
    width: '3%',
    height: '100%',
    backgroundColor: 'hsl(17, 18%, 58%)'
  },
  pages: {
    width: '37%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  },
  cover: {
    width: '100%',
    height: '10%',
    backgroundColor: 'hsl(17, 18%, 58%)'
  },
  frontCover: {
    boxShadow: '0px 6px 0px 0px rgba(0, 0, 0, 0.11)',
    zIndex: '2'
  },
  bookblock: {
    width: '92%',
    height: '80%',
    background: 'repeating-linear-gradient(to bottom, hsl(22, 11%, 94%), hsl(22, 11%, 94%) 10px, hsl(22, 11%, 90%) 10px, hsl(22, 11%, 90%) 12px)'
  }
};

export default injectSheet(styles)(Book);