
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Research from '@/components/Research';
import Projects from '@/components/Projects';
import YouTube from '@/components/YouTube';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <About />
      <Research />
      <Projects />
      <YouTube />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
