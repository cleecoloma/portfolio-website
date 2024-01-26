'use strict';

import React, { useState } from 'react';

export const ThemeContext = React.createContext();

function ThemeProvider(props) {
  const[isMode, setMode] = useState(true);

  const toggleMode = () => {
    setMode(!isMode);
  };

  return (
    <ThemeContext.Provider
      value={{
        isMode,
        toggleMode,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
