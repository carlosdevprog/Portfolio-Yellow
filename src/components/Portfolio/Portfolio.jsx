import React,  { useContext } from 'react'
import './Portfolio.css'
import { themeContext } from "../../Context";
import siteeducacional from '../../images/site_educacional.png'
import pokedex from '../../images/pokedex.png'
import caduecommerce from '../../images/caduecommerce.png'
import todolist from '../../images/ToDoApp.png'
import employees from '../../images/employees.png'
import previsao from '../../images/previsao.png'

import googleauth from '../../images/googleauth.png'
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

            <a href="https://github.com/carlosdevprog?tab=repositories" target='_blank' rel='noreferrer'>
                <button className="buttonPortfolio">Códigos</button>
            </a>
            

            <div className='portfolio'>

                {/* <Swiper spaceBetween={30} slidesPerView={4} className='portfolio-slider'>

                <SwiperSlide>
                    <img src={carhub} alt="car show" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={supertrips} alt="super trips" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={cadulanches} alt="cadu lanches" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={spotify} alt="spotify" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={googleauth} alt="google auth" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={todolist} alt="todo list" />
                </SwiperSlide>
            </Swiper> */}

                <a href="https://cadu-food-ecommerce.vercel.app/" target='_blank' rel='noreferrer'>
                    <img src={caduecommerce} alt="cadu lanches" />
                </a>

                <a href="https://site-educacional-react.vercel.app/" target='_blank' rel='noreferrer'>
                    <img src={siteeducacional} alt="site educacional" />
                </a>

                <a href="https://pokedex-angular-blond.vercel.app/" target='_blank' rel='noreferrer'>
                    <img src={pokedex} alt="Pokedex" />
                </a>

                <a href="https://todolist-frontend-react-vite.vercel.app/" target='_blank' rel='noreferrer'>
                    <img src={todolist} alt="todo list" />
                </a>

                <a href="https://www.linkedin.com/feed/update/urn:li:activity:7133256075876741120/" target='_blank' rel='noreferrer'>
                    <img src={employees} alt="employees" />
                </a>
                
                <a href="https://previsao-do-tempo-js-one.vercel.app/" target='_blank' rel='noreferrer'>
                    <img src={previsao} alt="previsao do tempo" />
                </a>

                <a href="https://spotify-inky-ten.vercel.app/" target='_blank' rel='noreferrer'>
                    <img src={spotify} alt="interface spotify" />
                </a>

                <a href="https://google-auth-lemon.vercel.app/" target='_blank' rel='noreferrer'>
                    <img src={googleauth} alt="google auth" />
                </a>
                
                
            </div>
        </>
    )
}

export default Portfolio