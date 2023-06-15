import React from 'react'
import Button from 'react-bootstrap/Button';
import './trouvezmed.css'


import { Link } from 'react-router-dom';

function TrouvezMed() {


  
  
  return (
    <div className='allspeciality'>
    
<h2> Please choose the specialty or skill of the doctor you wish to consult</h2>
<div classname='speciality'>
  <Link  to='/cardMed'>
  <Button variant="link" className='onespeciality' value='addictology' type='submit'>Addictologie</Button></Link>
  <Link  to='/cardMed'><Button variant="link" className='onespeciality'>Allergologie</Button> </Link>
  <Link  to='/cardMed'><Button variant="link" className='onespeciality'>Anatomie et cytopathologie</Button> </Link>
  <Link  to='/cardMed'><Button variant="link" className='onespeciality'>Anesthésie-réanimation</Button> </Link>
  <Link  to='/cardMed'><Button variant="link" className='onespeciality'>Biologie médicale</Button> </Link>
  <Link  to='/cardMed'><Button variant="link" className='onespeciality'>Dermatologie et vénérologie</Button> </Link>
  <Link  to='/cardMed'><Button variant="link" className='onespeciality'>Endocrinologie-diabétologie-nutrition</Button> </Link>
  <Link  to='/cardMed'><Button variant="link" className='onespeciality'>Génétique médicale</Button> </Link>
  <Link  to='/cardMed'><Button variant="link" className='onespeciality'>Gériatrie</Button> </Link>
  <Link   to='/cardMed'><Button variant="link" className='onespeciality'>Gynécologie médicale</Button> </Link>
  <Link  to='/cardMed'><Button variant="link" className='onespeciality'>Hématologie</Button> </Link>
  <Link  to='/cardMed'><Button variant="link"className='onespeciality'>Hépato-gastro-entérologie</Button> </Link>
  <Link  to='/cardMed'><Button variant="link" className='onespeciality'>Médecine cardiovasculaire</Button> </Link>
  <Link  to='/cardMed'><Button variant="link" className='onespeciality'>Médecine d’urgence</Button> </Link>
  <Link  to='/cardMed'><Button variant="link" className='onespeciality'>Médecine du sport</Button> </Link>
  <Link  to='/cardMed'><Button variant="link" className='onespeciality'>Médecine du travail</Button> </Link>
  <Link  to='/cardMed'><Button variant="link" className='onespeciality'>Médecine générale</Button> </Link>
  <Link  to='/cardMed'><Button variant="link" className='onespeciality'>Maladies infectieuses et tropicales </Button> </Link>
  <Link  to='/cardMed'><Button variant="link" className='onespeciality'>Médecine intensive-réanimation</Button> </Link>
  <Link  to='/cardMed'><Button variant="link" className='onespeciality'>Médecine interne</Button> </Link>
  <Link  to='/cardMed'><Button variant="link" className='onespeciality'>Médecine légale et expertises médicales</Button> </Link>
  <Link  to='/cardMed'><Button variant="link" className='onespeciality'>Médecine nucléaire</Button> </Link>
  <Link  to='/cardMed'><Button variant="link" className='onespeciality'>Médecine physique et de réadaptation</Button> </Link>
  <Link  to='/cardMed'><Button variant="link" className='onespeciality'>Médecine vasculaire</Button>  </Link>
  <Link  to='/cardMed'><Button variant="link"className='onespeciality'>Néphrologie</Button> </Link>
  <Link  to='/cardMed'><Button variant="link"className='onespeciality'>Neurologie</Button> </Link>
  <Link  to='/cardMed'><Button variant="link"className='onespeciality'>Oncologie</Button> </Link>
  <Link  to='/cardMed'><Button variant="link"className='onespeciality'>Pédiatrie</Button> </Link>
  <Link  to='/cardMed'><Button variant="link"className='onespeciality'>Pneumologie</Button>  </Link>
  <Link  to='/cardMed'><Button variant="link"className='onespeciality'>Psychiatrie</Button>  </Link>
  <Link  to='/cardMed'><Button variant="link"className='onespeciality'>Radiologie et imagerie médicale</Button>   </Link>
  <Link  to='/cardMed'><Button variant="link"className='onespeciality'>Rhumatologie</Button> </Link>
  <Link  to='/cardMed'><Button variant="link"className='onespeciality'>Santé publique</Button> </Link>

</div>

















    </div>
  )
}

export default TrouvezMed