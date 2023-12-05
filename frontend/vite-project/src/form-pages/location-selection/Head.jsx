import React, { Component } from 'react';
import { useState } from 'react';
import img from "../../Pics/head.png"
import ImageMapper from 'react-image-mapper';

const Head = ({setLocation, goToPage, prevStep}) => {
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
            {name : "top head", shape: "square", coords: [7,33,562,281]},
            {name : "chin", shape: "square", coords: [68,596,373,751]},
            {name: "nose", shape: "square", coords: [193,380,106,505]},
            {name: "cheek", shape: "square", coords: [197,381,430,505]},
            {name: "eyes", shape: "square", coords: [1,284,327,377]},
            {name: "back head", shape: "square", coords: [333,284,517,378]},
            {name: "mouth", shape: "square", coords: [51,513,377,589]},
            {name: "cheek", shape: "square", coords: [102,379,25,506]},
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

export default Head;