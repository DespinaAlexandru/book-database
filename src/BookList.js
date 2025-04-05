import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('/books.json')
      .then(response => response.json())
      .then(data => setBooks(data));
  }, []);

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      {books.map(book => (
        <Link key={book.id} to={`/book/${book.id}`} className="rounded-2xl shadow p-4 hover:bg-gray-100">
          <img src={book.image} alt={book.title} className="rounded-xl w-full mb-2" />
          <h2 className="text-xl font-bold">{book.title}</h2>
          <p className="text-sm text-gray-700">by {book.author}</p>
          <p className="text-sm mt-2">{book.description}</p>
        </Link>
      ))}
    </div>
  );
}

export default BookList;
