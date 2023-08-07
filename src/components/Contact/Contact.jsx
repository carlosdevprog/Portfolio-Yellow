import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
import { UilWhatsapp } from '@iconscout/react-unicons' 

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.current) return

    emailjs
      .sendForm(
        "service_yto1vri",
        "template_yqvlksk",
        form.current,
        "B8cTm0gfuPVZJjdzw"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.current?.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{ color: darkMode ? 'white' : '' }}>Quer falar comigo?</span>
          <span>Envie uma mensagem!</span>
          <span style={{ fontSize: '20px', color: darkMode ? "white" : "" }}>
            Ou fale diretamente no WhatsApp            
          </span>
          <br />
          <a href="https://api.whatsapp.com/send?phone=+558199003257&text=Oi" target="_blank" rel="noreferrer">
          <UilWhatsapp color="green" size={"3rem"}/>
          </a>

          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user" placeholder="Nome" />
          <input type="email" name="user_email" className="user" placeholder="Email" />
          <textarea name="message" className="user" placeholder="Mensagem" />
          <input type="submit" value="Enviar" className="button" />
          <span>{done && "Obrigado pela mensagem. Em breve te respondo!!!"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;