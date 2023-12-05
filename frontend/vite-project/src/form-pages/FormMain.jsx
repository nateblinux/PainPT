import React, { Component } from 'react';
import { useState } from 'react';
import FirstPage from './FirstPage';
import VerifyPage from './VerifyPage';
import ResPage from './ResPage';
import PainScaleActive from './PainScaleActive';
import PainProgression from './PainProgression';
import SymptomsPage from './Symptoms';
import SecondPage_OpenEnded from './SecondPage_OpenEnded.jsx';
import Front from './location-selection/Front.jsx';
import Back from './location-selection/Back.jsx';
import Head from './location-selection/Head.jsx';
import LeftArm from './location-selection/LeftArm.jsx';
import RightArm from './location-selection/RightArm.jsx';
import Torso from './location-selection/Torso.jsx';
import LeftLeg from './location-selection/LeftLeg.jsx';
import RightLeg from './location-selection/RightLeg.jsx';
import LeftHand from './location-selection/LeftHand.jsx';
import RightHand from './location-selection/RightHand.jsx';


export default class FormMain extends Component{
    state = { //store the state of the form - including any response from server
        step: 7,
        location: '',
        radio_pain_scale_active: "0",
        radio_pain_scale_rest: "0",
        pain_progression:'',
        pain_start_date:'',
        pain_type: '',
        pain_experience: '',
        symptoms_1: '',
        symptoms_2: '',
        symptoms_3: '',
        symptoms_4: '',
        symptoms_5: '',
        symptoms_6: '',
        symptoms_7: '',
        symptoms_8: '',
        radio_question1: '',
        openEnded_question2: '',
        openEnded_question3: '',
        openEnded_question4: '',
        openEnded_question5: '',
        openEnded_question6: '',
        message: '', //keep message at bottom
    }

    //step through form forward + backwards
    prevStep = () =>{
        const {step} = this.state;
        this.setState({step: step - 1});
    }

    nextStep = () =>{
        const {step} = this.state;
        //console.log(this.state);
        this.setState({step: step + 1});
    }

    goToPage = (page) =>{
        const { step } = this.state;
        this.setState({step: page});
    }
    
    //handle the changes
    handleChange = input => e =>{
        this.setState({[input]: e.target.value});
    }

    setLocation = value =>{
        this.setState({["location"] : value});
    }

    //pass to server and get response
    submitForm = async () =>{
        const state = this.state;
        console.log(state);
        //console.log(input0);
        fetch("http://localhost:8000/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              state
            }),
          })
            .then((response) => response.json()) //this part is for response from api
            .then((data) =>{
                this.setState({message: data.hello})
            })
            .catch((error) => {
              console.log(error);
            });
    }

    //render current state of form
    render(){
        const { step } = this.state;
        const values = this.state

        switch(step){
            case 0:
                return(
                     <FirstPage 
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 1:
                return(
                    <PainScaleActive
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        submitForm={this.submitForm}
                        values={values}
                    />
                )
            case 2:
                return(
                    <PainProgression
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        submitForm={this.submitForm}
                        values={values}
                    />
                )

            case 3:
                return(
                    <SymptomsPage
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        submitForm={this.submitForm}
                        values={values}
                    />
                )

             case 4:
                return(
                    <SecondPage_OpenEnded
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        submitForm={this.submitForm}
                        values={values}
                    />
                )

            case 5: //keep this page last
                return(
                    <VerifyPage 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        submitForm={this.submitForm}
                        values={values}
                    />)
            case 6:
                return(<ResPage 
                    response={ this.state.message } 
                    prevStep={this.prevStep}                    
                />)
            case 7:
                return(
                    <Front 
                        handleChange={this.handleChange} 
                        nextStep={this.nextStep}
                        goToPage={this.goToPage} 
                    />
                )
            case 8:
                return(
                    <Back 
                        setLocation={this.setLocation}
                        prevStep={this.prevStep}
                        goToPage={this.goToPage} 
                    />
                )
            case 9:
               return(
                    <Head 
                        setLocation={this.setLocation}
                        prevStep={this.prevStep}
                        goToPage={this.goToPage} 
                    />
                )
            case 10:
                return(
                    <LeftArm 
                        setLocation={this.setLocation}
                        prevStep={this.prevStep}
                        goToPage={this.goToPage} 
                    />
                )
            case 11:
                return(
                    <RightArm
                        setLocation={this.setLocation}
                        prevStep={this.prevStep}
                        goToPage={this.goToPage} 
                    />
                )    
            case 12:
                return(
                    <Torso
                        setLocation={this.setLocation}
                        prevStep={this.prevStep}
                        goToPage={this.goToPage} 
                    />
                )  
            case 13:
                return(
                    <LeftLeg
                        setLocation={this.setLocation}
                        prevStep={this.prevStep}
                        goToPage={this.goToPage} 
                    />
                ) 
            case 14:
                return(
                    <RightLeg
                        setLocation={this.setLocation}
                        prevStep={this.prevStep}
                        goToPage={this.goToPage} 
                    />
                )  
            case 15:
                return(
                    <LeftHand
                        setLocation={this.setLocation}
                        prevStep={this.prevStep}
                        goToPage={this.goToPage} 
                    />
                )  
            case 16:
                return(
                    <RightHand
                        setLocation={this.setLocation}
                        prevStep={this.prevStep}
                        goToPage={this.goToPage} 
                    />
                ) 

        }

    }
}