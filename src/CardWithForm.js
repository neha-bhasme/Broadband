// CardWithForm.jsx
import React, { useState } from 'react';
import './CardWithForm.css';

const CardWithForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Submitted email:', email);
    // You can add further logic like sending the email to a server, etc.
  };

  return (
    <div className="card-with-form">
      <div className="card" style={{backgroundImage: `url('background-image-url.jpg')`}}>
        <div className="form-container">
          <h2>Subscribe for Updates</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Check Availability</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CardWithForm;
