import React from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'
import Toggle from './../Toggle/Toggle';

const Navbar = () => {
    return (
        <div className='n-wrapper'>
            <div className="n-left">
                <div className="n-name">Carlos</div>

                <Toggle />

            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul>
                        <li>
                            <Link style={{ color: 'black' }} activeClass="active" to="Navbar" spy={true} smooth={true}>
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link style={{ color: 'black' }} to="services" spy={true} smooth={true}>
                                Services
                            </Link>
                        </li>

                        <li>
                            <Link style={{ color: 'black' }} to="works" spy={true} smooth={true}>
                                Experience
                            </Link>
                        </li>

                        <li>
                            <Link style={{ color: 'black' }} to="portfolio" spy={true} smooth={true}>
                                Portfólio
                            </Link>
                        </li>

                        <li>
                            <Link style={{ color: 'black' }} to="testimonial" spy={true} smooth={true}>
                                Testimonial
                            </Link>
                        </li>
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