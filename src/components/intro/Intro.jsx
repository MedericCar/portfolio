import React from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import './intro.scss'

export default function Intro() {
  return (
    <div className='intro' id='intro'>
      
      <div className='info'>
        <h1>Médéric Carriat</h1>
        <h4>Sofware Engineering student</h4>
      </div>

      <p>Looking for an <b>end-of-study internship</b> starting in <b>February 2022</b>.</p>

      <a 
        className='arrow'
        href='#experience'
      >
        <ExpandMoreIcon/>
      </a>

    </div>
  )
}
