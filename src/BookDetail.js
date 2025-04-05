import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch('/books.json')
      .then(response => response.json())
      .then(data => setBook(data.find(b => b.id === id)));
  }, [id]);

  if (!book) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <img src={book.image} alt={book.title} className="rounded-xl w-48 mb-4" />
      <h1 className="text-2xl font-bold">{book.title}</h1>
      <p className="text-md text-gray-600">by {book.author}</p>
      <p className="mt-4">{book.description}</p>
      <h3 className="text-xl font-semibold mt-6">Chapters</h3>
      <ul className="list-disc list-inside">
        {book.chapters.map((chapter, index) => (
          <li key={index}>
            <Link to={`/book/${book.id}/chapter/${index}`} className="text-blue-600 underline">
              {chapter.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookDetail;
