import React, { Component } from 'react';
import { useState } from 'react';
import img from "../../Pics/rightLeg.png"
import ImageMapper from 'react-image-mapper';

const RightLeg = ({setLocation, goToPage, prevStep}) => {
    const goBack = e =>{
        e.preventDefault();
        prevStep();
      }

    function GoTo(page){
        goToPage(page);
    }

    function clicked(area){
        console.log(area);       
        setLocation(area);
        GoTo(1);
    
    }

    /**
    <area target="" alt="Right Quad" title="Right Quad" href="http://localhost:5173?location=Right_Quad" coords="247,2,490,329" shape="rect">
    <area target="" alt="Right Knee" title="Right Knee" href="http://localhost:5173?location=Right_Knee" coords="182,333,407,521" shape="rect">
    <area target="" alt="Right Lower Leg" title="Right Lower Leg" href="http://localhost:5173?location=Right_Lower_Leg" coords="133,523,344,742" shape="rect">
    <area target="" alt="Right Shin" title="Right Shin" href="http://localhost:5173?location=Right_Shin" coords="134,748,271,833" shape="rect">
    <area target="" alt="Right Ankle" title="Right Ankle" href="http://localhost:5173?location=Right_Ankle" coords="140,837,260,894" shape="rect">
    <area target="" alt="Right Foot" title="Right Foot" href="http://localhost:5173?location=Right_Foot" coords="71,897,238,1019" shape="rect">
     */

    const MAP = {
        name: "front-map",
        areas:[
            {id: 1, name : "right quad", shape: "square", coords: [247,2,490,329]},
            {id: 1, name : "right knee", shape: "square", coords: [182,333,407,521]},
            {id: 1, name: "right lower leg", shape: "square", coords: [133,523,344,742]},
            {id: 1, name: "right shin", shape: "square", coords: [134,748,271,833]},
            {id: 1, name: "right ankle", shape: "square", coords: [140,837,260,894]},
            {id: 1, name: "right foot", shape: "square", coords: [71,897,238,1019]},
        ]
    } 

    return (
        <div class="holder">
            <ImageMapper
                src={img}
                map={MAP}
                onClick={area => clicked(area.name)}
            />
        </div>
    )
}

export default RightLeg;