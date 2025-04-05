import { useRef, useEffect } from 'react';
import './SkillCards.css';

interface SkillData {
  name: string;
  icon: string;
  level: number;
}

const skillsData: SkillData[] = [
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    level: 90
  },
  {
    name: "Spring",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    level: 85
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    level: 88
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    level: 80
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    level: 78
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    level: 75
  },
  {
    name: "JavaFX",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", // Usando o ícone do Java para JavaFX
    level: 82
  },
  {
    name: "UX/UI",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", // Usando Figma como representação para UX/UI
    level: 85
  },
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    level: 95
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    level: 90
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    level: 88
  }
];

const SkillCards: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;
    
    let scrollAmount = 0;
    let scrollMax = scrollContainer.scrollWidth - scrollContainer.clientWidth;
    let direction = 1; // 1 para direita, -1 para esquerda
    let animationId: number;
    let isPaused = false;
    
    const scroll = () => {
      if (isPaused) {
        animationId = requestAnimationFrame(scroll);
        return;
      }
      
      // Alterar direção quando atingir o final ou o início
      if (scrollAmount >= scrollMax) {
        direction = -1;
      } else if (scrollAmount <= 0) {
        direction = 1;
      }
      
      scrollAmount += 0.5 * direction; // Velocidade do scroll
      if (scrollContainer) {
        scrollContainer.scrollLeft = scrollAmount;
      }
      
      animationId = requestAnimationFrame(scroll);
    };
    
    // Iniciar a animação
    animationId = requestAnimationFrame(scroll);
    
    // Pausar o scroll quando o mouse estiver sobre o container
    const handleMouseEnter = () => {
      isPaused = true;
    };
    
    const handleMouseLeave = () => {
      isPaused = false;
    };
    
    // Permitir scroll manual
    const handleMouseWheel = () => {
      if (scrollContainer) {
        scrollAmount = scrollContainer.scrollLeft;
      }
    };
    
    if (scrollContainer) {
      scrollContainer.addEventListener('mouseenter', handleMouseEnter);
      scrollContainer.addEventListener('mouseleave', handleMouseLeave);
      scrollContainer.addEventListener('scroll', handleMouseWheel);
    }
    
    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      if (scrollContainer) {
        scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
        scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
        scrollContainer.removeEventListener('scroll', handleMouseWheel);
      }
    };
  }, []);
  
  return (
    <div className="skills-section" id='skills'>
      <h2 className="skills-title">Minhas Habilidades</h2>
      <div className="skills-container" ref={scrollContainerRef}>
        <div className="skills-wrapper">
          {skillsData.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon">
                <img src={skill.icon} alt={`${skill.name} icon`} />
              </div>
              <h3 className="skill-name">{skill.name}</h3>
              <div className="skill-level">
                <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
              </div>
            </div>
          ))}
          {/* Duplicação das primeiras skills para criar loop contínuo */}
          {skillsData.slice(0, 4).map((skill, index) => (
            <div className="skill-card" key={`dup-${index}`}>
              <div className="skill-icon">
                <img src={skill.icon} alt={`${skill.name} icon`} />
              </div>
              <h3 className="skill-name">{skill.name}</h3>
              <div className="skill-level">
                <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillCards;
