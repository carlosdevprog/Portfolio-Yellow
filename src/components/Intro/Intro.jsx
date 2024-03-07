import React, { useContext } from "react";
import './Intro.css'
import Github from '../../images/github.png'
import LinkedIn from '../../images/linkedin.png'
import Vector1 from "../../images/Vector1.png";
import Vector2 from "../../images/Vector2.png";
import Boy from "../../images/boy.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import Glassesimoji from "../../images/glassesimoji.png";
import Thumbup from "../../images/thumbup.png";
import Crown from "../../images/crown.png";
import { Link } from 'react-scroll'
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import curriculo from "../../images/Carlos_Eduardo_Lima_CV.pdf"


const Intro = () => {

    const transition = { duration: 2, type: 'spring' }
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className='intro' id='Intro'>

            <div className="i-left">

                <div className="i-name">
                    <span style={{ color: darkMode ? "white" : "" }}>Oi, eu sou</span>
                    <span>Carlos Lima</span>
                    <span style={{ color: darkMode ? "white" : "" }}>Sou um desenvolvedor Fullstack apaixonado por tecnologia e jogos. Estou sempre em busca de mais conhecimento para melhorar os meus projetos e aberto para aprender novas tecnologias. 
</span>
                </div>

                <Link to="contact" smooth={true} spy={true}>
                    <button className="button i-button">Fale Comigo</button>
                </Link>

                <a href={curriculo} download>
                <button className="button i-button">Download CV</button>
                </a>

                <div className="i-icons">
                    <a href="https://github.com/carlosdevprog" rel="noreferrer" target='_blank'>
                        <img src={Github} alt="github icon" />
                    </a>

                    <a href="https://www.linkedin.com/in/carlos-etl/" rel="noreferrer" target='_blank' >
                        <img src={LinkedIn} alt="linkedin icon" />
                    </a>

                </div>

            </div>

            <div className="i-right">

                <img src={Vector1} alt="vetores coloridos" />
                <img src={Vector2} alt="vetores coloridos" />
                <img className='imgboy' src={Boy} alt="minha imagem" />

                <motion.img src={Glassesimoji} alt="emoji"
                    initial={{ left: '-36%' }}
                    whileInView={{ left: '-24%' }}
                    transition={transition} />

                <motion.div
                    initial={{ top: '-4%', left: '74%' }}
                    whileInView={{ left: '68%' }}
                    transition={transition}
                    style={{ top: '-4%', left: '68%' }}
                    className="floating-div">
                    <FloatingDiv image={Crown} text1='Back-End'  />
                </motion.div>

                <motion.div
                initial={{left: '9rem', top: '18rem'}}
                whileInView={{left:'0rem'}}
                transition={transition}
                style={{ top: '18rem', left: '0rem' }}>
                    <FloatingDiv image={Thumbup} text1='Front-End' />
                </motion.div>

                {/* blur divs */}
                <div className="blur"></div>
                <div className="blur" style={{
                    background: '#C1F5FF',
                    top: '17rem',
                    width: '21rem',
                    height: '11rem',
                    left: '-9rem'
                }}></div>

            </div>

        </div>

    )
}

export default Intro