import React from 'react';
import BookItem from './BookItem';

const BookList = () => {
  const bookArray = [
    { id: 1, title: 'bookName', author: 'book author' },
    { id: 2, title: 'bookName', author: 'book author' },
  ];

  return (
    <div>
      <h2>Books list</h2>
      {
        bookArray.map((book) => {
          const { id, title, author } = book;
          return (
            <BookItem
              key={id}
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
