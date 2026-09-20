import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalDetails } from "../../Constants/data";
import {
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
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [errors, setErrors] = useState({});
  const dismissTimerRef = useRef(null);

  const validate = (data = formData) => {
    const errs = {};
    if (!data.name.trim()) {
      errs.name = "Name is required";
    } else if (data.name.trim().length < 2) {
      errs.name = "Name must be at least 2 characters";
    }

    if (!data.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
      errs.email = "Please enter a valid email address";
    }

    if (!data.message.trim()) {
      errs.message = "Message is required";
    } else if (data.message.trim().length < 10) {
      errs.message = "Message should be at least 10 characters";
    }

    return errs;
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors(validate());
  };

  const handleChange = (e, field) => {
    const updated = {
      ...formData,
      [field]: e.target.value,
    };
    setFormData(updated);
    if (touched[field]) {
      setErrors(validate(updated));
    }
  };

  // Auto-dismiss status message after 5 seconds
  useEffect(() => {
    if (status.message) {
      if (dismissTimerRef.current) clearTimeout(dismissTimerRef.current);
      dismissTimerRef.current = setTimeout(() => {
        setStatus({ type: null, message: "" });
      }, 5000);
    }
    return () => {
      if (dismissTimerRef.current) clearTimeout(dismissTimerRef.current);
    };
  }, [status.message]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

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
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
          _subject: `Portfolio Message from ${formData.name.trim()}`,
          _replyto: formData.email.trim(),
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
        setTouched({
          name: false,
          email: false,
          message: false,
        });
        setErrors({});
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
          <AnimatePresence>
            {status.message && (
              <motion.div
                initial={{ opacity: 0, y: -6, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: -6, height: 0 }}
                transition={{ duration: 0.25 }}
                className={`p-4 rounded-xl text-sm flex items-center justify-between gap-3 border overflow-hidden ${
                  status.type === "success"
                    ? "bg-secondary/10 border-secondary/30 text-secondary"
                    : "bg-tertiary-container/20 border-tertiary/30 text-tertiary"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-lg">
                    {status.type === "success" ? "check_circle" : "error"}
                  </span>
                  <span className="font-medium">{status.message}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setStatus({ type: null, message: "" })}
                  className="p-1 rounded-lg hover:bg-white/10 transition-colors text-on-surface-variant hover:text-on-surface cursor-pointer"
                  aria-label="Dismiss message"
                >
                  <span className="material-symbols-outlined text-base">close</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div className="space-y-2" variants={staggerItem}>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="contact-name"
                  className="font-label-sm text-label-sm text-on-surface-variant"
                >
                  NAME
                </label>
                {touched.name && errors.name && (
                  <span className="text-[11px] text-error font-medium">
                    {errors.name}
                  </span>
                )}
              </div>
              <input
                id="contact-name"
                name="name"
                value={formData.name}
                onChange={(e) => handleChange(e, "name")}
                onBlur={() => handleBlur("name")}
                aria-invalid={Boolean(touched.name && errors.name)}
                className={`w-full bg-surface-container-lowest border rounded-lg px-4 py-3 text-on-surface focus:outline-none transition-colors placeholder:text-outline-variant ${
                  touched.name && errors.name
                    ? "border-error focus:border-error focus:ring-1 focus:ring-error/40"
                    : "border-white/10 focus:border-primary"
                }`}
                placeholder="Ahmer Ali"
                type="text"
                required
              />
            </motion.div>

            <motion.div className="space-y-2" variants={staggerItem}>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="contact-email"
                  className="font-label-sm text-label-sm text-on-surface-variant"
                >
                  EMAIL
                </label>
                {touched.email && errors.email && (
                  <span className="text-[11px] text-error font-medium">
                    {errors.email}
                  </span>
                )}
              </div>
              <input
                id="contact-email"
                name="email"
                value={formData.email}
                onChange={(e) => handleChange(e, "email")}
                onBlur={() => handleBlur("email")}
                aria-invalid={Boolean(touched.email && errors.email)}
                className={`w-full bg-surface-container-lowest border rounded-lg px-4 py-3 text-on-surface focus:outline-none transition-colors placeholder:text-outline-variant ${
                  touched.email && errors.email
                    ? "border-error focus:border-error focus:ring-1 focus:ring-error/40"
                    : "border-white/10 focus:border-primary"
                }`}
                placeholder="ali@example.com"
                type="email"
                required
              />
            </motion.div>
          </div>

          <motion.div className="space-y-2" variants={staggerItem}>
            <div className="flex items-center justify-between">
              <label
                htmlFor="contact-message"
                className="font-label-sm text-label-sm text-on-surface-variant"
              >
                MESSAGE
              </label>
              {touched.message && errors.message && (
                <span className="text-[11px] text-error font-medium">
                  {errors.message}
                </span>
              )}
            </div>
            <textarea
              id="contact-message"
              name="message"
              value={formData.message}
              onChange={(e) => handleChange(e, "message")}
              onBlur={() => handleBlur("message")}
              aria-invalid={Boolean(touched.message && errors.message)}
              className={`w-full bg-surface-container-lowest border rounded-lg px-4 py-3 text-on-surface focus:outline-none transition-colors placeholder:text-outline-variant resize-none ${
                touched.message && errors.message
                  ? "border-error focus:border-error focus:ring-1 focus:ring-error/40"
                  : "border-white/10 focus:border-primary"
              }`}
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
            {loading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-on-primary"
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
                <span>Transmitting...</span>
              </>
            ) : (
              <>
                <span>Send Transmission</span>
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  send
                </span>
              </>
            )}
          </motion.button>
        </motion.form>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
