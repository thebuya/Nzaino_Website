import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';


import Home from './Pages/home/Home';
import Destinations from './Pages/destinations/Destinations';
import About from './Pages/aboutus/About';
import Car from './Pages/cars/Car';
import Navbar from './Components/Navbar';
import Packages from './Pages/packages/Packages';
import Blog from './Pages/blog/Blog';
import Footer from './Components/Footer';
import BackToTopButton from './Components/BackToTopButton';
import WhatsAppButton from './Components/WhatsappButton';

function App() {
  return (
    <BrowserRouter className="App">
      <Navbar/>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='aboutus' element={<About/>}/>
          <Route path='destinations' element={<Destinations/>}/>
          <Route path='packages' element={<Packages/>}/>
          <Route path='car' element={<Car/>}/>
          <Route path='blog' element={<Blog/>}/>
        </Routes>
      <Footer/>
    
      <WhatsAppButton/>
      <BackToTopButton/>
    </BrowserRouter>
  );
}

export default App;
