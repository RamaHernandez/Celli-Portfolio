import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";


const anneDescription = `Este trabajo se desarrolló en conjunto para una materia de la facultad y tuvo como eje la serie Anne with an E. El proyecto comenzó con la realización de una maqueta inspiracional, concebida como punto de partida para orientar el proceso creativo y servir de referencia conceptual. A partir de esa base se avanzó hacia la experimentación con texturas y muestras textiles, que permitieron explorar materiales y sensaciones vinculadas a la narrativa de la serie.

Se diseñaron tres series de indumentaria, cada una compuesta por cinco conjuntos, que ofrecían distintas lecturas y propuestas de vestuario. Finalmente, se llevó a cabo la materialización de dos conjuntos completos, integrando diseño, confección y puesta en escena.

Si bien participé en todas las etapas del proyecto, mi aporte se centró principalmente en la realización de la maqueta inicial, el diseño y la ilustración de las tres series de indumentaria, y en la producción fotográfica de los conjuntos materializados. Esta experiencia me permitió articular análisis cultural, experimentación material y construcción visual, transformando una narrativa audiovisual en propuestas concretas de vestuario.`;

// Helper: genera paths con soporte de extensiones mixtas
const createProjectImages = (folder, count, overrides = {}, defaultExt = "jpg") =>
  Array.from({ length: count }, (_, i) => {
    const num = String(i + 1).padStart(2, "0");
    const ext = overrides[i + 1] || defaultExt;
    return `/images/${folder}/${num}.${ext}`;
  });

// Proyecto 01 - Anne (ya estaba armado)
const anneImages = Array.from({ length: 13 }, (_, i) => `/images/anne-${String(i + 1).padStart(2, "0")}.jpg`);

// Proyectos 02-09: solo actualizá el count y overrides cuando cargues fotos
const project02Images = createProjectImages("02", 24);
const project03Images = createProjectImages("03", 5);
const project04Images = createProjectImages("04", 11);
const project05Images = createProjectImages("05", 6);
const project06Images = createProjectImages("06", 8);
const project07Images = createProjectImages("07", 18);
const project08Images = createProjectImages("08", 7);
const project09Images = createProjectImages("09", 10);

const placeholderDescription = "Descripción pendiente. Este proyecto todavía usa contenido temporal hasta que se cargue la información real.";

const projects = [
  {
    id: "01.",
    title: "Diseño de colección /\nANN WITH AN E",
    year: "2025",
    category: "DISEÑO DE INDUMENTARIA, ILUSTRACIÓN Y FOTOGRAFÍA",
    tags: ["diseño de indumentaria", "ilustración", "fotografía", "vestuario", "ann with an e", "anne with an e"],
    image: anneImages[5],
    images: anneImages,
    description: anneDescription,
  },
  { id: "02.", title: "Diseño y confección\nde Jean", year: "2025+", category: "DISEÑO Y CONFECCIÓN", tags: ["fashion design", "moldería", "confección"], image: project02Images[0], images: project02Images, description: placeholderDescription },
  { id: "03.", title: "Diseño y confección\nde Saco Tweed", year: "2025+", category: "DISEÑO Y CONFECCIÓN", tags: ["fashion design", "garment craft", "textiles"], image: project03Images[0], images: project03Images, description: placeholderDescription },
  { id: "04.", title: "Techpack Design /\nCamisa Patagonia", year: "2025+", category: "TECHPACK DESIGN", tags: ["product dev", "techpack", "technical design"], image: project04Images[2], images: project04Images, description: placeholderDescription },
  { id: "05.", title: "Diseño de remeras y\nestampas", year: "2025+", category: "DISEÑO GRÁFICO", tags: ["graphic design", "visual media", "fashion design"], image: project05Images[3], images: project05Images, description: placeholderDescription },
  { id: "06.", title: "Diseño de colección /\nAlicia Orlandi", year: "2024+", category: "DISEÑO DE INDUMENTARIA", tags: ["trend vision", "fashion design", "conceptual"], image: project06Images[4], images: project06Images, description: placeholderDescription },
  { id: "07.", title: "Diseño de Vestuario e\nIlustración", year: "2024+", category: "VESTUARIO / ILUSTRACIÓN", tags: ["styling", "illustration", "art direction"], image: project07Images[5], images: project07Images, description: placeholderDescription },
  { id: "08.", title: "Styling y Dirección\nCreativa", year: "2024+", category: "DIRECCIÓN CREATIVA", tags: ["styling", "creative direction", "image"], image: project08Images[6], images: project08Images, description: placeholderDescription },
  { id: "09.", title: "Fotografía, Edición y\nPostproducción", year: "2024+", category: "FOTOGRAFÍA", tags: ["photography", "visual media", "postproduction"], image: project09Images[7], images: project09Images, description: placeholderDescription },
];

