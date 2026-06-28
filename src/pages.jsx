import { motion } from 'framer-motion'

// About Page
function About() {
  const items = [
    { id: 'polaroid', x: 100, y: 80 },
    { id: 'bio', x: 350, y: 150 },
    { id: 'book', x: 150, y: 320 },
    { id: 'swatch', x: 350, y: 380 },
    { id: 'location', x: 120, y: 480 },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    },
  }

  return (
    <div className="about-collage">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Polaroid */}
        <motion.div
          variants={itemVariants}
          className="collage-item polaroid"
          style={{ left: items[0].x, top: items[0].y }}
          whileHover={{ rotate: -2, y: -4 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        >
          <div className="polaroid-img">
            <img src="/avatar.svg" alt="Freya" />
          </div>
          <div className="polaroid-label">hey, it's me</div>
        </motion.div>

        {/* Bio Card */}
        <motion.div
          variants={itemVariants}
          className="collage-item bio-card"
          style={{ left: items[1].x, top: items[1].y }}
          whileHover={{ rotate: 1, y: -4 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        >
          <p className="bio-card-text">
            Hello, I'm Freya Thakkar — an Interaction Designer focused on
            Human-AI interaction, intelligent copilots, and making complex AI
            systems feel trustworthy and intuitive. I love turning ideas into
            seamless digital experiences. Currently building @freyathakkar_ and
            exploring AI × design.
          </p>
        </motion.div>

        {/* Book */}
        <motion.div
          variants={itemVariants}
          className="collage-item book"
          style={{ left: items[2].x, top: items[2].y }}
          whileHover={{ rotate: -3, y: -4 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        >
          <div>📚</div>
          <div>Show Your Work!</div>
          <div style={{ fontSize: '10px', opacity: 0.8 }}>
            currently reading
          </div>
        </motion.div>

        {/* Color Swatch */}
        <motion.div
          variants={itemVariants}
          className="collage-item swatch"
          style={{ left: items[3].x, top: items[3].y }}
          whileHover={{ rotate: 2, y: -4 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        />

        {/* Location */}
        <motion.div
          variants={itemVariants}
          className="collage-item location"
          style={{ left: items[4].x, top: items[4].y }}
          whileHover={{ y: -4 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        >
          Mumbai, India 📍
        </motion.div>

        {/* Annotations */}
        <motion.div
          variants={itemVariants}
          className="annotation"
          style={{ left: 380, top: 50 }}
        >
          explore the pages from here →
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="annotation"
          style={{ left: 720, top: 120 }}
        >
          follow me! ;)
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="annotation"
          style={{
            left: 450,
            top: 650,
            fontSize: '14px',
            maxWidth: '300px',
          }}
        >
          yep, this is not figma. explore however you like :)
        </motion.div>
      </motion.div>
    </div>
  )
}

// Work Page
function Work() {
  const projects = [
    {
      id: 1,
      title: 'InnerLabs',
      subtitle: 'AI Answer-Tracking Platform',
      desc: 'Designed the InnerLabs website and product — an AI answer-tracking platform that measures brand visibility across AI search.',
      tags: ['Product Design', 'AI', 'Web Design'],
    },
    {
      id: 2,
      title: 'SoluteLabs',
      subtitle: 'Website Rebrand & Redesign',
      desc: 'UI/UX Design Intern (Apr–Aug 2024). Led the rebrand and redesign of the SoluteLabs site — intuitive interfaces, seamless micro-interactions, research-driven personas, journeys, and hi-fi Figma prototypes.',
      tags: ['UX/UI', 'Web Design', 'Branding'],
      link: 'https://www.solutelabs.com/',
    },
    {
      id: 3,
      title: 'Garma Garam',
      subtitle: 'Home-Cooked Food App',
      desc: 'UI Designer (Feb–Apr 2024). A culturally-inspired hyperlocal app connecting people to home-cooked meals from local home chefs — bringing the taste of home and supporting home-cook entrepreneurs.',
      tags: ['UI Design', 'Mobile', 'Service Design'],
      link: 'https://freyathakkar.in/garma-garam',
    },
    {
      id: 4,
      title: 'Pick A Book',
      subtitle: 'Public Library UX Research',
      desc: 'UX Designer & Researcher (Sep–Nov 2024). Rethinking how Indian public libraries use their resources — surfacing perception gaps, inventory issues, and digitization opportunities through field research and interviews.',
      tags: ['UX Research', 'Service Design'],
      link: 'https://freyathakkar.in/pick-a-book',
    },
    {
      id: 5,
      title: 'CityShor',
      subtitle: 'Graphic Design Internship',
      desc: 'Graphic Design Intern (May–Aug 2023). Marketing materials, social media assets, and UI contributions for client websites.',
      tags: ['Graphic Design', 'Branding'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 25,
      },
    },
  }

  const tagColors = {
    'Product Design': 'design',
    AI: 'ai',
    'Web Design': 'web',
    'UX/UI': 'ux',
    Branding: 'branding',
    Mobile: 'mobile',
    'Service Design': 'ux',
    'UX Research': 'research',
    'Graphic Design': 'branding',
  }

  return (
    <motion.div
      className="page-content"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="work-grid">
        {projects.map(project => (
          <motion.div
            key={project.id}
            className="project-card"
            variants={cardVariants}
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          >
            <div className="project-preview">{project.subtitle}</div>
            <div className="project-content">
              <div className="project-title">{project.title}</div>
              <div className="project-desc">{project.desc}</div>
              <div className="project-tags">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className={`tag ${tagColors[tag] || 'design'}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Project →
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

// Writing Page
function Writing() {
  const articles = [
    {
      id: 1,
      title: 'The Future of Food Transparency — A Speculative Design Project',
      date: 'Oct 16, 2024',
      category: 'DESIGN',
      link: 'https://medium.com/@freyaidesign/the-future-of-food-transparency-a-speculative-design-project-45a734b45436',
    },
    {
      id: 2,
      title: 'Technology Mediating Human-Animal Relationships',
      date: 'Sep 12, 2024',
      category: 'DESIGN',
      link: '#',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const articleVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 25,
      },
    },
  }

  return (
    <motion.div
      className="page-content"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="articles-list">
        {articles.map(article => (
          <motion.a
            key={article.id}
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="article-card"
            variants={articleVariants}
            whileHover={{ x: 4 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          >
            <div className="article-title">{article.title}</div>
            <div className="article-meta">
              {article.date}
              <span className="article-category">{article.category}</span>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  )
}

// Experience Page
function Experience() {
  const experiences = [
    {
      title: 'AI Enthusiast, Design Team',
      subtitle: 'Current',
      desc: 'Integrated emerging AI concepts and ethical frameworks into client work; translated user research into personas and journey maps.',
    },
    {
      title: 'UI/UX Designer',
      subtitle: 'SoluteLabs Internship',
      desc: 'Quantitative + qualitative research, personas, wireframes, hi-fi prototypes for a website redesign.',
    },
    {
      title: 'Graphic Designer',
      subtitle: 'CityShor Internship (May–Aug 2023)',
      desc: '',
    },
  ]

  const education = [
    {
      title: 'Bachelor of Design in Interaction Design',
      subtitle: 'Unitedworld Institute of Design (UID), Gandhinagar',
    },
    {
      title: 'Higher Secondary (Arts & Psychology)',
      subtitle: 'Eklavya School, Ahmedabad',
    },
  ]

  const skills = [
    'UX/UI Design',
    'Web Design & Development',
    'Agentic Workflow Automation',
    'Interactive Animations',
    'User Research',
    'Usability Testing',
    'Accessibility',
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 25,
      },
    },
  }

  return (
    <motion.div
      className="page-content"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="timeline">
        {experiences.map((exp, idx) => (
          <motion.div key={idx} className="timeline-item" variants={itemVariants}>
            <div className="timeline-title">{exp.title}</div>
            <div className="timeline-subtitle">{exp.subtitle}</div>
            {exp.desc && <div className="timeline-desc">{exp.desc}</div>}
          </motion.div>
        ))}
      </div>

      <div className="timeline">
        {education.map((edu, idx) => (
          <motion.div
            key={idx}
            className="timeline-item education"
            variants={itemVariants}
          >
            <div className="timeline-title">{edu.title}</div>
            <div className="timeline-subtitle">{edu.subtitle}</div>
          </motion.div>
        ))}
      </div>

      <motion.div variants={itemVariants} className="timeline-item skills">
        <div className="timeline-title">Skills</div>
        <div className="skills-grid">
          {skills.map((skill, idx) => (
            <span key={idx} className="skill-badge">
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

// Contact Page
function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 25,
      },
    },
  }

  return (
    <motion.div
      className="contact-content"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 className="contact-title" variants={itemVariants}>
        Let's build something amazing together.
      </motion.h1>

      <motion.a
        href="mailto:freyaidesign@gmail.com"
        className="contact-email"
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        freyaidesign@gmail.com
      </motion.a>

      <motion.div className="contact-socials" variants={itemVariants}>
        <a href="https://instagram.com/freyathakkar_" target="_blank" rel="noopener noreferrer">
          Instagram: @freyathakkar_
        </a>
        <span>·</span>
        <a href="#" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </motion.div>

      <motion.p className="contact-note" variants={itemVariants}>
        I'm usually quick to respond. Don't be a stranger.
      </motion.p>
    </motion.div>
  )
}

export const pages = {
  about: About,
  work: Work,
  writing: Writing,
  experience: Experience,
  contact: Contact,
}
