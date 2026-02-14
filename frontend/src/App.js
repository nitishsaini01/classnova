import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router basename="/classnova">
      <div className="App">
        <h1>ClassNova</h1>
        <Routes>
          {/* Routes will be added here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
