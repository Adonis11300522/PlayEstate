import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from './pages/Landing/landing'
import {Membership} from './pages/Membership/mebership'
import {ComingSoon} from './pages/ComingSoon/comingsoon'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/comingsoon" element={<ComingSoon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
