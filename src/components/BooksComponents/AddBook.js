/* eslint-disable */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/books';

const AddBook = () => {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  return (
    <div>
      <h2>Add New Book</h2>
      <form className="form">
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" required />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
