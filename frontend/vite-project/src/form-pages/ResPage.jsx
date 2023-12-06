import React from "react";
import loading from "../assets/loading-band-aid.png"

const ResPage = ({response, prevStep}) =>{
    const goBack = e =>{
        e.preventDefault();
        prevStep();
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
        </form>
        </>
    )
}

export default ResPage;