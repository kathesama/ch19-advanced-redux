import MainHeader from './MainHeader';

const Layout = (props) => {
  const { children } = props;

  return (
    <>
      <MainHeader />
      <main>{children}</main>
    </>
  );
};

export default Layout;
