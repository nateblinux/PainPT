import React, { Component } from 'react';
import { useState } from 'react';
import img from "../../Pics/leftArm.png"
import ImageMapper from 'react-image-mapper';

const LeftArm = ({setLocation, goToPage, prevStep}) => {
    const goBack = e =>{
        e.preventDefault();
        prevStep();
      }

    function GoTo(page){
        goToPage(page);
    }

    function clicked(area){
        console.log(area.name);
        if(area.id == 0){
            GoTo(15);
        }else{
            setLocation(area.name);
            GoTo(1);
        }
    }

    /**
     * <area target="" alt="Left Hand" title="Left Hand" href="left_Hand.html" coords="80,676,307,905" shape="rect">
    <area target="" alt="Left Triceps" title="Left Triceps" href="http://localhost:5173?location=Left_Triceps" coords="213,436,12,670" shape="rect">
    <area target="" alt="Left Inner Elbow" title="Left Inner Elbow" href="http://localhost:5173?location=Left_Inner_Elbow" coords="5,335,152,433" shape="rect">
    <area target="" alt="Left Bicep" title="Left Bicep" href="http://localhost:5173?location=Left_Bicep" coords="4,204,115,333" shape="rect">
    <area target="" alt="Left Shoulder" title="Left Shoulder" href="http://localhost:5173?location=Left_Shoulder" coords="97,19,1,198" shape="rect">
     */

    const MAP = {
        name: "front-map",
        areas:[
            {id: 0, name : "left hand", shape: "square", coords: [80,676,307,905]},
            {id: 1, name : "left triceps", shape: "square", coords: [213,436,12,670]},
            {id: 1, name: "left inner elbow", shape: "square", coords: [5,335,152,433]},
            {id: 1, name: "left bicep", shape: "square", coords: [4,204,115,333]},
            {id: 1, name: "left shoulder", shape: "square", coords: [97,19,1,198]},
        ]
    } 

    return (
        <div class="holder">
            <ImageMapper
                src={img}
                map={MAP}
                onClick={area => clicked(area)}
            />
        </div>
    )
}

export default LeftArm;