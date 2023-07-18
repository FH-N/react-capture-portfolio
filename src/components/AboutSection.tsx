import home1 from "../img/home1.jpg";

const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>
              your <span>dreams</span> come
            </h2>
          </div>
          <div className="hide">
            <h2>true.</h2>
          </div>
        </div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professionals that make things come to life.
        </p>
      </div>
      <div className="imgage">
        <img src={home1} alt="girl holding camera" />
      </div>
    </div>
  );
};

export default AboutSection;
