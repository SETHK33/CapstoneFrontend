import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [review, setReview] = useState("");
  const [formSubmit, setFormSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const firstName = e.target.querySelector("#first-name").value;
    const lastName = e.target.querySelector("#last-name").value;

    if (firstName.trim() === "" || lastName.trim() === "") {
      toast.error("Please fill in all empty fields");
      return;
    }

    setFormSubmit(true);

    setFirstName("");
    setLastName("");
    setEmail("");
    setReview("");
    setFormSubmit(false);
    toast.success("Submitted Successfully");
  };

  return (
    <div className="contact-page page-container">
      <h1>QUESTIONS | COMMENTS</h1>

      <div className="contact-form-wrapper">
        <form onSubmit={handleSubmit}>
          <div className="form-input">
            <input
              type="text"
              id="first-name"
              placeholder="First Name"
              title="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-input">
            <input
              type="text"
              id="last-name"
              placeholder="Last Name"
              title="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="form-input">
            <input
              type="email"
              id="email"
              placeholder="Email"
              title="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-input">
            <textarea
              name="review"
              id="review"
              cols="40"
              rows="10"
              placeholder="Questions / Comments"
              title="Questions / Comments"
              value={review}
              onChange={(e) => setReview(e.target.value)}
            ></textarea>
          </div>
          <div className="submit-btn">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      <ToastContainer />
      {formSubmit}
    </div>
  );
}
