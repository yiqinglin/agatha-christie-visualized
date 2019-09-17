import React from 'react';
import tinycolor from 'tinycolor2';
import '../styles/Book.css';

const Book = ({ title, bookColor, order }: props) => (
  <div className={`book book-${order}`} style={{top: `${order*100}px`}}> 
    <div className='book-spine' style={{backgroundColor: bookColor}}>{title}</div>
    <div className='book-backbone' style={{backgroundColor: tinycolor(bookColor).lighten(10)}} />
    <div className='book-pages'>
      <div className='book-cover book-cover--top' style={{backgroundColor: tinycolor(bookColor).lighten(10)}}/>
      <div className='book-block'/>
      <div className='book-cover' style={{backgroundColor: tinycolor(bookColor).lighten(10)}} />
    </div>
  </div>
);

export default Book;