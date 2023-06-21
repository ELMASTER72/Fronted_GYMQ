import React from 'react'
import classes from './success.module.css'

const Success = () => {
  return (
    <div className={classes.successMessage}>
      ¡Ha realizado un pago con éxito!
      <img src='https://res.cloudinary.com/drnmx4xgd/image/upload/v1687388184/WhatsApp_Image_2023-06-21_at_12.39.01_PM-removebg-preview_n4ha4p.png'/>
      <a href='/Home'>Volver al Inicio</a>
    </div>
  )
}

export default Success