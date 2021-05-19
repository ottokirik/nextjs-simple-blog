import Image from 'next/image';

import classess from 'components/home-page/hero.module.css';

const Hero = () => {
  const { hero, image } = classess;
  return (
    <section className={hero}>
      <div className={image}>
        <Image src="/images/site/max.png" alt="" width={300} height={300} />
      </div>
      <h1>Hi, I'm Max</h1>
      <p>Some text</p>
    </section>
  );
};

export default Hero;
