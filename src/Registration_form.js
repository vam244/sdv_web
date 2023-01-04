import { useState } from "react";
import "./Reg.css";
import FormInput from "./FormInput";
import React from 'react'


const Registration_form= () => {
  const [values, setValues] = useState({
    Name: "",
    Email: "",
    Roll_Number: "",
    Department : "",
    Institute_Email_id: "",
    Contact_No: "",
    Payment_Proof :"",
  });

  const inputs = [
    {
      id: 1,
      name: "Name",
      type: "text",
      placeholder: "Name",
      errorMessage:
        "It is required!",
      label: "Name",
      required: true,
    },
    {
      id: 2,
      name: "Email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "Roll Number",
      type: "text",
      placeholder: "Roll Number",
      label: "Roll Number",
      errorMessage: "It is required!",
      required: true,
    },
    {
        id: 4,
        name: "Department",
        type: "text",
        placeholder: "Department",
        errorMessage:
          "It is required!",
        label: "Department",
        required: true,

    },
    {
        id: 5,
        name: "Institute Email ID",
        type: "email",
        placeholder: "Institute Email ID",
        errorMessage: "It should be a valid email address!",
        label: "Institute Email ID",
        required: true,
    },
    {
      id: 6,
      name: "Contact no.(WhatsApp Number)",
      type: "tel",
      placeholder: "Contact no.(WhatsApp Number)",
      errorMessage: "It is required!",
      label: "Contact no.(WhatsApp Number)",
      required: true,
    },
    {
    id: 7,
    name: "Payment proof",
    type: "file",
    placeholder: "Payment proof",
    errorMessage:
      "It is required!",
    label: "Payment proof (UPI ID : 9382432159@paytm ) : QR Code is given below !",
    required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };


  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          /> 
        ))}
        
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png"
        alt="QR Code for Payment" />

        <button>Submit</button>
      
      <br />
      </form>
    </div>
  );
};
export default Registration_form
