import React from 'react'
import { BsFillPersonCheckFill,BsFillPersonLinesFill,BsCalendarHeart}from "react-icons/bs";
import './Apropos.css'

function Apropos() {
  return (<>
    <div className='div1'>
      <p className='Apropos'>
      <img alt='cancer ' className='familleM' src="  https://togyoryu.com/sites/default/files/styles/large/public/photo_1_1.jpg?itok=tDxSWz5n " />
      <p> <span className='Together'>As long as diseases remain to be overcome,</span> <br/> <span className='can'> we will continue to fight with you,  </span>   <br/> <span className='Together'> thanks to you. </span>
</p>
</p>
    </div>
    <div className='div2'>
      <p className='patientDoc'>
      <p className='patient'> <BsFillPersonCheckFill className='icon'/> <br/> <span className='cible'>For patients</span><br/>
Find a doctor, book a visit and solve any health-related doubt</p>
<p className='doctor'> <BsCalendarHeart className='icon'/> <br/> <span className='cible'>For doctors </span><br/>
Save time managing visits</p>
</p>
<p className='representative'><BsFillPersonCheckFill className='icon'/> <br/> <span className='cible'> For medical representatives</span> <br/> We offer a space for the sale of medical equipment for health professionals and patient<br/> and useful information about customers,
<br/> </p>

    </div>
    </>
  )
}

export default Apropos