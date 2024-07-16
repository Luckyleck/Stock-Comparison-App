import React from 'react';

const InvestingHorizon = ({ onChange }) => {
    const handleChange = (e) => {
        onChange(e.target.value);
    };

    return (
        <div>
            <label htmlFor="investingHorizon">investing horizon:</label>
            <select id="investingHorizon" onChange={handleChange}>
                <option value="short-term">short-term</option>
                <option value="long-term">long-term</option>
            </select>
        </div>
    );
};

export default InvestingHorizon;
