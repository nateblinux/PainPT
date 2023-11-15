import React, { Component } from 'react';
import { useState } from 'react';
import FirstPage from './FirstPage';
import VerifyPage from './VerifyPage';
import ResPage from './ResPage';
import PainScaleActive from './PainScaleActive';
import PainProgression from './PainProgression';
import SymptomsPage from './Symptoms';


export default class FormMain extends Component{
    state = { //store the state of the form - including any response from server
        step: 0,
        input0: '',
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

            case 4: //keep this page last
                return(
                    <VerifyPage 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        submitForm={this.submitForm}
                        values={values}
                    />)

            default:
                return(<ResPage 
                    response={ this.state.message } 
                    prevStep={this.prevStep}                    
                />)
        }

    }
}