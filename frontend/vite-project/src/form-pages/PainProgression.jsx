import React from 'react'
import {Box, InputLabel, MenuItem, FormControl, Select, ToggleButtonGroup, ToggleButton} from '@mui/material'

const PainProgression = ({nextStep, prevStep, handleChange, values}) =>{
    const Continue = e =>{
        e.preventDefault();
        console.log(values.pain_start_date);
        console.log(values.pain_experience);
        console.log(values.pain_progression);
        nextStep();
    }

    const goBack = e =>{
      e.preventDefault();
      prevStep();
    }

    return (
        <form action="">

          <h3>When did the pain start?</h3>
          <Box sx={{ minWidth: 120 }}>
            <FormControl variant="filled" fullWidth>
                <InputLabel id="demo-simple-select-label">Select a timeframe</InputLabel>
                <Select
                    value={values.pain_start_date}
                    label="pain_timeframe"
                    onChange={handleChange('pain_start_date')}
                >
                    <MenuItem value="today">Today</MenuItem>
                    <MenuItem value="past few days">Past Few Days</MenuItem>
                    <MenuItem value="past week">Past Week</MenuItem>
                    <MenuItem value="past month">Past Month</MenuItem>
                    <MenuItem value="longer than a month">Longer than a Month</MenuItem>

                </Select>
                </FormControl>
            </Box>

          <h4>When do you experience the pain?</h4>
            <Box sx={{ minWidth: 120 }}>
            <FormControl variant="filled" fullWidth>
                <InputLabel id="demo-simple-select-label">Select an option</InputLabel>
                <Select
                    value={values.pain_experience}
                    label="pain_experience"
                    onChange={handleChange('pain_experience')}
                >
                    <MenuItem value="morning">Morning</MenuItem>
                    <MenuItem value="night">Night</MenuItem>
                    <MenuItem value="constant">Constant</MenuItem>
                    <MenuItem value="after exercise">After exercise</MenuItem>
                    <MenuItem value="during exercise">During exercise</MenuItem>
                    <MenuItem value="intermittent">Intermittent</MenuItem>

                </Select>
                </FormControl>
            </Box>

          <h3>How has the pain changed as time has passed?</h3>

          <ToggleButtonGroup color="primary" exclusive onChange={handleChange('pain_progression')} value={values.pain_progression} aria-label="text alignment">
                <ToggleButton value="Worse">Worse</ToggleButton>
                <ToggleButton value="No Change">No Change</ToggleButton>
                <ToggleButton value="Improved">Improved</ToggleButton>
          </ToggleButtonGroup>
          <h3></h3>

        <button type="submit" onClick={ Continue }>Continue</button>
        <button type="submit" onClick={ goBack }>Back</button>
        
      </form> 
    )
}
export default PainProgression;