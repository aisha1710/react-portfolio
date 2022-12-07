import { Container, Row, Col } from "react-bootstrap";
import image from "../assets/img/image.jpg";

export const Skills = () => {
  return (
    <section className="about-me" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="box ">
              <h2>About me</h2>
              <Container>
                <Row className="align-items-center">
                  <Col xs={12} md={6} xl={7}>
                    <p>
                      An aspiring <b>full-stack developer</b> who enjoys
                      problem-solving and creating user interfaces with vital
                      customer service experience. Currently, studying a
                      Full-Stack Coding Boot camp at the{" "}
                      <b> University of Birmingham</b>. My hobbies include
                      photography,reading and basketball. I enjoy traveling and
                      trying new things.
                    </p>
                  </Col>
                  <Col xs={12} md={6} xl={5}>
                    <div>
                      <img src={image} alt="My image" />
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
