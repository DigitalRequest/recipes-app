import React from 'react';
import ReactDOM from 'react-dom/client';

import Navbar from './Components/Navbar';
import Main from './Components/Main';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navbar />
    <Main />
  </React.StrictMode>,
)
