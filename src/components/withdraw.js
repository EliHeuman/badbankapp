import React from 'react';
import {Card} from '../context';
import {UserContext} from '../context.js';
import {Account} from '../context';

function Withdraw() {
      const ctx = React.useContext(UserContext);
      console.log('render');
      console.log(ctx.users[0].balance);
     
          
      

        return (
            <>
            <Card
            // log={console.log(ctx.users[0].balance)}
            header="Withdraw"
            bgcolor="dark"
            // status={status}
            
            body={<Account
                    ctx = {ctx}
                    depositStatus = {false}
                  />
                }
              />
          </>
        )
      }  
      

export default Withdraw;