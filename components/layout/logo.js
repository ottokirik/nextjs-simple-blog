import classess from 'components/layout/logo.module.css';

const Logo = () => {
  const { logo } = classess;
  return <div className={logo}>Max' Next Blog</div>;
};

export { Logo };
