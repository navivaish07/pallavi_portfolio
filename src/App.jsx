import { useEffect, useState } from 'react';

const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' }
];

const softwareSkills = [
  { label: 'Revit (BIM Modeling)', value: '88%' },
  { label: 'AutoCAD (2D & 3D)', value: '92%' },
  { label: 'STAAD Pro (Basic Analysis)', value: '78%' },
  { label: 'Microsoft Excel', value: '85%' }
];

const fieldSkills = [
  { label: 'Site Surveying & Leveling', value: '88%' },
  { label: 'Building Execution', value: '82%' },
  { label: 'Highway Layout & Inspection', value: '80%' },
  { label: 'Material Estimation', value: '84%' }
];

const languages = [
  { label: 'English', detail: 'Full Professional Proficiency' },
  { label: 'Japanese', detail: 'Limited Working Proficiency' }
];

const internships = [
  {
    title: 'AutoCAD Internship',
    date: '01/2026 - 02/2026',
    project: '2D Drafting & Civil Engineering Design',
    location: 'Internship',
    summary:
      'During my AutoCAD internship, I gained practical experience in 2D drafting and civil engineering design. I worked on creating and understanding technical drawings while developing my skills in AutoCAD and learning how engineering concepts are translated into accurate design plans. The internship strengthened my drafting abilities and gave me valuable exposure to professional civil engineering workflows.',
    tags: ['AutoCAD', '2D Drafting', 'Technical Drawings', 'Design Plans']
  },
  {
    title: 'Karanji Village Road Project',
    date: 'Project Experience',
    project: '3.4 km Road near Vaijapur',
    location: 'Karanji, near Vaijapur',
    summary:
      'As part of the Karanji Village Road Project, I gained practical exposure to the planning, design, quantity estimation, and construction management of a 3.4 km road project near Vaijapur. I studied project requirements, construction processes, estimated project costs, and gained insight into real-world road development and site considerations. This experience helped me connect my academic knowledge with practical infrastructure development.',
    tags: ['Road Planning', 'Quantity Estimation', 'Construction Management', 'Site Study']
  }
];

const projects = [
  {
    id: 'sustainable-blocks',
    title: 'Sustainable Lightweight Blocks (SLB)',
    summary:
      'Research on using coal ash, coconut ash, bamboo ash, and human hair ash in lightweight concrete blocks for sustainable construction materials.',
    details:
      'Developed sustainable block prototypes, compared strength and water absorption properties, and documented the environmental benefits of alternative ash-based aggregates.',
    category: 'sustainable',
    tags: ['Eco Materials', 'Concrete Research', 'Sustainability']
  },
  {
    id: 'residential-building',
    title: 'Residential Building Design (AutoCAD)',
    summary:
      'Designed a G+1 house plan in AutoCAD, performed STAAD Pro analysis, and prepared material quantity and cost estimates.',
    details:
      'Created construction drawings, analyzed member forces, and optimized the layout for structural stability and cost-efficient material usage.',
    category: 'design',
    tags: ['AutoCAD', 'STAAD Pro', 'Quantity Survey']
  },
  {
    id: 'wastewater-concrete',
    title: 'Wastewater Use in Concrete Mixing',
    summary:
      'Ongoing evaluation of treated wastewater as a partial replacement for potable water in concrete to reduce freshwater demand.',
    details:
      'Tested treated wastewater in trial mixes, monitored strength development, and reported on the feasibility of reuse strategies for sustainable concrete production.',
    category: 'sustainable',
    tags: ['Water Reuse', 'Concrete Testing', 'Environmental']
  },
  {
    id: 'shallow-foundation',
    title: 'Shallow Foundation Design Study',
    summary:
      'Foundational coursework on bearing capacity, footing sizing, and settlement behavior for shallow foundations.',
    details:
      'Calculated footing dimensions, evaluated soil bearing capacity, and prepared design notes for safe load transfer in shallow foundation systems.',
    category: 'design',
    tags: ['Foundation', 'Soil Mechanics', 'Structural']
  },
  {
    id: 'food-chain-study',
    title: 'Local Ecosystem Food Chain Study',
    summary:
      'Analysed producer-consumer-decomposer relationships and energy flow in a local ecosystem as an interdisciplinary environmental study.',
    details:
      'Collected field data, mapped food chains, and linked ecosystem health with engineering principles for sustainable site planning.',
    category: 'research',
    tags: ['Ecology', 'Environmental Study', 'Interdisciplinary']
  }
];

