import React, { useState } from 'react';

function AddNewUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', { name, email, phoneNumber });
  };

  return (
    <>
      <form className="auth-register-form mt-2" onSubmit={handleSubmit}>
        <div className="mb-1">
          <label htmlFor="register-username" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="register-username"
            name="register-username"
            placeholder="John Doe"
            aria-describedby="register-username"
            tabIndex={1}
            autoFocus=""
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-1">
          <label htmlFor="register-email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="register-email"
            name="register-email"
            placeholder="john@example.com"
            aria-describedby="register-email"
            tabIndex={2}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-1">
          <label htmlFor="register-phone" className="form-label">
            Phone Number
          </label>
          <input
            type="tel"
            className="form-control"
            id="register-phone"
            name="register-phone"
            placeholder="Your phone number"
            aria-describedby="register-phone"
            tabIndex={3}
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>

        <button className="btn btn-primary w-100" type="submit" tabIndex={4}>
          Submit
        </button>
      </form>
    </>
  );
}

export default AddNewUser;
