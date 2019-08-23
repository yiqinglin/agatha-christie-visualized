import React from 'react';
import Book from './Book';

const BookStack = ({ data }: props) => (
  <div className='bookstack'>
    {data.map((book, i) => 
      <Book key={i} title={book.title} bookColor={book.cover_color} />
    )}
  </div>
);

export default BookStack;