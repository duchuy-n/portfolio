import React, { useEffect, useState, useRef } from 'react';
import './index.css';

const PROJECTS = [
  {
    title: "MetaShell (MSH)",
    description: "Engineered a cinematic, AI-integrated Windows shell in C using Win32 API. Orchestrates real-world .bat workflows and features a built-in Copilot AI for natural-language command execution.",
    tags: ["C", "Win32 API", "Systems", "AI"],
    github: "https://github.com/duchuy-n/MetaShell---builtins.git",
    demo: "https://bit.ly/metashell-demo",
    image: "/metashell-preview.png"
  },
  {
    title: "Subway Web Routing",
    description: "Developed a high-performance routing system for the Taipei MRT network (>800 topological nodes). Achieved sub-10ms pathfinding using a custom Dijkstra implementation on GIS station-line data.",
    tags: ["Python", "FastAPI", "GIS", "Algorithms"],
    github: "https://github.com/duchuy-n/Taipei_MRT.git",
    demo: "#",
    image: "/subway-preview.png"
  }
];

const ACTIVITIES = [
  {
    period: "2022 — 2023",
    title: "Helper @ HSGS CODECAMP",
    description: "Assisted participants in debugging code and understanding programming concepts. Supported students in completing hands-on coding exercises and resolving technical issues.",
    tags: ["Mentoring", "Teaching"]
  }
];

const SKILLS = {
  "Languages": ["C/C++", "Python", "Java", "JavaScript", "TypeScript", "SQL"],
  "Frameworks/Libs": ["React", "FastAPI", "Node.js", "Express", "Tailwind CSS"],
  "Systems/Tools": ["Linux/Unix", "Win32 API", "Git", "Docker", "PostgreSQL", "GIS"]
};

const EXPERIENCE = [
  {
    period: "2026 — Present",
    title: "Undergraduate Researcher",
    company: "Edge AI Lab @ HUST",
    description: "Researching and analyzing offensive and defensive cybersecurity techniques. Focusing on network security and threat mitigation strategies.",
    tags: []
  },
  {
    period: "2024 — Present",
    title: "Computer Engineering Student",
    company: "Hanoi University of Science and Technology",
    description: "Consistently achieving top-tier academic performance in fundamental computer science and core engineering subjects. GPA overall 3.55/4.0",
    tags: []
  },
  {
    period: "2021 — 2024",
    title: "High School Student - Informatics Major",
    company: "High School for Gifted Students (HSGS)",
    description: "Specialized in competitive programming and advanced computer science. Graduated with an overall GPA of 9.5/10.",
    tags: []
  }
];

