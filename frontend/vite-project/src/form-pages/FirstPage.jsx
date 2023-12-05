import React from 'react'
import {Box} from '@mui/material'

const FirstPage = ({nextStep, handleChange, values}) =>{
    const Continue = e =>{
        e.preventDefault();
        nextStep(7);
    }

    return (
      <div>
        <Box>
          <form>
          <h2>Welcome to Pain PT</h2>
          <p>We are simply a tool, and not a substitute for professional medical advice. If you have any concerns we would encourage you to visit a doctor</p>
          <button type="submit" onClick={ Continue }>Start</button>
          </form>
        </Box>
      </div>       
    
    )
}
export default FirstPage;