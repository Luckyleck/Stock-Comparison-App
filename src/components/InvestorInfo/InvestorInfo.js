import React from 'react';

const InvestorInfo = ({ onChange }) => {
    const handleChange = (e) => {
        onChange(e.target.value);
    };

    return (
        <div>
            <label htmlFor="investorType">investor type:</label>
            <select id="investorType" onChange={handleChange}>
                <option value="risk averse">risk averse</option>
                <option value="risk neutral">risk neutral</option>
                <option value="risk loving">risk loving</option>
            </select>
        </div>
    );
};

export default InvestorInfo;
