import React from 'react'

export const Header = () => {
  return (
    <section id="hero">
        <div className="hero-container" data-aos="zoom-in" data-aos-delay="100">
            <h1>Bienvenidos a LFV - Latam</h1>
            <h2>¡Siente la pasión de los torneos de Fútbol, ahora en FIFA 23!</h2>
            <div className='divImg'>
                <img style={{ marginRight: 7 }} src="/img/Origin.png" width='80px' height='80px' alt="Origin" />
                <img style={{ marginRight: 10 }} src="/img/Steam.png" width='80px' height='80px' alt='Steam' />
                <img style={{ marginRight: 7 }} src="/img/Epic.png" width='80px' height='80px' alt='EpicGames' />
            </div>
        </div>
    </section>
  )
}
