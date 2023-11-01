import { Container, Row, Col, Nav, Navbar, NavDropdown } from "react-bootstrap";

const CustomNav = () => {
    return (
      <Navbar expand="md" bg="dark" data-bs-theme="dark">
      <Container id="custom-nav-container">
        <Row>
          <Col xs className="text-center">
            <Navbar.Brand id='custom-nav-brand' href="#home">React-Bootstrap</Navbar.Brand>
          </Col>
          <Col xs id="nav-link-col" className="text-end">
            <Navbar.Toggle aria-controls="basic-navbar-nav" id="custom-nav-hamburger" />
            <Navbar.Collapse id="basic-navbar-nav" className="ms-auto">
              <Nav className="ms-auto" >
                <div id="custom-nav-dropdown">
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                </div>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Container>
    </Navbar>
    )

}

export default CustomNav;