"use client";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Clear form fields and show success message
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });

    setSuccessMessage("Message submitted successfully!");
    setTimeout(() => setSuccessMessage(""), 3000); // Remove message after 3 seconds
  };

  return (
    <div id="contact" className="w-full max-lg:min-h-0 mt-5 min-h-screen flex flex-col justify-center items-center p-4 sm:p-6 lg:p-8">
      {/* Contact Header */}
      <div className="w-full lg:w-[90%] flex flex-col justify-center items-center gap-5">
        <div className="flex justify-center items-center gap-2 flex-wrap">
          <span className="hidden sm:block w-14 h-1 mt-1 bg-[#0A97B0]"></span>
          <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-center">
            Contact <span className="text-[#0A97B0]">Us</span>
          </h2>
          <span className="hidden sm:block w-14 h-1 mt-1 bg-[#0A97B0]"></span>
        </div>
        <p className="text-sm sm:text-base lg:text-lg text-center px-2 sm:px-6">
          Contact us for inquiries, support, or service details. Our team is here to assist you promptly and reliably.
        </p>
      </div>

      {/* Success Message */}
      {successMessage && (
        <div className="text-green-600 font-bold text-center mb-4">{successMessage}</div>
      )}

      {/* Contact Form */}
      <form
        className="w-full max-w-[600px] lg:max-w-[700px] p-4 sm:p-6 rounded-lg flex flex-col gap-5"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="p-3 sm:p-3 rounded outline-none shadow-blue-600 shadow-sm placeholder:text-black text-sm sm:text-base"
          aria-label="Your Name"
          required
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="p-3 sm:p-3 rounded outline-none shadow-blue-600 shadow-sm placeholder:text-black text-sm sm:text-base"
          aria-label="Phone Number"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="p-3 sm:p-3 rounded outline-none shadow-blue-600 shadow-sm placeholder:text-black text-sm sm:text-base"
          aria-label="Email"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="p-3 sm:p-4 rounded outline-none shadow-blue-600 shadow-sm placeholder:text-black h-32 sm:h-40 text-sm sm:text-base"
          aria-label="Your Message"
          required
        />
        <button
          type="submit"
          className="bg-[#0A97B0] text-white w-fit text-sm sm:text-base lg:text-lg hover:bg-[#065968] hover:text-white border border-white rounded-l-[22px] rounded-tr-[22px] transition transform duration-300 ease-in-out px-5 py-2 sm:px-10 sm:py-2"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
