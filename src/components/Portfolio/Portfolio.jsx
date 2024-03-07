import React, { useContext } from 'react'
import './Portfolio.css'
import { themeContext } from "../../Context";
import siteeducacional from '../../images/site_educacional.png'
import caduecommerce from '../../images/caduecommerce.png'
import uolhost from '../../images/uolhost.jpg'
import employees from '../../images/employees.png'
import previsao from '../../images/previsao.png'
import cardapio from '../../images/cardapio.png'
import spotify from '../../images/spotify.png'



const Portfolio = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <>

            <div className='divSpan'>
                <span style={{ color: darkMode ? "white" : "" }}>Projetos Recentes</span>
                <span>Portfólio</span>
            </div>

            {/* <a href="https://github.com/carlosdevprog?tab=repositories" target='_blank' rel='noreferrer'>
                <button className="buttonPortfolio">Códigos</button>
            </a> */}


            <div className='portfolio'>

                <a href="https://www.linkedin.com/feed/update/urn:li:activity:7086660712269250560/" target='_blank' rel='noreferrer'>
                    <img src={caduecommerce} alt="cadu lanches" />
                </a>

                <a href="https://www.linkedin.com/feed/update/urn:li:activity:7133230955133042688/" target='_blank' rel='noreferrer'>
                    <img src={siteeducacional} alt="site educacional" />
                </a>

                <a href="https://www.linkedin.com/feed/update/urn:li:activity:7171338491308584960/">
                    <img src={uolhost} alt="uol host" />
                </a>

                <a href="https://www.linkedin.com/feed/update/urn:li:activity:7171344096547090432/">
                    <img src={cardapio} alt="cardapio digital" />
                </a>

                <a href="https://previsao-do-tempo-js-one.vercel.app/" target='_blank' rel='noreferrer'>
                    <img src={previsao} alt="previsao do tempo" />
                </a>

                <a href="https://www.linkedin.com/feed/update/urn:li:activity:7133256075876741120/" target='_blank' rel='noreferrer'>
                    <img src={employees} alt="employees" />
                </a>

            </div>
        </>
    )
}

export default Portfolio