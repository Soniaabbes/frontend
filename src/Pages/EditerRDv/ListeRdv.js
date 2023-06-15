import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { getEmailRDV } from '../../Redux/RdvSlice';
;

function ListeRDV() {
    const user= useSelector((state) => state.profile.userMed.user);
    const rdv=useSelector((state)=>state.rdv.userRDV)
const dispatch= useDispatch()
    useEffect(() => {
        dispatch(getEmailRDV());
      }, [dispatch]);
    //   const handledelete = async (id) => {
    //     if (window.confirm(" Êtes vous sûres?")) {
    //       dispatch(deleteR(id));
    //       dispatch(getEmailRDV());
    //     }
    //   };
  return (
    <div>
        {rdv?.map( Appoinment=> 

<Card style={{ width: '18rem' }}>
      
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
         nom du médecin {rdv. docteurname} 
        </Card.Text>
        <Card.Text>
         email :{rdv.emailDoc}
        </Card.Text>
        <Card.Text>
         le RDV est de { rdv.heureStart} à  {rdv.heurEnd}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
)}

    </div>
  )
}

export default ListeRDV