const certifications = [
  {
    category: 'Design & Software',
    title: 'AutoCAD for Civil Engineering',
    path: '/cert-autocad-civil-engineering.jpeg',
    type: 'image'
  },
  {
    category: 'Design & Software',
    title: 'Revit Architecture Certification',
    path: '/cert-revit-architecture.jpeg',
    type: 'image'
  },
  {
    category: 'Design & Software',
    title: 'RVT Software Certificate',
    path: '/cert-rvt-software.pdf',
    type: 'pdf'
  },
  {
    category: 'Infrastructure',
    title: 'Airport and Metro Systems',
    path: '/cert-airport-metro-systems.pdf',
    type: 'pdf'
  },
  {
    category: 'Infrastructure',
    title: 'Contracts Management in Construction',
    path: '/cert-contracts-management.pdf',
    type: 'pdf'
  },
  {
    category: 'Core Civil Engineering',
    title: 'NPTEL - Ethics in Engineering Practice',
    path: '/cert-nptel-ethics.jpeg',
    type: 'image'
  },
  {
    category: 'Core Civil Engineering',
    title: 'NPTEL - Entrepreneurship and IP',
    path: '/cert-nptel-entrepreneurship-ip.jpeg',
    type: 'image'
  },
  {
    category: 'Programming',
    title: 'Coursera Certificate - C Language',
    path: '',
    type: 'badge'
  }
];

const events = [
  {
    title: 'INDRADHANU - International Grand Challenge 2025-26',
    description:
      'Presented sustainable design concepts and represented Sanjivani College at an engineering innovation event.'
  },
  {
    title: 'KREATE 2025 National Innovation Expo',
    description:
      'Participated in a national technical expo showcasing structural models and civil engineering ideas.'
  }
];

const leadershipList = [
  {
    title: 'CESA Committee',
    role: 'Executive Member',
    description:
      'Organized technical workshops, guest lectures, and industry visits for civil engineering students.'
  },
  {
    title: 'NSS',
    role: 'Ladies Representative',
    description:
      'Led community service, rural surveys, and student welfare outreach initiatives.'
  },
  {
    title: 'EDC Cell',
    role: 'Technical Head',
    description:
      'Managed innovation events, startup awareness programs, and technical skill activities.'
  }
];

const interests = [
  'Structural Design & Analysis',
  'Architectural Planning & Building Design',
  'Sustainable Construction & Eco Materials',
  'AutoCAD Drafting & Revit BIM Modeling',
  'Site Surveying & Leveling'
];

