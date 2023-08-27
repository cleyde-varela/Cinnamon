import './App.css'

// 2 - Structure
import { Outlet } from "react-router-dom";

// 4 - Navbar & Footer
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {

  return (
    <div className='App'>
    <Navbar />
    <Outlet />
    <Footer />
  </div>
  )
}

export default App;
