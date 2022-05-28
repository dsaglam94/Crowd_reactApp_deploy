import Navbar from "./components/Navbar";
import {Routes, Route} from 'react-router-dom'
import About from './pages/About'
import GetStarted from "./pages/GetStarted";
import Discover from "./pages/Discover";
import Home from "./pages/Home";
import Hero from "./components/Hero";

function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/discover' element={<Discover />} />
      <Route path='/get-started' element={<GetStarted />} />
    </Routes>
    </>
  );
}

export default App;
