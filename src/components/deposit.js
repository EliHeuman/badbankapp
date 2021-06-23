import React from 'react';
import {Card} from '../context';
import {UserContext} from '../context.js';
import {Account} from '../context';
 
//Create Deposit Component.
function Deposit(){
// ctx has users data as context.
  const ctx = React.useContext(UserContext);
  //console.log(ctx.users[0].balance);
  
  return (
//Card Component.
    <>
      <Card
          header="Deposit" 
          bgcolor="dark"     
          body={
// Account Component with depositStatus set to true.
                <Account
                  ctx = {ctx}
                  depositStatus = {true}
               />
          }
        />
    </>
  )
}  


export default Deposit;