import { useState } from 'react';

export default function Checkbox() {
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = (e) => {
        setIsChecked(e.target.value);
        console.log(e.target)

    }
    return (
        <form>
            <label htmlFor="color">
                <input type="checkbox" name="color" checked={isChecked} onChange={handleChange}></input>
                Blue
            </label>
            {isChecked && <div>Blue is selected</div>}
        </form>
    );
}