import React from 'react'
import './Portfolio.css'

import supertrips from '../../images/supertrips.png'
import carhub from '../../images/carshow.png'
import cadulanches from '../../images/ecommerceCadu.png'
import spotify from '../../images/spotify.png'
import googleauth from '../../images/google-auth.png'
import todolist from '../../images/todolist.png'


const Portfolio = () => {
    return (
        <>

            <div className='divSpan'>
                <span>Projetos Recentes</span>
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
                    <img src={cadulanches} alt="cadu lanches" />
                </a>
                <div className="blur s-blur1" style={{ background: '#ABF1FF94' }}></div>
                <img src={cadulanches} alt="spotify" />
                <img src={cadulanches} alt="spotify" />
                <img src={cadulanches} alt="spotify" />
                <img src={cadulanches} alt="spotify" />
                <img src={cadulanches} alt="spotify" />
            </div>
        </>
    )
}

export default Portfolio