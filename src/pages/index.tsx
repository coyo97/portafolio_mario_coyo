import Image from 'next/image';
import { HomeContainer } from '@/styles/HomeStyles';
import { HomeHero } from '@/components/HomeHero';
import { Header } from '@/components/Header';
import { Experiencias } from '@/components/Experiencias';
import {Proyectos}  from '../components/Proyectos';
import styles from '@/styles/theme'
const Home = () => {
  
  return (
    <HomeContainer>
      <Header/>
      <main className="container">
        <HomeHero />
        <Experiencias/>
        <Proyectos/>
      </main>
    </HomeContainer>
  );
};

export default Home;
