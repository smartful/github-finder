import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ alertMsg }) => {
  return (
    alertMsg !== null && (
      <div className={`alert alert-${alertMsg.type}`}>
        <i className="fas fa-info-circle" /> {alertMsg.message}
      </div>
    )
  )
};

Alert.protoTypes = {
  alertMsg: PropTypes.object,
};

export default Alert;
