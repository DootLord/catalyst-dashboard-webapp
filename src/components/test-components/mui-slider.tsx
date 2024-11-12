import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";
import React from "react";

interface MuiSliderProps {
    changeEvent: (newValue: number) => void;
}

export default function MuiSlider({changeEvent}: MuiSliderProps) {
    const [value, setValue] = React.useState<number>(30);

    function handleChange(_:Event, newValue: number | number[]) {
        setValue(newValue as number);
        changeEvent(value);
    }

    return (
        <Stack>
            <Slider value={value} onChange={handleChange}/>
        </Stack>
    )
}