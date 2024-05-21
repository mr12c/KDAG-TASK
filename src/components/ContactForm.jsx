import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    const newErrors = {};
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const phonePattern = /^[0-9]{10}$/;

    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!emailPattern.test(formData.email)) newErrors.email = 'Invalid email address';
    if (!phonePattern.test(formData.phone)) newErrors.phone = 'Invalid phone number';
    if (!formData.message) newErrors.message = 'Message is required';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      alert('Form submitted successfully');
      // Handle form submission
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-8 bg-[#fffbfb] rounded-lg shadow-lg w-[60%]">
      <h1 className="text-2xl font-bold text-red-800 mb-6">Contact Us</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-red-700">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full p-2 border border-red-300  outline-none  rounded-lg mt-1"
          />
          {errors.firstName && <p className="text-red-600">{errors.firstName}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-red-700">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full p-2 border border-red-300 outline-none  rounded-lg mt-1"
          />
          {errors.lastName && <p className="text-red-600">{errors.lastName}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-red-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-red-300  outline-none rounded-lg mt-1"
          />
          {errors.email && <p className="text-red-600">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-red-700">Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border border-red-300 outline-none  rounded-lg mt-1"
          />
          {errors.phone && <p className="text-red-600">{errors.phone}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-red-700">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-red-300 outline-none rounded-lg mt-1 resize-none"
          />
          {errors.message && <p className="text-red-600">{errors.message}</p>}
        </div>
        <button type="submit" className="w-full p-2 bg-red-600  text-white rounded-lg mt-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
