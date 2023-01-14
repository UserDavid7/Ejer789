import React, { useRef } from 'react'
import PropTypes from 'prop-types';
import { Contacto } from '../../../models/contacto.class';
import "../../../styles/forms.css";

const ContactForm = ({ add }) => {

    const name = useRef('');
    const lastname = useRef('');
    const number = useRef(0);
    

    const addNewContact = (e) =>{
        e.preventDefault();

        const newContact = new Contacto(
            name.current.value,
            lastname.current.value,
            number.current.value,
            false,
            "https://cevac.sstabasco.gob.mx/static/img/user3.png"
        )

        add(newContact);
    }

    return (
        <form onSubmit={addNewContact} className='mt-4 formClass'>
            <div className='form-group borderr'>
                <h3 className='mb-4'>Agregar un contacto</h3>
                <div>
                    <input ref={name} type="text" className='form-control mb-4' autoFocus placeholder='Name'/>
                </div>
                <div>
                    <input ref={lastname} type="text" className='form-control mb-4' placeholder='Last Name' />
                </div>
                <div>
                    <input ref={number} type="text" className='form-control' placeholder='Number' />
                </div>
                <div className='d-flex justify-content-center'>
                    <button className='btn btn-primary mt-4' type='submit'>Agregar</button>
                </div>
            </div>
        </form>
    )
}

ContactForm.propTypes = {
    add: PropTypes.func.isRequired
}

export default ContactForm;
