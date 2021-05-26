import Link from 'next/link';
import { Logo } from 'components/layout/logo';

import classes from 'components/layout/main-navigation.module.css';

const MainNavigation = () => {
  const { header } = classes;
  return (
    <header className={header}>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>

      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { MainNavigation };
