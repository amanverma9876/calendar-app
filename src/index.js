
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { EventProvider } from './context/EventContext';
import ErrorBoundary from './components/ErrorBoundary';
import GlobalStyle from './styles/GlobalStyle';

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <EventProvider>
        <GlobalStyle />
        <App />
      </EventProvider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);
