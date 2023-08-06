import React from 'react'
import './Works.css'
import next from '../../images/next.png'
import js from '../../images/javascript.png'
import typescript from '../../images/typescript.png'
import react from '../../images/react.png'
import jest from '../../images/jest.png'

const Works = () => {
    return (
        <div className='works'>
            <div className="awesome">
                <span>Formação &</span>
                <span>Soft-Skills</span>
                <spane style={{fontSize: '20px'}}>
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

                <button className="button s-button">Contato</button>

                <div className="blur s-blur1" style={{ background: '#ABF1FF94' }}></div>
            </div>

            <div className='w-right'>
                <div className='w-mainCircle'>
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
                </div>

                <div className='w-backCircle blueCircle'></div>
                <div className='w-backCircle yellowCircle'></div>

            </div>
        </div>
    )
}

export default Works