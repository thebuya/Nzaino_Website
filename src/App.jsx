import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';


import Home from './Pages/home/Home';
import Destinations from './Pages/destinations/Destinations';
import About from './Pages/aboutus/About';
import Car from './Pages/cars/UgandaCarHire';
import Navbar from './Components/Navbar';
import Packages from './Pages/packages/Packages';
import Blog from './Pages/blog/Blog';
import Footer from './Components/Footer';
import BackToTopButton from './Components/BackToTopButton';
import WhatsAppButton from './Components/WhatsappButton';
import Kenyan8Places from './Pages/blog/Kenyan8Places';
import BookingForm from './Components/Booking';
import Ugandan8Places from './Pages/blog/Ugandan8Places';
import EA8Places from './Pages/blog/EA8Places';
import Rwanda8Places from './Pages/blog/Rwanda8Places';
import Tanzania8Places from './Pages/blog/Tanzania8Places';
import Zanzibar8Places from './Pages/blog/Zanzibar8Places';
import GorillaTrekTips from './Pages/blog/GorillaTrekTips';
import WesternUganda from './Pages/blog/WesternUganda';
import Romantic8Places from './Pages/blog/Romantic8Places';

function App() {
  return (
    <BrowserRouter className="App">
      <Navbar/>
        <Routes>
                  {/**The Main Pages */}
                  <Route index element={<Home/>}/>
                  <Route path='aboutnzaino' element={<About/>}/>
                  <Route path='eastafricatraveldestinations' element={<Destinations/>}/>
                  <Route path='eastafricatravelpackages' element={<Packages/>}/>
                  <Route path='ugandacarhire' element={<Car/>}/>
                  <Route path='ugandatravelblog' element={<Blog/>}/>

                  {/** The Below are Blogs */}
                  <Route path='kenyan8places' element={<Kenyan8Places/>}/>
                  <Route path='ugandan8places' element={<Ugandan8Places/>}/>
                  <Route path='EA8places' element={<EA8Places/>}/>
                  <Route path='rwanda8places' element={<Rwanda8Places/>}/>
                  <Route path='tanzania8places' element={<Tanzania8Places/>}/>
                  <Route path='zanzibar8places' element={<Zanzibar8Places/>}/>
                  <Route path='gorillatrekkingtips' element={<GorillaTrekTips/>}/>
                  <Route path='westernuganda' element={<WesternUganda/>}/>
                  <Route path='romanticgetaways' element={<Romantic8Places/>}/>
        </Routes>
      <BookingForm/>
      <Footer/>
      <WhatsAppButton/>
      <BackToTopButton/>
    </BrowserRouter>
  );
}

export default App;
