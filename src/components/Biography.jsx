import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
            Welcome to Healthier's biography page, where we share our journey
            and mission. Founded with a vision to transform the healthcare
            landscape, Healthier was born out of a passion for innovation and a
            commitment to excellence. Our story began with a team of dedicated
            professionals who recognized the challenges faced by hospitals and
            clinics in managing their operations efficiently.
          </p>
          <p>
            Healthier's founders, seasoned experts in healthcare technology and
            administration, set out to create a solution that would bridge the
            gap between patient care and hospital management. With years of
            experience and a deep understanding of the industry's intricacies,
            they developed a platform that not only meets but exceeds the needs
            of modern healthcare providers.
          </p>
          <p>
            Our mission at Healthier is simple yet profound: to empower
            healthcare institutions with cutting-edge tools that enhance patient
            outcomes, streamline workflows, and foster a collaborative
            environment. We believe that by leveraging technology, we can make
            healthcare more accessible, efficient, and patient-centric.
          </p>
          <p>
            Over the years, Healthier has grown into a trusted partner for
            hospitals and clinics worldwide. Our commitment to continuous
            improvement and innovation drives us to stay at the forefront of
            healthcare technology. We are proud of our journey and excited about
            the future as we continue to evolve and expand our offerings to meet
            the ever-changing needs of the healthcare sector.
          </p>
          <p>
            Join us as we strive to create a healthier world, one hospital at a
            time. Welcome to Healthier, where your success in healthcare
            management is our top priority.
          </p>
          <p>Coding is fun!</p>
        </div>
      </div>
    </>
  );
};

export default Biography;
