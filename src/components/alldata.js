import React from 'react';
import {Card} from '../context';
import Table from 'react-bootstrap/Table';
import {UserContext} from '../context.js';
//AllData Component.
function AllData(){
  const ctx = React.useContext(UserContext);
  let val = [ctx.users];
  let arr =[...val];

  return (
  //return Card Component
    <>
      <Card
        header="All Data in Store"
        body={
//Table inside the card Component displays all account data from Create Account component.
          <Table striped bordered hover variant="dark" >
            <thead>
              <tr>
                <th>First Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Account Balance</th>
              </tr>
            </thead>
            <tbody>
            {arr.map((user) =>( 
              user.map((item) =>(
                <tr>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.password}</td>
                  <td>{item.balance}</td>
                </tr>
              
            ))))}
            </tbody>
          </Table>
        }
      />            
    </>
  );
}

export default AllData;