import React from 'react';
import Book from './Book';
import '../styles/BookStack.css';
import { calcColorFromTitle } from '../utils/calcColorFromTitle';

const BookStack = ({ data }: props) => (
  <div className='bookstack' style={{ height: `${data.length*100}px`}}>
    {data.map((book, i) => 
      <Book key={i} order={i} title={book.title} bookColor={calcColorFromTitle(book.title)} />
    )}
  </div>
);

export default BookStack;