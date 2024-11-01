import React from "react";


function ContactSection() {
    const validateForm = () => {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const contactNo = document.getElementById('contactNo').value.trim();
        const message = document.getElementById('message').value.trim();

        let isValid = true;

        // Name validation
        if (name === '') {
            document.getElementById('nameError').innerText = 'Name is required.';
            isValid = false;
        } else {
            document.getElementById('nameError').innerText = '';
        }

        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === '') {
            document.getElementById('emailError').innerText = 'Email is required.';
            isValid = false;
        } else if (!emailPattern.test(email)) {
            document.getElementById('emailError').innerText = 'Please enter a valid email address.';
            isValid = false;
        } else {
            document.getElementById('emailError').innerText = '';
        }

        // Contact number validation
        const contactPattern = /^[0-9]{10}$/;
        if (contactNo === '') {
            document.getElementById('contactError').innerText = 'Contact number is required.';
            isValid = false;
        } else if (!contactPattern.test(contactNo)) {
            document.getElementById('contactError').innerText = 'Contact number must be 10 digits.';
            isValid = false;
        } else {
            document.getElementById('contactError').innerText = '';
        }

        // Message validation
        if (message === '') {
            document.getElementById('messageError').innerText = 'Message is required.';
            isValid = false;
        } else {
            document.getElementById('messageError').innerText = '';
        }

        if (isValid) {
            alert('Form submitted successfully!');
            resetForm();
        }
    };

    const resetForm = () => {
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('contactNo').value = '';
        document.getElementById('message').value = '';

        document.getElementById('nameError').innerText = '';
        document.getElementById('emailError').innerText = '';
        document.getElementById('contactError').innerText = '';
        document.getElementById('messageError').innerText = '';
    };

    return (
        <div className="background">
            <div className="container">
                <div className="screen">
                    <div className="screen-header">
                        <div className="screen-header-left">
                            <div className="screen-header-button close"></div>
                            <div className="screen-header-button maximize"></div>
                            <div className="screen-header-button minimize"></div>
                        </div>
                        <div className="screen-header-right">
                            <div className="screen-header-ellipsis"></div>
                            <div className="screen-header-ellipsis"></div>
                            <div className="screen-header-ellipsis"></div>
                        </div>
                    </div>
                    <div className="screen-body">
                        <div className="screen-body-item left">
                            <div className="app-title">
                                <span>CONTACT</span>
                                <span>US</span>
                            </div>
                            <div className="app-contact" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                EMAIL: info@kinowave.tech
                            </div>
                        </div>
                        <div className="screen-body-item">
                            <div className="app-form" id="contactForm">
                                <div className="app-form-group">
                                    <input id="name" className="app-form-control" placeholder="NAME" />
                                    <small className="error-message" id="nameError" style={{ color: 'red', fontFamily: "'Montserrat', sans-serif" }}></small>
                                </div>
                                <div className="app-form-group">
                                    <input id="email" className="app-form-control" placeholder="EMAIL" type="email" />
                                    <small className="error-message" id="emailError" style={{ color: 'red', fontFamily: "'Montserrat', sans-serif" }}></small>
                                </div>
                                <div className="app-form-group">
                                    <input id="contactNo" className="app-form-control" placeholder="CONTACT NO" minLength="10" maxLength="10" />
                                    <small className="error-message" id="contactError" style={{ color: 'red', fontFamily: "'Montserrat', sans-serif" }}></small>
                                </div>
                                <div className="app-form-group message">
                                    <textarea id="message" className="app-form-control" placeholder="MESSAGE" rows="10"></textarea>
                                    <small className="error-message" id="messageError" style={{ color: 'red', fontFamily: "'Montserrat', sans-serif" }}></small>
                                </div>
                                <div className="app-form-group buttons">
                                    <button className="app-form-button" type="button" onClick={resetForm}>CANCEL</button>
                                    <button className="app-form-button" type="button" onClick={validateForm}>SEND</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactSection;