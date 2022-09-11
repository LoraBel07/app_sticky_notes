import { createContext, useState } from 'react';
import './App.css';
import Btnback from './Btnback';
import { StickyNotes } from './StickyNotes';

export const ThemeContext = createContext("light");



function App() {
  const [ theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
    <div className="app" id={theme}>         
      <StickyNotes />
      <Btnback />  
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
