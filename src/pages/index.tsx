import Image from 'next/image';
import { HomeContainer } from '@/styles/HomeStyles';
import { HomeHero } from '@/components/HomeHero';
import { Header } from '@/components/Header';
import { Experiencias } from '@/components/Experiencias';
import {Proyectos}  from '../components/Proyectos';
import styles from '@/styles/theme'
import Footer from '@/components/Footer';
const Home = () => {
  
  return (
    <HomeContainer>
      <Header/>
      <main className="container">
        <HomeHero />
      </main>
      <Footer/>
    </HomeContainer>
  );
};

export default Home;
