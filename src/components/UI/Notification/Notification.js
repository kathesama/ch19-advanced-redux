/*
Created by: kathe
On: 05-Dec-21 : 05-Dec-21
Project: ch19-advanced-redux
*/
import React from 'react';
import cssStyle from './Notification.module.css';

const NotificationComponent = (props) => {
  const { status, title, message } = props;
  let specialClasses = '';

  if (status === 'error') {
    specialClasses = cssStyle.error;
  }

  if (status === 'success') {
    specialClasses = cssStyle.success;
  }

  const cssClasses = `${cssStyle.notification} ${specialClasses}`;

  return (
    <section className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </section>
  );
};

export default NotificationComponent;
