import React from 'react';
import { useSelector } from 'react-redux';
import BookItem from './BookItem';

const BookList = () => {
  const bookArray = useSelector((state) => state.booksReducer);

  return (
    <div>
      <h2>Books list</h2>
      {
        bookArray.map((book) => {
          const { id, title, author } = book;
          return (
            <BookItem
              key={id}
              id={id}
              title={title}
              author={author}
            />
          );
        })
      }
    </div>
  );
};

export default BookList;
