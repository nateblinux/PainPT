import React, { Component } from 'react';
import { useState } from 'react';
import img from "../../Pics/rightArm.png"
import ImageMapper from 'react-image-mapper';

const RightArm = ({setLocation, goToPage, prevStep}) => {
    const goBack = e =>{
        e.preventDefault();
        prevStep();
      }

    function GoTo(page){
        goToPage(page);
    }

    function clicked(area){
        console.log(area.name);
        if(area.id === 0){
            GoTo(16);
        }else{
            setLocation(area.name);
            GoTo(1);
        }
    }

    /**
     <area target="" alt="Right Hand" title="Right Hand" href="right_Hand.html" coords="255,0,477,218" shape="rect">
    <area target="" alt="Right Triceps" title="Right Triceps" href="http://localhost:5173?location=Right_Triceps" coords="295,221,-1,357" shape="rect">
    <area target="" alt="Right Bicep" title="Right Bicep" href="http://localhost:5173?location=Right_Biceps" coords="180,377,335,535" shape="rect">
    <area target="" alt="Right Shoulder" title="Right Shoulder" href="http://localhost:5173?location=Right_Shoulder" coords="350,381,487,539" shape="rect">
    <area target="" alt="Right Inner Elbow" title="Right Inner Elbow" href="http://localhost:5173?location=Right_Inner_Elbow" coords="-1,363,159,523" shape="rect">
     */

    const MAP = {
        name: "front-map",
        areas:[
            {id: 0, name : "right hand", shape: "square", coords: [255,0,477,218]},
            {id: 1, name : "right triceps", shape: "square", coords: [295,221,-1,357]},
            {id: 1, name: "right inner elbow", shape: "square", coords: [180,377,335,535]},
            {id: 1, name: "right bicep", shape: "square", coords: [350,381,487,539]},
            {id: 1, name: "right shoulder", shape: "square", coords: [-1,363,159,523]},
        ]
    } 

    return (
        <div class="holder">
            <ImageMapper
                src={img}
                map={MAP}
                onClick={area => clicked(area)}
                imgWidth={500}
                width={300}
            />
        </div>
    )
}

export default RightArm;