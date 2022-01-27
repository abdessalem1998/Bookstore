import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';

const BookItem = (book) => {
  const dispatch = useDispatch();
  const { id, title, category } = book;
  const removeHandler = () => {
    dispatch(removeBook(id));
  };
  return (
    <div>
      <h3>{title}</h3>
      <p>{category}</p>
      <button type="button" onClick={removeHandler}>Delete</button>
    </div>
  );
};

export default BookItem;
