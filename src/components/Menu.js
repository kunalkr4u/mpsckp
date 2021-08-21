import React from 'react';
import {Navbar, Nav} from "react-bootstrap";
import Home from './Home';
import About from './About';
import Academic from './Academic';
import Admission from './Admission';
import Facility from './Facility';
import Result from './Result';
import Gallery from './Gallery';
import Vacancy from './Vacancy';
import Contact from './Contact';
import logo from '../images/logo.png';
import {Container,Row,Col} from 'react-bootstrap';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";
  let home="/home";
const Menu=()=>{
    return(
		<Router>
			<Container>
			<Row>
                <Col md={3}>
                    <Navbar.Brand as={Link} to={"/home"}><img src={logo} alt="logo"/></Navbar.Brand>
                </Col>
				<Col md={9}>
                    <div className="header-info d-none d-sm-none d-md-block hidden-xs">
								<ul>
									<li><a href="tel:9955475737"><i className="fa fa-phone-square"></i>+91 9955475737</a></li>
									<li><a href="https://wa.me/9934534059"><i className="fa fa-whatsapp"></i>+91 9934534059</a></li>
									<li><a href="mailto:mpsckp@gmail.com"><i className="fa fa-envelope-o"></i>mpsckp@gmail.com</a></li>
									
									<li><a href={home}>Admission Open</a></li>
								</ul>
						</div>
					<Navbar expand="lg">
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link as={Link} to={"/home"}><i className="fa fa-home"></i> Home</Nav.Link>
							<Nav.Link as={Link} to={"/about"}>About Us</Nav.Link>
							<Nav.Link as={Link} to={"/academic"}>Academic</Nav.Link>
							<Nav.Link as={Link} to={"/admission"}>Admission</Nav.Link>
							<Nav.Link as={Link} to={"/facility"}>Facility</Nav.Link>
							<Nav.Link as={Link} to={"/result"}>Result</Nav.Link>
							<Nav.Link as={Link} to={"/gallery"}>Gallery</Nav.Link>
							<Nav.Link as={Link} to={"/vacancy"}>Join Us</Nav.Link>
							<Nav.Link as={Link} to={"/contact"}>Contact Us</Nav.Link>
						
						</Nav>
						
					</Navbar.Collapse>
					</Navbar>
				</Col>
			</Row>
		</Container>
        
		<Container fluid>
		<Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/academic">
            <Academic />
          </Route>
          <Route path="/admission">
            <Admission />
          </Route>
          <Route path="/facility">
            <Facility />
          </Route>
          <Route path="/result">
            <Result />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/vacancy">
            <Vacancy />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
		</Container>
		</Router>
    );
}

export default Menu;