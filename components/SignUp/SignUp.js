import React, { useState } from "react";

import Button from "../small-components/Button";
import TextInput from "../small-components/TextInput";

import "./SignUp.css";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [zipcode, setZipCode] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const paylaod = {
      firstName,
      lastName,
      zipcode,
    };

    const response = await fetch("http://localhost:5000/api/auth/signup");
    const jsonResponse = await response.json();

    if (response.success) {
      alert("logged in");
    }
  };
  return (
    <form className="sign-up" onSubmit={handleSubmit}>
      <h2>Create Account</h2>
      <p>Create your account to use this applicaiton</p>

      <div className="form-group">
        <label>First Name</label>
        <TextInput onChange={(e) => setFirstName(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Last Name</label>
        <TextInput onChange={(e) => setLastName(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Zip Code</label>
        <TextInput onChange={(e) => setZipCode(e.target.value)} />
      </div>

      <div className="form-actions">
        <Button title="Submit" onClick={handleSubmit} />
      </div>
    </form>
  );
};

export default SignUp;
