import React, { useState } from 'react';
import useFetch from '../../../hooks/fetch.hook';
import { useAuthStore } from '../../../store/store';
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate()
  const [showOptions, setShowOptions] = useState(false);

  const handleProfileButtonClick = () => {
    setShowOptions(!showOptions);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const { username } = useAuthStore(state => state.auth)
  const [{ apiData }] = useFetch(`/user/${username}`)

  function userLogout(){
    localStorage.removeItem('token');
    navigate('/')
  }

  function userperfil(){
    navigate("/profile")
  }
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
                <li className={isMenuOpen ? 'active' : ''}>
                  <a href="" onClick={toggleMenu}>
                    Gimnasios <i className="fas fa-chevron-down"></i>
                  </a>
                </li>
                <li>
                  <a href="/Servicios">
                    Servicios <i className="fas fa-chevron-down"></i>
                  </a>
                  <ul className="sub-menu">
                    <li><a href="">Rutinas</a></li>
                    <li><a href="">Tienda</a></li>
                  </ul>
                </li>
              </ul>
            </nav>
            <div className="dreamhub-btn-profile">
              <button onClick={handleProfileButtonClick}>
                {/* {apiData?.username} */} Hola
              </button>
              {showOptions && (
                <div className='modalProfile'>
                  <button onClick={userperfil} className="text-red-500">Perfil</button>
                  <button onClick={userLogout} className="text-red-500">Salir</button>
                </div>
              )}
            </div>
    </div>
  );
}

export default Navbar;