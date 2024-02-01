import React, { useState } from "react";
import { Helmet } from "react-helmet";

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submitted Data:", formData);
  };
  return (
    <>
      <Helmet>
        <title>Contact Us- SSR Project</title>
        <meta
          name="description"
          content="Contact us for inquiries, feedback, or any questions you may have.]"
        />

        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
      </Helmet>
      <div>
        <h2>Contact Us</h2>
        <p>
          We would love to hear from you! Feel free to reach out to us with any
          questions or inquiries.
        </p>

        <div>
          <h3>Contact Information</h3>
          <p>Email: contact@example.com</p>
          <p>Phone: +1 1234567890</p>
          <p>Address: 123 Main Street Random Address</p>
        </div>

        <div>
          <h3> Contact Form</h3>

          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            ></input>

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />

            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
            />

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export { Page };
