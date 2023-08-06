import React from 'react'
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


const Intro = () => {
    return (
        <div className='intro' id='Intro'>

            <div className="i-left">

                <div className="i-name">
                    <span>Oi, eu sou</span>
                    <span>Carlos Lima</span>
                    <span>Front-End Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex nulla consequatur maiores nihil laudantium enim doloremque magni quisquam exercitationem similique perferendis, quibusdam obcaecati, sed, maxime tempore.</span>
                </div>

                <button className="button i-button">Fale Comigo</button>
                <button className="button i-button">Download CV</button>

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

                <img src={Glassesimoji} alt="emoji" />

                <div style={{top: '-4%', left: '68%'}}>
                    <FloatingDiv image={Crown} text1='Desenvolvedor' text2='Web'/>
                </div>

                <div style={{top: '18rem', left: '0rem'}}>
                <FloatingDiv image={Thumbup} text1='Front-End'/>
                </div>

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