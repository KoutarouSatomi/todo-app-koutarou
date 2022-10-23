import React from 'react';
// import { Toaster } from 'react-hot-toast';
// import AppContent from './components/AppContent';
// import AppHeader from './components/AppHeader';
// // import PageTItle from './components/PageTItle';
// import styles from './styles/modules/app.module.scss';
// import './styles/css/app.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Sidebar from './menu/Sidebar.js';
import About from './menu/About.js';
import Comment from './menu/comment.js';
import DashBoard from './menu/Dashboard.js';
import './styles/css/sidebar.css';
import Todos from './menu/Todos.js';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/about" element={<About />} />
            <Route path="/comment" element={<Comment />} />
            <Route path="/todos" element={<Todos />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </div>
  );
}

export default App;
