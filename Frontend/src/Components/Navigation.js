import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Routes, Route, Link } from 'react-router-dom';
import AllDestinations from './Destination_pages/AllDestinations';
// import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to="/">
          <Navbar.Brand>
            {/* <img src={logo} /> */}
            Voyage Vista
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"> {/* Changed me-auto to ms-auto */}
            <Nav.Link href="/AllDestinations">Destinations </Nav.Link>
            <Link className="nav-link" to="/deals">Deals</Link>
            <Nav.Link href="#link">About</Nav.Link>
            {/* <Nav.Link href="#ContactUs">Contact Us</Nav.Link> */}
            <Link className="nav-link" to="/contact">Contact Us</Link>
            {/* <Link className="nav-link" to="/deals">Deals</Link> */}
            <Link to="/Signup">
              <Button variant="outline-secondary" onclick="/Signup">Sign In</Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

<<<<<<< HEAD
export default Navigation;
=======
export default Navigation;

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Button from 'react-bootstrap/Button';
// import { BrowserRouter as Routes, Route, Link } from 'react-router-dom';
// // import { Link } from 'react-router-dom';

// function Navigation() {
//   return (
//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container>
//         <Link to="/">
//           <Navbar.Brand>
//             {/* <img src={logo} /> */}
//             Voyage Vista
//           </Navbar.Brand>
//         </Link>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto"> {/* Changed me-auto to ms-auto */}
//             <Nav.Link href="#home">Destinations </Nav.Link>
//             <Nav.Link href="#link">Deals</Nav.Link>
//             <Nav.Link href="#link">About</Nav.Link>
//             <Nav.Link href="#link">Contact Us</Nav.Link>
//             <Link to="/Signup">
//               <Button variant="outline-secondary" onclick="/Signup">Sign In</Button>
//             </Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default Navigation;
>>>>>>> 7bb4ee34a8a0cf16509c9105febc8dd319252a66
