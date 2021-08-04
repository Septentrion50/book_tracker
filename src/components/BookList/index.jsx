import React from 'react';
import Book from 'components/Book';

const BookList = ({ books }) => {
  return (
    <ul className="row" style={{ listStyle: 'none' }}>
      {books.map((book, index) => <Book key={index.toString()} book={book} />)}
    </ul>
  );
};

export default BookList;
