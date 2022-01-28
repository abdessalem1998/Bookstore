import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';
import bookStyle from './BookItem.module.css';

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
    <div className={bookStyle.itemContainer}>
      <div className={bookStyle.book}>
        <p>{category}</p>
        <h3>{title}</h3>
        <span>Anonymous</span>
        <div>
          <button type="button">Comments</button>
          <span className={bookStyle.separation} />
          <button onClick={removeHandler} type="button">Remove</button>
          <span className={bookStyle.separation} />
          <button type="button">Edit</button>
        </div>
      </div>
      <div className={bookStyle.progress}>
        <div style={{ width: '4.25rem', height: '4.25rem' }}>
          <CircularProgressbar value={66} styles={buildStyles({ pathColor: '#0290ff' })} />
        </div>
        <div className={bookStyle.progressText}>
          <p>66%</p>
          <span>Completed</span>
        </div>
      </div>
      <span className={bookStyle.separation2} />
      <div className={bookStyle.chapter}>
        <p>CURRENT CHAPTER</p>
        <span>
          Chapter
        </span>
        <div>
          <button className={bookStyle.progressBtn} type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
};

export default BookItem;
