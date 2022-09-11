import { createContext, useState } from 'react';
import './App.css';
import { StickyNotes } from './StickyNotes';
import ReactSwitch from 'react-switch';

export const ThemeContext = createContext("light");

function App() {
  const [ theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
    <div className="app" id={theme}> 
      <div className='switch'> 
        <label>{theme === "light" ? "🌙" : "☀️"}</label> 
        <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/>
      </div> 

      <div>
      <StickyNotes /> 
      </div>  
      
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
