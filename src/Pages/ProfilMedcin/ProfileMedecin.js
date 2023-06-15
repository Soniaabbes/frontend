import React, { useState } from 'react'
import './ProfileMedecin.css'
import Button from 'react-bootstrap/Button';

import { useDispatch, useSelector } from 'react-redux';
import { deleteUser} from '../../Redux/ProfileSlice';
import { logout } from '../../Redux/AuthSlice';
import { Link, useNavigate } from 'react-router-dom';
import EditUser from '../Edituser/EditUser';
import EditRdv from '../EditerRDv/EditRdv';



function ProfileMedecin() {
  const dispatch=useDispatch()
  const navigate= useNavigate()
  
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
      
      <div className='les boutons' style={{"display":"flex", "flexWrap":"nowrap"  }}>
      <Button className='submit1'variant="outline-primary" onClick={()=>{handledelete(user._id)}}>
       supprimer mon compte
    </Button>
    
    <EditUser user={user}/>
   
    <EditRdv/>
    <Button className='submit1' variant="outline-primary">
       modifier des RDV
    </Button>
    <Link to='/listeRDVdoc'>
    <Button className='submit1' variant="outline-primary">
       voir ma liste des RDV
    </Button>
    </Link>
      <Button className='submit1' variant="outline-primary">
       supprimer des RDV
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
 <h1 className='name '>{user?.username}</h1>
<>

        <h3>  déterminer votre spécialité   </h3>
        <select > 
    <option value="patient">Addictologie</option>
    <option value="médecin">Allergologie </option>
    <option value="commercial pharmaceutique">Anatomie et cytopathologie</option>
    <option value="patient">Anatomie et cytopathologie</option>
           
    
    <option value="médecin">  Anesthésie-réanimation </option>
    <option value="commercial pharmaceutique">Anatomie et cytopathologie</option>
    <option value="patient">Anesthésie-réanimation</option>
    <option value="médecin">Biologie médicale</option>
    <option value="commercial pharmaceutique">Dermatologie et vénérologie</option>
    <option value="patient">Endocrinologie-diabétologie-nutrition</option>
    <option value="médecin">Génétique médicale</option>
    <option value="commercial pharmaceutique">Gériatrie</option>
    <option value="patient">Gynécologie médicale</option>
    <option value="médecin">Hématologie</option>
    <option value="commercial pharmaceutique">Hépato-gastro-entérologie</option>
    <option value="patient">Médecine cardiovasculaire</option>
    <option value="médecin">Médecine d’urgence</option>
    <option value="commercial pharmaceutique">Médecine du travail</option>
    <option value="patient">Médecine du sport</option>
    <option value="médecin">Médecine générale</option>
    <option value="commercial pharmaceutique">Maladies infectieuses et tropicales</option>
    <option value="patient">Médecine intensive-réanimation</option>
    <option value="médecin">Médecine interne</option>
    <option value="commercial pharmaceutique">Médecine légale et expertises médicales</option>
    <option value="patient">Médecine nucléaire</option>
    <option value="médecin">Médecine physique et de réadaptation</option>
    <option value="commercial pharmaceutique">Médecine vasculaire</option>
    <option value="patient">Néphrologie </option>
    <option value="médecin">Neurologie</option>
    <option value="commercial pharmaceutique">Oncologie</option>
    <option value="patient">Pédiatrie</option>
    <option value="médecin">Pneumologie</option>
    <option value="commercial pharmaceutique">Psychiatrie</option>
    <option value="patient">Psychiatrie</option>
    <option value="médecin">Radiologie et imagerie médicale</option>
    <option value="commercial pharmaceutique">Rhumatologie</option>
    <option value="patient">Santé publique</option>
   
  </select> 
  



</>
 <form >
    <input placeholder='describe your profile' className='description' />
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
   <h1 className='addressCabinet'> email</h1>
   <form>
    <input placeholder='Write your email' className='addressedescrip' value={user?.email}/>
   </form>

    </div>
   
 </div>

   
   
    
   
    </div>
  )
}

export default ProfileMedecin