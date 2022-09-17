const Contact = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", left: "50%" }}
      className="contact"
    >
      <div className="contactForm">
        <p>
          Please fill out this contact form in order to reach me! <br />
        </p>
        <form id="form">
          <label htmlFor="person">
            Name<span className="required">*</span>:
          </label>
          <input type="text" id="person" required /> <br />
          <label htmlFor="email">
            E-mail<span className="required">*</span>:
          </label>
          <input type="email" id="email" required /> <br />
          <label htmlFor="phone">Phone Number:</label>
          <input type="text" id="phone" /> <br />
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" /> <br />
          <label htmlFor="message">Leave a Message Here!</label>
          <input type="textarea" id="message" /> <br />
          <span className="required">*</span> means required <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
