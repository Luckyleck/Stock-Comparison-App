import React from 'react';
import PropTypes from 'prop-types';

const InvestingHorizon = ({ setInvestingHorizon }) => {
    const handleChange = (e) => {
        setInvestingHorizon(e.target.value);
    };

    return (
        <select onChange={handleChange}>
            <option value="" disabled selected hidden>
                investing horizon
            </option>
            <option value="short-term">short-term</option>
            <option value="long-term">long-term</option>
        </select>
    );
};

InvestingHorizon.propTypes = {
    setInvestingHorizon: PropTypes.func,
};

export default InvestingHorizon;
