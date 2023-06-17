import React from 'react';

const ServiceArea = () => {
  return (
    <div className="service-area">
      <div className="container">
        <div className="section-sub-title">
            <h5>Ejercicios Populares</h5>
            </div>
            <div className="section-main-title">
                <h1>¡Empieza tu viaje hacia un estilo de vida activo y saludable!</h1>
            </div>
          </div>
          <div className='service'>
          <div className="service-single-box">
              <div className="service-icon-img">
                <img src="https://res.cloudinary.com/dkyqaw07i/image/upload/v1686863352/Imagen04_shpwmg.png" alt="service-icon" />
              </div>
              <h3 className="service-title">Fuerza</h3>
              <p className="service-des">Levantamiento de Pesas, Dominadas, Flexiones de Brazos, Sentadillas, Peso Muerto.</p>
              <div className="service-btn">
                <a href="service.html">Ver Más<i className="bi bi-arrow-right-short"></i></a>
              </div>
            </div>
            <div className="service-single-box">
              <div className="service-icon-img">
                <img src="https://res.cloudinary.com/dkyqaw07i/image/upload/v1686871349/Imagen05_xedpx0.png" alt="service-icon" />
              </div>
              <h3 className="service-title">Resistencia</h3>
              <p className="service-des">Correr o Totrar, Natación, Ciclismo, Saltar la Cuerda, Escalada, Entrenamiento de Circuito.</p>
              <div className="service-btn">
                <a href="service.html">Ver Más<i className="bi bi-arrow-right-short"></i></a>
              </div>
            </div>
            <div className="service-single-box">
              <div className="service-icon-img">
                <img src="https://res.cloudinary.com/dkyqaw07i/image/upload/v1686871349/Imagen06_tx41fo.png" alt="service-icon" />
              </div>
              <h3 className="service-title">Cardio</h3>
              <p className="service-des">Remo, Kickboxing, Saltos Pliométricos, Baile, Entrenamiento de Circuito</p>
              <div className="service-btn">
                <a href="service.html">Ver Más<i className="bi bi-arrow-right-short"></i></a>
              </div>
            </div>
          </div>
    </div>
  );
}

export default ServiceArea;
