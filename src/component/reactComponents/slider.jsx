import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


export default function RangeSlider(props) {

    function valuetext(value) {
        return `${value}${props.text}`;
    }

    return (
        <Box sx={{ width: 300 }}>
            <Slider
                min={props.min}
                max={props.max}
                value={props.value}
                onChange={props.handleChange}
                valueLabelDisplay="auto"
                valueLabelFormat={valuetext}
            />
        </Box>
    );
}