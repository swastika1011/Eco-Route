import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-scroll';
import { Typewriter } from "react-simple-typewriter"; 

import 'animate.css';



import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  

  return (
    <section className="banner" id="home">
      <Container>
        <Row >
          <Col>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome To EcoRoute</span>
                <h1>
                  Eco{" "} 
                   <Typewriter
                      words={["Options", "Insights", "Choices"]}
                      loop={true}
                      cursor
                      cursorStyle="|"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={900}
                    />
                  </h1>
                  <p>EcoRoute website helps you make environmentally conscious travel choices by calculating CO2 emissions for different vehicles based on your location.
                  Click now to start your eco-friendly journey!
                  </p>
                  <Link to="form-section" smooth={true} duration={100}>
                  <button onClick={() => console.log('connect')}>Start Now <ArrowRightCircle size={20} /></button>
                  </Link>
              </div>}
            </TrackVisibility>
          </Col>
          {/* <Col xs={12} md={6} xl={5}>
          <img src={leavesImage} alt="Header Img" />
        </Col> */}
        </Row>
      </Container>
    </section>
  )
}