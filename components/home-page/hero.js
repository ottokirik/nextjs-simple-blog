import Image from 'next/image';

import classes from 'components/home-page/hero.module.css';

const Hero = () => {
  const { hero, image } = classes;
  return (
    <section className={hero}>
      <div className={image}>
        <Image src="/images/site/max.png" alt="" width={300} height={300} />
      </div>
      <h1>Hi, I'm Max</h1>
      <p>
        Aut delectus suscipit assumenda quidem sed expedita nihil perferendis
        et.
      </p>
    </section>
  );
};

export default Hero;
