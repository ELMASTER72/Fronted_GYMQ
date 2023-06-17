import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Button } from "../../ui/Buttons/Button"

function CarouselComponent() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleSlideChange = (index) => {
    setCurrentSlide(index)
  }

  return (
    <Carousel
      showStatus={false}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={3000}
      onChange={handleSlideChange}
    >
      <div className="carousel-item">
        <img src="https://res.cloudinary.com/dkyqaw07i/image/upload/v1686839722/Imagen03_oak2qk.jpg" alt="Imagen 3" />
        {currentSlide === 0 && <p className="carousel-caption-center">Navega por nuestros gimnasios asociados y encuentra el lugar perfecto para entrenar cerca de ti.</p>}
        <div className='buttonsCarousel'>
        <Button/>
        </div>
      </div>
      <div className="carousel-item">
        <img src="https://res.cloudinary.com/dkyqaw07i/image/upload/v1682786916/imagen_nnjvua.jpg" alt="Imagen 1" />
        {currentSlide === 1 && <p className="carousel-caption-center">Explora nuestras rutinas y transforma tu cuerpo en poco tiempo.</p>}
        <div className='buttonsCarousel'>
        <Button/>
        </div>
      </div>
      <div className="carousel-item">
        <img src="https://res.cloudinary.com/dkyqaw07i/image/upload/v1686839720/Imagen01_umnbta.jpg" alt="Imagen 3" />
        {currentSlide === 2 && <p className="carousel-caption-center">Descubre cómo puedes mejorar tu bienestar físico y mental a través de nuestros recursos y programas exclusivos</p>}
        <div className='buttonsCarousel'>
          <Button/>
        </div>
      </div>
    </Carousel>
  );
}

export default CarouselComponent;
