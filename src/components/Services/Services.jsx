import React, { useContext } from 'react'
import './Services.css'
import HeartEmoji from '../../images/heartemoji.png'
import Glasses from '../../images/glasses.png'
import Humble from '../../images/humble.png'
import Card from '../Card/Card'
import curriculo from "../../images/Carlos_Eduardo_Lima.pdf"
import { themeContext } from "../../Context";
import { motion } from "framer-motion";


const Services = () => {
    const transition = { duration: 1, type: 'spring' }
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;


    return (
        <div className='services' id='services'>


            {/* lado esquerdo */}
            <div className="awesome">
                <span style={{ color: darkMode ? "white" : "" }}>Minhas</span>
                <span>Tecnologias</span>
                <spane style={{ color: darkMode ? "white" : "" }}>Apesar do meu foco em Front-End, tenho experiência e estudado diversas outras tecnologias. O estudo é constante.
                </spane>
                <a href={curriculo} download>
                    <button className="button s-button">Download CV</button>
                </a>
                <div className="blur s-blur1" style={{ background: '#ABF1FF94' }}></div>
            </div>


            {/* lado direito */}
            <div className="cards">

                <motion.div
                    initial={{ left: '25rem' }}
                    whileInView={{ left: '14rem' }}
                    transition={transition}
                    style={{ left: '14rem' }}>
                    <Card
                        emoji={HeartEmoji}
                        heading={'Front-End'}
                        detail={'HTML5, CSS3, Javascript, React.js, Next.js, Typescript'} />
                </motion.div>

                <motion.div
                    initial={{ left: "-11rem", top: "12rem" }}
                    whileInView={{ left: "-4rem" }}
                    transition={transition}
                    style={{ top: '12rem', left: '-4rem' }}>
                    <Card
                        emoji={Glasses}
                        heading={'Back-End'}
                        detail={'Node.js, Prisma, PostgreSQL, MongoDB, Docker'} />
                </motion.div>

                <motion.div
                    initial={{ top: "19rem", left: "25rem" }}
                    whileInView={{ left: "12rem" }}
                    transition={transition}
                    style={{ top: '19rem', left: '12rem' }}>
                    <Card
                        emoji={Humble}
                        heading={'Outros'}
                        detail={'Jest, Testing-Library, Context-Api, Styled-Components, SASS, Tailwind'} />
                </motion.div>

                <div className="blur s-blur2" style={{ background: 'var(--purple)' }}></div>

            </div>
        </div>
    )
}

export default Services



