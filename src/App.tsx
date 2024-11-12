import './App.scss'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useState } from 'react'
import MuiButton from './components/test-components/mui-button';
import MuiSlider from './components/test-components/mui-slider';
import MuiSubmitButton from './components/test-components/mui-submit-button';

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
        <div>
            <h1>Click Count: {clickCount}</h1>
            <h1>Server Count: {serverCount}</h1>
            <MuiButton clickEvent={buttonClickHandler} incrementValue={1} />
            <MuiButton clickEvent={buttonClickHandler} incrementValue={5} />
            <MuiButton clickEvent={buttonClickHandler} incrementValue={buttonClickValue} />
            <MuiSubmitButton clickEvent={submitButtonClickHandler} text="Submit" />


            <MuiSlider changeEvent={sliderChangeHandler} />
        </div>
    )
}

export default App