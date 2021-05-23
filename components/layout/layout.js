import { MainNavigation } from 'components/layout/main-navigation';

const Layout = ({ children }) => {
  return (
    <>
      <MainNavigation />
      <main>{children}</main>
    </>
  );
};

export { Layout };
