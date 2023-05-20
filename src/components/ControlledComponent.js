import {useState} from 'react';

export default function ControlledComponent(){
    const [inputValue,setInputValue] = useState('');

    const handleChange = (e)=>{
        setInputValue(e.target.value);
    };
    return(
        <form>
            <label>Input Value:
                <input type='text' value={inputValue} onChange={handleChange} />
            </label>
            <p>Input Value: {inputValue}</p>
        </form>
    )
}