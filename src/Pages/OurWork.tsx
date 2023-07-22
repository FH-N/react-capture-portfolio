//import images
import athlete from "../img/athlete.jpg"
import racer from "../img/racer.jpg"
import goodtimes from "../img/goodtimes.jpg"
//import 
import styled from "styled-components"
import {Link} from "react-router-dom"
import ScrollTop from "../components/scrollTop"
//animations 
import {motion} from "framer-motion";
import { sliderContainer, pageAnimation, fade, photoAnim, lineAnim, slider } from "../animation";
// import { useScroll } from "../components/useScroll"


const OurWork = () => {
  //const [element, controls] = useScroll();
 // const [element2, controls2] = useScroll();
  
  return (
    <Work variants={pageAnimation} initial="hidden" animate="show" exit="exit" style={{background: "#fff"}}>
      <motion.div variants={sliderContainer}>
      <Frame1 variants={slider}></Frame1>
      <Frame2 variants={slider}></Frame2>
      <Frame3 variants={slider}></Frame3>
      <Frame4 variants={slider}></Frame4>
      </motion.div>
      <Movie>
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <Hide>
        <motion.img variants={photoAnim} src={athlete} alt="athlete" />
        </Hide>
        </Link>
      </Movie>
      <Movie >
      {/*ref={element} variants={fade} animate={controls} initial="hidden"*/}
        <h2>The Racer</h2>
        <div className="line"></div>
        <Link to="/work/the-racer">
        <img src={racer} alt="racer" />
        </Link>
      </Movie>
      <Movie>
        <h2>Good Times</h2>
        <div className="line"></div>
        <Link to="/work/good-times">
        <img src={goodtimes} alt="Good times" />
        </Link>
      </Movie>
      <ScrollTop />
    </Work>
  );
};

const Work = styled(motion.div)`
min-height: 100vh;
overflow: hidden;
padding: 5rem 10rem;
@media (max-width: 1300px){
    padding: 2rem 2rem;
}
h2{
  padding: 1rem 0rem;
}

img{
  width: 100%;
  height: 70vh;
  object-fit: cover;
}
`
const Movie = styled(motion.div)`
padding-botom: 10rem;
.line{
  height: 0.5rem;
  background: #23d997;
  margin-bottom: 3rem;
}
`
const Hide = styled.div`
overflow: hidden;
`
//Frame Animation
const Frame1 = styled(motion.div)`
position: fixed;
left: 0;
top: 10%;
width: 100%;
height: 100vh;
background: #fffebf;
z-index: 2;
`

const Frame2 = styled(Frame1)`
background: #ff8efb;
`

const Frame3 = styled(Frame1)`
background: #8ed2ff;
`

const Frame4 = styled(Frame1)`
background: #8effa0;
`

export default OurWork;
