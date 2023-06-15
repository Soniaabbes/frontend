import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { getOneUser} from '../../Redux/ProfileSlice';
import { updateUser } from '../../Redux/AuthSlice';


function EditUser() {
    const [show, setShow] = useState(false);
  

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const user= useSelector((state) => state.auth.user);

    console.log(user);
  
    
    const [data, setData]= useState ({username:user?.username , adress: user?.adress , phone: user?.phone})
    const dispatch= useDispatch()
    
    useEffect(() => {
        dispatch(getOneUser(user?._id));
     } ,[dispatch])

    
     const handleChange = (e) => {
      setData({ ...data, [e.target.name]: e.target.value });
    };
    
    const handleEdit=async ()=>{
      console.log(user)     
        const x = await dispatch( updateUser(user?._id,data))
       console.log(x);
      handleClose();
    }
    
  return (
    <div>
         <>
      <Button  onClick={handleShow}>
        modifier mes coordonnés
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title ></Modal.Title>
        </Modal.Header>
        <Modal.Body> <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>nom</Form.Label>
      <Form.Control type="text" placeholder="Enter title"   value ={data.username} name='username'  onChange={handleChange}
            />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail" >
      <Form.Label>adresse</Form.Label>
      <Form.Control type="text"  name="adress" value ={data.adress} onChange={handleChange}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail"    >
      <Form.Label>téléphone</Form.Label>
      <Form.Control type="text"  name="phone"   value ={data.phone}  onChange={handleChange}/>
    </Form.Group></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type='submit'  onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    </div>
  )
}

export default EditUser