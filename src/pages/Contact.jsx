import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact({ cartCount }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setError("Please fill in all fields.");
      setSuccess(false);
      return;
    }
    if (!email.includes("@")) {
      setError("Please enter a valid email.");
      setSuccess(false);
      return;
    }
    setError("");
    setSuccess(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <Navbar cartCount={cartCount} />
      <div className="container" style={{ padding: "60px 0" }}>
        <div className="contact-wrapper">

          <div className="contact-info">
            <h2>Get In Touch 👋</h2>
            <p>Have a question or feedback? We'd love to hear from you.</p>
            <div className="contact-details">
              <div className="contact-detail-item">
                <span>📧</span>
                <p>support@techstore.com</p>
              </div>
              <div className="contact-detail-item">
                <span>📞</span>
                <p>+1 (800) 123-4567</p>
              </div>
              <div className="contact-detail-item">
                <span>📍</span>
                <p>123 Tech Street, Silicon Valley</p>
              </div>
            </div>
          </div>

          <div className="contact-form-box">
            <h2>Send a Message</h2>

            {error && <p className="auth-error">{error}</p>}
            {success && (
              <p className="auth-success">
                ✅ Message sent! We'll get back to you soon.
              </p>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea
                  placeholder="Write your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="5"
                />
              </div>
              <button type="submit" className="auth-btn">
                Send Message 📨
              </button>
            </form>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;