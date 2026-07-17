import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cloud, Container, Cpu, GitBranch, HardDrive, Moon, ShieldCheck, Sun, Terminal } from 'lucide-react';

const techBadges = [
  { name: 'AWS', color: 'from-orange-500 to-amber-400' },
  { name: 'Kubernetes', color: 'from-blue-500 to-cyan-400' },
  { name: 'Docker', color: 'from-sky-500 to-blue-400' },
  { name: 'Terraform', color: 'from-violet-500 to-purple-400' },
  { name: 'Jenkins', color: 'from-red-500 to-orange-400' },
  { name: 'GitHub Actions', color: 'from-emerald-500 to-green-400' }
];

const workflowSteps = ['Developer', 'GitHub', 'CI/CD', 'Container', 'Infra', 'Cloud', 'Monitoring'];

const skills = [
  { title: 'AWS', level: 'Cloud Infrastructure', years: '2+ yrs', icon: Cloud, image: '/images/aws.svg' },
  { title: 'Kubernetes', level: 'Cluster Orchestration', years: '2+ yrs', icon: Container, image: '/images/kubernetes.svg' },
  { title: 'Terraform', level: 'IaC', years: '2+ yrs', icon: HardDrive, image: '/images/terraform.svg' },
  { title: 'Jenkins', level: 'CI/CD', years: '2+ yrs', icon: GitBranch, image: '/images/jenkins.svg' },
  { title: 'DevSecOps', level: 'Security Automation', years: '2+ yrs', icon: ShieldCheck, image: '/images/devsecops.svg' },
  { title: 'Linux', level: 'Automation & SRE', years: '2+ yrs', icon: Terminal, image: '/images/linux.svg' }
];

const projects = [
  {
    title: 'End-to-End DevSecOps Pipeline',
    description: 'Built secure CI/CD pipelines with Jenkins, Docker, SonarQube, Trivy, ArgoCD and Kubernetes.',
    stack: ['Jenkins', 'Docker', 'Kubernetes', 'ArgoCD', 'Terraform']
  },
  {
    title: 'AWS EKS Production Deployment',
    description: 'Delivered resilient EKS deployments with Terraform, Helm, Prometheus and Grafana monitoring.',
    stack: ['AWS', 'EKS', 'Helm', 'Prometheus', 'Grafana']
  },
  {
    title: 'Dockerized Django Application',
    description: 'Containerized a Django app with Docker Compose, Nginx and PostgreSQL for streamlined delivery.',
    stack: ['Docker', 'Django', 'Nginx', 'PostgreSQL', 'CI/CD']
  }
];

const githubProjects = [
  {
    title: 'ShopHub Django',
    description: 'Django-based e-commerce application with containerized deployment practices and cloud-friendly architecture.',
    repo: 'https://github.com/ChSaiteja123/ShopHub-django',
    stack: ['Django', 'Python', 'Docker']
  },
  {
    title: 'DevOps Basics',
    description: 'Hands-on DevOps reference material covering CI/CD, automation, infrastructure, and deployment workflows.',
    repo: 'https://github.com/ChSaiteja123/devops-basics',
    stack: ['DevOps', 'Jenkins', 'Terraform']
  },
  {
    title: 'DevOps Project',
    description: 'Practical DevOps portfolio repository focused on real-world pipelines and deployment patterns.',
    repo: 'https://github.com/ChSaiteja123/devops-project',
    stack: ['Kubernetes', 'Helm', 'CI/CD']
  },
  {
    title: '3-Tier App',
    description: 'Three-tier deployment example used to practice scalable application architecture and orchestration.',
    repo: 'https://github.com/ChSaiteja123/3-tier',
    stack: ['Docker', 'Node.js', 'K8s']
  },
  {
    title: 'Amazon Prime Video Kubernetes',
    description: 'Kubernetes deployment walkthrough for a sample streaming application with containerized services.',
    repo: 'https://github.com/ChSaiteja123/amazon-prime-video-kubernetes',
    stack: ['Kubernetes', 'Helm', 'Docker']
  },
  {
    title: 'Microservice-1',
    description: 'Microservice-oriented sample project showcasing modular services and API-based integration.',
    repo: 'https://github.com/ChSaiteja123/Microservice-1',
    stack: ['Python', 'Docker', 'Microservices']
  },
  {
    title: 'K8s EKS Practice',
    description: 'Hands-on Kubernetes and AWS deployment experiments around cluster setup and infrastructure automation.',
    repo: 'https://github.com/ChSaiteja123/kubernates_eks',
    stack: ['AWS', 'Kubernetes', 'Terraform']
  },
  {
    title: 'ArgoCD Playground',
    description: 'GitOps and continuous delivery practice repository focused on ArgoCD-based delivery flows.',
    repo: 'https://github.com/ChSaiteja123/argocd',
    stack: ['ArgoCD', 'GitOps', 'Kubernetes']
  },
  {
    title: 'Ansible Automation',
    description: 'Automation-focused repository used for configuration management and repeatable deployment tasks.',
    repo: 'https://github.com/ChSaiteja123/ansible',
    stack: ['Ansible', 'Automation', 'Linux']
  }
];

