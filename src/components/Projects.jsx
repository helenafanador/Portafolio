import React from 'react'

const Projects = () => {
    return (
        <section className='section-projects'>
            <h2 className='title-2'>Mis Proyectos</h2>
            <div className='project-container'>
                <div className='projects-all'>
                    <div><h3>Pokedex</h3>
                        <p>Una App donde podras ver mas de 1000 pokemones.</p>
                    </div>
                    <img className='imagen-project' src='/project-1.png' />
                </div>
                <div className='projects-all'>
                    <div><h3>Pokedex</h3>
                        <p>Una App donde podras ver mas de 1000 pokemones.</p>
                    </div>
                    <img className='imagen-project' src='/project-2.png' />
                </div>
                <div className='projects-all'>
                    <div><h3>Pokedex</h3>
                        <p>Una App donde podras ver mas de 1000 pokemones.</p>
                    </div>
                    <img className='imagen-project' src='/project-3.png' />
                </div>
            </div>

        </section>
    )
}

export default Projects