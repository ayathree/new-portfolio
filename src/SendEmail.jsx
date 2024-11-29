import { useState } from "react";
import emailjs from "emailjs-com";


function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_e2krris",      // Replace with your EmailJS service ID
        "template_l7qcoec",     // Replace with your EmailJS template ID
        {
            name: formData.name,
            email: formData.email, // Will be used as reply_to
            message: formData.message,
          },
        "win_flOAaCkkJDyqS"          // Replace with your EmailJS public API key
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
        },
        (error) => {
          console.error("Failed to send email:", error.text);
        }
      );
  };

  return (
    <form onSubmit={sendEmail}>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea>
      <button type="submit">Send Email</button>
    </form>
  );
}

export default App;
