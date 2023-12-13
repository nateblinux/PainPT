import { TextField, FormControl, Box } from "@mui/material";
import React from "react";

const VerifyPage = ({nextStep, prevStep, handleChange, submitForm, values})=>{

    const Continue = e =>{
        e.preventDefault();
        submitForm();
        nextStep();
    }

    const goBack = e =>{
        e.preventDefault();
        prevStep();
    }

    return(
        <form action="">
          <Box>
          <h2>ready to submit?</h2>
          <h3>Do you have any final comments you would like to include or unmentioned concerns you would like to address?</h3>
            <TextField
            multiline
            rows={2}
            variant="filled"
            placeholder=""
            defaultValue={values.finalThoughts}
            onChange={handleChange('finalThoughts')} 
            fullWidth
            />
          </Box>
        <button type="submit" onClick={ goBack }>Back</button>        
        <button type="submit" onClick={ Continue }>Continue</button>
      </form>
    )
}

export default VerifyPage