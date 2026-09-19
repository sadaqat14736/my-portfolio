import React, { useState } from "react";
import { motion } from "framer-motion";
import { personalDetails } from "../../Constants/data";
import {
  fadeIn,
  slideLeft,
  slideRight,
  staggerContainer,
  staggerItem,
  hoverButton,
  tapButton,
} from "../../animations";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: null, message: "" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e, field) => {
    setFormData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const response = await fetch("https://formspree.io/f/moevvgdn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio Message from ${formData.name}`,
          _replyto: formData.email,
        }),
      });

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Transmission received! I will get back to you shortly.",
        });
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        const errorData = await response.json().catch(() => ({}));
        setStatus({
          type: "error",
          message:
            errorData?.errors?.[0]?.message ||
            "Failed to send transmission. Please try again.",
        });
      }
    } catch (error) {
      console.error("Formspree submission error:", error);
      setStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24"
      id="contact"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      {/* Left - Info */}
      <motion.div variants={slideLeft}>
        <motion.h2
          className="font-headline-lg text-headline-lg text-on-surface mb-4"
          variants={staggerItem}
        >
          Let's build the <br />
          <span className="text-secondary">next standard.</span>
        </motion.h2>
        <motion.p
          className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-md"
          variants={staggerItem}
        >
          Available for internships, freelance projects, and meaningful
          collaborations.
        </motion.p>
        <div className="space-y-6">
          <motion.div
            className="flex items-center gap-4"
            variants={staggerItem}
          >
            <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center border border-white/5">
              <span className="material-symbols-outlined text-primary">
                mail
              </span>
            </div>
            <div>
              <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
                Email
              </p>
              <a
                href={`mailto:${personalDetails.email}`}
                className="font-body-lg text-body-lg text-on-surface font-semibold hover:text-primary transition-colors"
              >
                {personalDetails.email}
              </a>
            </div>
          </motion.div>
          <motion.div
            className="flex items-center gap-4"
            variants={staggerItem}
          >
            <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center border border-white/5">
              <span className="material-symbols-outlined text-secondary">
                share_location
              </span>
            </div>
            <div>
              <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
                Location
              </p>
              <p className="font-body-lg text-body-lg text-on-surface font-semibold">
                {personalDetails.location}
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Right - Form */}
      <motion.div
        className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10 shadow-2xl"
        variants={slideRight}
      >
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6"
          variants={staggerContainer}
        >
          {status.message && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-4 rounded-xl text-sm flex items-center gap-3 border ${status.type === "success"
                ? "bg-secondary/10 border-secondary/30 text-secondary"
                : "bg-tertiary-container/20 border-tertiary/30 text-tertiary"
                }`}
            >
              <span className="material-symbols-outlined text-lg">
                {status.type === "success" ? "check_circle" : "error"}
              </span>
              <span className="font-medium">{status.message}</span>
            </motion.div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div className="space-y-2" variants={staggerItem}>
              <label
                htmlFor="contact-name"
                className="font-label-sm text-label-sm text-on-surface-variant"
              >
                NAME
              </label>
              <input
                id="contact-name"
                name="name"
                value={formData.name}
                onChange={(e) => handleChange(e, "name")}
                className="w-full bg-surface-container-lowest border border-white/10 rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-primary transition-colors placeholder:text-outline-variant"
                placeholder="Ahmer Ali"
                type="text"
                required
              />
            </motion.div>
            <motion.div className="space-y-2" variants={staggerItem}>
              <label
                htmlFor="contact-email"
                className="font-label-sm text-label-sm text-on-surface-variant"
              >
                EMAIL
              </label>
              <input
                id="contact-email"
                name="email"
                value={formData.email}
                onChange={(e) => handleChange(e, "email")}
                className="w-full bg-surface-container-lowest border border-white/10 rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-primary transition-colors placeholder:text-outline-variant"
                placeholder="ali@example.com"
                type="email"
                required
              />
            </motion.div>
          </div>

          <motion.div className="space-y-2" variants={staggerItem}>
            <label
              htmlFor="contact-message"
              className="font-label-sm text-label-sm text-on-surface-variant"
            >
              MESSAGE
            </label>
            <textarea
              id="contact-message"
              name="message"
              value={formData.message}
              onChange={(e) => handleChange(e, "message")}
              className="w-full bg-surface-container-lowest border border-white/10 rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-primary transition-colors placeholder:text-outline-variant resize-none"
              placeholder="Tell me about your project or inquiry..."
              rows="4"
              required
            ></textarea>
          </motion.div>

          <motion.button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-primary text-on-primary font-label-md text-label-md rounded-lg hover:brightness-110 disabled:opacity-50 transition-all flex items-center justify-center gap-2 group cursor-pointer"
            variants={staggerItem}
            whileHover={hoverButton}
            whileTap={tapButton}
          >
            {loading ? "Transmitting..." : "Send Transmission"}
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
              send
            </span>
          </motion.button>
        </motion.form>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
