import React from 'react';
import './App.css';
import Header from './Header';
import Navbar from './Navbar';
import BlogList from './BlogList';
import Footer from './Footer';

function App() {
  
  return (
    <div className="App">
      <Header />
      <BlogList />
      <Footer />
    </div>
  );
}

export default App;
