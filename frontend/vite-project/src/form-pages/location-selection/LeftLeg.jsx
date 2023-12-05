import React, { Component } from 'react';
import { useState } from 'react';
import img from "../../Pics/leftLeg.png"
import ImageMapper from 'react-image-mapper';

const LeftLeg = ({setLocation, goToPage, prevStep}) => {
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
     <area target="" alt="Left Quad" title="Left Quad" href="http://localhost:5000?location=Left_Quad" coords="19,0,133,160" shape="rect">
    <area target="" alt="Left Knee" title="Left Knee" href="http://localhost:5000?location=Left_Knee" coords="16,166,108,217" shape="rect">
    <area target="" alt="Left Lower Leg" title="Left Lower Leg" href="http://localhost:5000?location=Left_Lower_Leg" coords="18,220,112,344" shape="rect">
    <area target="" alt="Left Shin" title="Left Shin" href="http://localhost:5000?location=Left_Shin" coords="18,346,79,387" shape="rect">
    <area target="" alt="Left Ankle" title="Left Ankle" href="http://localhost:5000?location=Left_Ankle" coords="8,389,65,417" shape="rect">
    <area target="" alt="Left Foot" title="Left Foot" href="http://localhost:5000?location=Left_Foot" coords="-1,421,67,487" shape="rect">
     */

    const MAP = {
        name: "front-map",
        areas:[
            {id: 1, name : "left quad", shape: "square", coords: [19,0,133,160]},
            {id: 1, name : "left knee", shape: "square", coords: [16,166,108,217]},
            {id: 1, name: "left lower leg", shape: "square", coords: [18,220,112,344]},
            {id: 1, name: "left shin", shape: "square", coords: [18,346,79,387]},
            {id: 1, name: "left ankle", shape: "square", coords: [8,389,65,417]},
            {id: 1, name: "left foot", shape: "square", coords: [-1,421,67,487]},
        ]
    } 

    return (
        <div class="holder">
            <ImageMapper
                src={img}
                map={MAP}
                onClick={area => clicked(area.name)}
                imgWidth={148}
                width={200}
            />
        </div>
    )
}

export default LeftLeg;