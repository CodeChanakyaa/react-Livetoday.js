import './App.css';

import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Newspage from './components/Newspage';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Navbar />

          <Routes>
            <Route exact path="/" element={<Newspage key="eygeneral" pageSize={16} />} />
            <Route exact path="/science" element={<Newspage key="science" pageSize={16} country="in" category="Science" />} />
            <Route exact path="/sports" element={<Newspage key="sports" pageSize={16} country="in" category="Sports" />} />
            <Route exact path="/health" element={<Newspage key="health" pageSize={16} country="in" category="Health" />} />
            <Route exact path="/business" element={<Newspage key="business" pageSize={16} country="in" category="Business" />} />
            <Route exact path="/all" element={<Newspage key="all" pageSize={16} country="in" category="general" />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
