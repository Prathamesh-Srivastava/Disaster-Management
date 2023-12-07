import React from "react";
import "./Volunteer.css";
import Navbar from "../Components/Navbar";

const Volunteer = () => {
    return (
        <div className="volunteer">
        <Navbar/>
        <div className="formDiv">

        <form id="volunteerForm">
            <label>
                Name:
                <input type="text" name="name" required />
            </label>

            <label>
                Email:
                <input type="email" name="email" required />
            </label>

            <label>
                Phone Number:
                <input type="tel" name="phone" required />
            </label>

            <label>
                Availability:
                <textarea name="availability"></textarea>
            </label>

            <button type="submit">Submit</button>
        </form>
        </div>
        </div>
    )
}

export default Volunteer;