
import React, { useEffect, useState } from 'react'
import { Contacto } from '../../models/contacto.class'
import Contact from '../pure/Contact'
import ContactForm from '../pure/forms/ContactForm'

const ContactsList = () => {

    const contact1 = new Contacto("David", "Garcia", 8331126786, false, "https://cevac.sstabasco.gob.mx/static/img/user3.png");
    const contact2 = new Contacto("Yami", "Urbina", 8334377760, false, "https://cevac.sstabasco.gob.mx/static/img/user3.png");
    const contact3 = new Contacto("Eri", "Aketzali", 8334639955, false, "https://cevac.sstabasco.gob.mx/static/img/user3.png");

    const [contacts, setContacts] = useState([contact1, contact2, contact3]);

    const addContact = (contact) => {
        if (contact.name.trim() === "" || contact.number.trim() === "") {
            alert("Asegurese de ingresar correctamente los datos");
        } else {
            if (isNaN(contact.number)) {
                alert("El numero que ingreso no es un numero")
            } else {
                console.log('Contacto Agregado');
                const updateContacts = [...contacts, contact];
                setContacts(updateContacts);
            }

        }
    }

    const deleteContact = (contacto) => {


        //const updateContacts = contacts.filter( con => con.number != contacto.number);
        //setContacts(updateContacts)


        const index = contacts.indexOf(contacto);
        const updateContacts = [...contacts];
        updateContacts.splice(index, 1);
        setContacts(updateContacts);
        /*
        const UpdatesTask = tasks.filter(tar => tar.tittle != tarea.tittle);
        console.log('tarea eliminada');
        console.log('tareas actuales: ',UpdatesTask);
        setTasks(UpdatesTask);

        //como en el curso:
        const index = tasks.indexOf(tarea);
        const tempTask = [...tasks];
        tempTask.splice(index, 1);
        setTasks(tempTask);*/
    }

    const conectDeconect = (contacto) => {
        /*
        const updateContacts = contacts.map(con => {
            if (contacto) {
                contacto.conect = !contacto.conect;
            }
            console.log('contacto actualizados')
            console.log(contacto);
            return con;
        })
        setContacts(updateContacts);*/

        const index = contacts.indexOf(contacto);
        const updateContacts = [...contacts];
        updateContacts[index].conect = !updateContacts[index].conect
        setContacts(updateContacts);
        
    }

    useEffect(() => {
        console.log('contacts state has be modified');

        return () => {
            console.log('contactslist component is going to unmount...');
        }
    }, [contacts]);

    return (
        <div className="container containerr mt-4 ">
            <div className='leftSide'>
                <ContactForm
                    add={addContact}
                />
            </div>
            <div className='rightSide'>
                <div className='elements'>
                    {contacts.map((con, index) => {
                        return (
                            <Contact
                                key={index}
                                contacto={con}
                                deleteContact={deleteContact}
                                conect={conectDeconect}
                            />
                        )
                    })}
                </div>
            </div>

            <hr />
            <hr />



        </div>
    )
}

export default ContactsList
