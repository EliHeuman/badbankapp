import Nav from 'react-bootstrap/Nav';
import ReactTooltip from 'react-tooltip';
import Button from 'react-bootstrap/Button';
function NavBar(){

  return(
    <Nav variant="pills"  className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Nav.Item >
        <Button className="navbar-brand" href="#/">
          BadBank
        </Button>
      </Nav.Item>
        <Nav.Link data-tip data-for="home" href="#/" >
          Home Page
            <ReactTooltip id="home" place="top" effect="solid">
              Welcome to RedRock bank page
            </ReactTooltip>
        </Nav.Link>
        <Nav.Link data-tip data-for="createaccount" href="#/CreateAccount/" >
          Create Account
            <ReactTooltip id="createaccount" place="top" effect="solid">
              Here you can create a new account
            </ReactTooltip>
        </Nav.Link>
        <Nav.Link data-tip data-for="deposit" href="#/deposit/" >
          Deposit
            <ReactTooltip id="deposit" place="top" effect="solid">
              Here you can deposit money into your account
            </ReactTooltip>
        </Nav.Link>
        <Nav.Link data-tip data-for="withdraw" href="#/withdraw/" >
          Withdraw
            <ReactTooltip id="withdraw" place="top" effect="solid">
              Here you can deposit withdraw from your account
            </ReactTooltip>
        </Nav.Link>
        <Nav.Link data-tip data-for="allData" href="#/alldata/" >
          All Data
            <ReactTooltip id="allData" place="top" effect="solid">
              Here you can see all data for new accounts
            </ReactTooltip>
        </Nav.Link>
    </Nav>
  );
}

export default NavBar;