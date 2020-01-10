import React, { useContext } from 'react';
import AlertContext from '../../context/alertContext';

export const Alerts = () => {
  const alertContext = useContext(AlertContext);

  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map(alert => (
      <div key={alert.id} className={`alert alert-${alert.type}`}>
        <i className='material-icons footer-icon-position'>error</i>
        {alert.msg}
      </div>
    ))
  );
};

export default Alerts;
