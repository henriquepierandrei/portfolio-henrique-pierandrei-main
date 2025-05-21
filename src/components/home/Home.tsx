import { useState, useEffect } from 'react';
import "./Home.css";
import Nav from '../nav/Nav';
import Typewriter from 'typewriter-effect';
import AboutMe from './AboutMe';
import SkillCards from './SkillCards';
import ProjectCards from './ProjectCards';
import Footer from '../footer/Footer';
import StatsCounter from './StatsCounter';


// Define particlesJS para evitar erro no TypeScript
declare global {
  interface Window {
    particlesJS: any;
  }
}

function Home() {
  const [theme, setTheme] = useState<string>('light');


  // Inicializa particles.js após o componente montar
  useEffect(() => {
    // Verifica tema salvo
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    }

    // Verifica se a biblioteca particles.js já está carregada
    if (window.particlesJS) {
      initParticles(theme);
    } else {
      // Carrega o script particles.js se não estiver disponível
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js';
      script.async = true;
      script.onload = () => initParticles(theme);
      document.body.appendChild(script);
    }
  }, []);

  // Atualiza as partículas quando o tema muda
  useEffect(() => {
    if (window.particlesJS) {
      initParticles(theme);
    }
  }, [theme]);




  // Função para inicializar as partículas com base no tema
  const initParticles = (currentTheme: string) => {
    const particleColor = currentTheme === 'light' ? '#1f2127' : '#CBD5E1'; // cor clara no dark
    const linkColor = currentTheme === 'light' ? '#1f2127' : '#3B82F6'; // azul mais vibrante no dark


    window.particlesJS('particles-js', {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: particleColor },
        shape: { type: "circle" },
        opacity: { value: 0.5, anim: { enable: false } },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: linkColor, opacity: 0.4, width: 1 },
        move: { enable: true, speed: 3 }
      },
      interactivity: {
        detect_on: "window",
        events: {
          onhover: {
            enable: true,
            mode: "repulse" // Faz as partículas fugirem do mouse
          },
          onclick: {
            enable: true,
            mode: "push" // Adiciona partículas ao clicar
          },
          resize: true
        },
        modes: {
          grab: { distance: 140, line_linked: { opacity: 1 } },
          repulse: { distance: 100, duration: 0.6 }, // Partículas fogem do mouse
          push: { particles_nb: 4 } // Adiciona 4 partículas ao clicar
        }
      },
      retina_detect: true
    });
  };


  return (
    <div className="home-container" id='home'>
      <Nav />

      {/* Container para particles.js */}
      <div id="particles-js" className="particles-container" style={{ cursor: "pointer" }}></div>

      <div className="hero-content">
        <h1 className="name-title">
          <Typewriter
            options={{
              strings: ['Henrique Pierandrei'],
              autoStart: true,
              loop: true,
              delay: 300,
              deleteSpeed: 300,
            }}
          />
        </h1>
        <p className="portfolio-subtitle">
          <Typewriter
            options={{
              strings: ['FullStack Developer - Java & React'],
              autoStart: true,
              loop: true,
              delay: 200,
              deleteSpeed: 250,
            }}
          />
        </p>

      </div>
      <section className="gradient-transition"></section>

      <AboutMe />
      <SkillCards />
      <StatsCounter />
      <ProjectCards />
      <br />
      <Footer />
    </div>
  );
}

export default Home;
