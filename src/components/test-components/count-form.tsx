import { useState } from "react";

export default function CountForm({ setFood }: { setFood: Function }) {
    // Count the number of times the button is clicked
    const [count, setCount] = useState(0);
    // Store the input value
    const [input, setInput] = useState("");

    function inputChange(e: React.ChangeEvent<HTMLInputElement>) {
        setInput(e.target.value);
    }

    function handleClick() {
        setCount(count + 1);
        setFood(input);
    }

    return (
        <div>
            <input type="text" onChange={inputChange}></input>
            <button onClick={handleClick}>
                Clicked {count} times
            </button>
        </div>

    );
}