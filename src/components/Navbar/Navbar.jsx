import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='n-wrapper'>
            <div className="n-left">
                <div className="n-name">Carlos</div>
                <span>togge</span>
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
                <button className="button n-button">
                    Contato
                </button>
            </div>
        </div>
    )
}

export default Navbar