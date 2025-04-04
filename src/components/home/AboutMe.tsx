import "./AboutMe.css";
import { Code, Layout, Users, Database, Server, Globe } from 'lucide-react';


function AboutMe() {
    return (
        <section className="about-me-section" id="about">
            <div className="container">
                <h2 className="section-title">Sobre Mim</h2>

                <div className="about-content">
                    <div className="about-image-container">
                        <div className="about-image-wrapper">
                            <img
                                src="https://res.cloudinary.com/dvadwwvub/image/upload/v1743701121/sxcdvvpwukgs6v5fokox.jpg"
                                alt="Sua Foto"
                                className="about-image"
                            />
                            <div className="image-decoration"></div>
                        </div>

                        <div className="skills-badges">
                            <span className="skill-badge">Spring Framework</span>
                            <span className="skill-badge">React</span>
                            <span className="skill-badge">Java</span>
                            <span className="skill-badge">APIs RestFul</span>
                            <span className="skill-badge">HTML</span>
                        </div>
                    </div>

                    <div className="about-text">
                        <h3 className="hello-text">Olá, eu sou <span className="highlight-text">Henrique Pierandrei</span></h3>

                        <p className="bio-text">
                            Como Desenvolvedor FullStack, eu transformo ideias em experiências digitais intuitivas e robustas. Minha paixão está na tecnologia, criando softwares que não apenas impressionam, mas também resolvem problemas reais.
                        </p>

                        <p className="bio-text">
                            Cursando Análise e Desenvolvimento de Sistemas, eu trago uma perspectiva holística para cada projeto. Acredito que grandes produtos nascem da colaboração e da atenção meticulosa aos detalhes.
                        </p>

                        <div className="expertise-areas">
                            <div className="expertise-container">
                                {/* Seções existentes */}
                                <div className="expertise-item">
                                    <div className="expertise-icon">
                                        <Code size={24} />
                                    </div>
                                    <div className="expertise-details">
                                        <h4>Desenvolvimento Front-end</h4>
                                        <p>Desenvolvimento de aplicações web responsivas e performáticas com React, HTML, CSS e TypeScript.</p>
                                    </div>
                                </div>

                                <div className="expertise-item">
                                    <div className="expertise-icon">
                                        <Layout size={24} />
                                    </div>
                                    <div className="expertise-details">
                                        <h4>Prototipagem</h4>
                                        <p>Criação de protótipos interativos utilizando Figma e Adobe XD.</p>
                                    </div>
                                </div>

                                <div className="expertise-item">
                                    <div className="expertise-icon">
                                        <Users size={24} />
                                    </div>
                                    <div className="expertise-details">
                                        <h4>Pesquisa de Usuário</h4>
                                        <p>Condução de pesquisas para entender as necessidades e comportamentos dos usuários.</p>
                                    </div>
                                </div>

                                {/* Novas seções adicionadas */}
                                <div className="expertise-item">
                                    <div className="expertise-icon">
                                        <Server size={24} />
                                    </div>
                                    <div className="expertise-details">
                                        <h4>Desenvolvimento Back-end</h4>
                                        <p>Construção de APIs robustas e escaláveis com Java, Spring e Python.</p>
                                    </div>
                                </div>

                                <div className="expertise-item">
                                    <div className="expertise-icon">
                                        <Database size={24} />
                                    </div>
                                    <div className="expertise-details">
                                        <h4>Banco de Dados</h4>
                                        <p>Modelagem, implementação e otimização de bancos de dados com PostgreSQL.</p>
                                    </div>
                                </div>

                                <div className="expertise-item">
                                    <div className="expertise-icon">
                                        <Globe size={24} />
                                    </div>
                                    <div className="expertise-details">
                                        <h4>Desenvolvimento Full-Stack</h4>
                                        <p>Desenvolvimento completo de aplicações utilizando TypeScript, React, Java e Python.</p>
                                    </div>
                                </div>
                            </div>

                            <a href="#contact" className="contact-button">
                                Vamos conversar
                            </a>
                        </div>
                    </div>
                </div>
            </div>    
        </section>
    );
}

export default AboutMe;