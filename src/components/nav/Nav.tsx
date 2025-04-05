import React, { useState, useEffect } from 'react';
import "./Nav.css"

interface NavProps {
  // Propriedades opcionais
}

const Nav: React.FC<NavProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [theme, setTheme] = useState<string>('light');
  const [logoUrl, setLogoUrl] = useState<string>('');


  // URL da imagem base para cada tema
  const darkLogoUrl = 'https://res.cloudinary.com/dvadwwvub/image/upload/v1743636535/ufwj6fska5fwiworkjwi.png';
  const lightLogoUrl = 'https://res.cloudinary.com/dvadwwvub/image/upload/v1743637084/egis7jjfkbpwcnudeqwe.png';

  // Gerenciar tema na inicialização
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  // Alternar menu mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Alternar tema e URL da imagem do logo
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);

    // Define a URL da imagem com base no tema
    setLogoUrl(newTheme === 'light' ? lightLogoUrl : darkLogoUrl);
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
  
      if (header) { // ✅ Verifica se header não é null antes de acessar classList
        if (window.scrollY > 0) {
          header.classList.add("scrolled");
        } else {
          header.classList.remove("scrolled");
        }
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

  // Define a URL inicial da imagem com base no tema atual
  useEffect(() => {
    setLogoUrl(theme === 'light' ? lightLogoUrl : darkLogoUrl);
  }, [theme]);
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src={logoUrl} alt="" style={{width: "200px"}}/>
        </div>

        {/* Botão do menu mobile */}
        <div className="menu-toggle" onClick={toggleMenu}>
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* Navegação */}
        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item"><a href="#home">Início</a></li>
            <li className="nav-item"><a href="#about">Sobre mim</a></li>
            <li className="nav-item"><a href="#experiences">Experiências</a></li>
            <li className="nav-item"><a href="#projects">Projetos</a></li>
            <li className="nav-item"><a href="#certificacoes">Certificações</a></li>
            <li className="nav-item"><a href="#skills">Habilidades</a></li>
          </ul>

          {/* Botão toggle para alternar tema com bolinha animada e ícones SVG */}
          <button 
            className={`theme-toggle ${theme === 'dark' ? 'dark' : ''}`} 
            onClick={toggleTheme}
            aria-label={`Mudar para tema ${theme === 'light' ? 'escuro' : 'claro'}`}
          >
            <svg className="icon-sun" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
            <svg className="icon-moon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Nav;