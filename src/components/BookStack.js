import React from 'react';
import Book from './Book';
import injectSheet from 'react-jss';
import { calcColorFromTitle } from '../utils/calcColorFromTitle';

const BookStack = ({ data, classes: c }: props) => (
  <div className={c.bookstack} style={{ height: `${data.length*70}px`}}>
    {data.map((book, i) => 
      <Book
        key={i}
        order={i}
        title={book.title}
        bookColor={calcColorFromTitle(book.title)}  
      />
    )}
  </div>
);

const styles = {
  bookstack: {
    position: 'relative'
  }
};

export default injectSheet(styles)(BookStack);