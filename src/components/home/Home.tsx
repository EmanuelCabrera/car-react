import { FC } from 'react';
import { HomeProps } from './types';
import CarouselSlider from '../slider/Slider';
import './Home.css';

const Home: FC<HomeProps> = ({
  title = "Welcome to Motorgo",
  subtitle = "El lugar para encontrar tu proximo auto",
  description = "A comprehensive solution for tracking and managing your cars"
}) => {
  return (
    <>
      <section className="home-hero">
        <h1 className="home-hero-title" style={{fontWeight: 'bold', color: 'black' }}>{title}</h1>
        <h2 className="home-hero-subtitle" style={{color: 'black' }}>{subtitle}</h2>
        <p className="home-hero-description" style={{color: 'black' }}>{description}</p>
      </section>
      <CarouselSlider />
    </>
  );
};

export default Home;