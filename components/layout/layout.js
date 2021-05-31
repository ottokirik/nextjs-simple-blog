import { MainNavigation } from 'components/layout/main-navigation';
import Notification from 'components/ui/notification';
import { NotificationContext } from 'context/notification-context';
import { useContext } from 'react';

const Layout = ({ children }) => {
  const { notification } = useContext(NotificationContext);
  return (
    <>
      <MainNavigation />
      <main>{children}</main>
      {notification && (
        <Notification
          title={notification.title}
          message={notification.message}
          status={notification.status}
        />
      )}
    </>
  );
};

export { Layout };
