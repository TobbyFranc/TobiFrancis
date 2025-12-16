import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaPaperPlane,
  FaSpinner,
  FaCheckCircle,
  FaWhatsapp,
  FaTimesCircle,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [modal, setModal] = useState({ show: false, type: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return false;
    }
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(formData.email);
  };

  const showModal = (type, message) => {
    setModal({ show: true, type, message });
    setTimeout(() => setModal({ show: false, type: "", message: "" }), 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      showModal("error", "Please fill all fields correctly.");
      return;
    }

    setStatus("sending");

    try {
      await emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      showModal("success", "Message sent successfully!");

      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
      showModal("error", "Something went wrong. Please try again.");
      setStatus("idle");
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center bg-[var(--main-bg-color)] text-[var(--main-text-color)] px-4 py-16 relative"
    >
      <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
      <p className="text-md mb-8 text-center max-w-xl open-sans-200">
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!
      </p>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-[var(--card-bg-color)] p-6 rounded-lg shadow-md relative z-10"
      >
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="w-full px-3 py-2 border border-[var(--button-bg-color)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--accent)] "
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="w-full px-3 py-2 border border-[var(--button-bg-color)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full px-3 py-2 border border-[var(--button-bg-color)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
            id="message"
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        {/* Send button with dynamic states */}
        <button
          className="flex items-center justify-center gap-2 px-6 py-3 bg-[var(--accent)] text-[var(--main-bg-color)] rounded-md hover:bg-[var(--accent)]/60 cursor-pointer transition duration-300 disabled:opacity-70"
          type="submit"
          disabled={status === "sending"}
        >
          {status === "idle" && (
            <>
              <FaPaperPlane /> Send Message
            </>
          )}
          {status === "sending" && (
            <>
              <FaSpinner className="animate-spin" /> Sending...
            </>
          )}
          {status === "success" && (
            <>
              <FaCheckCircle className="text-green-500" /> Message Sent!
            </>
          )}
        </button>
      </form>

      {/* WhatsApp chat link */}
      <div className="mt-6 flex items-center gap-2">
        <FaWhatsapp className="text-green-500 text-2xl" />
        <a
          href="https://wa.link/blzk8h" // replace with your WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--accent)] hover:underline"
        >
          Chat on WhatsApp
        </a>
      </div>

      {/* Custom transient modal */}
      {modal.show && (
        <div
          className={`fixed top-5 right-5 px-6 py-4 rounded-lg shadow-lg text-white z-50 transition transform ${
            modal.type === "success" ? "bg-green-600" : "bg-red-600"
          }`}
        >
          <div className="flex items-center gap-2">
            {modal.type === "success" ? (
              <FaCheckCircle className="text-white" />
            ) : (
              <FaTimesCircle className="text-white" />
            )}
            <span className="font-medium">{modal.message}</span>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
