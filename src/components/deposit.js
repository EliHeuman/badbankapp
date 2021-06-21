import React from 'react';
import {Card} from '../context';
import {UserContext} from '../context.js';
import {Account} from '../context';
 
function Deposit(){
  const ctx = React.useContext(UserContext);
  console.log(ctx.users[0].balance);
  
  return (
    <>
      <Card
          header="Deposit" 
          bgcolor="dark"     
          body={<Account
                ctx = {ctx}
                depositStatus = {true}
               />
          }
        />
    </>
  )
}  


export default Deposit;