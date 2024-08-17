import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import { EventProvider } from './context/EventContext';
import HomePage from './pages/HomePage';
import EventPage from './pages/EventPage';

function App() {
  return (
    <EventProvider>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/new" element={<EventPage />} />
          <Route path="/event/:id" element={<EventPage />} />
          <Route path="/edit/:id" element={<EventPage />} />
        </Routes>
      </Router>
    </EventProvider>
  );
}

export default App;
