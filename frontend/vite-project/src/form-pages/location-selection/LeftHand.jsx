import React, { Component } from 'react';
import { useState } from 'react';
import img from "../../Pics/leftHand.png"
import ImageMapper from 'react-image-mapper';

const LeftHand = ({setLocation, goToPage, prevStep}) => {
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
     <area target="" alt="Left Thumb" title="Left Thumb" href="http://localhost:5173?location=Left_Thumb" coords="53,270,179,525" shape="rect">
    <area target="" alt="Left Pointer" title="Left Pointer" href="http://localhost:5173?location=Left_Pointer" coords="180,414,326,671" shape="rect">
    <area target="" alt="Left Middle Finger" title="Left Middle Finger" href="http://localhost:5173?location=Left_Middle_Finger" coords="343,473,432,677" shape="rect">
    <area target="" alt="Left Ring Finger" title="Left Ring Finger" href="http://localhost:5173?location=Left_Ring_Finger" coords="446,429,502,594" shape="rect">
    <area target="" alt="Left Little Finger" title="Left Little Finger" href="http://localhost:5173?location=Left_Little_Finger" coords="506,336,566,510" shape="rect">
    <area target="" alt="Left Palm" title="Left Palm" href="http://localhost:5173?location=Left_Palm" coords="182,125,478,407" shape="rect">
    <area target="" alt="Left Wrist" title="Left Wrist" href="http://localhost:5173?location=Left_Wrist" coords="112,5,470,123" shape="rect">
     */

    const MAP = {
        name: "front-map",
        areas:[
            {id: 1, name : "Left Thumb", shape: "square", coords: [53,270,179,525]},
            {id: 1, name : "left pointer", shape: "square", coords: [180,414,326,671]},
            {id: 1, name: "left middle finger", shape: "square", coords: [343,473,432,677]},
            {id: 1, name: "left ring finger", shape: "square", coords: [446,429,502,594]},
            {id: 1, name: "left little finger", shape: "square", coords: [140,837,260,894]},
            {id: 1, name: "left palm", shape: "square", coords: [182,125,478,407]},
            {id: 1, name: "left wrist", shape: "square", coords: [112,5,470,123]},
        ]
    } 

    return (
        <div class="holder">
            <ImageMapper
                src={img}
                map={MAP}
                onClick={area => clicked(area.name)}
                imgWidth={600}
                width={300}
            />
        </div>
    )
}

export default LeftHand;