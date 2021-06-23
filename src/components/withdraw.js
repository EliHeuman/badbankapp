import React from 'react';
import {Card} from '../context';
import {UserContext} from '../context.js';
import {Account} from '../context';

//Create Withdraw Component.
function Withdraw() {
// ctx has users data as context.
      const ctx = React.useContext(UserContext);
//      console.log('render Withdraw');
//    console.log(ctx.users[0].balance);

        return (
//Card Component.
            <>
            <Card
            header="Withdraw"
            bgcolor="dark"
            body={
// Account Component with depositStatus set to false.
                  <Account
                    ctx = {ctx}
                    depositStatus = {false}
                  />
                }
              />
          </>
        )
      }  
      

export default Withdraw;