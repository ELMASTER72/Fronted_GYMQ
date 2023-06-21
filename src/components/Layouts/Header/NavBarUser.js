import React, { useState, useRef } from 'react';
import PerfilUsuario from './PerfilDesplegable';


function Navbar() {
  return (
    <div id="sticky-header" className="dreamhub_nav_manu">
            <div className="logo">
              <a className="main_sticky" href="/home" title="dreamhub">
                <h2>GYM<font color='#FFF000'>QU</font></h2>
              </a>
            </div>
            <nav className="dreamhub_menu">
              <ul className="nav_scroll">
                <li><a href="/home">Inicio</a></li>
                <li><a href="/NosotrosUser">Nosotros</a></li>
                <li><a href="/Visual_Gym">Gimnasios</a></li>
                <li><a href="/visual_Rutine">Rutinas</a></li>
                <li><a href="/Store">Tienda</a></li>
              </ul>
            </nav>
            <div className="dreamhub-btn-profile">
              <PerfilUsuario/>
            </div>
            
  </div>
  );
}

export default Navbar;