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
          <h2>ready to submit?</h2>
        <button type="submit" onClick={ goBack }>Back</button>        
        <button type="submit" onClick={ Continue }>Continue</button>
      </form>
    )
}

export default VerifyPage