const experiences = [
  {
    year: '2023 – Present',
    role: 'Freelance DevOps Engineer',
    points: ['CI/CD automation', 'AWS & Kubernetes operations', 'Infrastructure as Code', 'Monitoring & SRE practices']
  }
];

const education = [
  {
    degree: 'B.Tech Mechanical Engineering',
    institution: 'Jawaharlal Nehru Technological University, Kalikiri',
    period: '2019 – 2023',
    grade: '7 CGPA'
  },
  {
    degree: 'Intermediate (MPC)',
    institution: 'Vishwasa Junior College, Nellore',
    period: '2017 – 2019',
    grade: '8.67 CGPA'
  },
  {
    degree: 'SSC',
    institution: 'St. Joseph’s High School, Allur',
    period: '2016 – 2017',
    grade: '8.5 CGPA'
  }
];

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark';
    return window.localStorage.getItem('portfolio-theme') === 'light' ? 'light' : 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('light', theme === 'light');
    root.classList.toggle('dark', theme === 'dark');
    document.body.dataset.theme = theme;
    window.localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const isDark = theme === 'dark';
  const shell = isDark
    ? 'bg-slate-950 text-slate-100'
    : 'bg-slate-50 text-slate-900';
  const headerClass = isDark
    ? 'border-cyan-400/20 bg-slate-950/75 shadow-cyan-900/20'
    : 'border-cyan-500/20 bg-white/80 shadow-cyan-200/70';
  const mutedText = isDark ? 'text-slate-400' : 'text-slate-600';
  const mutedTextSoft = isDark ? 'text-slate-300' : 'text-slate-700';
  const headingText = isDark ? 'text-white' : 'text-slate-900';
  const accentText = isDark ? 'text-cyan-300' : 'text-cyan-700';
  const accentTextStrong = isDark ? 'text-cyan-200' : 'text-cyan-800';
  const panelClass = isDark
    ? 'border-slate-800 bg-slate-950/60'
    : 'border-slate-200 bg-white/80';
  const cardClass = isDark
    ? 'border-slate-800 bg-slate-900/70'
    : 'border-slate-200 bg-slate-50/90';
  const pillClass = isDark
    ? 'border-slate-700 bg-slate-900/80 text-cyan-200'
    : 'border-cyan-200 bg-cyan-50 text-cyan-800';
  const navLink = isDark ? 'text-slate-300 hover:text-cyan-300' : 'text-slate-700 hover:text-cyan-700';
  const heroPanel = isDark
    ? 'border-cyan-400/20 bg-slate-950/60 shadow-2xl shadow-cyan-900/20'
    : 'border-cyan-500/20 bg-white/80 shadow-xl shadow-cyan-100/80';
  const heroAccent = isDark
    ? 'from-cyan-500/10 to-violet-500/10'
    : 'from-cyan-100 to-violet-100';
  const surfaceBorder = isDark ? 'border-cyan-400/20' : 'border-cyan-500/20';
  const buttonClass = isDark
    ? 'bg-cyan-500 text-slate-950 hover:bg-cyan-400'
    : 'bg-cyan-600 text-white hover:bg-cyan-500';
  const secondaryButtonClass = isDark
    ? 'border-violet-400/40 text-violet-200 hover:bg-violet-500/10'
    : 'border-violet-500/30 text-violet-700 hover:bg-violet-100';
  const terminalClass = isDark
    ? 'border-slate-800 bg-slate-950/80 text-cyan-200'
    : 'border-slate-200 bg-slate-100/90 text-cyan-800';

  return (
    <div className={`min-h-screen transition-colors duration-300 ${shell}`}>
      <div className="mx-auto flex max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">
        <header className={`sticky top-4 z-20 mb-6 rounded-full border px-4 py-3 shadow-glow backdrop-blur-xl ${headerClass}`}>
          <nav className="flex items-center justify-between gap-3 text-sm">
            <div className={`rounded-full border px-3 py-1 text-sm font-bold tracking-[0.35em] ${isDark ? 'border-cyan-400/30 bg-cyan-500/10 text-cyan-200' : 'border-cyan-500/20 bg-cyan-100 text-cyan-700'}`}>SAI TEJA</div>
            <div className="hidden gap-6 md:flex">
              {['Home', 'Skills', 'Projects', 'GitHub', 'Experience', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className={`transition hover:-translate-y-0.5 ${navLink}`}>
                  {item}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <motion.button
                whileHover={{ y: -2, scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setTheme(isDark ? 'light' : 'dark')}
                className={`flex items-center gap-2 rounded-full border px-3 py-2 transition ${isDark ? 'border-cyan-400/40 bg-cyan-500/10 text-cyan-200' : 'border-cyan-500/20 bg-cyan-100 text-cyan-700'}`}
                type="button"
              >
                {isDark ? <Sun size={16} /> : <Moon size={16} />}
                <span>{isDark ? 'Light' : 'Dark'}</span>
              </motion.button>
              <a href="#contact" className={`rounded-full border px-4 py-2 transition ${isDark ? 'border-cyan-400/40 bg-cyan-500/10 text-cyan-200 hover:bg-cyan-500/20' : 'border-cyan-500/20 bg-cyan-100 text-cyan-700 hover:bg-cyan-200'}`}>Hire Me</a>
            </div>
          </nav>
        </header>

        <main className="space-y-8">
          <section id="home" className={`grid items-center gap-8 rounded-[2rem] border p-8 shadow-2xl backdrop-blur-xl lg:grid-cols-[1.2fr_0.8fr] lg:p-12 ${heroPanel}`}>
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className={`mb-4 inline-flex rounded-full border px-3 py-1 text-sm ${isDark ? 'border-cyan-400/30 bg-cyan-500/10 text-cyan-300' : 'border-cyan-500/20 bg-cyan-100 text-cyan-700'}`}>DevOps Engineer • Cloud • Platform Engineering</p>
              <h1 className={`text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl ${headingText}`}>
                Hello, I’m <span className="block bg-gradient-to-r from-cyan-400 via-sky-500 to-violet-500 bg-clip-text text-transparent">Sai Teja</span>
              </h1>
              <p className={`mt-5 max-w-2xl text-lg ${mutedTextSoft}`}>
                I build resilient cloud systems, automate delivery pipelines, and shape secure DevSecOps practices across AWS, Kubernetes, Terraform and CI/CD ecosystems.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <motion.a whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: 0.98 }} href="#projects" className={`inline-flex items-center gap-2 rounded-full px-5 py-3 font-semibold ${buttonClass}`}>View Projects <ArrowRight size={18} /></motion.a>
                <motion.a whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: 0.98 }} href="/SaiTeja_DevOps_Resume.pdf" download className={`rounded-full border px-5 py-3 font-semibold transition ${secondaryButtonClass}`}>PDF Resume</motion.a>
                <motion.a whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: 0.98 }} href="/SaiTeja_DevOps_Resume.docx" download className={`rounded-full border px-5 py-3 font-semibold transition ${secondaryButtonClass}`}>DOCX Resume</motion.a>
              </div>
              <div className={`mt-8 flex flex-wrap gap-3 text-sm ${mutedText}`}>
                {techBadges.map((tool, index) => (
                  <motion.span
                    key={tool.name}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                    whileHover={{ y: -3, scale: 1.02 }}
                    className={`rounded-full border px-3 py-1 font-semibold ${pillClass}`}
                  >
                    {tool.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} whileHover={{ y: -6, scale: 1.01 }} className={`relative overflow-hidden rounded-[1.5rem] border p-6 ${surfaceBorder} ${heroAccent}`}>
              <img
                src="/images/hero.svg"
                alt="Futuristic cloud infrastructure"
                className="absolute inset-0 h-full w-full object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.5),_transparent_40%)]" />
              <div className="relative">
                <div className="mb-4 flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500" />
                  <span className="h-3 w-3 rounded-full bg-green-500" />
                </div>
                <div className={`rounded-2xl border p-4 font-mono text-sm ${terminalClass}`}>
                  <p className={isDark ? 'text-slate-500' : 'text-slate-400'}>$ whoami</p>
                  <p className={`mt-2 ${accentTextStrong}`}>Cheepinapi Sai Teja</p>
                  <p className={mutedText}>$ kubectl get pods</p>
                  <p className="mt-2 text-emerald-500">READY 12/12 • HEALTHY</p>
                  <p className={mutedText}>$ terraform plan</p>
                  <p className="mt-2 text-violet-500">Infrastructure is ready to deploy</p>
                </div>
              </div>
            </motion.div>
          </section>

          <section id="skills" className={`rounded-[2rem] border p-8 backdrop-blur-xl ${panelClass}`}>
            <div className="mb-8 flex items-end justify-between gap-3">
              <div>
                <p className={`text-sm uppercase tracking-[0.35em] ${accentText}`}>Skills</p>
                <h2 className={`text-3xl font-bold ${headingText}`}>Core DevOps Expertise</h2>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div key={skill.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} whileHover={{ y: -8, scale: 1.01 }} className={`overflow-hidden rounded-2xl border transition ${cardClass}`}>
                    <img src={skill.image} alt={skill.title} className="h-28 w-full object-cover" />
                    <div className="p-5">
                      <div className="mb-4 flex items-center justify-between">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${isDark ? 'bg-cyan-500/10 text-cyan-300' : 'bg-cyan-100 text-cyan-700'}`}>
                          <Icon size={22} />
                        </div>
                        <span className={`text-sm ${mutedText}`}>{skill.years}</span>
                      </div>
                      <h3 className={`text-xl font-semibold ${headingText}`}>{skill.title}</h3>
                      <p className={`mt-2 text-sm ${mutedText}`}>{skill.level}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>

          <section id="projects" className={`rounded-[2rem] border p-8 backdrop-blur-xl ${panelClass}`}>
            <div className="mb-8">
              <p className={`text-sm uppercase tracking-[0.35em] ${accentText}`}>Projects</p>
              <h2 className={`text-3xl font-bold ${headingText}`}>Featured Solutions</h2>
            </div>
            <div className={`mb-8 overflow-hidden rounded-[1.5rem] border p-4 ${isDark ? 'border-cyan-400/20 bg-slate-900/70' : 'border-cyan-500/20 bg-cyan-50/80'}`}>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {workflowSteps.map((step, index) => (
                  <div key={step} className="flex items-center gap-3">
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -2, scale: 1.03 }}
                      className={`rounded-full border px-4 py-2 text-sm font-semibold ${isDark ? 'border-cyan-400/30 bg-cyan-500/10 text-cyan-200' : 'border-cyan-500/20 bg-cyan-100 text-cyan-800'}`}
                    >
                      {step}
                    </motion.div>
                    {index < workflowSteps.length - 1 && <ArrowRight size={16} className={mutedText} />}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-5 lg:grid-cols-3">
              {projects.map((project, index) => (
                <motion.article key={project.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} whileHover={{ y: -8, scale: 1.01 }} className={`rounded-2xl border p-6 ${isDark ? 'border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950' : 'border-slate-200 bg-gradient-to-br from-white to-slate-100'}`}>
                  <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${isDark ? 'bg-violet-500/10 text-violet-300' : 'bg-violet-100 text-violet-700'}`}>
                    <Cpu size={22} />
                  </div>
                  <h3 className={`text-xl font-semibold ${headingText}`}>{project.title}</h3>
                  <p className={`mt-3 text-sm leading-6 ${mutedText}`}>{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className={`rounded-full border px-3 py-1 text-xs ${isDark ? 'border-slate-700 text-slate-300' : 'border-slate-300 text-slate-700'}`}>{tech}</span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          <section id="github" className={`rounded-[2rem] border p-8 backdrop-blur-xl ${panelClass}`}>
            <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className={`text-sm uppercase tracking-[0.35em] ${accentText}`}>GitHub Projects</p>
                <h2 className={`text-3xl font-bold ${headingText}`}>Repository Highlights</h2>
              </div>
              <a href="https://github.com/ChSaiteja123?tab=repositories" target="_blank" rel="noreferrer" className={`text-sm font-semibold transition ${isDark ? 'text-cyan-300 hover:text-cyan-200' : 'text-cyan-700 hover:text-cyan-900'}`}>
                View all repos →
              </a>
            </div>
            <div className="grid gap-4 lg:grid-cols-2">
              {githubProjects.map((project, index) => (
                <motion.article key={project.title} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} whileHover={{ y: -6, scale: 1.01 }} className={`rounded-2xl border p-5 ${cardClass}`}>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className={`text-lg font-semibold ${headingText}`}>{project.title}</h3>
                      <p className={`mt-2 text-sm leading-6 ${mutedText}`}>{project.description}</p>
                    </div>
                    <a href={project.repo} target="_blank" rel="noreferrer" className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${isDark ? 'border-cyan-400/30 text-cyan-200 hover:bg-cyan-500/10' : 'border-cyan-500/20 text-cyan-700 hover:bg-cyan-100'}`}>
                      Repo
                    </a>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className={`rounded-full border px-2.5 py-1 text-xs ${isDark ? 'border-slate-700 text-slate-300' : 'border-slate-300 text-slate-700'}`}>{tech}</span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          <section id="experience" className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className={`rounded-[2rem] border p-8 backdrop-blur-xl ${panelClass}`}>
              <p className={`text-sm uppercase tracking-[0.35em] ${accentText}`}>Experience</p>
              <h2 className={`text-3xl font-bold ${headingText}`}>Career Journey</h2>
              <div className="mt-6 space-y-4">
                {experiences.map((exp) => (
                  <motion.div key={exp.year} whileHover={{ y: -4, scale: 1.01 }} className={`rounded-2xl border p-4 ${cardClass}`}>
                    <p className={accentText}>{exp.year}</p>
                    <h3 className={`mt-1 text-xl font-semibold ${headingText}`}>{exp.role}</h3>
                    <ul className={`mt-3 space-y-2 text-sm ${mutedText}`}>
                      {exp.points.map((point) => <li key={point}>• {point}</li>)}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className={`rounded-[2rem] border p-8 backdrop-blur-xl ${panelClass}`}>
              <p className={`text-sm uppercase tracking-[0.35em] ${accentText}`}>Education</p>
              <h2 className={`text-3xl font-bold ${headingText}`}>Academic Background</h2>
              <div className="mt-6 space-y-4">
                {education.map((item) => (
                  <motion.div key={item.degree} whileHover={{ y: -4, scale: 1.01 }} className={`rounded-2xl border p-4 ${cardClass}`}>
                    <p className={accentText}>{item.period}</p>
                    <h3 className={`mt-1 text-xl font-semibold ${headingText}`}>{item.degree}</h3>
                    <p className={`mt-2 text-sm ${mutedText}`}>{item.institution}</p>
                    <p className={`mt-2 text-sm font-medium ${isDark ? 'text-emerald-300' : 'text-emerald-600'}`}>{item.grade}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section id="contact" className={`rounded-[2rem] border p-8 backdrop-blur-xl ${isDark ? 'border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 to-violet-500/10' : 'border-cyan-500/20 bg-gradient-to-r from-cyan-100 to-violet-100'}`}>
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className={`text-sm uppercase tracking-[0.35em] ${accentText}`}>Contact</p>
                <h2 className={`text-3xl font-bold ${headingText}`}>Let’s build resilient systems together</h2>
                <p className={`mt-3 max-w-2xl ${mutedTextSoft}`}>Open to DevOps, Cloud, Platform Engineering and SRE opportunities across modern engineering teams.</p>
                <a href="mailto:chsaitej50@gmail.com" className={`mt-3 inline-flex transition ${isDark ? 'text-cyan-300 hover:text-cyan-200' : 'text-cyan-700 hover:text-cyan-900'}`}>chsaitej50@gmail.com</a>
              </div>
              <div className="flex flex-wrap gap-3">
                <motion.a whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: 0.98 }} href="/SaiTeja_DevOps_Resume.pdf" download className={`inline-flex items-center justify-center rounded-full px-5 py-3 font-semibold ${isDark ? 'bg-white text-slate-950 hover:bg-slate-100' : 'bg-slate-900 text-white hover:bg-slate-800'}`}>Open PDF</motion.a>
                <motion.a whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: 0.98 }} href="/SaiTeja_DevOps_Resume.docx" download className={`inline-flex items-center justify-center rounded-full border px-5 py-3 font-semibold ${isDark ? 'border-cyan-400/30 text-cyan-200 hover:bg-cyan-500/10' : 'border-cyan-500/20 text-cyan-700 hover:bg-cyan-100'}`}>Open DOCX</motion.a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
