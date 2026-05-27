import React, { useState } from 'react';

import Nav from './Component/Nav';
import Routes from './Component/Routes';
import Foot from './Component/Foot';
function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className="dark:bg-gray-900 bg-gray-100 dark:text-gray-200 black min-h-screen">
        <Nav setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
        <Routes />
        <Foot />
      </div>
    </div>
  )
}

export default App
