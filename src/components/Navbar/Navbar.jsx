import React from 'react'

export const Navbar = () => (
  <>
    <div className='Navbar__container'>
      <div className='Navbar__logo'>
        <figure>
          <img src={''} alt='logo' />
        </figure>
      </div>
      <div className='Navbar__menu'>
        <ul>
          <li>Inicio</li>
          <li>Serenatas</li>
          <li>Galeria</li>
          <li>Inicio</li>
          <li>Contactanos</li>
        </ul>
      </div>
      <div className='Navbar__user' >
        <div className='Navbar__nameuser'>
          <label>Aaron Isaacs</label>
        </div>
        <figure>
          <img src={''} alt='user' />
        </figure>
        <div>
          Options
        </div>
      </div>
    </div>
  </>
)
