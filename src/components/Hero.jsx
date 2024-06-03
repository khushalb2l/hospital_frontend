import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
            Healthier is your comprehensive hospital management app
            designed to revolutionize healthcare administration. At Healthier,
            we empower hospitals to enhance patient care, streamline operations,
            and improve overall efficiency. Our state-of-the-art platform
            integrates seamlessly with your existing systems, providing
            real-time access to patient records, appointment scheduling,
            billing, and more. With intuitive dashboards and robust data
            analytics, Healthier ensures you stay ahead in delivering top-notch
            medical services. Join the future of healthcare management with
            Healthier, where technology meets compassionate care.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
