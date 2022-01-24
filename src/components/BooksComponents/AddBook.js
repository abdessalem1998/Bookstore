import React from 'react';

const AddBook = () => (
  <div>
    <h2>Add New Book</h2>
    <form className="form">
      <input type="text" placeholder="Title" />
      <input type="text" placeholder="Categorie" />
      <button type="submit">Add Book</button>
    </form>
  </div>
);

export default AddBook;
