import classes from 'components/layout/logo.module.css';

const Logo = () => {
  const { logo } = classes;
  return <div className={logo}>Max' Next Blog</div>;
};

export { Logo };
