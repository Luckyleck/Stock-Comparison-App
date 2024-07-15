import React, { useState } from 'react';

const InvestorInfo = () => {
  const [riskPreference, setRiskPreference] = useState('');

  const handleChange = (event) => {
      setRiskPreference(event.target.value);
  };

  return (
      <div>
          <h3>Select your risk preference:</h3>
          <div>
              <input 
                  type="radio" 
                  id="riskAverse" 
                  name="riskPreference" 
                  value="Risk Averse" 
                  onChange={handleChange} 
              />
              <label htmlFor="riskAverse">Risk Averse (Risk avoiding)</label>
          </div>

          <div>
              <input 
                  type="radio" 
                  id="riskNeutral" 
                  name="riskPreference" 
                  value="Risk Neutral" 
                  onChange={handleChange} 
              />
              <label htmlFor="riskNeutral">Risk Neutral</label>
          </div>

          <div>
              <input 
                  type="radio" 
                  id="riskLoving" 
                  name="riskPreference" 
                  value="Risk Loving" 
                  onChange={handleChange} 
              />
              <label htmlFor="riskLoving">Risk Loving</label>
          </div>

          <div>
              <p>Risk Preference: {riskPreference}</p>
          </div>
      </div>
  );
};

export default InvestorInfo;