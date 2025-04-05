import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ChapterPage() {
  const { id, chapterIndex } = useParams();
  const [book, setBook] = useState(null);
  const [chapter, setChapter] = useState(null);
  const [bgColor, setBgColor] = useState('white');
  const [textSize, setTextSize] = useState('text-base');

  useEffect(() => {
    fetch('/books.json')
      .then(response => response.json())
      .then(data => {
        const bookData = data.find(b => b.id === id);
        setBook(bookData);
        setChapter(bookData.chapters[chapterIndex]);
      });
  }, [id, chapterIndex]);

  if (!chapter) return <div>Loading...</div>;

  return (
    <div style={{ backgroundColor: bgColor }} className={`p-4 ${textSize}`}>
      <h1 className="text-2xl font-bold mb-2">{chapter.title}</h1>
      <div>{chapter.text}</div>

      <div className="mt-4">
        <h3 className="font-semibold">Settings</h3>
        <div>
          <label>Background:</label>
          <select onChange={e => setBgColor(e.target.value)} value={bgColor}>
            <option value="white">White</option>
            <option value="#f0f0f0">Gray</option>
            <option value="#1a1a1a">Dark</option>
          </select>
        </div>
        <div>
          <label>Text Size:</label>
          <select onChange={e => setTextSize(e.target.value)} value={textSize}>
            <option value="text-sm">Small</option>
            <option value="text-base">Medium</option>
            <option value="text-lg">Large</option>
            <option value="text-xl">Extra Large</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default ChapterPage;
