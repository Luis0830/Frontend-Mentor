import React from 'react'
import Circle from './images/Circle';
import BgPattern from './images/BgPattern';
import './style.css';
import ToggleSwitch from './ToggleSwitch';
import IconCheck from './images/IconCheck';


function Box(){

return(
 
<main className="main">
<BgPattern className="img"/>
     <header>
     
        <Circle className="circle"/>
         <h1>Simple, traffic-based pricing</h1>
         <p>Sign-up for our 30-day trial. no credit card required</p>
     </header>
     <section className="box-container">
          <div className="box-subContainer"><h3>100K PAGEVIEWS</h3>
          <h2><span className="price">$16.00</span>/month</h2></div>
          <div className="mark"><input type="range" name="range" id="range"/></div>
          <section className="box-toggle">
              
              <ToggleSwitch ClassName="toggle"/>
              
              </section>
          <div className="box-subContainer">
              <ul>
                  <li><IconCheck /> Unlimited Websites</li> 
                  <li><IconCheck />  100$ data ownership</li> 
                  <li><IconCheck />  Email reports</li></ul> 
                  <button class className="submit-button">Start my trial</button>
          </div>
     </section>
 </main>
 
)
}
export default Box;