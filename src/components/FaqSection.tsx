import { Layout } from "../styles";
import styled from "styled-components";
import Toggle from "./toggle";

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        {" "}
        Any Questions <span>FAQ</span>
      </h2>
      <Toggle>
      <div className="questions">
        <h4>How do I start?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
            consequatur?
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      </Toggle>
      <Toggle>
      <div className="questions">
        <h4>Daily Schedule?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
            consequatur?
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      </Toggle>
      <Toggle>
      <div className="questions">
        <h4>Different Payment Methods</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
            consequatur?
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      </Toggle>
      <Toggle>
      <div className="questions">
        <h4>what products do you offer?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
            consequatur?
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      </Toggle>
    </Faq>
  );
};

const Faq = styled(Layout)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }

  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }

  .questions {
    padding: 3rem 0rem;
    cursor: pointer;
  }

  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
