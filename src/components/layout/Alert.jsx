import React, { useContext } from 'react';
import AlertContext from '../../context/alert/AlertContext';

const Alert = () => {
  const { alert } = useContext(AlertContext);

  return (
    alert !== null && (
      <div className={`alert alert-${alert.typeAlert}`}>
        <i className="fas fa-info-circle" /> {alert.message}
      </div>
    )
  )
};

export default Alert;
