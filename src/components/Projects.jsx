import React from 'react'

const Projects = () => {
    return (
        <section id="projects" className='section-projects'>
            <h2 className='title-2'>Mis Proyectos</h2>
            <div className='project-container'>
                <div className='projects-all'>
                    <div><h3>Pokedex</h3>
                        <p>Una App donde podras ver mas de 1000 pokemones.</p>
                        <img className='imagen-project' src='/project-1.png' />
                    </div>

                </div>
                <div className='projects-all'>
                    <div><h3>E-commerce</h3>
                        <p>Una App donde puedes filtrar productos, agregar a un carrito.</p>
                        <img className='imagen-project' src='/project-2.png' />
                    </div>

                </div>
                <div className='projects-all'>
                    <div><h3>Rick and Morty</h3>
                        <p>Una App donde podras ver por planeta los habitantes de la serie.</p>
                        <img className='imagen-project' src='/project-3.png' />
                    </div>

                </div>

            </div>
            <br />
            <div className='projects-container2'>
                <div className='projects-all'>
                    <div><h3>Crud de Usuarios</h3>
                        <p>Es una App donde puedes agregar,eliminar y guardar un susuario.</p>
                        <img className='imagen-project' src='/crudUsuarios.png' />
                    </div>
                </div>
                <div className='projects-all'>
                    <div><h3>Galleta de la Fortuna</h3>
                        <p>Una App donde cambia la frase de la galleta con un Click.</p>
                        <img className='imagen-project' src='/galleta.png' />
                    </div>
                </div>
                <div className='projects-all'>
                    <div><h3>App de Clima</h3>
                        <p>Con tu ubicacion exacta te indicara el clima actual.</p>
                        <img className='imagen-project' src='/appClima.png' />
                    </div>
                </div>
            </div>



        </section >
    )
}

export default Projects