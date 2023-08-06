import React, { useContext } from 'react'
import './Services.css'
import HeartEmoji from '../../images/heartemoji.png'
import Glasses from '../../images/glasses.png'
import Humble from '../../images/humble.png'
import Card from '../Card/Card'
import curriculo from "../../images/curriculo-carlos-lima.pdf"
import { themeContext } from "../../Context";


const Services = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;


    return (
        <div className='services' id='services'>


            {/* lado esquerdo */}
            <div className="awesome">
            <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
                <span>Services</span>
                <spane style={{ color: darkMode ? "white" : "" }}>Lorem ipsum dolor iisci illo dot quaerat ipsam os do maiisi <br />
                    ispum is simpleey dumy text of printing.
                </spane>
                <a href={curriculo} download>
                    <button className="button s-button">Download CV</button>
                </a>
                <div className="blur s-blur1" style={{ background: '#ABF1FF94' }}></div>
            </div>


            {/* lado direito */}
            <div className="cards">

                <div style={{ left: '14rem' }}>
                    <Card
                        emoji={HeartEmoji}
                        heading={'Front-End'}
                        detail={'HTML5, CSS3, Javascript, React.js, Next.js, Typescript'} />
                </div>

                <div style={{ top: '12rem', left: '-4rem' }}>
                    <Card
                        emoji={Glasses}
                        heading={'Back-End'}
                        detail={'Node.js, Prisma, PostgreSQL, MongoDB, Docker'} />
                </div>

                <div style={{ top: '19rem', left: '12rem' }}>
                    <Card
                        emoji={Humble}
                        heading={'Outros'}
                        detail={'Jest, Testing-Library, Context-Api, Styled-Components, SASS, Tailwind'} />
                </div>

                <div className="blur s-blur2" style={{ background: 'var(--purple)' }}></div>

            </div>
        </div>
    )
}

export default Services



