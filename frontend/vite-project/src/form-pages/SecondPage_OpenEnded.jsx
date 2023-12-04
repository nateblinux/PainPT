import React from 'react'
import {
    Button,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel,
    Box,
    TextField,
    Container
} from '@mui/material';

const SecondPage_OpenEnded = ({nextStep, prevStep, handleChange, values}) =>{
    const Continue = e =>{
        e.preventDefault();
        console.log(values.radio_question1);
        console.log(values.openEnded_question2);
        console.log(values.openEnded_question3);
        console.log(values.openEnded_question4);
        console.log(values.openEnded_question5);
        console.log(values.openEnded_question6);
        nextStep();
    }

    const goBack = e =>{
        e.preventDefault();
        prevStep();
    }

    return (
        <>
            <form action="">
                <Box>
                    <FormControl variant={"filled"}>
                        <FormLabel id="question1">Have you been treated for this problem before?</FormLabel>
                        <RadioGroup row defaultValue={values.radio_question1} onChange={handleChange('radio_question1')}>
                            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="No" control={<Radio />} label="No" />
                        </RadioGroup>

                        <FormLabel id="question2">What kind of treatment? For example, Medication, Injection, Splint/Brace, Therapy,
                            Surgery, Xray/MRI, Nerve Test, etc.
                        </FormLabel>
                        <TextField  margin="normal"
                                    id="filled-basic"
                                    label="" variant="filled"
                                    defaultValue={values.openEnded_question2} onChange={handleChange('openEnded_question2')}/>

                        <FormLabel id="question3">How did it occur?</FormLabel>
                        <TextField
                            id="filled-multiline-static"
                            multiline
                            rows={2}
                            variant="filled"
                            margin="normal"
                            defaultValue={values.openEnded_question3} onChange={handleChange('openEnded_question3')}
                        />

                        <FormLabel id="question4">What makes your pain/symptoms worse? For examples,
                            Sitting, Lying, Reaching, Standing, Walking, Running, Bending, Lifting, etc</FormLabel>
                        <TextField
                            id="filled-multiline-static"
                            multiline
                            rows={2}
                            variant="filled"
                            margin="normal"
                            defaultValue={values.openEnded_question4} onChange={handleChange('openEnded_question4')}
                        />

                        <FormLabel id="question5">What relieves your pain/symptoms? For example, Rest, Ice, Medication, Positioning, etc</FormLabel>
                        <TextField
                            id="filled-multiline-static"
                            multiline
                            rows={2}
                            variant="filled"
                            margin="normal"
                            defaultValue={values.openEnded_question5} onChange={handleChange('openEnded_question5')}
                        />

                        <FormLabel id="question6">Are there any other details you'd like to include or comments you'd like to make that haven't been asked of you?</FormLabel>
                        <TextField
                            id="filled-multiline-static"
                            // label="answer"
                            multiline
                            rows={2}
                            variant="filled"
                            margin="normal"
                            defaultValue={values.openEnded_question6} onChange={handleChange('openEnded_question6')}
                        />


                    </FormControl>
                </Box>

                <button type="submit" onClick={ Continue }>Continue</button>
                <button type="submit" onClick={ goBack }>Back</button>
            </form>


        </>

    )
}
export default SecondPage_OpenEnded;
