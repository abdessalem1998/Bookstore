import React, { useState } from 'react';

const AddBook = () => {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  return (
    <div>
      <h2>Add New Book</h2>
      <form className="form">
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
