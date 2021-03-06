import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './style.css'

export default function TeacherItem(){

    return(
        <article className="teacher-item">
                   <header>
                        <img src="https://avatars0.githubusercontent.com/u/38363077?s=460&u=ed58de4f3c2243d735ca89ba31dffb75d8ffc778&v=4" alt="felipe farias"/>
                        <div>
                            <strong>Felipe Farias</strong>
                            <span>Química</span>
                        </div>
                   </header>

                   <p>
                       Entusiasta das melhores tecnologias de química avançada.
                        <br /><br />
                       Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
                   </p>

                   <footer>
                       <p>
                           Preço/hora
                           <strong>R$80,00</strong>
                       </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="whatsapp" />
                            Entrar em contato
                        </button>
                   </footer>
                  
               </article>
    )
}