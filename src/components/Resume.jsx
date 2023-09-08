import React from 'react';
import Contact from './Contact';
import Educaton from './Educaton';
import Objective from './Objective';
import Skills from './Skills';
import Academicprojects from './Academicprojects';
import '../index.css'



function Resume() {
  return (
    <body>
      <div className='container'>
        <div className='page'>
          <div className='left-section'>
            <Contact />
            <Educaton />
          </div>

          <secton className='divider' />

          <div className='right-section'>
            <Objective />
            <Skills />
            <Academicprojects />
          </div>
        </div>
      </div>
    </body>

  )
}

export default Resume;
