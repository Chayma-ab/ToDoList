import react from 'react';
//import { Navbar } from 'react-bootstrap';


export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <a className="navbar-brand" herf="#">Study-tn React App</a>
        <ul className="navbar-nav">
            <li className="nav-item active">
                <a className='nav-link' herf="#" to="/">Home </a>
            </li>

            <li className="nav-item">
                <a className='nav-link' herf="#" to="/About">About </a>
            </li>
        </ul>
     
    </nav>
  );
}


