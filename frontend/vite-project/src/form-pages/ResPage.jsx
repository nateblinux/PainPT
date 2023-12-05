import React from "react";

const ResPage = ({response, prevStep}) =>{
    const goBack = e =>{
        e.preventDefault();
        prevStep();
    }

    return(
        <>
        <form>
        <pre> {response} </pre>
            <button type="submit" onClick={ goBack }>Back</button>
        </form>
        </>
    )
}

export default ResPage;