import React from 'react';
import Article from './Article';

const Main = () => {
  const articles = [
    {
      heading: 'About',
      p1: `Samyog Dhital is a trailblazing blockchain developer who is at the forefront of the web3 revolution. His extensive knowledge of Ethereum, Solana, Near Protocol, as well as his expertise in Rust programming, allows him to create cutting-edge applications that harness the power of blockchain to drive innovation.`,
      p2: `His background as a frontend engineer gives him a unique perspective on the user experience, enabling him to design solution that are both engaging and intuitive. With a passion for pushing the boundaries of what's possible, Samyog is a true visionary in the world of web3 development.`,
      technologies: false,
    },
    {
      heading: 'Portfolio',
      portfolio: true,
    },
  ];
  return (
    <main>
      {articles.map((data, index) => {
        return <Article data={data} index={index} key={index} />;
      })}
    </main>
  );
};

export default Main;