const skillCards = [
  { title: "Fashion Design", texture: "radial-gradient(circle at 50% 42%, #f7efdb 0%, #f3d478 28%, #ed8f24 62%, #f8f1df 100%)", description: "Diseño de prendas desde la idea inicial hasta su desarrollo visual y técnico. Creación de figurines, bocetos, moldería, patronaje y propuestas con enfoque creativo, funcional y estético." },
  { title: "Product Dev", texture: "linear-gradient(135deg, #006fb8 0%, #00407f 48%, #00599f 100%)", description: "Desarrollo de producto orientado a organización, precisión y ejecución. Armado de fichas técnicas, seguimiento de procesos, planificación de producción y manejo avanzado de herramientas como Excel." },
  { title: "Garment Craft", texture: "radial-gradient(circle at 50% 54%, #1c0b9b 0%, #8222ff 30%, #d94fff 58%, #f7b5ff 100%)", description: "Conocimiento integral de confección y construcción de prendas. Costura, uso de maquinaria, procesos textiles, lavados, terminaciones y resolución técnica aplicada a producto real." },
  { title: "Trend Vision", texture: "radial-gradient(circle at 50% 50%, #ff6a8c 0%, #ff1d1d 34%, #ff3f96 58%, #001d35 100%)", description: "Investigación y traducción de tendencias en propuestas concretas. Desarrollo de moodboards, paneles de inspiración, research visual y creatividad digital aplicada a moda e imagen." },
  { title: "Creative Direction", texture: "linear-gradient(135deg, #fff5f4 0%, #b96eff 38%, #e4b1c9 62%, #833dff 100%)", description: "Construcción de universos visuales con criterio estético y narrativa clara. Dirección creativa, styling, imagen de marca, campañas y sensibilidad editorial aplicada a cada proyecto." },
  { title: "Visual Media", texture: "linear-gradient(180deg, #f23616 0%, #211a2b 42%, #19d67b 73%, #24e28a 100%)", description: "Comunicación visual aplicada a moda y contenido digital. Diseño gráfico, fotografía, edición de imágenes y manejo avanzado de Adobe Illustrator y Photoshop." },
];

const cleanTitle = (title) => title.split("\n").join(" ");
const getProject = (id) => projects.find((project) => project.id === id) ?? projects[0];

function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const onMove = (event) => setPos({ x: event.clientX, y: event.clientY });
    const onOver = (event) => setActive(Boolean(event.target?.closest?.("[data-cursor='active']")));
    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
    };
  }, []);

  return (
    <motion.div
      className="custom-cursor"
      animate={{
        x: pos.x - (active ? 17 : 6),
        y: pos.y - (active ? 17 : 6),
        width: active ? 34 : 12,
        height: active ? 34 : 12,
      }}
      transition={{ type: "spring", stiffness: 420, damping: 30, mass: 0.35 }}
    />
  );
}

function IconSearch() {
  return <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.35" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>;
}

function IconMenu() {
  return <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.35" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6h16" /><path d="M4 12h16" /><path d="M4 18h16" /></svg>;
}

