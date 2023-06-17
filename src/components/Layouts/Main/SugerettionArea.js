import React from 'react';

const SugerettionArea = () => {
  return (
    <div className="subscribe-area">
      <div className="container">
              <h1 className="subscribe-title">Sugerencias</h1>
              <p className="subscribe-desc">¡Nos encantaría escuchar tu opinión! Cuéntanos tus sugerencias y ayúdanos a mejorar nuestra página web para brindarte la mejor experiencia posible.</p>
              <div className="subscribe-form">
                <form>
                  <div className="form-field">
                    <input type="text" name="EMAIL" placeholder="Tu sugerencia" required />
                    <button className="subscribe-button" type="submit">Enviar</button>
                  </div>
                </form>
              </div>
      </div>
    </div>
  );
}

export default SugerettionArea;
