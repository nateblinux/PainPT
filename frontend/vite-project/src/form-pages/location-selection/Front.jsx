import React, { Component } from 'react';
import { useState } from 'react';
import front from "../../Pics/front.png"
import ImageMapper from 'react-image-mapper';

const Front = ({handleChange, goToPage, nextStep}) => {
    const Continue = e =>{
        e.preventDefault();
        nextStep();
    }

    const GoTo = e =>{
        goToPage(e);
    }

    function clicked(area){
        console.log(area.name);
        GoTo(area.id + 9);
    }

    const MAP = {
        name: "front-map",
        areas:[
            {id: 0, name : "head", shape: "square", coords: [220,13,334,158]},
            {id: 1, name : "left-arm", shape: "square", coords: [372,158,503,333]},
            {id: 2, name: "right-arm", shape: "square", coords: [-1,-1,165,253]},
            {id: 3, name: "torso", shape: "square", coords: [168,161,367,523]},
            {id: 4, name: "left-leg", shape: "square", coords: [281,527,395,1018]},
            {id: 5, name: "right-leg", shape: "square", coords: [215,526,78,1012]},
            {id: 1, name: "left-arm", shape: "square", coords: [404,335,510,585,287,525]},
            {id: 1, name: "left-arm", shape: "square", coords: [376,334,403,411]},
            {id: 2, name: "right-arm", shape: "square", coords: [167,-1,211,83]},
            {id: 9, name: "torso", shape: "square", coords: [371,413,398,520]},
            {id: 5, name: "right-leg", shape: "square", coords: [219,525,277,741]},
        ]
    } 

    return (
        <div class="holder">
            <ImageMapper
                src={front}
                map={MAP}
                onClick={area => clicked(area)}
                imgWidth={531}
                width={300}
            />
            <button type="submit" onClick={ Continue }>Back View</button>
        </div>
    )
}

export default Front;