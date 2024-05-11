import React, { useState } from 'react';
import './../CSS/Contact.css'; // Ensure you have a corresponding CSS file for styling
import emailjs from 'emailjs-com';

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // emailjs.send takes the service ID, template ID, template parameters, and your user ID.
        emailjs.sendForm('service_pngpwbr', 'template_rm5xmcv', e.target as HTMLFormElement, 'Jhpl351NRd1mHl4U-9LIv')
            .then((result) => {
                console.log('Email successfully sent!', result.text);
                // Handle the successful email sending case here (e.g., display a success message).
            }, (error) => {
                console.log('Failed to send email.', error.text);
                // Handle the email sending failure case here (e.g., display an error message).
            });
        setFormData({ name: '', email: '', message: '' }); // Reset the form data state if needed.
    };


    return (
        <div className='contact-section' id='contact'>
            <h2>Contact Me</h2>
            <p>If you have any questions or just want to get in touch, feel free to contact me.</p>
            <div className="contact-details">
                <div className="email-address">
                    <h3>Email Me At:</h3>
                    <p><a href="mailto:harsh.mithaiwala.hm@gmail.com">harsh.mithiawala.hm@gmail.com</a></p>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
