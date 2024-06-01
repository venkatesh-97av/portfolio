import React from "react";
import "./contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import toast from "react-hot-toast";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "5073737b-3314-4fba-b97a-3df3ae354da3");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      toast.success(res.message);
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="contact-title">
        <h1>Get in Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            I'm Currently available to take on new Projects,so feel free to send
            me a message about anything that you want me to work on. You can
            contact anytime.
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>venkatesh.itechdeveloper@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+91-8778099270</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Tamilnadu,India</p>
            </div>
          </div>
        </div>

        <form action="" className="contact-right" onSubmit={onSubmit}>
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your Name" name="name" required/>
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your Email " name="email" required/>
          <label htmlFor="">Write your Message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit-Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
