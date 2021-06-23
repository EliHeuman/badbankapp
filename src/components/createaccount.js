import React from 'react';
import {Card, UserContext} from '../context';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Col from 'react-bootstrap/Col';

//CreateAccount Component.
function CreateAccount(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext);  
  // Validation for the name state.
  function nameValidation(fieldName, fieldValue) {
    if (fieldValue.trim() === '') {
      setStatus( `Error: ${fieldName} is required`);
      return alert(`${fieldName} is required`);
    }
    return true;
  }
  // Validation for the email state.
  function emailValidation(email) {
    if (email.trim() === '') {
      setStatus('Error: Email is required');
      return  alert('Email is required');
    }
    return true;
  }
  // Validation for the password state.
  function passwordValidation(password) {
    if (password.length < 8) {
      setStatus('Error: The password is not long enough.');
      return   alert('The password is not long enough (it needs at least eight characters).');
    }
    return true;
  }
//Validate and submit account data.
  function handleCreate() {
    console.log(name,email,password);
    setTimeout(() => setStatus(''),4000);
    if (
        nameValidation('Name', name) &&
        emailValidation(email      ) &&
        passwordValidation(password)
    ){
        ctx.users.push({name,email,password,balance:100});
        setShow(false);
     } 
     return ;
  }    

  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return (
    <Card
      header="Create Account"
      status={status}
      body={ 
        show ? ( 
          <form>
            <InputGroup className="mb-3">
              <Col xs="5">
                <InputGroup.Prepend> 
                  <InputGroup.Text  >Name</InputGroup.Text>
                </InputGroup.Prepend> 
                <FormControl
                  type="input"
                  id="name"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.currentTarget.value)}
                />
              </Col>
            </InputGroup>
            <InputGroup className="mb-3" >
              <Col xs="5" >
                <InputGroup.Prepend> 
                  <InputGroup.Text  >Email</InputGroup.Text>
                </InputGroup.Prepend> 
                <FormControl
                  type="input"
                  id="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                />
              </Col>
            </InputGroup>
            <InputGroup className="mb-3">
              <Col xs="5">
                <InputGroup.Prepend> 
                  <InputGroup.Text  >Password</InputGroup.Text>
                </InputGroup.Prepend> 
                <FormControl
                  type="input"
                  id="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.currentTarget.value)}
                />
              </Col>
            </InputGroup>   
            <Button
              size="sm"
              style={{float:'left',  margin: "15px"}}
              className="btn btn-dark" type="submit"
              value="Submit" id="submit-input"
              onClick={handleCreate}
            >
              Create Account
            </Button>        
          </form> 
            ):(
              <div>
              <h5>Success</h5>
              <Button
                variant="outline-secondry"
                type="submit"
                className="btn btn-dark"
                onClick={clearForm}
              >
                Add another account
              </Button>
              </div>
            )}
    />
  )
}

export default CreateAccount;