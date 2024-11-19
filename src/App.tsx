import './App.scss'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useState } from 'react'

import { Box, Grid2 } from '@mui/material';

function App() {

    const [clickCount, setClickCount] = useState(0)
    const [buttonClickValue, setButtonClickValue] = useState(50)
    const [serverCount, setServerCount] = useState(0)

    function buttonClickHandler(clickAmount: number = 1) {
        setClickCount(clickCount + clickAmount);
    }

    function sliderChangeHandler(newValue: number) {
        setButtonClickValue(newValue);
    }

    async function submitButtonClickHandler() {
        const fetchRequest = fetch("/api/count", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ value: clickCount }),
        });

        let fetchResponse = await fetchRequest;

        if (fetchResponse.ok) {
            setClickCount(0);
            getServerCount();
        }


    }

    async function getServerCount() {
        const fetchRequest = fetch("/api/count");
        const fetchResponse = await fetchRequest;

        if (fetchResponse.ok) {
            const data = await fetchResponse.json();
            setServerCount(data.value);
        }
    }

    setInterval(getServerCount, 1000);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid2 container spacing={2}>
                <Grid2 size={8}>
                    <span> Size 8 </span>
                </Grid2>
                <Grid2 size={4}>
                    <span> Size 4 </span>
                </Grid2>
            </Grid2>
        </Box>

    )
}

export default App