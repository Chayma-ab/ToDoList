//import react from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from '../src/components/Layouts/Navbar';
import Footer from '../src/components/Layouts/Footer';
import Todos from '../src/components/Todos';

function App() {
  return (
    <div>
      <Navbar />

      <div className='container'>
        <Todos />
      </div>
      

      <Footer />
      
    </div>
  );
}

export default App;
