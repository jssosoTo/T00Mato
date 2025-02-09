import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './main.css';
import './tailwind.css';
// import '@ant-design/flowchart/dist/index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppContainer from './components/Context/AppContext/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <AppContainer>
        <App />
      </AppContainer>
    </Router>
  </React.StrictMode>
);
