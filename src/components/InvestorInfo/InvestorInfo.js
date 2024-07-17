import React from 'react';
import PropTypes from 'prop-types'

const InvestorInfo = ({ setInvestorType }) => {
    const handleChange = (e) => {
        setInvestorType(e.target.value);
    };

    return (
        <select onChange={handleChange} defaultValue="">
            <option value="" disabled selected hidden>
                investor type
            </option>
            <option value="risk averse">risk averse</option>
            <option value="risk neutral">risk neutral</option>
            <option value="risk loving">risk loving</option>
        </select>
    );
};


InvestorInfo.propTypes = {
    setInvestorType: PropTypes.func
};

export default InvestorInfo;
