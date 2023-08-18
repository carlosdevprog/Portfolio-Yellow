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
                            <Link style={{ color: '#333543' }} activeClass="active" to="Navbar" spy={true} smooth={true}>
                                Início
                            </Link>
                        </li>

                        <li>
                            <Link style={{ color: '#333543' }} to="services" spy={true} smooth={true}>
                                Tecnologias
                            </Link>
                        </li>

                        <li>
                            <Link style={{ color: '#333543' }} to="portfolio" spy={true} smooth={true}>
                                Projetos
                            </Link>
                        </li>

                        <li>
                            <Link style={{ color: '#333543' }} to="works" spy={true} smooth={true}>
                                Formação
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