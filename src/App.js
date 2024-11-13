import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './module/login';
import Student from './module/student';
import Alumni from './module/alumni';
import Convo from './module/convo';
import EventPage from './module/event';
import NewsPage from './module/news';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/student-dashboard" element={<Student />} />
        <Route path="/alumni-dashboard" element={<Alumni />} />
        <Route path="/convo" element={<Convo />} />
        <Route path='/event' element={<EventPage />}/>
        <Route path='/news' element={<NewsPage />}/>
      </Routes>
    </Router>
  );
}

export default App;