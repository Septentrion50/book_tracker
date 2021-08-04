import Button from 'components/Button';
import React from 'react';
import noCover from './No_Cover.jpg'

const Book = ({book}) => {
  let desc = "";
  let bookImg = "";
  let fav = '';
  let read = '';

  if (book.shortDescription){
    desc = book.shortDescription;
  } else {
    desc = "There is no description";
  };

  if (!book.thumbnailUrl) {
    bookImg = noCover;
  } else {
    bookImg = book.thumbnailUrl;
  }

  if (book.isFav){
    fav = 'fav'
  }

  if (book.read){
    read = 'read'
  }

  return (
    <li className={`card ${fav} ${read}`}>
      <div className="buttons">
        <Button newClass="fav" btnText="Favorites" property={book}/>
        <Button newClass="read" btnText="Read" property={book}/>
      </div>
      <img src={bookImg} alt={book.title} />
      <div className="card-body">
        <h2>{book.title}</h2>
        <p>{desc}</p>
      </div>
    </li>
  );
};

export default Book;