const AWARDS = [
  {
    period: "2024",
    title: "IELTS 6.0",
    company: "British Council",
    description: "International English Language Testing System certification.",
    tags: ["English"]
  },
  {
    period: "2022 — 2023",
    title: "Third Prize @ VNU Hanoi Outstanding Student Competition",
    company: "VNU Hanoi",
    description: "Outstanding achievement in Informatics.",
    tags: ["Algorithms", "Competitive Programming"]
  },
  {
    period: "2022",
    title: "Hackathon Participant",
    company: "Tech Event",
    description: "Participated in an intensive coding marathon to build rapid prototypes.",
    tags: ["Agile", "Teamwork"]
  }
];

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const mainRef = useRef(null);

  useEffect(() => {
    // Mouse Spotlight Effect
    const handleMouseMove = (e) => {
      document.body.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.body.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Scroll Reveal and Active Navigation
    const observerOptions = {
      root: null,
      threshold: 0.25,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section, .reveal');
    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="portfolio-v4">
      <div className="spotlight"></div>
      
      <div className="layout">
        <aside className="sidebar">
          <div className="intro">
            <h1 className="font-outfit"><a href="/">Nguyễn Đức Huy</a></h1>
            <h2>Software Engineer @ HUST</h2>
            <p>I bridge the gap between complex engineering and human needs — <strong style={{color: 'var(--text-primary)'}}>building what is necessary, not just what is possible.</strong></p>
            
            <nav className="nav-menu">
              <a 
                href="#about" 
                className={`nav-item ${activeSection === 'about' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); scrollTo('about'); }}
              >
                <span className="nav-line"></span> ABOUT
              </a>
              <a 
                href="#experience" 
                className={`nav-item ${activeSection === 'experience' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); scrollTo('experience'); }}
              >
                <span className="nav-line"></span> EXPERIENCE
              </a>
              <a 
                href="#projects" 
                className={`nav-item ${activeSection === 'projects' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); scrollTo('projects'); }}
              >
                <span className="nav-line"></span> PROJECTS
              </a>
              <a 
                href="#skills" 
                className={`nav-item ${activeSection === 'skills' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); scrollTo('skills'); }}
              >
                <span className="nav-line"></span> SKILLS
              </a>
              <a 
                href="#awards" 
                className={`nav-item ${activeSection === 'awards' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); scrollTo('awards'); }}
              >
                <span className="nav-line"></span> AWARDS & CERTIFICATIONS
              </a>
              <a 
                href="#activities" 
                className={`nav-item ${activeSection === 'activities' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); scrollTo('activities'); }}
              >
                <span className="nav-line"></span> ACTIVITIES
              </a>
            </nav>
          </div>

            <div className="sidebar-cta reveal">
              <h3 className="mono sidebar-cta-title">LET'S BUILD TOGETHER!</h3>
              
              <div className="socials">
                <a href="https://github.com/duchuy-n" target="_blank" rel="noreferrer" title="GitHub">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                </a>
                <a href="https://linkedin.com/in/duchuyn/" target="_blank" rel="noreferrer" title="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href="mailto:nduchuy.dev@gmail.com" title="Email">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </a>
                <a href="tel:+84947920968" title="Phone: (+84) 947920968">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </a>
                <a href="/Huy_CV.pdf" className="resume-btn" target="_blank">resume</a>
              </div>
            </div>
        </aside>

        <main className="content" ref={mainRef}>
          <section id="about" className="reveal">
            <h2 className="section-title">ABOUT</h2>
            <div className="section-content">
              <p>
                I am a Software Engineer (Computer Engineering @ HUST) driven by a single core philosophy: <strong>Solutions over Code.</strong> I don't just build software; I engineer answers to real-world problems.
              </p>
              <br/>
              <p>
                Whether it's a custom Windows shell, a GIS-based routing engine, or specialized student tools — my goal is always to deliver exactly what is needed. I believe technology only reaches its full potential when it solves human pain points with precision, efficiency, and elegance.
              </p>
            </div>
          </section>

          <section id="experience">
            <h2 className="section-title">EXPERIENCE</h2>
            <div className="timeline">
              {EXPERIENCE.map((exp, index) => (
                <div key={index} className="timeline-item reveal">
                  <div className="timeline-year mono">{exp.period}</div>
                  <div className="timeline-content">
                    <h3>{exp.title} · {exp.company}</h3>
                    <p>{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="projects">
            <h2 className="section-title">PROJECTS</h2>
            <div className="projects-list">
              {PROJECTS.map((proj, index) => (
                <div key={index} className="project-item reveal">
                  <div className="project-preview">
                    {proj.image ? (
                      <img src={proj.image} alt={proj.title} className="project-thumbnail" />
                    ) : (
                      <div className="project-letter-icon">{proj.title.charAt(0)}</div>
                    )}
                  </div>
                  <div className="project-content">
                    <h3>{proj.title}</h3>
                    <p>{proj.description}</p>
                    <div className="tags">
                      {proj.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                    </div>
                    <div className="project-links" style={{marginTop: '12px', display: 'flex', gap: '16px'}}>
                       {proj.github !== "#" && <a href={proj.github} target="_blank" rel="noreferrer" className="nav-item active" style={{fontSize: '0.75rem'}}>GITHUB <span className="arrow">↗</span></a>}
                       {proj.demo !== "#" && <a href={proj.demo} target="_blank" rel="noreferrer" className="nav-item active" style={{fontSize: '0.75rem'}}>DEMO <span className="arrow">↗</span></a>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="skills" className="reveal">
            <h2 className="section-title">SKILLS</h2>
            <div className="skills-grid">
              {Object.entries(SKILLS).map(([category, items]) => (
                <div key={category} className="skill-category">
                  <h4 className="mono" style={{fontSize: '0.8rem', color: 'var(--text-primary)', marginBottom: '12px'}}>{category}</h4>
                  <div className="tags">
                    {items.map(skill => <span key={skill} className="tag">{skill}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="awards">
            <h2 className="section-title">AWARDS & CERTIFICATIONS</h2>
            <div className="timeline">
              {AWARDS.map((award, index) => (
                <div key={index} className="timeline-item reveal">
                  <div className="timeline-year mono">{award.period}</div>
                  <div className="timeline-content">
                    <h3>{award.title}</h3>
                    <p className="subtitle">{award.company}</p>
                    <p>{award.description}</p>
                    <div className="tags">
                      {award.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="activities">
            <h2 className="section-title">ACTIVITIES</h2>
            <div className="timeline">
              {ACTIVITIES.map((act, index) => (
                <div key={index} className="timeline-item reveal">
                  <div className="timeline-year mono">{act.period}</div>
                  <div className="timeline-content">
                    <h3>{act.title}</h3>
                    <p>{act.description}</p>
                    <div className="tags">
                      {act.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <footer className="reveal" style={{fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '80px'}}>
             <p>&copy; 2026 Nguyễn Đức Huy. All rights reserved.</p>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default App;
