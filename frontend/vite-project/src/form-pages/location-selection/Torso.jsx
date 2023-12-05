import React, { Component } from 'react';
import { useState } from 'react';
import img from "../../Pics/torso.png"
import ImageMapper from 'react-image-mapper';

const Torso = ({setLocation, goToPage, prevStep}) => {
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
         <area target="" alt="Right Peck" title="Right Peck" href="http://localhost:5173?location=Right_Peck" coords="269,32,35,417" shape="rect">
    <area target="" alt="Left Peck" title="Left Peck" href="http://localhost:5173?location=Left_Peck" coords="333,34,567,421" shape="rect">
    <area target="" alt="Sternum" title="Sternum" href="http://localhost:5173?location=Sturnem" coords="271,34,328,413" shape="rect">
    <area target="" alt="Abdomen" title="Abdomen" href="http://localhost:5173?location=Abdomen" coords="77,421,566,689" shape="rect">
     */

    const MAP = {
        name: "front-map",
        areas:[
            {id: 1, name : "right peck", shape: "square", coords: [269,32,35,417]},
            {id: 1, name : "left peck", shape: "square", coords: [333,34,567,421]},
            {id: 1, name: "sternum", shape: "square", coords: [271,34,328,413]},
            {id: 1, name: "Abdomen", shape: "square", coords: [77,421,566,689]},
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

export default Torso;