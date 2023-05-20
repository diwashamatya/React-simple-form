import { useState } from 'react';

export default function Dropdown() {
    const [selectedOption, setSelectedOption] = useState("option1");

    const handleDropDownChange = (e) => {
        setSelectedOption(e.target.value);
        
    };
    return (
        <div>
            <label>
                Select an Option:
                <select value={selectedOption} onChange={handleDropDownChange}>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
            </label>
            <p>Selected Option: {selectedOption}</p>
        </div>
    )
}

