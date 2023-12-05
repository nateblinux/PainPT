import React from 'react'
import { Box, InputLabel, MenuItem, FormControl, Select, RadioGroup, FormControlLabel, Radio } from '@mui/material'
import { sizing } from '@mui/system';

const PainScaleActive = ({nextStep, prevStep, handleChange, values}) =>{
    const Continue = e =>{
        e.preventDefault();
        console.log(values.pain_type);
        console.log(values.radio_pain_scale_active);
        console.log(values.radio_pain_scale_rest);
        nextStep();
    }

    const goBack = e =>{
        e.preventDefault();
        prevStep();
    }

    return (
        <form action="">
            <h4>What type of pain are you experiencing?</h4>
            <Box>
                <FormControl variant="filled">
                <InputLabel id="demo-simple-select-label">Select a pain type</InputLabel>
                <Select
                    value={values.pain_type}
                    label="pain_type_desc"
                    onChange={handleChange('pain_type')}
                    sx={{width: '25em'}}
                >
                    <MenuItem value="sharp">Sharp</MenuItem>
                    <MenuItem value="dull">Dull</MenuItem>
                    <MenuItem value="aching">Aching</MenuItem>
                    <MenuItem value="burning">Burning</MenuItem>
                    <MenuItem value="throbbing">Throbbing</MenuItem>

                </Select>
                </FormControl>
            </Box>
                
            <h4>Rate your pain level when active</h4>
            <RadioGroup row onChange={handleChange('radio_pain_scale_active')} value={values.radio_pain_scale_active}>
                <p>(Least)</p>
                <FormControlLabel labelPlacement='top' value="1" control={<Radio />} label="1" /> 
                <FormControlLabel labelPlacement='top' value="2" control={<Radio />} label="2" /> 
                <FormControlLabel labelPlacement='top' value="3" control={<Radio />} label="3" /> 
                <FormControlLabel labelPlacement='top' value="4" control={<Radio />} label="4" /> 
                <FormControlLabel labelPlacement='top' value="5" control={<Radio />} label="5" /> 
                <FormControlLabel labelPlacement='top' value="6" control={<Radio />} label="6" /> 
                <FormControlLabel labelPlacement='top' value="7" control={<Radio />} label="7" /> 
                <FormControlLabel labelPlacement='top' value="8" control={<Radio />} label="8" /> 
                <FormControlLabel labelPlacement='top' value="9" control={<Radio />} label="9" /> 
                <FormControlLabel labelPlacement='top' value="10" control={<Radio />} label="10" />
                <p>(Most)</p>
                </RadioGroup>
            <h4>Rate your pain level when resting</h4>
                <RadioGroup row onChange={handleChange('radio_pain_scale_rest')} value={values.radio_pain_scale_rest}>
                <p>(Least)</p>
                <FormControlLabel labelPlacement='top' value="1" control={<Radio />} label="1" /> 
                <FormControlLabel labelPlacement='top' value="2" control={<Radio />} label="2" /> 
                <FormControlLabel labelPlacement='top' value="3" control={<Radio />} label="3" /> 
                <FormControlLabel labelPlacement='top' value="4" control={<Radio />} label="4" /> 
                <FormControlLabel labelPlacement='top' value="5" control={<Radio />} label="5" /> 
                <FormControlLabel labelPlacement='top' value="6" control={<Radio />} label="6" /> 
                <FormControlLabel labelPlacement='top' value="7" control={<Radio />} label="7" /> 
                <FormControlLabel labelPlacement='top' value="8" control={<Radio />} label="8" /> 
                <FormControlLabel labelPlacement='top' value="9" control={<Radio />} label="9" /> 
                <FormControlLabel labelPlacement='top' value="10" control={<Radio />} label="10" /> 
                <p>(Most)</p>
            </RadioGroup>
  
        <button type="submit" onClick={ goBack }>Back</button>
        <button type="submit" onClick={ Continue }>Continue</button>
      </form> 
    )
}
export default PainScaleActive;