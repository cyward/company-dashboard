import { Hero } from '../components/home/Hero';
import { Features } from '../components/home/Features';
import { Services } from '../components/home/Services';
import { Team } from '../components/home/Team';
import { Contact } from '../components/home/Contact';

export const Home: React.FC = () => {
  return (
    <div className="pt-16">
      <Hero id="home" />
      <Features />
      <Services id="services" />
      <Team id='team' />
      <Contact id="contact" />
    </div>
  );
};