function Header({ onHome, onProjects, onAbout }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="topbar">
        <div className="topnav">
          <button data-cursor="active" onMouseEnter={() => onProjects?.()} onClick={() => onProjects?.()}>PROJECTS</button>
          <button data-cursor="active" onClick={() => (onAbout ? onAbout() : onHome())}>ABOUT ME</button>
        </div>
        <div className="topicons">
          <button data-cursor="active" onClick={() => setSearchOpen(true)}><IconSearch /></button>
          <button data-cursor="active" onClick={() => setMenuOpen(!menuOpen)}><IconMenu /></button>
        </div>
        <MinimalMenu isOpen={menuOpen} />
      </header>
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}

function SearchOverlay({ isOpen, onClose }) {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return !q ? projects : projects.filter((project) => cleanTitle(project.title).toLowerCase().includes(q) || project.tags.some((tag) => tag.toLowerCase().includes(q)));
  }, [query]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div className="search-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div className="search-panel" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }}>
            <div className="search-head">
              <IconSearch />
              <input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar proyectos, skills o palabras clave..." />
              <button data-cursor="active" onClick={onClose}>×</button>
            </div>
            <div className="search-list">
              {filtered.map((project) => (
                <div key={project.id} className="search-item">
                  <img src={project.image} alt={cleanTitle(project.title)} />
                  <div>
                    <small>{project.id}</small>
                    <strong>{cleanTitle(project.title)}</strong>
                    <span>{project.tags.join(" · ")}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function MinimalMenu({ isOpen }) {
  const items = ["PROJECTS", "ABOUT ME", "INSTAGRAM", "BEHANCE", "CREATIVE CV", "ATS CV"];
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div className="minimal-menu" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}>
          {items.map((item) => (
            <button key={item} data-cursor="active"><span>{item}</span><span>↗</span></button>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Marquee() {
  return (
    <>
      <div className="marquee-gap" />
      <div className="marquee">
        <motion.div className="marquee-bg" animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }} transition={{ duration: 14, repeat: Infinity, ease: "linear" }} />
        <div className="marquee-track-wrap">
          <motion.div className="marquee-track" animate={{ x: [0, -780] }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }}>
            {new Array(28).fill("FASHION DESIGNER").map((item, index) => <span key={index}>{item}</span>)}
          </motion.div>
        </div>
      </div>
    </>
  );
}

function HomeProjectStrip({ onProject }) {
  const [hovered, setHovered] = useState(null);
  const baseWidth = 185;
  const expandedWidth = 385;
  const activeShift = expandedWidth - baseWidth;

  return (
    <div className="home-strip">
      <div className="home-strip-text">
        {projects.map((project, index) => {
          const isActive = hovered === index;
          const left = index * baseWidth + (hovered !== null && index > hovered ? activeShift : 0);
          return (
            <motion.button
              key={project.id}
              data-cursor="active"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => onProject(project.id)}
              animate={{ x: left, width: isActive ? expandedWidth : baseWidth }}
              transition={{ type: "spring", stiffness: 320, damping: 30 }}
              className="home-project-text"
            >
              <div className="project-index">{project.id}</div>
              <div className="project-title">{cleanTitle(project.title)}</div>
            </motion.button>
          );
        })}
      </div>
      <div className="home-strip-images">
        {projects.map((project, index) => {
          const isActive = hovered === index;
          const left = index * baseWidth + (hovered !== null && index > hovered ? activeShift : 0);
          return (
            <motion.button
              key={`${project.id}-image`}
              data-cursor="active"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => onProject(project.id)}
              animate={{ x: left, width: isActive ? expandedWidth : baseWidth, height: isActive ? 455 : 235 }}
              transition={{ type: "spring", stiffness: 320, damping: 30 }}
              className="home-project-image"
              style={{ zIndex: isActive ? 60 : 50 }}
            >
              <img src={project.image} alt={cleanTitle(project.title)} />
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

function ProjectsMegaMenu({ isOpen, onClose, onAllProjects, onProject }) {
  const [hovered, setHovered] = useState(null);
  const menuProjects = [...projects, ...projects, ...projects, ...projects].slice(0, 27);
  const sideImages = [...projects, ...projects].slice(0, 18);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div className="mega" onMouseLeave={onClose} initial={{ x: "-102%" }} animate={{ x: 0 }} exit={{ x: "-102%" }} transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}>
          <div className="mega-inner">
            <motion.button data-cursor="active" onClick={() => { onAllProjects(); onClose(); }} className="mega-all" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }}>All Projects</motion.button>
            <div className="mega-side">
              {sideImages.map((project, index) => (
                <motion.div key={`${project.id}-side-${index}`} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.08 + index * 0.018 }} className="mega-side-item">
                  <img style={{ marginLeft: `${index % 5 === 0 ? 0 : index % 5 === 1 ? 18 : index % 5 === 2 ? 42 : index % 5 === 3 ? 8 : 28}px` }} src={project.image} alt="" className={index % 3 === 1 ? "mega-side-wide" : "mega-side-tall"} />
                  <span>·</span>
                </motion.div>
              ))}
            </div>
            <div className="mega-list">
              {menuProjects.map((project, index) => (
                <motion.button
                  key={`${project.id}-menu-${index}`}
                  data-cursor="active"
                  onMouseEnter={() => setHovered(project)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => { onProject(project.id); onClose(); }}
                  initial={{ opacity: 0, y: 18, x: index % 5 === 0 ? 18 : index % 5 === 1 ? -10 : index % 5 === 2 ? 34 : index % 5 === 3 ? 4 : 24 }}
                  animate={{ opacity: 1, y: 0, x: index % 5 === 0 ? 18 : index % 5 === 1 ? -10 : index % 5 === 2 ? 34 : index % 5 === 3 ? 4 : 24 }}
                  transition={{ delay: 0.08 + index * 0.018, duration: 0.32 }}
                >
                  {cleanTitle(project.title)}
                </motion.button>
              ))}
            </div>
            <AnimatePresence>
              {hovered && (
                <motion.div className="mega-preview" key={hovered.image} initial={{ opacity: 0, x: -25, scale: 0.94 }} animate={{ opacity: 1, x: 0, scale: 1 }} exit={{ opacity: 0, x: -12, scale: 0.96 }} transition={{ duration: 0.22 }}>
                  <img src={hovered.image} alt={cleanTitle(hovered.title)} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function SkillTag({ card, index }) {
  const rotations = [-7, -2, 0, -8, 2, -9];
  const yOffsets = [0, 22, 52, 68, 22, 14];

  return (
    <motion.article
      data-cursor="active"
      className="skill-card"
      initial={{ opacity: 0, y: 70, rotate: rotations[index] - 4 }}
      whileInView={{ opacity: 1, y: yOffsets[index], rotate: rotations[index] }}
      viewport={{ once: true, amount: 0.35 }}
      whileHover={{ y: yOffsets[index] - 18, rotate: rotations[index] + 1.5, scale: 1.035 }}
      transition={{ type: "spring", stiffness: 180, damping: 18, delay: index * 0.06 }}
    >
      <div className="skill-bump" />
      <div className="skill-eye"><div /></div>
      <div className="skill-content">
        <h3>{card.title}</h3>
        <div className="skill-texture" style={{ background: card.texture }} />
        <div className="skill-desc-title">DESCRIPCIÓN</div>
        <div className="skill-line" />
        <div className="skill-line" />
        <p>{card.description}</p>
        <div className="skill-line-last" />
      </div>
    </motion.article>
  );
}

function SkillsSection() {
  return (
    <section className="plus-pattern skills-section">
      <motion.h2 initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}>
        Aptitudes &amp; Skills
      </motion.h2>
      <div className="skills-cards">{skillCards.map((card, index) => <SkillTag key={card.title} card={card} index={index} />)}</div>
    </section>
  );
}

function AllProjectsPage({ onHome, onProject, onAbout }) {
  const [activeFilter, setActiveFilter] = useState("TODOS");
  const [hoveredProject, setHoveredProject] = useState(null);
  const filters = ["TODOS", "PROYECTOS OFICIALES", "PROYECTOS GRUPALES", "CONCEPTS", "DISEÑO DE INDUMENTARIA", "DIRECCIÓN CREATIVA", "DISEÑO GRÁFICO", "FOTOGRAFÍA", "VESTUARIO"];
  const visibleRows = activeFilter === "TODOS" ? projects : projects.filter((project) => project.category.toLowerCase().includes(activeFilter.toLowerCase().split(" ")[0]));

  return (
    <main className="page-shell">
      <Header onHome={onHome} onAbout={onAbout} />
      <motion.section className="all-projects" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.45 }}>
        <motion.aside className="all-left" initial={{ opacity: 0, x: -26 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.55 }}>
          <button data-cursor="active" className="all-pill">All Projects</button>
          <button data-cursor="active" onClick={onHome} className="all-name">Camila<br />Celli</button>
          <div className="all-description"><p>[DESCRIPTION]</p><p>PROYECTOS OFICIALES, PERSONALES, GRUPALES, CONCEPTUALES. DISEÑO DE INDUMENTARIA, DIRECCIÓN CREATIVA, FOTOGRAFÍA, FICHAS TÉCNICAS, PATRONAJE, MOLDERÍA, DISEÑO GRÁFICO, Y MÁS.</p></div>
          <div className="filters"><p>[FILTRAR POR]</p>{filters.map((filter) => <button key={filter} data-cursor="active" onClick={() => setActiveFilter(filter)} className={activeFilter === filter ? "active" : ""}>{filter}</button>)}</div>
        </motion.aside>

        <section className="all-rows">
          {visibleRows.map((project, index) => {
            const isHovered = hoveredProject?.id === project.id;
            return (
              <motion.div key={`${project.id}-all-${index}`} data-cursor="active" onMouseEnter={() => setHoveredProject(project)} onMouseLeave={() => setHoveredProject(null)} onClick={() => onProject(project.id)} className="project-row" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 + index * 0.035, duration: 0.42 }}>
                <div className={`project-row-head ${isHovered ? "hovered" : ""}`}>
                  <div>{project.year}</div>
                  <div>{cleanTitle(project.title)}</div>
                  <div>{project.category}</div>
                  <img src={project.image} alt="" />
                  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 5V25" /><path d="M8 17L16 25L24 17" /></svg>
                </div>
                <AnimatePresence initial={false}>
                  {isHovered && (
                    <motion.div className="project-row-preview" initial={{ opacity: 0, height: 0, y: -8 }} animate={{ opacity: 1, height: "auto", y: 0 }} exit={{ opacity: 0, height: 0, y: -8 }} transition={{ duration: 0.42 }}>
                      <p>{project.description.split("\n\n")[0]}</p>
                      <div>{project.images.slice(0, 6).map((src, imageIndex) => <motion.img key={`${src}-${imageIndex}`} src={src} alt="" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.32, delay: imageIndex * 0.035 }} />)}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </section>
      </motion.section>
    </main>
  );
}

function FolderFooterTabs({ onProjects }) {
  return (
    <div className="folder-tabs">
      <div className="folder-line dark" />
      <div className="folder-line blue" />
      <div className="folder-line violet" />
      <div className="folder-line paper" />
      <button data-cursor="active" onClick={onProjects} className="folder-tab projects">PROJECTS</button>
      <button data-cursor="active" className="folder-tab cv">DOWNLOAD CV</button>
      <button data-cursor="active" className="folder-tab instagram">INSTAGRAM</button>
      <button data-cursor="active" className="folder-tab behance">BEHANCE</button>
      <button data-cursor="active" className="folder-tab mail">CAMIBCELLI14@GMAIL.COM</button>
    </div>
  );
}

function FinalHomeSection({ onProjects }) {
  const smallImages = projects.flatMap((project) => (project.images.length ? project.images : [project.image]));

  return (
    <section className="plus-pattern final-section">
      <motion.div className="final-grid" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.55 }}>
        <div>
          <h2>LET’S<br />CREATE<br />TOGETHER</h2>
          <p>Fashion projects, styling,<br />product development and visual concepts.</p>
          <a data-cursor="active" href="mailto:camibcelli14@gmail.com" className="talk-link">
            <span className="talk-text">Hablemos</span>
            <svg viewBox="0 0 120 120" fill="none"><path d="M19 22 C48 50 70 70 101 99" stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M56 98 C72 99 88 100 104 99" stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M101 54 C102 70 103 85 104 99" stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
        </div>
        <div className="final-right">
          <div className="final-list"><span>Fashion Design</span><span>Product Dev</span><span>Art Direction</span><span>Styling</span></div>
          <div className="final-gradient" />
          <div className="final-images">{smallImages.slice(0, 10).map((src, index) => <img key={`${src}-${index}`} src={src} alt="" />)}</div>
        </div>
      </motion.div>
      <FolderFooterTabs onProjects={onProjects} />
    </section>
  );
}

function ProjectFolderTabs({ onHome, onProjects, onAbout }) {
  const tabs = [
    { label: "PROJECTS", action: onProjects, className: "project-folder projects" },
    { label: "ABOUT ME", action: onAbout, className: "project-folder about" },
    { label: "HOME", action: onHome, className: "project-folder home" },
  ];

  return (
    <div className="project-folders">
      <div className="pf-line dark" />
      <div className="pf-line blue" />
      <div className="pf-line violet" />
      {tabs.map((tab) => <button key={tab.label} data-cursor="active" onClick={tab.action} className={tab.className}>{tab.label}</button>)}
    </div>
  );
}

function ProjectDetailPage({ onHome, onProjects, onAbout, project }) {
  const images = project.images.length ? project.images : [project.image];
  const galleryImages = images.concat(images).slice(0, 16);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setLightboxIndex(null);
      if (event.key === "ArrowRight") setLightboxIndex((current) => (current === null ? current : (current + 1) % galleryImages.length));
      if (event.key === "ArrowLeft") setLightboxIndex((current) => (current === null ? current : (current - 1 + galleryImages.length) % galleryImages.length));
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxIndex, galleryImages.length]);

  return (
    <main className="page-shell">
      <ProjectFolderTabs onHome={onHome} onProjects={onProjects} onAbout={onAbout} />
      <motion.section className="detail-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.45 }}>
        <button data-cursor="active" onClick={onProjects} className="back-arrow" aria-label="Volver a proyectos">
          <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 5V25" /><path d="M8 17L16 25L24 17" /></svg>
        </button>
        <motion.div className="detail-head" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.05 }}>
          <div>{project.year}</div>
          <h1>{cleanTitle(project.title)}</h1>
        </motion.div>

        <motion.div className="detail-gallery" initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.14 }}>
          {galleryImages.map((src, index) => (
            <motion.button key={`${src}-${index}`} type="button" data-cursor="active" onClick={() => setLightboxIndex(index)} initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.38, delay: 0.2 + index * 0.035 }}>
              <div>{String(index + 9).padStart(2, "0")} / {images.length}<br />Fichier .jpg<br />Texture</div>
              <img src={src} alt="" />
            </motion.button>
          ))}
        </motion.div>

        <motion.section className="detail-text" initial={{ opacity: 0, y: 34 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.55 }}>
          <h2>{project.category}</h2>
          <div>{project.description.split("\n\n").map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div>
        </motion.section>

        <footer className="detail-footer">
          <span>CAMILA BELÉN CELLI</span>
          <span>FASHION DESIGNER</span>
          <a data-cursor="active" href="#behance">BEHANCE</a>
          <a data-cursor="active" href="#instagram">INSTAGRAM</a>
          <span>PORTFOLIO 2026</span>
        </footer>

        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div className="lightbox" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setLightboxIndex(null)}>
              <button data-cursor="active" onClick={(event) => { event.stopPropagation(); setLightboxIndex((lightboxIndex - 1 + galleryImages.length) % galleryImages.length); }}>‹</button>
              <motion.img key={lightboxIndex} src={galleryImages[lightboxIndex]} alt="" initial={{ opacity: 0, scale: 0.94, y: 16 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.96, y: 10 }} onClick={(event) => event.stopPropagation()} />
              <button data-cursor="active" onClick={(event) => { event.stopPropagation(); setLightboxIndex((lightboxIndex + 1) % galleryImages.length); }}>›</button>
              <button data-cursor="active" className="lightbox-close" onClick={() => setLightboxIndex(null)}>×</button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.section>
    </main>
  );
}

