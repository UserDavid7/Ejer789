import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Contacto } from '../../models/contacto.class'

const Contact = ( {contacto , deleteContact , conect } ) => {

  useEffect(() => {
    console.log('component is a mount');
    return(
      console.log('component is going to onmount')
    )
  },[contacto]);


  function conectTrueFalse() {
    if (contacto.conect) {
      return (
        <p> Conectado </p>
      )
    } else {
      return (
        <p>Desconectado</p>
      )
    }
  }

  return (
    <div className='card contacto'>
      <div className='card-header d-flex justify-content-between mb-0 pb-0'>
        <p className='mb-0'>Contact:</p>
        <div>{conectTrueFalse()}</div>
      </div>

      <div className='card-body flexd'>
        <h5>Name: </h5>  {contacto.name}
        <h5>Last Name: </h5> {contacto.lastName}
        <h5>Number: </h5> {contacto.number}
        <div className=' Milpx d-flex justify-content-between '>
          <button className='btn btn-info' onClick={() => conect(contacto)}> Conectar/Desconectar</button>
          <button className='btn btn-danger' onClick={() => deleteContact(contacto)}> Eliminar</button>
        </div>
        <img src={contacto.img} alt={contacto.name} />

      </div>

    </div>
  )
}

Contact.propTypes = {
  contacto: PropTypes.instanceOf(Contacto),
  deleteContact: PropTypes.func.isRequired,
  conect: PropTypes.func.isRequired
}

export default Contact
