import React from 'react'


const Contact = () => {
    return (
        <footer className='footer'>
            <div className='about'>

            </div>
            <form action="https://formsubmit.co/helenafanador90@gmail.com" method="POST" className="form">
                <div class="title">Contactame</div>
                <input name="Correo" type="email" placeholder="Correo" class="input" />
                <textarea name="mensaje" type="text" placeholder="Escribe tu mensaje"></textarea>

                <button type="submit">Enviar</button>
            </form>
            <div className='icons-all'>
                <a className='icons-now' href='https://t.me/HelenAfanador' Button='icons'><i class="fa-brands fa-telegram"></i></a>
                <a className='icons-now' href='https://www.linkedin.com/in/helen-afanador-193a72b8/' ><i class="fa-brands fa-linkedin"></i></a>
            </div>
        </footer>
    )
}

export default Contact