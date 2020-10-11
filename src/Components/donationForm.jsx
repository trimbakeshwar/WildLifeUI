import React from "react";
import "../Styles/Donationform.scss";
import Button from "react-bootstrap/Button";

export default function Donationform() {
  return (
      <div className="donationContainer">
          <div className="dropdown">
          <select name="Select An Amount" className="selectAmount">
        
          <option value="$100" className="options">
            $100
          </option>
          <option value="$200" className="options">
            $200
          </option>
          <option value="Other" className="options">
            Other
          </option>
          
        </select>
          </div>
          <div>
              <input type="text" placeholder="Name" className="name"/>
          </div>
          <div><input type="text" placeholder="Email" className="name"/></div>
          <div>
        <Button className="button" className="donatebutton">DONATE NOW</Button>
      </div>
      </div>
  );}