function AboutPage({ setPage, openProject }) {
  const thumbs = projects.slice(0, 10);

  return (
    <main className="plus-pattern about-page">
      <Header onHome={() => setPage("home")} onProjects={() => setPage("allProjects")} onAbout={() => setPage("about")} />
      <motion.section className="about-grid" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.48 }}>
        <motion.aside initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <button data-cursor="active" onClick={() => setPage("home")} className="about-name">Camila<br />Celli</button>
          <h2>Fashion Designer</h2>
          <div className="about-thumbs">
            {thumbs.map((project, index) => (
              <button key={`${project.id}-about-${index}`} data-cursor="active" onClick={() => openProject(project.id)}>
                <img src={project.image} alt="" />
                <span>{String(index + 1).padStart(2, "0")}</span>
              </button>
            ))}
          </div>
          <div className="cv-buttons">
            <a data-cursor="active" href="#creative-cv">Creative CV</a>
            <a data-cursor="active" href="#ats-cv">ATS CV</a>
          </div>
        </motion.aside>

        <motion.div className="about-copy" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.12 }}>
          <div>
            <p>Soy Camila Celli, diseñadora de indumentaria en formación (5° año, FADU), con un enfoque en moda, desarrollo de producto, narrativa visual y la traducción de ideas en piezas concretas. Trabajo desde la conceptualización hasta la ejecución, combinando moldería, fichas técnicas y producción, concepto, styling e imagen; con una búsqueda estética coherente y actual.</p>
            <p>Me enfoco en la construcción visual. Busco transformar ideas en piezas concretas, combinando precisión técnica con una mirada estética profunda.</p>
            <p>Me interesa formar parte de proyectos donde el diseño tenga un enfoque integral, aportando tanto en lo técnico como en lo creativo.</p>
          </div>
        </motion.div>

        <motion.div className="about-photo" initial={{ opacity: 0, x: 26 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.55, delay: 0.18 }}>
          <img src={projects[0].image} alt="Camila Celli" />
        </motion.div>
      </motion.section>
      <FolderFooterTabs onProjects={() => setPage("allProjects")} />
    </main>
  );
}

