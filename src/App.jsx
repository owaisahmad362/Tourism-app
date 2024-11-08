// App.js

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Home from './Components/Home';
import Hotel from './Components/Hotel';
import About from './Components/About';
import Gallery from './Components/Gallery';
import News from './Components/News';
import Contact from './Components/Contact';
import Welcome from './Components/Welcome';
import Experience from './Components/Experience';
import Management from './Components/Management';
import RecentBlog from './Components/RecentBlog';
import Customers from './Components/Customers';
import Destination from './Components/Destination';
import Footer from './Components/Footer';
import Icons from './Components/Icons';
import Family from './Components/Family';
import Presidential from './Components/Presidential';
import MoreFeature from './Components/MoreFeature';
import Address from './Components/Address';
import Blog from './Components/Blog';
import Images from './Components/Images';
import Team from './Components/Team';

function App() {
  return (
    <Router>
      
      <Routes>
        {/* Home page route accessible from both "/" and "/home" */}
        <Route 
          path="/" 
          element={
            <>
              <Home />
              <Welcome />
              <Experience />
              <Management />
              <RecentBlog />
              <Customers />
              <Destination />
              <Footer />
            </>
          } 
        />
        <Route 
          path="/home" 
          element={
            <>
              <Home />
              <Welcome />
              <Experience />
              <Management />
              <RecentBlog />
              <Customers />
              <Destination />
              <Footer />
            </>
          } 
        />
        
        {/* Other page routes */}
        <Route path="/hotels" element={
          <><Hotel />
          <Icons />
          <Family />
          <Presidential />
          <Management />
          <MoreFeature />
          <Footer />
          
          </>
        } />
        <Route path="/about-us" element={
          <>
          <About />
          <Family />
          <Management />
          <Team />
          <Footer />
          </>
        } />
        <Route path="/gallery" element={
          <>
          <Gallery />
          <Images />
          <Footer />
          </>
        } />
        <Route path="/news" element={
          <>
          <News />
          <Blog />
          <Footer />
          </>
        } />
        <Route path="/contact" element={
          <><Contact />
          <Address />
          <Customers />
          <Footer />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
