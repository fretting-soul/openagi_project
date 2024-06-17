import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/MainPage';
import BuildStackPage from './pages/BuildStackPage';
import RunStackPage from './pages/RunStackPage';
import StacksPage from './pages/StacksPage';
import StacksDetailPage from './pages/StacksDetailPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/stack-detail" element={<StacksDetailPage/>} />
        <Route path="/build-stack" element={<BuildStackPage/>} />
        <Route path="/run-stack" element={<RunStackPage/>} />
        <Route path="/stacks" element={<StacksPage/>} />
      </Routes>
    </Router>
  );
}

export default App;




