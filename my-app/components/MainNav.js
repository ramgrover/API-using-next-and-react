import { Container, Nav, Navbar } from 'react-bootstrap';
import Link from 'next/link';

const MainNav = () => {
    return (
        <>
        <Navbar expand="lg" className="fixed-top navbar-dark bg-dark">
            <Container>
                <Navbar.Brand>Ram Grover</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
              
                    <Nav className="me-auto">
                        <Link href="/" passHref legacyBehavior>
                            <Nav.Link>Listings</Nav.Link>
                        </Link>
                        <Link href="/about" passHref legacyBehavior>
                            <Nav.Link>About</Nav.Link>
                        </Link>
                    </Nav>
                
            </Container>
        </Navbar>
        <br /><br />
        </>
    );
};

export default MainNav;
