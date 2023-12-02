import React, {useContext} from 'react'
import './Experience.css'
import { themeContext } from "../../Context";

const Experience = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className='experience'>
            <div className='achievement'>
                <div className='circle'>1+</div>
                <span style={{ color: darkMode ? "white" : "" }}>ano</span>
                <span>Experiência</span>
            </div>

            <div className='achievement'>
            <div className='circle'>10+</div>
                <span style={{ color: darkMode ? "white" : "" }}>projetos</span>
                <span>Realizados</span>
            </div>

            <div className='achievement'>
            <div className='circle'>2+</div>
                <span style={{ color: darkMode ? "white" : "" }}>canecas de</span>
                <span>Café/dia</span>
            </div>

        </div>
    )
}

export default Experience