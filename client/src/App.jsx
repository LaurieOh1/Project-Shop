import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import Blog from './pages/Blog';
import Layout from './pages/Layout';

function App() {
  return <>
 
  <Routes>
    <Route path="/" element={<Layout />} >
    <Route index element={<Home />} /> 
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="*" element={<NoPage />} />
    </Route>
  </Routes>
  

  </>;
}

export default App;
