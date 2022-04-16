import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Carousel from './components/carousel';
import Header from './components/header';
import Contact from './components/contact';

function App() {
  return (
    <div>
      <Header/>

      <Routes>
        <Route exact path='/' element={<Carousel/>}/>
        <Route path='/contact' element={<Contact/>}/>
        {/* <Route path='/blog' element={<Writing/>}/>
        <Route path='/projects' element={<ProjectsAll/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/resume' element={<Resume/>}/> */}
      </Routes>
   </div>
  );
}

export default App;
