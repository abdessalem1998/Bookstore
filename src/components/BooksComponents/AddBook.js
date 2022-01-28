import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/books';
import addStyle from './AddBook.module.css';

const AddBook = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
  const APPID = '1bssb58ufarxq1Bmhi6i';

  const submitData = async (title, category) => {
    const response = await fetch(`${URL}${APPID}/books/`, {
      method: 'POST',
      body: JSON.stringify({
        item_id: uuidv4(),
        title,
        category,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    return response;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitData(title, category).then((response) => {
      if (response.ok) {
        dispatch(addBook({
          id: uuidv4(), title, category,
        }));
      }
    });
    setTitle('');
    setCategory('');
  };

  return (
    <div className={addStyle.container}>
      <h2 className={addStyle.titleStyle}>Add New Book</h2>
      <form className={addStyle.formStyle} onSubmit={handleSubmit}>
        <input type="text" className={addStyle.inputStyles} value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
        <input type="text" className={addStyle.inputStyles} value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Author" required />
        <button className={addStyle.addbtn} type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
