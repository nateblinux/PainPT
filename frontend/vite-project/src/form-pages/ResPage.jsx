import React from "react";
import loading from "../assets/loading-band-aid.png"

const ResPage = ({response, prevStep, goTo}) =>{
    const goBack = e =>{
        e.preventDefault();
        prevStep();
    }

    const startOver = e => {
        e.preventDefault();
        goTo(0);
    }

    const processRes = res =>{
        if(res){
            return (
                <pre>{res}</pre>
            )
        }else{
            return (
                <div className="loader">
                    <img width={75} src = {loading}></img>
                </div>
            )
        }
    }

    return(
        <>
        <form>
            {processRes(response)}
            <button type="submit" onClick={ goBack }>Back</button>
            <button type="submit" onClick={ startOver }>Done</button>
        </form>
        </>
    )
}

export default ResPage;