function HomePage({ setPage, openProject }) {
  const [projectsMenuOpen, setProjectsMenuOpen] = useState(false);

  return (
    <main className="home-page">
      <Header onHome={() => setPage("home")} onProjects={() => setProjectsMenuOpen(true)} onAbout={() => setPage("about")} />
      <ProjectsMegaMenu isOpen={projectsMenuOpen} onClose={() => setProjectsMenuOpen(false)} onAllProjects={() => setPage("allProjects")} onProject={openProject} />
      <Marquee />
      <section className="home-hero">
        <HomeProjectStrip onProject={openProject} />
        <button data-cursor="active" onClick={() => setPage("home")} className="home-name">Camila Celli</button>
        <div className="home-mini"><img src={projects[0].image} alt="" /></div>
      </section>
      <SkillsSection />
      <FinalHomeSection onProjects={() => setPage("allProjects")} />
    </main>
  );
}

export default function App() {
  const [page, setPage] = useState("home");
  const [selectedProjectId, setSelectedProjectId] = useState(projects[0].id);

  const selectedProject = getProject(selectedProjectId);
  const openProject = (projectId) => {
    setSelectedProjectId(projectId);
    setPage("projectDetail");
  };

  if (page === "allProjects") {
    return (
      <>
        <Cursor />
        <AllProjectsPage onHome={() => setPage("home")} onProject={openProject} onAbout={() => setPage("about")} />
      </>
    );
  }

  if (page === "projectDetail") {
    return (
      <>
        <Cursor />
        <ProjectDetailPage project={selectedProject} onHome={() => setPage("home")} onProjects={() => setPage("allProjects")} onAbout={() => setPage("about")} />
      </>
    );
  }

  if (page === "about") {
    return (
      <>
        <Cursor />
        <AboutPage setPage={setPage} openProject={openProject} />
      </>
    );
  }

  return (
    <>
      <Cursor />
      <HomePage setPage={setPage} openProject={openProject} />
    </>
  );
}
