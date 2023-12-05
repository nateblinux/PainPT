import React, { Component } from 'react';
import { useState } from 'react';
import img from "../../Pics/back.png"
import ImageMapper from 'react-image-mapper';

const Back = ({setLocation, goToPage, prevStep}) => {
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

    const MAP = {
        name: "front-map",
        areas:[
            {name : "back head", shape: "square", coords: [151,53,407,275]},
            {name : "back neck", shape: "square", coords: [171,278,386,343]},
            {name: "back left shoulder", shape: "square", coords: [206,353,50,618]},
            {name: "back right shoulder", shape: "square", coords: [352,348,495,615]},
            {name: "upper back", shape: "square", coords: [211,349,349,618]},
            {name: "middle back", shape: "square", coords: [47,621,496,805]},
            {name: "lower back", shape: "square", coords: [45,809,498,876]},
        ]
    } 

    return (
        <div class="holder">
            <ImageMapper
                src={img}
                map={MAP}
                onClick={area => clicked(area.name)}
            />
            <button type="submit" onClick={ goBack }>Front View</button>
        </div>
    )
}

export default Back;