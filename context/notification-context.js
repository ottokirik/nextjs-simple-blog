import { createContext, useEffect, useState } from 'react';

export const NOTIFICATION_STATUS = {
  success: 'success',
  error: 'error',
  pending: 'pending',
};

export const NotificationContext = createContext({
  notification: null,
  showNotification: (notificationData) => {},
  hideNotification: () => {},
});

export const NotificationContextProvider = ({ children }) => {
  const [activeNotification, setActiveNotification] = useState(null);

  useEffect(() => {
    if (
      activeNotification &&
      (activeNotification.status === NOTIFICATION_STATUS.success ||
        activeNotification.status === NOTIFICATION_STATUS.error)
    ) {
      const timer = setTimeout(() => {
        setActiveNotification(null);
      }, 1500);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [activeNotification]);

  const showNotificationHandler = (notificationData) => {
    setActiveNotification(notificationData);
  };

  const hideNotificationHandler = () => {
    setActiveNotification(null);
  };

  const context = {
    notification: activeNotification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler,
  };

  return (
    <NotificationContext.Provider value={context}>
      {children}
    </NotificationContext.Provider>
  );
};
