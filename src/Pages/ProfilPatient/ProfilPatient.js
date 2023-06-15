import React, { useState } from 'react'
import './ProfilPatient.css'

import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../../Redux/ProfileSlice';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../Redux/AuthSlice';


function ProfilPatient() {
  const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  const navigate= useNavigate()
  const dispatch= useDispatch()
  const user= useSelector((state)=>state.auth.user)
  const handledelete = async (id) => {
    if (window.confirm(" Êtes vous sûres?")) {
      dispatch(deleteUser(id));
      dispatch(logout());
      navigate('/');
    }
  };

  return (
    <div>
      <div className='subEdit'>
 
    <Button className='submit' variant="outline-primary">
       Edit profile
    </Button>
    <Button className='submit'  variant="outline-primary">
      show your appointments
    </Button>
    <Button className='submit' variant="outline-primary" onClick={()=>{handledelete(user._id)}} >
    supprimer mon compte
    </Button>
    <Button className='submit'  variant="outline-primary">
    cancel your appointments
    </Button>

    </div>
        <>
<img  alt="medecin" className='profileM' src='https://www.freeiconspng.com/uploads/doctors-logo-icon-29.png' />
<form action="/action_page.php" className='photoPr'>
  <label for="myfile">Select a file:</label>
  <input type="file" id="myfile" name="myfile"/>
  <input type="submit" value="Submit"/>
</form>
</>
<>
 <h1 className='name'>{user?.username}</h1>
 <form >
    <input placeholder='describe your profile' className='description'/>
 </form>
 </>
 <div className='information'>
    <div className='lieu'>
    <img alt='adresse' className='adresse' src='https://cdn-icons-png.flaticon.com/512/6806/6806913.png'/>
   <h1 className='addressCabinet'> Address</h1>
   <form>
    <input placeholder='Write your address' className='addressedescrip'/>
   </form>
    </div>
    < div className='lieu'>
    <img alt='phone' className='adresse' src='https://static.vecteezy.com/system/resources/previews/005/043/114/original/blue-circle-phone-icon-free-vector.jpg'/>
   <h1 className='addressCabinet'> phone</h1>
   <form>
    <input placeholder='Write your phone number' className='addressedescrip'/>
   </form>
    </div>
    < div className='lieu'>
    <img alt='phone' className='adresse' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy499GQxqxds_kvO_fd1OC6hvDrM29E0QwLg&usqp=CAU'/>
   <h1 className='addressCabinet'> email </h1>
   <form>
    <input placeholder='Write your email' className='addressedescrip' value={user?.email}/>
   </form>

    </div>
   
 </div>
 <br/>
 <Button className='submit2' variant="outline-primary" >
      
       Submit
    </Button>
    </div>
  )
}

export default ProfilPatient