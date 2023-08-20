import React from 'react'


const Contact = () => {
    return (
        <footer className='footer'>
            <div className='about-all'>
                <div className='icons-all'>
                    <a className='icons-now' href='https://t.me/HelenAfanador' Button='icons'><i class="fa-brands fa-telegram"></i></a>
                    <a className='icons-now' href='https://www.linkedin.com/in/helen-afanador-193a72b8/' ><i class="fa-brands fa-linkedin"></i></a>
                </div>
            </div>
            <form class="form">
                <div class="title">Contactame</div>
                <input type="text" placeholder="Correo" class="input" />
                <textarea placeholder="Escribe tu mensaje"></textarea>

                <button >Enviar</button>
            </form>
        </footer>
    )
}

export default Contact