import React, { useState, useEffect, useRef } from 'react';
import {Box, Computer, Keyboard, PaintBucket} from 'lucide-react';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}

const StatsCounter: React.FC = () => {
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats: StatItem[] = [
    { value: 4, suffix: '+', label: 'Anos de experiência' },
    { value: 3, suffix: '+', label: 'Clientes Satisfeitos' },
    { value: 5, suffix: '+', label: 'Projetos realizados' },
    { value: 2, suffix: '', label: 'Empresas trabalhadas/produtos' }
  ];

  const services: ServiceItem[] = [
    {
      icon: '',
      title: 'Desenvolvimento Web',
      description: 'Criação de sistema web, backend e frontend, com banco de dados.'
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Para que o usuário tenha uma melhor experiência e facilidade ao acessar o produto.'
    },
    {
      icon: '📱',
      title: 'Desenvolvimento de APIs RestFul',
      description: 'Desenvolvimento de APIs em Java e Spring Boot, adotando clean-code e excelente arquitetura de software.'
    },
    {
      icon: '📈',
      title: 'SEO Google',
      description: 'Para que o sistema fique otimizado, melhorando o ranking da pesquisa do seu site no Google.'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateCounters = () => {
    stats.forEach((stat, index) => {
      let start = 0;
      const end = stat.value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = end;
            return newCounts;
          });
          clearInterval(timer);
        } else {
          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = Math.floor(start);
            return newCounts;
          });
        }
      }, 16);
    });
  };

  return (
    <>
      <style>{`
        .portfolio-section {
          background: linear-gradient(
  180deg,
  var(--background-color) 0%,
  var(--border-color) 50%,
  var(--background-color) 100%
);

          height: auto;
          padding: 2rem 1rem 3rem 1rem;
          font-family: 'Inter', sans-serif;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .stats-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          margin-bottom: 6rem;
        }

        .stat-item {
          text-align: center;
          padding: 1rem;
        }

        .stat-number {
          font-family: 'Poppins', sans-serif;
          font-size: 4rem;
          font-weight: 700;
          color: var(--primary-color);
          margin-bottom: 0.5rem;
          line-height: 1;
        }

        .stat-label {
          font-family: 'Inter', sans-serif;
          font-size: 0.95rem;
          color: var(--text-color);
          font-weight: 400;
          line-height: 1.4;
        }

        .section-title-container {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-title {
          font-family: 'Poppins', sans-serif;
          font-size: 3.5rem;
          font-weight: 700;
          color: var(--text-color);
          margin-bottom: 1rem;
        }

        .title-underline {
          width: 80px;
          height: 4px;
          background-color:var(--primary-color);
          margin: 0 auto;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 3rem;
        }

        .service-item {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
        }

        .service-icon {
          width: 64px;
          height: 64px;
          background-color:var(--shadow-color);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .service-icon-symbol {
          font-size: 1.5rem;
          color: #EF4444;
        }

        .service-content {
          flex: 1;
        }

        .service-title {
          font-family: 'Poppins', sans-serif;
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--primary-color););
          margin-bottom: 0.75rem;
        }

        .service-description {
          font-family: 'Inter', sans-serif;
          color: var(--text-color);
          line-height: 1.6;
          font-size: 0.95rem;
        }

        @media (max-width: 768px) {
          .stats-row {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
          
          .services-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .stat-number {
            font-size: 3rem;
          }
          
          .section-title {
            font-size: 2.5rem;
          }
          
          .portfolio-section {
            padding: 2rem 1rem;
          }
        }

        @media (max-width: 480px) {
          .stats-row {
            grid-template-columns: 1fr;
          }
          
          .stat-number {
            font-size: 2.5rem;
          }
          
          .section-title {
            font-size: 2rem;
          }
        }
      `}</style>

      <div ref={sectionRef} className="portfolio-section">
        <div className="container">
          {/* Stats Section */}
          <div className="stats-row">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">
                  {counts[index]}{stat.suffix}
                </div>
                <div className="stat-label">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* What I Do Section */}
          <div className="section-title-container">
            <h2 className="section-title">
              O que eu faço?
            </h2>
            <div className="title-underline"></div>
          </div>

          {/* Services Grid */}
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-item">
                <div className="service-icon">
                  <div className="service-icon-symbol">
                    {index === 0 && <Computer size={32} color="var(--primary-color)" />}
                    {index === 1 && <PaintBucket size={32} color="var(--primary-color)" />}
                    {index === 2 && <Box size={32} color="var(--primary-color)" />}
                    {index === 3 && <Keyboard size={32} color="var(--primary-color)" />}
                  </div>
                </div>
                <div className="service-content">
                  <h3 className="service-title">
                    {service.title}
                  </h3>
                  <p className="service-description">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default StatsCounter;