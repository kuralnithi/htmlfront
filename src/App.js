import './App.css';
import { useState } from 'react';
import TextEditor from './TextEditor';

function App() {
  const [value,setValue] =useState('')
  const editorStyles = {
    border: 'none',
    height: "60vh",
    width : "80vw",
    backgroundColor : "#fff",
  };
  return (
    <div className="App">
<TextEditor/>
    </div>
  );
}

export default App;
