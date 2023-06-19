import React, { useState, useRef } from 'react';
import useFetch from '../../../hooks/fetch.hook';
import { useAuthStore } from '../../../store/store';
import { useNavigate } from 'react-router-dom'
import avatar from '../../../assets/profile.png';

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false)

  const handleProfileButtonClick = () => {
    setShowModal(true);
    setShowProfileModal(false)
  }; 
  const handleProfileButtonClickModal = () => {
    setShowModal(false);
    setShowProfileModal(true)
  }; 
  const closeModal = () => {
    setShowModal(false);
  };
  
  const closeModalProfile = () => {
    setShowProfileModal(false);
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
                    <li><a href="/Store">Tienda</a></li>
                  </ul>
                </li>
              </ul>
            </nav>
            <div className="dreamhub-btn-profile">
              <button onClick={handleProfileButtonClick}>
                {/* {apiData?.username} */} Hola
              </button>
              {showModal && (
                <div className="modalBackdrop">
                  <div className="modalProfile">
                    <div className="modalContent">
                      <div className="profile flex justify-center py-4">
                        <img src={avatar} className="avatar-profile" alt="avatar" />
                      </div>
                      <button style={{ color: 'black' }} onClick={handleProfileButtonClickModal}>
                        Perfil
                      </button>
                      <button style={{ color: 'black' }} onClick={userLogout}>
                        Cerrar Sesión
                      </button>
                    </div>
                    <button className='close' style={{ color: 'black' }} onClick={closeModal}>
                      X
                    </button>
                  </div>
                </div>
              )}
              {showProfileModal && (
                <div className="modalBackdrop">
                  <div className="modalProfileContent">
                    <div className='modalContentProfile'>
                      <h1>Perfil</h1>
                    </div>
                    <button style={{ color: 'black' }} onClick={closeModalProfile}>X</button>
                  </div>
                </div>
              )}
            </div>
            
  </div>
  );
}

export default Navbar;