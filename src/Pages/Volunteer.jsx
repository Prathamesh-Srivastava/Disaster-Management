import React, { useState } from "react";
import "./Volunteer.css";
import Navbar from "../Components/Navbar";
import axios from 'axios'

const Volunteer = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setphone] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            name: name,
            email: email,
            phone: phone,
        }

        const res = await axios.post('https://swe-q4t7.onrender.com/adduser', data);
        console.log(res.data);
        setEmail("");
        setName("");
        setphone("");
        alert('form submitted')

        console.log(data);
    }

    return (
        <div className="volunteer">
            <Navbar />
            <div className="formDiv">
            <form id="volunteerForm" onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} required onChange={(e) => setName(e.target.value)} />
                </label>

                <label>
                    Email:
                    <input type="email" value={email} required onChange={(e) => setEmail(e.target.value)} />
                </label>

                <label>
                    Phone Number:
                    <input type="tel" value={phone} required onChange={(e) => setphone(e.target.value)} />
                </label>



                <button type="submit">Submit</button>
            </form>
            </div>
        </div>
    )
}

export default Volunteer;