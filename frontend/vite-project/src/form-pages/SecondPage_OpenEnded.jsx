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
        console.log(values.radio);
        nextStep();
    }

    const goBack = e =>{
        e.preventDefault();
        prevStep();
    }

    return (
        <>
            <Container maxWidth="lg" justifyContent="center">
                <FormControl>
                    <FormLabel required id="question1">Have you been treated for this problem before?</FormLabel>
                    <RadioGroup
                        row
                        name="radio-buttons"
                        value={values.radio}
                        onChange={handleChange('radio')}
                    >
                        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="No" control={<Radio />} label="No" />
                    </RadioGroup>

                    <FormLabel id="question2">What kind of treatment? For example, Medication, Injection, Splint/Brace, Therapy,
                        Surgery, Xray/MRI, Nerve Test, etc.</FormLabel>
                    <TextField  margin="normal" id="filled-basic" label="answer" variant="filled"/>

                    <FormLabel id="question3">How did it occur?</FormLabel>
                    <TextField
                        id="filled-multiline-static"
                        label="answer"
                        multiline
                        rows={2}
                        variant="filled"
                        margin="normal"
                    />

                    <FormLabel id="question4">What makes your pain/symptoms worse? For examples,
                        Sitting, Lying, Reaching, Standing, Walking, Running, Bending, Lifting, etc</FormLabel>
                    <TextField
                        id="filled-multiline-static"
                        label="answer"
                        multiline
                        rows={2}
                        variant="filled"
                        margin="normal"
                    />

                    <FormLabel id="question5">What relieves your pain/symptoms? For example, Rest, Ice, Medication, Positioning, etc</FormLabel>
                    <TextField
                        id="filled-multiline-static"
                        label="answer"
                        multiline
                        rows={2}
                        variant="filled"
                        margin="normal"
                    />

                    <FormLabel id="question6">Are there any other details you'd like to include or comments you'd like to make that haven't been asked of you?</FormLabel>
                    <TextField
                        id="filled-multiline-static"
                        label="answer"
                        multiline
                        rows={2}
                        variant="filled"
                        margin="normal"
                    />

                    <button type="submit" onClick={ Continue }>Next</button>
                    <button type="submit" onClick={ goBack }>Back</button>
                </FormControl>
            </Container>

        </>
    )
}
export default SecondPage_OpenEnded;
