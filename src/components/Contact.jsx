import React, { useState } from "react";
import { FaEnvelope, FaPaperPlane, FaCheck } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      // Using the Formspree URL you provided
      const response = await fetch('https://formspree.io/f/mkgrgkvz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form. Please try again.');
      }

      // Form submitted successfully
      setIsSubmitted(true);
      
      // Reset form after showing success message
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", message: "" });
      }, 3000);
      
    } catch (error) {
      console.error('Form submission error:', error);
      setErrorMessage(error.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 mb-12">
      <div className="max-w-6xl mx-auto px-4 text-white">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Leave A Message
        </h2>

        {/* Subtitle */}
        <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
          Have a project in mind or want to discuss collaboration opportunities?
          I'd love to hear from you!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Left side - Contact info */}
          <div className="lg:col-span-2 bg-gray-900/80 backdrop-blur rounded-xl p-6 border border-gray-800 flex flex-col">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Let's Talk</h3>
              <p className="text-gray-400 text-sm">
                Fill out the form or reach out directly through:
              </p>
            </div>

            <div className="space-y-6 flex-grow">
              <div className="bg-gray-800/70 p-4 rounded-lg">
                <h4 className="text-sm text-gray-300 mb-1">Email</h4>
                <a
                  href="mailto:contact@abhishekganvir.com"
                  className="text-blue-400 hover:text-blue-300 transition"
                >
                  contact@abhishekganvir.com
                </a>
              </div>

              <div className="bg-gray-800/70 p-4 rounded-lg">
                <h4 className="text-sm text-gray-300 mb-1">Response Time</h4>
                <p className="text-white">Usually within 24-48 hours</p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-800">
              <p className="text-sm text-gray-400">
                I'm currently looking for new opportunities. Whether you have a
                question or just want to say hi, I'll try my best to get back to
                you!
              </p>
            </div>
          </div>

          {/* Right side - Contact form */}
          <div className="lg:col-span-3 bg-gray-900/80 backdrop-blur rounded-xl p-6 border border-gray-800">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6">
                <div className="bg-green-500/20 p-4 rounded-full mb-4">
                  <FaCheck className="text-green-400 text-3xl" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                <p className="text-gray-300">
                  Thank you for reaching out. I'll get back to you as soon as
                  possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {errorMessage && (
                  <div className="bg-red-500/20 text-red-400 p-4 rounded-lg text-sm">
                    {errorMessage}
                  </div>
                )}
                
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg ${
                    isSubmitting
                      ? "bg-gray-700 cursor-not-allowed"
                      : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  } transition text-white font-medium`}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;