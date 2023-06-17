import React from 'react';

function ServiceDetails() {
  return (
    <div className='service-details'>
        <div className="service-details-thumb2">
            <img src="https://res.cloudinary.com/dkyqaw07i/image/upload/v1686839723/Imagen02_bw6esf.jpg" alt="service-dettails-img23" />
        </div>
        <div className="service-details-sidebar">
              <div className="sidebar-link">
                <h3>Servicios</h3>
                <ul>
                  <li><a href="#">Cardioterapia<i className="bi bi-chevron-right"></i></a></li>
                  <li><a href="#">Desarrollo muscular<i className="bi bi-chevron-right"></i></a></li>
                  <li><a href="#">Suplemento Corporal<i className="bi bi-chevron-right"></i></a></li>
                  <li><a href="#">Accesorios Deportivos<i className="bi bi-chevron-right"></i></a></li>
                  <li className="style6"><a href="#">Levantamiento de pesas<i className="bi bi-chevron-right"></i></a></li>
                </ul>
              </div>
        </div>
    </div>
  );
}

export default ServiceDetails;
