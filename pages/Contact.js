import React, {useActionState, useState} from 'react';
import Link from 'next/link';

const Contact = () => {
    //contact form
    const [fname, setFname] = useState("");
    const [fnameError, setFnameError] = useState("")
    const [lname, setLname] = useState("");
    const [lnameError, setLnameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [message, setMessage] = useState("");
    const [msgError, setMsgError] = useState("");

        
    //validate first name
    const validateFname = (fname) => {
        if (!fname.trim()) {
            return ("First name is required!");
        } else if (!/^[a-zA-Z\s]+$/.test(fname)) {
            return ("Name can only contain letters.");
        } 
        return "";    
    };

    //validate first name
    const validateLname = (lname) => {
        if (!lname.trim()) {
            return ("Last name is required!");
        } else if (!/^[a-zA-Z\s]+$/.test(lname)) {
            return ("Name can only contain letters.");
        } 
        return "";    
    };
        
    //validate email field
    const validateEmail = (email) => {
        if(!email.trim()) {
            return ("Email is required!");
        } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            return ("Invalid email.");
        }
        return "";
    };

    //validate phone number
    const validatePhone = (phoneNum) => {
        if (!phoneNum.trim()) {
            return "";
        } else if (!/^\(\d{3}\)\d{3}-\d{4}$/.test(phoneNum)) {
            return "Phone number must be in the format of (000)000-0000.";
        }
        return "";
    };

    const validateMessage = (message) => {
        if (!message.trim()) {
            return "Message cannot be empty.";
        }
        return "";
    };

    //validate form upon submission
    const submission =(submit) => {
        submit.preventDefault();
        let isValid = true;

        const fnameValid = validateFname(fname);
        if (fnameValid) {
            setFnameError(fnameValid);
            isValid = false;
        } else {
            setFnameError("");
        }

        const lnameValid = validateLname(lname);
        if (lnameValid) {
            setLnameError(lnameValid);
            isValid = false;
        } else {
            setLnameError("");
        }

        const emailValid = validateEmail(email);
        if (emailValid) {
            setEmailError(emailValid);
            isValid = false;
        } else {
            setEmailError("");
        }

        const phoneValid = validatePhone(phoneNum);
        if (phoneValid) {
            setPhoneError(phoneValid);
            isValid = false;
        } else {
            setPhoneError("");
        }

        const messageValid = validateMessage(message);
        if (messageValid) {
            setMsgError(messageValid);
            isValid = false;
        } else {
            setMsgError("");
        }

        if (isValid) {
            alert("Form submitted successfully!");

            setFname("");
            setLname("");
            setEmail("");
            setPhoneNum("");
            setMessage("");
        }
    };

    return (
        <div className='contact'>
            <div className="header-nav">
                <nav>
                  <ul>
                    <li><Link href="/" className='nav-link'>Homepage</Link></li>
                    <li><Link href="/User" className='nav-link'>User Information</Link></li>
                    <li><Link href="/Contact" className='nav-link'>Contact</Link></li>
                  </ul>
                </nav>                                    
            </div>

            <h1 style={{textAlign: "center"}}>Assignment 1: Foundations of Advanced Front-end Development</h1>

            <div className='info-container'>
                <div className='connect-bio'>
                    <h2>Connect with Anupa!</h2>
                    <p>Aside from being passionate about web design and development, Anupa is passionate about photography, graphic design, and writing.</p>
                </div>
                <form className='contact-form' onSubmit={submission}>
                    <label>First Name</label>
                    <input id='fname' type='text' value={fname} placeholder='John' onChange={(submit) => setFname(submit.target.value)}></input>
                    {fnameError && <p style={{color: fnameError ? "red" : ""}}>{fnameError}</p>}
                    <label>Last Name</label>
                    <input id='lname' type='text' value={lname} placeholder='Doe' onChange={(submit) => setLname(submit.target.value)}></input>
                    {lnameError && <p style={{color: lnameError ? "red" : ""}}>{lnameError}</p>}
                    <label>Email</label>
                    <input id='email' type='text' value={email} placeholder='example@example.com' onChange={(submit) => setEmail(submit.target.value)}></input>
                    {emailError && <p style={{color: emailError ? "red" : ""}}>{emailError}</p>}
                    <label>Phone Number (optional)</label>
                    <input id='phone' type='text' value={phoneNum} placeholder='(000)000-0000' onChange={(submit) => setPhoneNum(submit.target.value)}></input>
                    {phoneError && <p style={{color: phoneError ? "red" : ""}}>{phoneError}</p>}
                    <label>Message</label>
                    <textarea id='message' value={message} placeholder='Write your message here...' onChange={(submit) => setMessage(submit.target.value)}></textarea>
                    {msgError && <p style={{color: msgError ? "red" : ""}}>{msgError}</p>}
                    <button id='send-btn' type='submit'>Send</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;