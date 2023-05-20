import { useState } from 'react';
import './css/Fullform.css'

export default function Fullform() {
    const [formState, setFormState] = useState({
        name: "",
        email: '',
        password: "",
        confirmPassword: "",
    });

    const [formErrors, setFormErrors] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const validateForm = () => {
        let isValid = true;

        if (!formState.name) {
            setFormErrors((prevState) => ({
                ...prevState,
                name: "Name is required"
            }));
            isValid = false;

        } else if (formState.name.length < 3) {
            setFormErrors((prevState) => ({
                ...prevState,
                name: "Name should be at least 3 characters long"
            }));
            isValid = false;
        }
        else {
            setFormErrors((prevState) => ({
                ...prevState,
                name: "",
            }))
        }


        if (!formState.email) {
            setFormErrors((prevState) => ({
                ...prevState,
                email: "Email is required"
            }));
            isValid = false;
        } else if (
            !/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(formState.email)
        ) {
            setFormErrors((prevState) => ({
                ...prevState,
                email: "Email is invalid",
            }));
            isValid = false;
        } else {
            setFormErrors((prevState) => ({
                ...prevState,
                email: "",
            }));
        }



        if (!formState.password) {
            setFormErrors((prevState) => ({
                ...prevState,
                password: "Password is required",
            }));
            isValid = false;
        } else if (formState.password.length < 6) {
            setFormErrors((prevState) => ({
                ...prevState,
                password: "Password should be at least 6 characters long",
            }));
            isValid = false;
        } else {
            setFormErrors((prevState) => ({
                ...prevState,
                password: "",
            }));
        }

        if (!formState.confirmPassword) {
            setFormErrors((prevState) => ({
                ...prevState,
                confirmPassword: "Confirm Password is required",
            }));
            isValid = false;
        } else if (formState.confirmPassword !== formState.password) {
            setFormErrors((prevState) => ({
                ...prevState,
                confirmPassword: "Confirm Password does not match",
            }));
            isValid = false;
        } else {
            setFormErrors((prevState) => ({
                ...prevState,
                confirmPassword: "",
            }));
        }

        return isValid;
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
        if (validateForm()) {
            console.log("Form submitted successfully!");
            // You can submit the form data to the server here
        } else {
            console.log("Form validation failed");
        }

    }

    const handleChange = (e) => {


        const { name, value } = e.target;

        setFormState((prevState) => ({
            ...prevState,
            [name]: value,//In React, [name] is used to set a dynamic key in an object.

            //    In the context of form handling, name refers to the name attribute of an input field. By using [name] as a key in an object, we can set the value of that object property dynamically based on the name of the input field that was changed.

        })
        )

    }

    return (

        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='name'> Name:</label>
                <input type='text' name='name' onChange={handleChange} />
                {formErrors.name && <span>{formErrors.name}</span>}
            </div>
            <br />
            <div>
                <label htmlFor='email'>
                    Email:
                    <input type="email" name="email" onChange={handleChange} />
                    {formErrors.email && <span>{formErrors.email}</span>}

                </label>
            </div>
            <br />
            <div>
                <label htmlFor='password'>
                    Password:
                    <input type="password" name="password" onChange={handleChange} />
                    {formErrors.password && <span>{formErrors.password}</span>}
                </label>
                <label>
                    Confirm Password:
                    <input type="password" name="confirmPassword" onChange={handleChange} />
                    {formErrors.confirmPassword && <span>{formErrors.confirmPassword}</span>}
                </label>

            </div>
            <br />
            <button type="submit">Submit</button>
        </form>


    )
}

