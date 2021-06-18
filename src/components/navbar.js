import Nav from 'react-bootstrap/Nav';

function NavBar(){
  return(
    <>
    <Nav variant="pills"  className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Nav.Item>
        <Nav.Link className="navbar-brand"  href="#/">
         BadBank
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="1"  className="nav-link" href="#/CreateAccount/">
         Create Account
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="2"   className="nav-link" href="#/deposit/">
        Deposit
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="3" className="nav-link" href="#/withdraw/">
        Withdraw
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="4"  className="nav-link" href="#/alldata/">
        AllData
        </Nav.Link>
      </Nav.Item>
    </Nav>
    </>
  );
}

export default NavBar;