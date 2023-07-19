import home1 from "../img/home1.jpg";
//Styled
import { Layout, Description, Image, Hide } from "../styles";

const AboutSection = () => {
  return (
    <Layout>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
        </div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professionals that make things come to life.
        </p>
        <button>Contact us</button>
      </Description>
      <Image>
        <img src={home1} alt="girl holding camera" />
      </Image>
    </Layout>
  );
};

export default AboutSection;