const sections = [
  { id: 'about', title: 'About Me' },
  { id: 'education', title: 'Education' },
  { id: 'experience', title: 'Internship Experience' },
  { id: 'skills', title: 'Skills' },
  { id: 'projects', title: 'Projects' },
  { id: 'certifications', title: 'Certifications' },
  { id: 'events', title: 'Achievements & Events' },
  { id: 'leadership', title: 'Leadership' },
  { id: 'contact', title: 'Contact' }
];

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectFilter, setProjectFilter] = useState('all');
  const [isLightMode, setIsLightMode] = useState(false);
  const [projectDetailsOpen, setProjectDetailsOpen] = useState({});

  const filteredProjects =
    projectFilter === 'all'
      ? projects
      : projects.filter((project) => project.category === projectFilter);

  useEffect(() => {
    const sectionNodes = document.querySelectorAll('section[id]');
    const revealItems = document.querySelectorAll('.reveal-on-scroll');
    const skillBars = document.querySelectorAll('.skill-progress');
    const timelineLine = document.querySelector('.timeline-line');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    revealItems.forEach((item) => observer.observe(item));

    const progressObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progress = entry.target;
            progress.style.width = progress.dataset.value || '0%';
            progress.classList.add('visible');
            progressObserver.unobserve(progress);
          }
        });
      },
      { threshold: 0.25 }
    );

    skillBars.forEach((bar) => progressObserver.observe(bar));

    const timelineObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && timelineLine) {
            timelineLine.classList.add('visible');
            timelineObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const timelineSection = document.querySelector('.timeline-container');
    if (timelineSection) {
      timelineObserver.observe(timelineSection);
    }

    const onScroll = () => {
      const scrollPosition = window.scrollY + 140;
      let current = 'hero';
      sectionNodes.forEach((section) => {
        if (scrollPosition >= section.offsetTop) {
          current = section.id;
        }
      });
      setActiveSection(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
      timelineObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('light-theme', isLightMode);
  }, [isLightMode]);

  const handleFilter = (category) => {
    setProjectFilter(category);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.name.value;
    alert(`Thank you, ${name}! Your blueprint inquiry has been received.`);
    form.reset();
  };

  const toggleProjectDetails = (projectId) => {
    setProjectDetailsOpen((prev) => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  const toggleTheme = () => {
    setIsLightMode((prev) => !prev);
  };

  return (
    <div className="app-shell">
      <div className="global-floating-graph" aria-hidden="true">
        <svg viewBox="0 0 1200 700" className="global-graph-svg">
          <g className="g-lines">
            <line x1="80" y1="120" x2="220" y2="60" />
            <line x1="160" y1="200" x2="300" y2="150" />
            <line x1="480" y1="70" x2="620" y2="120" />
            <line x1="720" y1="220" x2="880" y2="160" />
            <line x1="980" y1="90" x2="1100" y2="140" />
            <line x1="40" y1="420" x2="180" y2="360" />
            <line x1="180" y1="360" x2="340" y2="450" />
            <line x1="390" y1="520" x2="560" y2="470" />
            <line x1="610" y1="350" x2="780" y2="430" />
            <line x1="860" y1="540" x2="1120" y2="420" />
            <line x1="1040" y1="260" x2="1160" y2="340" />
          </g>
          <g className="g-nodes">
            <circle cx="80" cy="120" r="6" />
            <circle cx="220" cy="60" r="9" />
            <circle cx="160" cy="200" r="7" />
            <circle cx="300" cy="150" r="6" />
            <circle cx="480" cy="70" r="10" />
            <circle cx="620" cy="120" r="6" />
            <circle cx="720" cy="220" r="8" />
            <circle cx="880" cy="160" r="5" />
            <circle cx="980" cy="90" r="7" />
            <circle cx="1100" cy="140" r="6" />
            <circle cx="40" cy="420" r="7" />
            <circle cx="180" cy="360" r="10" />
            <circle cx="340" cy="450" r="6" />
            <circle cx="390" cy="520" r="8" />
            <circle cx="560" cy="470" r="6" />
            <circle cx="610" cy="350" r="9" />
            <circle cx="780" cy="430" r="6" />
            <circle cx="860" cy="540" r="8" />
            <circle cx="1120" cy="420" r="10" />
            <circle cx="1040" cy="260" r="5" />
            <circle cx="1160" cy="340" r="7" />
          </g>
        </svg>
      </div>
      <header className="navbar">
        <div className="nav-inner">
          <a href="#hero" className="brand-link">
            <div className="brand-mark">CE</div>
            <div>
              <div className="brand-name">Pallavi</div>
              <div className="brand-tag">Civil Engineer</div>
            </div>
          </a>

          <button
            className={`nav-toggle ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle light and dark mode">
              {isLightMode ? 'Dark' : 'Light'} Mode
            </button>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero-section" id="hero">
          <div className="hero-copy reveal-on-scroll">
            <div className="hero-label"></div>
            <h1>
              PALLAVI <span>SABADE</span>
            </h1>
            <p className="hero-tagline">
              Civil Engineer | Bridging Design & Site Execution
            </p>
            <p className="hero-summary">
              Final-year Civil Engineering student skilled in structural design software (
              <strong>AutoCAD, Revit, STAAD Pro</strong>) and hands-on site engineering (
              <strong>surveying, leveling, highway & residential construction</strong>).
              Seeking hybrid roles that blend drafting precision with field execution.
            </p>

            <div className="hero-actions">
              <a className="btn btn-primary" href="#projects">
                View Projects
              </a>
              <a className="btn btn-secondary" href="/resume.pdf" download="Pallavi_Sabade_Resume.pdf">
                Download Resume
              </a>
              <a className="btn btn-outline" href="#contact">
                Contact Me
              </a>
            </div>

            <div className="hero-links">
              <a href="mailto:pallavisabade03@gmail.com">
                <span>EMAIL</span>
                pallavisabade03@gmail.com
              </a>
              <a href="tel:9370861198">
                <span>PHONE</span>
                +91 9370861198
              </a>
              <a href="https://linkedin.com/in/pallavi-sabade-0268243b4" target="_blank" rel="noreferrer">
                <span>LINKEDIN</span>
                linkedin.com/in/pallavi-sabade-0268243b4
              </a>
            </div>
          </div>

        </section>

        <section className="section-white" id="about">
          <div className="section-header reveal-on-scroll">
              <h2>About Me</h2>
              <p>
                I'm Pallavi Sabade, a Civil Engineering student passionate about structural design, transportation, architectural planning, and sustainable construction.
              </p>
            </div>

          <div className="about-grid reveal-on-scroll">
            <div>
              <p>
                I'm <strong>Pallavi Sabade</strong>, a Civil Engineering student passionate about <strong>structural design, transportation, architectural planning, and sustainable construction</strong>. I work with <strong>AutoCAD, Revit, STAAD.Pro, and MS Excel</strong> and enjoy turning engineering concepts into practical designs.
              </p>
              <p>
                Through academic projects and hands-on experience, including the <strong>Karanji Village Road Project</strong>, I've gained exposure to design, structural analysis, quantity estimation, and construction planning. My sustainability-focused projects have further strengthened my interest in developing <strong>eco-friendly and efficient engineering solutions</strong>.
              </p>
              <p>
                I'm a curious learner, collaborative problem-solver, and aspiring Civil Engineer focused on continuously developing my technical and professional skills while contributing to meaningful infrastructure projects.
              </p>
            </div>

            <div className="about-tiles">
              <div>
                <span>Degree</span>
                <strong>B.Tech Civil Engineering</strong>
              </div>
              <div>
                <span>Institute</span>
                <strong>Sanjivani College of Engineering</strong>
              </div>
              <div>
                <span>Focus</span>
                <strong>Structural, Transportation & Sustainability</strong>
              </div>
              <div>
                <span>Graduation</span>
                <strong>2027</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="section-alt" id="experience">
          <div className="section-header reveal-on-scroll">
            <div>
              <h2>Internship Experience</h2>
              <p>Practical exposure to road planning, construction study, and AutoCAD-supported documentation.</p>
            </div>
          </div>

          <div className="experience-grid reveal-on-scroll">
            {internships.map((item) => (
              <article key={item.title} className="experience-card">
                <div className="experience-meta">
                  <span>{item.date}</span>
                  <strong>{item.location}</strong>
                </div>
                <div className="experience-body">
                  <p className="experience-role">Intern</p>
                  <h3>{item.title}</h3>
                  <h4>{item.project}</h4>
                  <p>{item.summary}</p>
                  <div className="experience-tags">
                    {item.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-white" id="education">
          <div className="section-header reveal-on-scroll">
            <div>
              <h2>Education Journey</h2>
              <p>Academic milestones that shaped my civil engineering foundation.</p>
            </div>
          </div>

          <div className="timeline-container reveal-on-scroll">
            <div className="timeline-line" />
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-card">
                <span className="timeline-date">08/2023 – Present</span>
                <h3>B.Tech in Civil Engineering</h3>
                <p>Sanjivani College of Engineering, Kopargaon</p>
                <p>Specializing in structural analysis, BIM, surveying, and highway engineering.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-card">
                <span className="timeline-date">06/2022 – 06/2023</span>
                <h3>12th Grade</h3>
                <p>High International Cambridge Institute, Shirasgaon, Shrirampur</p>
                <p>Advanced mathematics, physics, chemistry, and analytical science.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-card">
                <span className="timeline-date">06/2020 – 06/2021</span>
                <h3>10th Grade</h3>
                <p>New English School, Chitali</p>
                <p>Strong foundation in science, mathematics, and language skills.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-alt" id="skills">
          <div className="section-header reveal-on-scroll">
            <div>
              <h2>Skillset & Competencies</h2>
              <p>A balanced mix of engineering software, field skills, and language fluency.</p>
            </div>
          </div>

          <div className="skill-grid">
            <div className="skill-card reveal-on-scroll">
              <h3>Software Skills</h3>
              {softwareSkills.map((skill) => (
                <div className="skill-row" key={skill.label}>
                  <div>
                    <strong>{skill.label}</strong>
                    <span>{skill.value}</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" data-value={skill.value} />
                  </div>
                </div>
              ))}
            </div>

            <div className="skill-card reveal-on-scroll">
              <h3>Site & Field Skills</h3>
              {fieldSkills.map((skill) => (
                <div className="skill-row" key={skill.label}>
                  <div>
                    <strong>{skill.label}</strong>
                    <span>{skill.value}</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress cyan" data-value={skill.value} />
                  </div>
                </div>
              ))}
            </div>

            <div className="skill-card reveal-on-scroll">
              <h3>Languages</h3>
              {languages.map((language) => (
                <div className="language-row" key={language.label}>
                  <div>
                    <strong>{language.label}</strong>
                    <p>{language.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-white" id="projects">
          <div className="section-header reveal-on-scroll">
            <div>
              <h2>Projects & Research</h2>
              <p>Portfolio cards styled like technical drawing sheets with clear category filters.</p>
            </div>
          </div>

          <div className="filter-row reveal-on-scroll">
            <button
              className={projectFilter === 'all' ? 'filter-btn active' : 'filter-btn'}
              onClick={() => handleFilter('all')}
            >
              All Projects
            </button>
            <button
              className={projectFilter === 'design' ? 'filter-btn active' : 'filter-btn'}
              onClick={() => handleFilter('design')}
            >
              Design
            </button>
            <button
              className={projectFilter === 'sustainable' ? 'filter-btn active' : 'filter-btn'}
              onClick={() => handleFilter('sustainable')}
            >
              Sustainability
            </button>
            <button
              className={projectFilter === 'research' ? 'filter-btn active' : 'filter-btn'}
              onClick={() => handleFilter('research')}
            >
              Research
            </button>
          </div>

          <div className="projects-grid reveal-on-scroll">
            {filteredProjects.map((project) => (
              <article key={project.id} className={`project-card ${projectDetailsOpen[project.id] ? 'open' : ''}`}>
                <div className="project-sheet">
                  <div className="project-tag">{project.category.toUpperCase()}</div>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  {projectDetailsOpen[project.id] && (
                    <p className="project-details">{project.details}</p>
                  )}
                </div>
                <div className="project-footer">
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-chip">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <button
                  className="project-readmore"
                  onClick={() => toggleProjectDetails(project.id)}
                  type="button"
                >
                  {projectDetailsOpen[project.id] ? 'Hide Details' : 'Read More'}
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="section-alt" id="certifications">
          <div className="section-header reveal-on-scroll">
            <div>
              <h2>Certifications & Credentials</h2>
              <p>Official seals grouped by design, civil systems, and professional engineering skills.</p>
            </div>
          </div>

          <div className="cert-grid reveal-on-scroll">
            {certifications.map((cert) => (
              <div key={cert.title} className="cert-card">
                <div className="cert-label">{cert.category}</div>
                <h3>{cert.title}</h3>
                {cert.type === 'badge' ? (
                  <div className="cert-badge">Verified</div>
                ) : cert.path ? (
                  <a className="cert-link" href={encodeURI(cert.path)} target="_blank" rel="noopener noreferrer">
                    View Certificate
                  </a>
                ) : (
                  <div className="cert-badge cert-unavailable">Unavailable</div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="section-white" id="events">
          <div className="section-header reveal-on-scroll">
            <div>
              <h2>Achievements & Events</h2>
              <p>Highlighting participation in engineering competitions and technical showcases.</p>
            </div>
          </div>

          <div className="event-grid reveal-on-scroll">
            {events.map((item) => (
              <article key={item.title} className="event-card">
                <div className="event-body">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-alt" id="leadership">
          <div className="section-header reveal-on-scroll">
            <div>
              <h2>Leadership & Extracurriculars</h2>
              <p>Roles that reflect initiative, student engagement, and technical leadership.</p>
            </div>
          </div>

          <div className="leadership-grid reveal-on-scroll">
            {leadershipList.map((item) => (
              <article key={item.title} className="leadership-card">
                <div className="leadership-icon">✓</div>
                <h3>{item.title}</h3>
                <span>{item.role}</span>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-white" id="interests">
          <div className="section-header reveal-on-scroll">
            <div>
              <h2>Interests</h2>
              <p>Professional focus areas for a hybrid civil engineering career.</p>
            </div>
          </div>

          <div className="interest-grid reveal-on-scroll">
            {interests.map((interest) => (
              <span key={interest} className="interest-pill">
                {interest}
              </span>
            ))}
          </div>
        </section>

        <section className="section-alt" id="contact">
          <div className="section-header reveal-on-scroll">
            <div>
              <h2>Contact</h2>
              <p>Reach out to discuss hybrid roles, site assignments, and design collaborations.</p>
            </div>
          </div>

          <div className="contact-layout reveal-on-scroll">
            <div className="contact-summary">
              <h3>Ready for the next construction challenge?</h3>
              <p>
                Connect for hybrid opportunities where design precision and field supervision meet.
              </p>

              <div className="contact-card">
                <span>EMAIL</span>
                <strong>pallavisabade03@gmail.com</strong>
              </div>
              <div className="contact-card">
                <span>PHONE</span>
                <strong>+91 9370861198</strong>
              </div>
              <div className="contact-card">
                <span>LINKEDIN</span>
                <strong>linkedin.com/in/pallavi-sabade-0268243b4</strong>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                <span>Name / Company</span>
                <input name="name" type="text" placeholder="e.g. L&T Construction" required />
              </label>
              <label>
                <span>Email</span>
                <input name="email" type="email" placeholder="name@company.com" required />
              </label>
              <label>
                <span>Message</span>
                <textarea name="message" rows="5" placeholder="Discuss a hybrid role, site project, or engineering proposal..." required />
              </label>
              <button type="submit" className="btn btn-primary">
                Send Blueprint Proposal
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>© 2026 Pallavi Sabade — Civil Engineering Portfolio</p>
        <p>Blueprint-style portfolio for hybrid BIM + site execution roles.</p>
      </footer>
    </div>
  );
}

export default App;
