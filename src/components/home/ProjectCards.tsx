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
    description: "Site criado para alavancar e modernizar a forma de vender o produto, tendo seu negócio online você é capaz de vender muito mais e crescer também.",
    technologies: ["React", "TypeScript", "UX/UI", "Vercel"],
    image: "https://res.cloudinary.com/dvadwwvub/image/upload/v1743796378/AcougueOpcaoDaCarne/nf5dbbi7y37stfpcqfvw.png",
    demoUrl: "https://www.acougueopcaodacarne.shop/",
    repoUrl: ""
  },
  {
    id: 2,
    title: "App de automação e geração de notas fiscais",
    description: "App criado no intuito de minimizar ao máximo, tempo e erros no momento de criar e calcular a carga no momento da venda.",
    technologies: ["Java", "JavaFX", "ItextPDF", "SQL", "UX/UI"],
    image: "https://res.cloudinary.com/dvadwwvub/image/upload/v1743871808/d2rpcdgbhukermxqh5zf.png",
    demoUrl: "",
    repoUrl: ""
  },
  {
    id: 2,
    title: "API focada em 2FA para softwares de terceiros",
    description: "Api criada para facilitar a implementação de autenticação em dois fatores, com o intuito de aumentar a segurança do usuário.",
    technologies: ["Java", "SpringBoot", "React", "JavaMailSender", "Thymeleaf"],
    image: "https://res.cloudinary.com/dvadwwvub/image/upload/v1747849403/2_usspcf.png",
    demoUrl: "https://2-fa-front-end-8kyf.vercel.app",
    repoUrl: ""
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

  // Helper function to render project links
  const renderProjectLink = (url: string, label: string, className: string) => {
    if (!url || url.trim() === '') {
      return (
        <button 
          className={`${className} disabled-link`} 
          disabled
          title="Link indisponível"
        >
          {label}
        </button>
      );
    }
    
    return (
      <a 
        href={url} 
        className={className} 
        target="_blank" 
        rel="noopener noreferrer"
      >
        {label}
      </a>
    );
  };

  return (
    <div className="projects-container" id='projects'>
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
              {renderProjectLink(
                projectsData[activeProject].demoUrl, 
                "Ver Demo", 
                "project-link demo-link"
              )}
              {renderProjectLink(
                projectsData[activeProject].repoUrl, 
                "Código", 
                "project-link repo-link"
              )}
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