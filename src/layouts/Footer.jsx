
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
const Footer = () => {
    return (
        <div>

            <footer className="bg-dark text-white py-4">
                <Container>
                    <Row>

                        <Col md={4}>
                            <h5>Location</h5>
                            <p>José Ingenieros 3135 Of 4<br /> Buenos Aires 1635, AR</p>
                        </Col>

                        <Col md={4}>
                            <h5>Contact us</h5>
                            <p>info@intecgs.com</p>
                        </Col>
                     

                        <Col md={4}>
                            <h5 className="text-light" >Follow</h5>
                            <div className="d-flex gap-3">
                                <a href="https://www.facebook.com/intecGS/ " className="text-white text-decoration-none">
                                    <i className="bi bi-facebook fs-3"></i>
                                </a>
                                <a href="https://x.com/intecgs" className="text-white text-decoration-none">
                                    <i className="bi bi-twitter-x fs-3"></i>
                                </a>
                               
                                <a href="https://www.linkedin.com/company/intec-global-solutions/" className="text-white text-decoration-none">
                                    <i className="bi bi-linkedin fs-3"></i>
                                </a>
                            </div>
                       
                    </Col>
                </Row>
            
            </Container>
        </footer>

    </div >
  )
}

export default Footer