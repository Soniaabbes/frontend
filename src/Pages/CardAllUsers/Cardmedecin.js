import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useDispatch, useSelector} from 'react-redux'
import { getMedecin,deleteUser } from '../../Redux/ProfileSlice';



function CardMedecin() {
  const userMed= useSelector((state) => state.profile.userMed);
  const dispatch= useDispatch()
 

  useEffect(() => {
    dispatch(getMedecin());
  }, [dispatch]);
  const handledelete = async (id) => {
    if (window.confirm(" Êtes vous sûres?")) {
      dispatch(deleteUser(id));
      dispatch(getMedecin());
    }
  };


  return (
   
    <div>
    {userMed?.map( user=> 
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{user.email}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" type='submit'   onClick={() => {
                          
                          handledelete(user._id)}}>supprimer</Button>
      </Card.Body>
    </Card>
    )}
    </div>
    )
}

export default CardMedecin