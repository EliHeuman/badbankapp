import Nav from 'react-bootstrap/Nav';
import ReactTooltip from 'react-tooltip';
function NavBar(){

  return(
    <Nav variant="pills"  className="navbar navbar-expand-lg navbar-dark bg-dark">
      
      <Nav.Item>
        <Nav.Link className="navbar-brand" >
         BadBank
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link data-tip data-for="home" href="#/" >
          Home
            <ReactTooltip id="home" place="top" effect="solid">
              Welcome to RedRock bank page
            </ReactTooltip>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link data-tip data-for="createaccount" href="#/CreateAccount/" >
          Create Account
            <ReactTooltip id="createaccount" place="top" effect="solid">
              Here you can create a new account
            </ReactTooltip>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link data-tip data-for="deposit" href="#/deposit/" >
          Deposit
            <ReactTooltip id="deposit" place="top" effect="solid">
              Here you can deposit money into your account
            </ReactTooltip>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link data-tip data-for="withdraw" href="#/withdraw/" >
          Withdraw
            <ReactTooltip id="withdraw" place="top" effect="solid">
              Here you can deposit withdraw from your account
            </ReactTooltip>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link data-tip data-for="allData" href="#/alldata/" >
          AllData
            <ReactTooltip id="allData" place="top" effect="solid">
              Here you can see all data for new accounts
            </ReactTooltip>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavBar;