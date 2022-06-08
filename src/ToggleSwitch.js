import React from "react";
import './toggle.css';
    
function ToggleSwitch(){
    return(
      <div class="toggle">
          <label class="name">Monthly Billing</label>
          <input type="checkbox" class="checkbox" id="checkbox" />

          <label for="checkbox" class="label">
            <div class="ball"></div>
          </label>

          <label class="name">
            Yearly Billing
             <span>-25% discount</span>
          </label>
        </div>
    );
  };
    
  export default ToggleSwitch;