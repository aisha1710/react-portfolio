import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import proj1 from "../assets/img/proj1.png";
import proj2 from "../assets/img/proj2.png";
import proj3 from "../assets/img/proj3.png";
import proj4 from "../assets/img/proj4.png";
import proj5 from "../assets/img/proj5.png";
import proj6 from "../assets/img/proj6.png";

export const Projects = () => {
  const projects = [
    {
      title: "News Page",
      imgUrl: proj1,
      deployed: "https://axmedd.github.io/News-Page/",
      github: "https://github.com/aisha1710/News-Page",
    },
    {
      title: "Weather Dashboard",
      imgUrl: proj2,
      deployed: "https://aisha1710.github.io/weather-dashboard/",
      github: "https://github.com/aisha1710/weather-dashboard",
    },
    {
      title: "Code Quiz",
      imgUrl: proj3,
      deployed: "https://aisha1710.github.io/code-quiz/",
      github: "https://github.com/aisha1710/code-quiz",
    },
    {
      title: "Note Taker",
      imgUrl: proj4,
      deployed: "https://mighty-sands-43871.herokuapp.com/",
      github: "https://github.com/aisha1710/note-taker",
    },
    {
      title: "SCA Rental",
      imgUrl: proj5,
      deployed: "https://morning-journey-04900.herokuapp.com/",
      github: "https://github.com/aisha1710/SCA-Rental",
    },
    {
      title: "Password Generator",
      imgUrl: proj6,
      deployed: "https://aisha1710.github.io/password-generator/",
      github: "https://github.com/aisha1710/password-generator",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Portfolio</h2>
            <p>
              Below are some of my projects. Click on the image to have a look
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Tab.Content id="slideInUp">
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
