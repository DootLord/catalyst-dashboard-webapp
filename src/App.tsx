import './App.scss'
import { useState } from 'react'

const products = [
    { title: "egg" },
    { title: "cheese" },
    { title: "milk" },
]

function App() {
    //TODO: Figure out how to make a component use the setFood function so food can be updated globally
    const [food, setFood] = useState(products);

    const listItems = products.map((product) => {
        return <li key={product.title.toLocaleLowerCase()}>{product.title}</li>
    });

    const list = <div><ul>{listItems}</ul> <MyButton /></div>;

    return list;
}

function MyButton() {
    // Count the number of times the button is clicked
    const [count, setCount] = useState(0);
    // Store the input value
    const [input, setInput] = useState("");


    function inputChange(e: React.ChangeEvent<HTMLInputElement>) {
        setInput(e.target.value);
    }

    function handleClick() {
        setCount(count + 1);
        // setFood([...food, { title: input }]);
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

export default App