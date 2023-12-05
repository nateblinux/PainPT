import React from 'react'
import {FormControlLabel} from '@mui/material'

const FirstPage = ({nextStep, handleChange, values}) =>{
    const Continue = e =>{
        e.preventDefault();
        nextStep();
    }

    return (
        <form action="">
        <input
          type="text"
          placeholder="Email Address"
          defaultValue={values.location}
          onChange={handleChange('location')}
          />
        <button type="submit" onClick={ Continue }>Next</button>
        
      </form> 
    )
}
export default FirstPage;