import React from "react";
import "./Footer.css";
import Wave from "../../images/wave.png";
import { UilLinkedin } from '@iconscout/react-unicons'
import { UilGithubAlt } from '@iconscout/react-unicons'
import { UilEnvelope } from '@iconscout/react-unicons'
import { UilWhatsapp } from '@iconscout/react-unicons'

const Footer = () => {
    return (
        <div className="footer">
            <img src={Wave} alt="" style={{ width: "100%" }} />
            <div className="f-content">

                <span style={{fontSize: '35px', marginBottom: '-2rem'}}>Redes & Contatos</span>

                <div className="f-icons">


                    <a href="https://www.linkedin.com/in/carlos-etl/" target="_blank" rel="noreferrer">
                        <UilLinkedin color="white" size={"3rem"} />
                    </a>

                    <a href="https://github.com/carlosdevprog" target="_blank" rel="noreferrer">
                        <UilGithubAlt color="white" size={"3rem"} />
                    </a>

                    <a href="mailto:carloseduardolima.dev@gmail.com" target="_blank" rel="noreferrer">
                        <UilEnvelope color="white" size={"3rem"} />
                    </a>

                    <a href="https://api.whatsapp.com/send?phone=+558199003257&text=Oi" target="_blank" rel="noreferrer">
                        <UilWhatsapp color="white" size={"3rem"} />
                    </a>

                </div>

            </div>
        </div>
    );
};

export default Footer;