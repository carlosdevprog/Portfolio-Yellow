import React from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'
import Toggle from './../Toggle/Toggle';

const Navbar = () => {
    return (
        <div className='n-wrapper'>
            <div className="n-left">
                <div className="n-name">Carlos</div>
                
                <Toggle/>

            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul>
                        <li>Home</li>
                        <li to='/services'>Services</li>
                        <li>Experience</li>
                        <li>Protfolio</li>
                        <li>Testimonial</li>
                    </ul>
                </div>

                <Link to="contact" smooth={true} spy={true}>
                <button className="button n-button">
                    Contato
                </button>
                </Link>
                
            </div>
        </div>
    )
}

export default Navbar