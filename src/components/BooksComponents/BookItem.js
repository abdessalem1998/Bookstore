import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';

const BookItem = (book) => {
  const dispatch = useDispatch();
  const { id, title, category } = book;

  const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
  const APPID = '1bssb58ufarxq1Bmhi6i';

  const deleteData = async () => {
    const response = await fetch(`${URL}${APPID}/books/${id}/`, {
      method: 'Delete',
    });
    return response;
  };

  const removeHandler = () => {
    deleteData().then((response) => {
      if (response.ok) {
        dispatch(removeBook(id));
      }
    });
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
