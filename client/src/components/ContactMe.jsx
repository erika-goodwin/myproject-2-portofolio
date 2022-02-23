import React, { useState } from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { BiHomeAlt } from "react-icons/bi";
import axios from "axios";

function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const resetForm = () => {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  const submitEmail = (e) => {
    e.preventDefault();

    const mailData = { name, email, subject, message };
    console.log("email data: ", mailData);

    axios
      .post("http://localhost:3001/api/contact/send", mailData)
      .then((res) => {
        if (res.data.status === "success") {
          alert("Message Sent!");
          resetForm();
        } else if (res.data.status === "fail") {
          alert("Message failed to send");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="contact-con">
        <div className="contact-con-form ">
          <div className="contact-con-form-center ">
            <h3 className=""> Get in touch with me</h3>
            <form
              method="POST"
              id="contactForm"
              name="contactForm"
              onSubmit={submitEmail}
              className="contact-con-form-center-contactForm"
            >
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="label" htmlFor="name">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      id="name"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="label" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="label" htmlFor="subject">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="label" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      name="message"
                      className="form-control"
                      id="message"
                      cols="30"
                      rows="4"
                      placeholder="Message"
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <input
                      type="submit"
                      value="Send Message"
                      className="btn btn-submit"
                    />
                    <div className="submitting"></div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="contact-con-social ">
          <div className="contact-con-social-comment">
            <h3>Thank you so much !</h3>
            <h5>I will get back to you as soon as possible.</h5>
            <h5>Please allow me some time to replay. Have a good day.</h5>
          </div>
          <div className="contact-con-social-links">
            <h3> Connect with me on SNS</h3>
            <ul className="">
              <li>
                <a
                  href="https://www.linkedin.com/in/erika-hashizume-37295a153/"
                  target="_blank"
                  rel="noreferrer"
                  alt="linkdin"
                >
                  <BsLinkedin className="sns-icon linkdin" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/erika-goodwin"
                  target="_blank"
                  rel="noreferrer"
                  alt="GitHub"
                >
                  <BsGithub className="sns-icon github" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactMe;
