// src/Navbar.js
import { Link } from 'react-router-dom';
import '../global.css'

export default function Navbar() {
    return (
        
            <header class="header d-flex justify-content-between align-items-center">
                <div>
                    <h2 className="logoA">Shoaib <span class="logo">Ali</span></h2>
                </div>
                <nav className="navbar" id='navbar'>
                    <ul class="list-inline">
                        <li className="list-inline-item"><Link to="/">Home</Link></li>
                        <li className="list-inline-item"><Link to="/about">About</Link></li>
                        <li className="list-inline-item"><Link to="/projects">Projects</Link></li>
                        <li className="list-inline-item"><Link to="/education">Education</Link></li>
                        <li className="list-inline-item"><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </header>
       

    );
}
