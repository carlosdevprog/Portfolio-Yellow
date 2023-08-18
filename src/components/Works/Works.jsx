import React, { useContext } from 'react'
import './Works.css'
import next from '../../images/next.png'
import js from '../../images/javascript.png'
import typescript from '../../images/typescript.png'
import react from '../../images/react.png'
import jest from '../../images/jest.png'
import { Link } from 'react-scroll'
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Works = () => {

    const transiion= { duration: 3.5, type: "spring" }
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className='works'>
            <div className="awesome">
                <span style={{ color: darkMode ? "white" : "" }}>Formação &</span>
                <span>Soft-Skills</span>
                <spane style={{ fontSize: '20px', color: darkMode ? "white" : "" }}>
                    • Graduação Engenharia de Software - ( em andamento ) <br />
                    • Dev Club - Curso de Desenvolvimento Web Full Stack <br />
                    • Dev em Dobro - Curso de Desenvolvimento Web Front-End <br />
                    • Alura - Cursos Online de Tecnologia <br /> <br />
                    😉 Comunicação verbal e escrita <br />
                    😏 Adaptabilidade <br />
                    🤩 Criatividade <br />
                    🤔 Organização  <br />
                    🫡 Trabalho em equipe <br />
                    🤓 Aprendizado rápido <br />

                </spane>

                <Link to="contact" smooth={true} spy={true}>
                    <button className="button s-button">Contato</button>
                </Link>

                <div className="blur s-blur1" style={{ background: '#ABF1FF94' }}></div>
            </div>

            <div className='w-right'>
                <motion.div
                initial={{ rotate: 45 }}
                whileInView={{ rotate: 0 }}
                viewport={{ margin: "-40px" }}
                transition={transiion}
                className='w-mainCircle'>
                    <div className='w-secCircle'>
                        <img src={react} alt="react icon" />
                    </div>
                    <div className='w-secCircle'>
                        <img src={next} alt="next icon" />
                    </div>
                    <div className='w-secCircle'>
                        <img src={js} alt="javascript icon" />
                    </div>
                    <div className='w-secCircle'>
                        <img src={typescript} alt="next icon" />
                    </div>
                    <div className='w-secCircle'>
                        <img src={jest} alt="jest icon" />
                    </div>
                </motion.div>

                <div className='w-backCircle blueCircle'></div>
                <div className='w-backCircle yellowCircle'></div>

            </div>
        </div>
    )
}

export default Works