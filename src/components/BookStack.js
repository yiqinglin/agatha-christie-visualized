import React from 'react';
import Book from './Book';
import injectSheet from 'react-jss';
import FlipMove from 'react-flip-move';
import { calcColorFromTitle } from '../utils/calcColorFromTitle'; 

const BookStack = ({ data, classes: c }: props) => (
  <div className={c.bookstack} style={{ height: `${data.length*70}px`}}>
    <FlipMove
      staggerDurationBy="30"
      duration={300}
      leaveAnimation={{
        from: {
          transform: ''
        },
        to: {
          transform: 'translateX(-50px)',
          opacity: 0.1
        }
      }}
      enterAnimation={{
        from: {
          transform: 'translateX(50px)',
          opacity: 0.1
        },
        to: {
          transform: '',
          opacity: 1,
        }
      }}
    >
      {data.map((book, i) => 
        <Book
          key={book.title.replace(/ /g, '')}
          order={i}
          title={book.title}
          bookColor={calcColorFromTitle(book.title)}  
        />
      )}
    </FlipMove>
  </div>
);

const styles = {
  bookstack: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
};

export default injectSheet(styles)(BookStack);