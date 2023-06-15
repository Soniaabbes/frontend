import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { registreRDV } from '../../Redux/RdvSlice';
 


function EditRdv() {
  const dispatch=useDispatch()
    const [show, setShow] = useState(false);
 
    const [data,setData]= useState({jour:'Lundi', docteurname:'no one',emailDoc:"no one", emailPa:"no one",heureStart:"8:00 h", heureEnd:"9:00 h"})
    const handleChange=(e)=>{
      setData({...data, [e.target.name]:e.target.value})
  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(registreRDV(data));
    dispatch(handleClose())
   
}
 

  return (
    <div>
<>
      <Button variant="outline-primary"  className='submit1'  onClick={handleShow}>
        faire les RDV
      </Button>

      <Modal show={show} onHid>
        <Modal.Header closeButton>
          <Modal.Title>Ma fiche du RDV</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
        <Form.Group className="mb-3" controlId="formBasicPassword" onSubmit={handleSubmit}>
        <p>choisir le jour </p>
     
        <select name="jour" id="jour"  onChange={handleChange} > 
    <option value="Lundi">Lundi</option>
    <option value="Mardi">Mardi</option>
    <option value="Mercredi">Mercredi</option>
    <option value="Lundi">Jeudi</option>
    <option value="Mardi">Vendredi</option>
    <option value="Mercredi">Samedi</option>
    <option value="Mercredi">Dimanche</option>
  </select>

        
      
        <p>choisir l'heure du début du RDV </p>
  
        <select name="heureStart" id="heureStart"  onChange={handleChange}> 
    <option value="8:00 h">"8:00 h"</option>
    <option value="9:00 h">"9:00 h"</option>
    <option value="10:00 h">"10:00 h"</option>
    <option value="11:00 h">"11:00 h"</option>
    <option value="12 :00 h">"12 :00 h"</option>
    <option value="13:00 h">"13:00 h"</option>
    <option value="14:00 h">"14:00 h"</option>
    <option value="15:00 h">"15:00 h"</option>
    <option value="16:00 h">"16:00 h"</option>
    <option value="17:00 h">"17:00 h"</option>
    <option value="18:00 h">"18:00 h"</option>
  </select>
  

     
     
        <p>choisir l'heure du fin du RDV </p>
  <select name="heureEnd" id="heureEnd"  onChange={handleChange}> 
    <option value="8:00 h">"8:00 h"</option>
    <option value="9:00 h">"9:00 h"</option>
    <option value="10:00 h">"10:00 h"</option>
    <option value="11:00 h">"11:00 h"</option>
    <option value="12 :00 h">"12 :00 h"</option>
    <option value="13:00 h">"13:00 h"</option>
    <option value="14:00 h">"14:00 h"</option>
    <option value="15:00 h">"15:00 h"</option>
    <option value="16:00 h">"16:00 h"</option>
    <option value="17:00 h">"17:00 h"</option>
    <option value="18:00 h">"18:00 h"</option>
  </select>
  </Form.Group>
     
  </Modal.Body>
     
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            fermer
          </Button>
          <Button variant="primary" onClick={handleClose} type='submit' >
            Confirmer le RDV
          </Button>
        </Modal.Footer>
      </Modal>
    </>


    </div>
  )
}

export default EditRdv