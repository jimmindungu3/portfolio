import { useState } from "react";
import { FaPaperPlane, FaCheck } from "react-icons/fa";

const Contact = () => {
  // Form state management
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("https://formspree.io/f/mkgrgkvz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form. Please try again.");
      }

      setIsSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", message: "" });
      }, 3000);
    } catch (error) {
      console.error("Form submission error:", error);
      setErrorMessage(
        error.message || "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 mb-12">
      <div className="max-w-6xl px-4 mx-auto text-white">
        {/* Section Title */}
        <h2 className="mb-4 text-4xl font-bold text-center text-transparent md:text-5xl bg-clip-text bg-gradient-to-r from-nyuki-honey to-nyuki-gold">
          Leave A Message
        </h2>

        {/* Section Description */}
        <p className="max-w-3xl mx-auto mb-12 text-center text-gray-300">
          Have a project in mind or want to discuss collaboration opportunities?
          I'd love to hear from you!
        </p>

        <div className="grid max-w-5xl grid-cols-1 gap-8 mx-auto lg:grid-cols-5">
          {/* Left Side - Contact Info */}
          <div className="flex flex-col p-6 border border-nyuki-stripe/30 lg:col-span-2 bg-nyuki-black/80 backdrop-blur rounded-xl">
            <div className="mb-6">
              <h3 className="mb-2 text-xl font-semibold text-nyuki-wax">
                Let's Talk
              </h3>
              <p className="text-sm text-gray-400">
                Fill out the form or reach out directly through:
              </p>
            </div>

            <div className="flex-grow space-y-6">
              {/* Email Card */}
              <div className="p-4 rounded-lg bg-nyuki-stripe/10 border border-nyuki-stripe/20">
                <h4 className="mb-1 text-sm text-gray-300">Email</h4>
                <a
                  href="mailto:jimmindungu3@gmail.com"
                  className="text-nyuki-gold transition hover:text-nyuki-honey"
                >
                  jimmindungu3@gmail.com
                </a>
              </div>

              {/* Response Time Card */}
              <div className="p-4 rounded-lg bg-nyuki-stripe/10 border border-nyuki-stripe/20">
                <h4 className="mb-1 text-sm text-gray-300">Response Time</h4>
                <p className="text-nyuki-wax">Usually within 24-48 hours</p>
              </div>
            </div>

            {/* Footer Note */}
            <div className="pt-6 mt-6 border-t border-nyuki-stripe/30">
              <p className="text-sm text-gray-400">
                I'm currently looking for new opportunities. Whether you have a
                question or just want to say hi, I'll try my best to get back to
                you!
              </p>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="p-6 border border-nyuki-stripe/30 lg:col-span-3 bg-nyuki-black/80 backdrop-blur rounded-xl">
            {isSubmitted ? (
              // Success Message
              <div className="flex flex-col items-center justify-center h-full p-6 text-center">
                <div className="p-4 mb-4 rounded-full bg-nyuki-honey/20">
                  <FaCheck className="text-3xl text-nyuki-gold" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-nyuki-wax">
                  Message Sent!
                </h3>
                <p className="text-gray-300">
                  Thank you for reaching out. I'll get back to you as soon as
                  possible.
                </p>
              </div>
            ) : (
              // Contact Form
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Error Message */}
                {errorMessage && (
                  <div className="p-4 text-sm text-red-400 rounded-lg bg-red-500/20">
                    {errorMessage}
                  </div>
                )}

                {/* Name Input */}
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-1 text-sm font-medium text-gray-300"
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
                    className="w-full px-4 py-3 text-white placeholder-gray-500 transition border border-nyuki-stripe/30 rounded-lg outline-none bg-nyuki-black/50 focus:ring-2 focus:ring-nyuki-honey focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-1 text-sm font-medium text-gray-300"
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
                    className="w-full px-4 py-3 text-white placeholder-gray-500 transition border border-nyuki-stripe/30 rounded-lg outline-none bg-nyuki-black/50 focus:ring-2 focus:ring-nyuki-honey focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label
                    htmlFor="message"
                    className="block mb-1 text-sm font-medium text-gray-300"
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
                    className="w-full px-4 py-3 text-white placeholder-gray-500 transition border border-nyuki-stripe/30 rounded-lg outline-none resize-none bg-nyuki-black/50 focus:ring-2 focus:ring-nyuki-honey focus:border-transparent"
                    placeholder="Your message here..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg font-semibold transition ${
                    isSubmitting
                      ? "bg-gray-700 cursor-not-allowed text-gray-400"
                      : "bg-gradient-to-r from-nyuki-honey to-nyuki-gold text-nyuki-black hover:from-nyuki-gold hover:to-nyuki-honey"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="w-5 h-5 animate-spin"
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
