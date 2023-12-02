import React from 'react'
import { RadioGroup, FormControlLabel, Radio } from '@mui/material'

const FirstPage = ({nextStep, handleChange, values}) =>{

    const queryParams = new URLSearchParams(window.location.search)
    const location = queryParams.get("location")
    const Continue = e =>{
        e.preventDefault();
        nextStep();
    }

    return (
        <form action="">


        <input
          type="text"
          placeholder="Email Address"
          defaultValue={values.input0}
          onChange={handleChange('input0')}
          />
        <button type="submit" onClick={ Continue }>Next</button>
      </form> 
    )
}
export default FirstPage;