import React from 'react';
import Fade from 'react-reveal/Fade';
import smoothscroll from 'smoothscroll-polyfill';
import Button from '../Utilities/Button';
import avatar from '../../Assets/img/avatar.png';
import { HashLink as Link } from 'react-router-hash-link';
import styles from './Landing.module.css';

const Landing = () => {
  smoothscroll.polyfill();
  return (
    <header id='landing' className={`${styles.landing} ${'container'}`}>
      <Fade>
        <section className={styles.welcome}>
          <h1>
            <span>Hello!</span>
            <br />
            <span>Samyog Dhital</span>
          </h1>
          <h2>The Blockchain Engineer</h2>
          <Link smooth to='/#portfolio'>
            <Button input='See his work' />
          </Link>
        </section>
        <section className={styles.avatar}>
          <img src={avatar} alt='My Avatar' />
        </section>
      </Fade>
    </header>
  );
};

export default Landing;
