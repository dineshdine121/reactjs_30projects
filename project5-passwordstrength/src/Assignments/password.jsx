import React, { useState } from 'react';

function Password() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    window.Email.send({
      Host: 'smtp.gmail.com',
      Username: 'dineshdinesh.a121@gmail.com',
      Password: 'password',
      To: 'dineshdinesh.a121@gmail.com',
      From: formData.email,
      Subject: 'This is the subject',
      Body: `
        Name: ${formData.name} \n
        Email: ${formData.email} \n
        Phone: ${formData.phone} \n
        Message: ${formData.message}
      `,
    }).then((message) => alert(message));
  };

  return (
    <div className="container">
      <form onSubmit={sendEmail}>
        <h3>GET IN TOUCH</h3>

        <input
          type="text"
          id="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          id="email"
          placeholder="Email id"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          id="phone"
          placeholder="Phone no."
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <textarea
          id="message"
          rows="4"
          placeholder="How can we help you?"
          value={formData.message}
          onChange={handleChange}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Password;
