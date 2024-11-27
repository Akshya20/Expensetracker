import logo from './logo.svg';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home1 from "../src/Pages/Home/Home";
import MyBookings from "../src/Pages/Home/Booking/Booking";
import Search from './Pages/Home/Searchpage/Search1';


function App() {
  return (
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<Home1 />} />
        <Route path="my-bookings" element={<MyBookings />} />
        <Route path="search" element={<Search />} />
      </Routes>
    
  );
}

export default App;
