import React, { useState } from 'react';
import './App.css'
const QueryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNo: '',
    query: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="container-fluid px-4 form-container-div bg-light">
      <h4 className='text-center mb-4'>Book a FREE Online Consultation</h4>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-4">
          <input
            type="text"
            className="form-control rounded"
            id="name"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mb-4">
          <input
            type="email"
            className="form-control rounded"
            id="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mb-4">
          <input
            type="tel"
            className="form-control rounded"
            id="mobileNo"
            name="mobileNo"
            placeholder="Mobile number"
            value={formData.mobileNo}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mb-4">         
          <textarea
            className="form-control rounded"
            id="query"
            name="query"
            rows="2"
            placeholder="Query"
            value={formData.query}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-100 fs-5 mb-4 fw-semibold font-monospace">
          Submit
        </button>
      </form>
    </div>
  );
};

export default QueryForm;
