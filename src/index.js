import React from 'react';
import ReactDOM from 'react-dom';
import BookList from 'components/BookList';
import FavButton from 'components/FavButton';
import ReadButton from 'components/ReadButton';
import research from "search";
import 'style.css';

var books = require('./books.json');

const App = () => {
  const [info, setInfo] = React.useState(books.books[0]);
  const [search, setSearch] = React.useState('');

  const searchInBooks = () => {
    setInfo(research(search));
  };

  return (
    <div className="container">
      <header>
        <div className="search-field">
          <FavButton />
          <ReadButton />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <input className="btn btn-fav" type="submit" onClick={searchInBooks} />
        </div>
    </header>
      <BookList books={info} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
