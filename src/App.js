import './App.css';
import {
	Routes,
	Route,
} from 'react-router-dom';

import HomePage from './MainComponents/HomePage';
import Mentors from './MainComponents/Mentors';
import AboutUs from './MainComponents/AboutUs';
import ContactUs from './MainComponents/ContactUs';



function App() {
  return (
    <Routes>
      <Route exact path ='/' element={<HomePage/>}></Route>
      <Route exact path='/aboutUs' element={<AboutUs/>}></Route>
      <Route exact path='/contactUs' element={<ContactUs/>}></Route>
      <Route exact path='/mentors' element={<Mentors/>}></Route>
    </Routes>
  );
}

export default App;
