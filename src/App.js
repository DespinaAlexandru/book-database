import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookList from './BookList';
import BookDetail from './BookDetail';
import ChapterPage from './ChapterPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/book/:id" element={<BookDetail />} />
        <Route path="/book/:id/chapter/:chapterIndex" element={<ChapterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
