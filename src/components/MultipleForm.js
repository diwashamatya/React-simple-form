import { useState } from "react";


export default function Multiple() {

    const [formData, setFormData] = useState({ name: "", email: "", message: "" })

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (e) => {
        // e.preventDefault();/method is used to stop the default behavior of an event from occurring.
        alert(`Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`);//template literal
    };
    return (
        <form onSubmit={handleSubmit}>

            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}></input>

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}></input>

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} />
            <button type="submit">Submit</button>

        </form>
    )
}