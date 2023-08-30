import React from 'react'
import styles from './Contacto.module.scss';

const Contacto = () => {
  return (
    <div className={styles['contact']}>
        <h2>¿Queres saber mas de nosotros?</h2>
        <h2>¿Sos revendedor y queres conocer precios mayoristas?</h2>
        <p>No dudes en contactarnos </p>
          <code>Email: punkapi@beers.com</code>
          <code>Telefono: 11324568</code>
    </div>
  )
}

export default Contacto