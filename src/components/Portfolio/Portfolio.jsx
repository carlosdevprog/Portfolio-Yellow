import React,  { useContext } from 'react'
import './Portfolio.css'
import { themeContext } from "../../Context";
import supertrips from '../../images/supertrips.png'
import carhub from '../../images/carhub.png'
import caduecommerce from '../../images/caduecommerce.png'
import spotify from '../../images/spotify.png'
import googleauth from '../../images/googleauth.png'
import todolist from '../../images/todolist.png'


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

                <a href="https://car-show-topaz.vercel.app/" target='_blank' rel='noreferrer'>
                    <img src={carhub} alt="car show" />
                </a>

                <a href="https://super-trips.vercel.app/" target='_blank' rel='noreferrer'>
                    <img src={supertrips} alt="super trips" />
                </a>

                <a href="https://spotify-inky-ten.vercel.app/" target='_blank' rel='noreferrer'>
                    <img src={spotify} alt="interface spotify" />
                </a>

                <a href="https://react-to-do-list-xi-seven.vercel.app/" target='_blank' rel='noreferrer'>
                    <img src={todolist} alt="todo list" />
                </a>
                
                <a href="https://google-auth-lemon.vercel.app/" target='_blank' rel='noreferrer'>
                    <img src={googleauth} alt="google auth" />
                </a>
                
                
            </div>
        </>
    )
}

export default Portfolio