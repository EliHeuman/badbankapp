import React from 'react';
import {Card} from '../context';
import badbank from '../images/bank.png';
function Home(){
  return (
    <Card
      txtcolor="white"
      header="RedRock BadBank"
      
      title="Welcome to RedRock bank"
      text="You can move around using the navigation bar."
      bgcolor="dark"
      body={( 
        <img 
          src={badbank} 
          className='figure-img img-fluid rounded shadow-3 mb-3' 
          alt="Responsive"
        />
      )}
      />   
  ); 
};


export default Home;