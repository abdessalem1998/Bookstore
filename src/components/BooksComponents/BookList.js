import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBook } from '../../redux/books/books';
import BookItem from './BookItem';

const BookList = () => {
  const bookArray = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();

  const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
  const APPID = '1bssb58ufarxq1Bmhi6i';

  const fetchData = async () => {
    const response = await fetch(`${URL}${APPID}/books/`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const jsonRespnse = await response.json();
    const formToArray = Object.entries(jsonRespnse);
    const finalArr = formToArray.map(([id, book]) => {
      const [myBook] = book;
      return { ...myBook, id };
    });
    dispatch(fetchBook(finalArr));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>Books list</h2>
      {
        bookArray.map((book) => {
          const { id, title, category } = book;
          return (
            <BookItem
              key={id}
              id={id}
              title={title}
              category={category}
            />
          );
        })
      }
    </div>
  );
};

export default BookList;
