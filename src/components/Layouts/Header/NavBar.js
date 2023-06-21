import React from 'react';

function Navbar() {
  return (
    <div id="sticky-header" className="dreamhub_nav_manu">
            <div className="logo">
              <a className="main_sticky" href="/" title="dreamhub">
                <h2>GYM<font color='#FFF000'>QU</font></h2>
              </a>
            </div>
            <nav className="dreamhub_menu">
              <ul className="nav_scroll">
                <li><a href="/">Inicio</a></li>
                <li><a href="/Nosotros">Nosotros</a></li>
              </ul>
            </nav>
            <div className='buttonsAccount'>
              <div className="dreamhub-btn">
                <a href="/Login">Ingresar</a>
              </div>
              <div className="dreamhub-btn">
                <a href="/register">Registrar</a>
              </div>
            </div>
    </div>
  );
}

export default Navbar;