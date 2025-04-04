import React, { useState } from 'react';
import './ProjectCards.css';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  demoUrl: string;
  repoUrl: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Site para ecommerce",
    description: "Site criado para alavancar e modernizar a forma de vender o produto, demonstrando o poder de alcance de um site digital.",
    technologies: ["React", "TypeScript", "UI/UI", "Vercel"],
    image: "https://res.cloudinary.com/dvadwwvub/image/upload/v1743796378/AcougueOpcaoDaCarne/nf5dbbi7y37stfpcqfvw.png",
    demoUrl: "https://www.acougueopcaodacarne.shop/",
    repoUrl: ""
  },
  {
    id: 2,
    title: "App de Controle Financeiro",
    description: "Aplicativo móvel para acompanhamento de despesas e receitas com gráficos e categorização inteligente.",
    technologies: ["React Native", "TypeScript", "Firebase"],
    image: "https://via.placeholder.com/800x600/3B82F6/FFFFFF?text=Finance+App",
    demoUrl: "https://finance-app.exemplo.com",
    repoUrl: "https://github.com/seuusuario/finance-app"
  },
  {
    id: 3,
    title: "E-commerce Responsivo",
    description: "Plataforma de comércio eletrônico completa com catálogo de produtos, carrinho e sistema de pagamento.",
    technologies: ["React", "Node.js", "MongoDB", "Docker"],
    image: "https://via.placeholder.com/800x600/60A5FA/FFFFFF?text=E-commerce",
    demoUrl: "https://ecommerce.exemplo.com",
    repoUrl: "https://github.com/seuusuario/ecommerce-platform"
  },
  {
    id: 4,
    title: "Dashboard Analítico",
    description: "Interface de visualização de dados com gráficos interativos e relatórios personalizáveis.",
    technologies: ["React", "D3.js", "Python", "Flask"],
    image: "https://via.placeholder.com/800x600/0e2769/FFFFFF?text=Analytics+Dashboard",
    demoUrl: "https://analytics.exemplo.com",
    repoUrl: "https://github.com/seuusuario/analytics-dashboard"
  },
  {
    id: 5,
    title: "Sistema de Gestão de Tarefas",
    description: "Aplicativo para organização de projetos e tarefas com funcionalidades de drag-and-drop e notificações.",
    technologies: ["Java", "JavaFX", "PostgreSQL"],
    image: "https://via.placeholder.com/800x600/3B82F6/FFFFFF?text=Task+Manager",
    demoUrl: "https://tasks.exemplo.com",
    repoUrl: "https://github.com/seuusuario/task-manager"
  }
];

const ProjectCards: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number>(0);

  const nextProject = () => {
    setActiveProject((prev) => (prev === projectsData.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev === 0 ? projectsData.length - 1 : prev - 1));
  };

  const goToProject = (index: number) => {
    setActiveProject(index);
  };

  return (
    <div className="projects-container">
      <h2 className="projects-title">Meus Projetos</h2>
      
      <div className="projects-showcase">
        <button className="nav-arrow prev" onClick={prevProject} aria-label="Projeto anterior">
          &lt;
        </button>
        
        <div className="project-card">
          <div className="project-image">
            <img src={projectsData[activeProject].image} alt={projectsData[activeProject].title} />
          </div>
          
          <div className="project-details">
            <h3 className="project-title">{projectsData[activeProject].title}</h3>
            <p className="project-description">{projectsData[activeProject].description}</p>
            
            <div className="project-tech-stack">
              {projectsData[activeProject].technologies.map((tech, i) => (
                <span key={i} className="tech-badge">{tech}</span>
              ))}
            </div>
            
            <div className="project-links">
              <a href={projectsData[activeProject].demoUrl} className="project-link demo-link" target="_blank" rel="noopener noreferrer">
                Ver Demo
              </a>
              <a href={projectsData[activeProject].repoUrl} className="project-link repo-link" target="_blank" rel="noopener noreferrer">
                Código
              </a>
            </div>
          </div>
        </div>
        
        <button className="nav-arrow next" onClick={nextProject} aria-label="Próximo projeto">
          &gt;
        </button>
      </div>
      
      <div className="projects-navigation">
        {projectsData.map((_, index) => (
          <button
            key={index}
            className={`nav-dot ${index === activeProject ? 'active' : ''}`}
            onClick={() => goToProject(index)}
            aria-label={`Ver projeto ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCards;