import React, { Component } from 'react';
import { useState } from 'react';
import img from "../../Pics/rightHand.png"
import ImageMapper from 'react-image-mapper';

const RightHand = ({setLocation, goToPage, prevStep}) => {
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
    <area target="" alt="Right Thumb" title="Right Thumb" href="http://localhost:5173?location=Right_Thumb" coords="346,356,557,439" shape="rect">
    <area target="" alt="Right Pointer" title="Right Pointer" href="http://localhost:5173?location=Right_Pointer_Finger" coords="594,155,489,269" shape="rect">
    <area target="" alt="Right Pointer" title="Right Pointer" href="http://localhost:5173?location=Right_Pointer_Finger" coords="481,190,405,310" shape="rect">
    <area target="" alt="Right Middle" title="Right Middle" href="http://localhost:5173?location=Right_Middle_Finger" coords="579,55,477,149" shape="rect">
    <area target="" alt="Right Middle" title="Right Middle" href="http://localhost:5173?location=Right_Middle_Finger" coords="473,99,408,187" shape="rect">
    <area target="" alt="Right Ring Finger" title="Right Ring Finger" href="http://localhost:5173?location=Right_Ring_Finger" coords="473,11,403,93" shape="rect">
    <area target="" alt="Right Ring Finger" title="Right Ring Finger" href="http://localhost:5173?location=Right_Ring_Finger" coords="382,91,324,165" shape="rect">
    <area target="" alt="Right Little Finger" title="Right Little Finger" href="http://localhost:5173?location=Right_Little_Finger" coords="376,0,289,81" shape="rect">
    <area target="" alt="Right Little Finger" title="Right Little Finger" href="http://localhost:5173?location=Right_Little_Finger" coords="225,82,293,149" shape="rect">
    <area target="" alt="Right Palm" title="Right Palm" href="http://localhost:5173?location=Right_Palm" coords="136,177,337,472" shape="rect">
    <area target="" alt="Right Wrist" title="Right Wrist" href="http://localhost:5173?location=Right_Wrist" coords="127,201,7,543" shape="rect">
     */

    const MAP = {
        name: "front-map",
        areas:[
            {id: 1, name : "Right Thumb", shape: "square", coords: [346,356,557,439]},
            {id: 1, name : "right pointer", shape: "square", coords: [594,155,489,269]},
            {id: 1, name : "right pointer", shape: "square", coords: [481,190,405,310]},
            {id: 1, name: "right middle finger", shape: "square", coords: [579,55,477,149]},
            {id: 1, name: "right middle finger", shape: "square", coords: [473,99,408,187]},
            {id: 1, name: "right ring finger", shape: "square", coords: [473,11,403,93]},
            {id: 1, name: "right ring finger", shape: "square", coords: [382,91,324,165]},
            {id: 1, name: "right little finger", shape: "square", coords: [376,0,289,81]},
            {id: 1, name: "right little finger", shape: "square", coords: [225,82,293,149]},
            {id: 1, name: "right palm", shape: "square", coords: [136,177,337,472]},
            {id: 1, name: "right wrist", shape: "square", coords: [127,201,7,543]},
            
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

export default RightHand;