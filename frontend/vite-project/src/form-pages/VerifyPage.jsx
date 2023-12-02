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
          <h1>ready to submit?</h1>        
        <button type="submit" onClick={ Continue }>Continue</button>
        <button type="submit" onClick={ goBack }>Back</button>
      </form>
    )
}

export default VerifyPage