import React from 'react';
import Layout from '@/components/Layout';
import Link from 'next/link';
import { 
  Github, 
  ExternalLink, 
  Code2, 
  Terminal, 
  Cpu, 
  Bot, 
  Zap,
  Star,
  GitBranch
} from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  category: 'systems' | 'ai-agent' | 'fullstack' | 'game';
  status: 'completed' | 'in-progress';
  highlights: string[];
  icon: React.ComponentType<{ className?: string }>;
}

const projects: Project[] = [
  {
    id: 'minishell',
    title: 'Minishell: POSIX Shell Implementation',
    description: 'A complete POSIX-compliant shell in C with advanced process management',
    longDescription: 'Built a fully functional shell that handles complex command parsing, pipe chains, redirections, signal processing (SIGINT, SIGQUIT, EOF), and process lifecycle management using fork/exec system calls. The project demonstrates deep understanding of UNIX system programming and inter-process communication.',
    technologies: ['C', 'POSIX', 'Process Management', 'IPC', 'Signal Handling'],
    githubUrl: 'https://github.com/juhyeonl-hub/minishell',
    category: 'systems',
    status: 'completed',
    highlights: [
      'Implemented complete command parser with syntax error handling',
      'Built robust pipe chain execution with proper file descriptor management', 
      'Handled complex signal processing across child/parent processes',
      'Recovered project after team member departure and delivered on schedule'
    ],
    icon: Terminal
  },
  {
    id: 'philosophers',
    title: 'Philosophers: Concurrency & Synchronization',
    description: 'Dining Philosophers problem solved with POSIX threads and perfect synchronization',
    longDescription: 'Implemented the classic Dining Philosophers concurrency problem using POSIX threads, mutexes, and precise timing control. The core challenge was preventing deadlocks while ensuring no philosopher starves, requiring careful synchronization design and fine-grained timing calculations.',
    technologies: ['C', 'POSIX Threads', 'Mutexes', 'Synchronization', 'Timing Control'],
    githubUrl: 'https://github.com/juhyeonl-hub/philo',
    category: 'systems',
    status: 'completed',
    highlights: [
      'Achieved 100% deadlock-free execution across all test scenarios',
      'Implemented data-race-free simulation verified by extensive testing',
      'Optimized timing precision for philosopher lifecycle management',
      'Handled edge cases with varying philosopher counts and timing conditions'
    ],
    icon: Cpu
  },
  {
    id: 'cpp-modules',
    title: 'C++ Object-Oriented Programming Mastery',
    description: 'Progressive C++ expertise through advanced OOP concepts and design patterns',
    longDescription: 'Comprehensive C++ learning journey covering core language features, memory management, inheritance hierarchies, and advanced design patterns. Tackled complex challenges including Diamond Inheritance problem and dynamic dispatch through virtual functions.',
    technologies: ['C++', 'OOP', 'Design Patterns', 'Memory Management', 'Inheritance'],
    githubUrl: 'https://github.com/juhyeonl-hub/CPP_Modules',
    category: 'systems',
    status: 'completed',
    highlights: [
      'Mastered complex inheritance patterns including Diamond Problem solutions',
      'Implemented advanced design patterns (Factory, Observer, RAII)',
      'Built custom memory management systems with RAII principles',
      'Developed deep understanding of virtual function dispatch mechanisms'
    ],
    icon: Code2
  },
  {
    id: 'cub3d',
    title: 'cub3d: 3D Raycasting Game Engine',
    description: '3D game built from scratch using raycasting techniques and DDA algorithms',
    longDescription: 'Collaborative project building a 3D game engine in C using raycasting technique. Studied DDA (Digital Differential Analysis) algorithm and implemented texture mapping, map parsing, and real-time rendering. Responsible for the complete parsing module that processes map files and loads texture assets.',
    technologies: ['C', 'Graphics Programming', 'Raycasting', 'DDA Algorithm', 'Texture Mapping'],
    githubUrl: 'https://github.com/juhyeonl-hub/cub3d',
    category: 'game',
    status: 'completed',
    highlights: [
      'Implemented DDA algorithm for efficient ray-wall intersection',
      'Built complete map parser with error handling and validation',
      'Designed texture loading system with proper memory management',
      'Collaborated effectively on complex graphics programming project'
    ],
    icon: Bot
  },
  {
    id: 'push-swap',
    title: 'push_swap: Optimized Stack Sorting Algorithm',
    description: 'Highly optimized sorting algorithm meeting strict operation count constraints',
    longDescription: 'Developed an optimized stack-based sorting algorithm in C to meet extremely strict operation count limits. Initial quicksort approach exceeded constraints, leading to innovative redesign using chunk-based strategy with precomputed optimal sequences for small datasets.',
    technologies: ['C', 'Algorithms', 'Data Structures', 'Optimization', 'Complexity Analysis'],
    githubUrl: 'https://github.com/juhyeonl-hub/push_swap',
    category: 'systems', 
    status: 'completed',
    highlights: [
      'Redesigned from O(n log n) quicksort to optimized chunk-based approach',
      'Implemented precomputed optimal move sequences for small inputs (≤5 elements)',
      'Achieved operation counts well within project constraints',
      'Applied advanced algorithm optimization techniques'
    ],
    icon: Zap
  }
];

const Projects: React.FC = () => {
  const getStatusColor = (status: string) => {
    return status === 'completed' ? 'text-primary' : 'text-warning';
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'systems': return <Cpu className="w-4 h-4" />;
      case 'ai-agent': return <Bot className="w-4 h-4" />;
      case 'fullstack': return <Code2 className="w-4 h-4" />;
      case 'game': return <Zap className="w-4 h-4" />;
      default: return <Code2 className="w-4 h-4" />;
    }
  };

  return (
    <Layout title="Projects - Juhyeon Lee" description="Systems programming and AI agent development projects by Juhyeon Lee">
      <div className="py-16">
        <div className="container">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">
              My Projects
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              A collection of systems programming projects from Hive Helsinki and AI agent development work. 
              Each project represents a deep dive into complex technical challenges and learning opportunities.
            </p>
          </div>

          {/* Project Grid */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className="card hover:scale-105 transition-all duration-300 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Project Info */}
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <project.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex items-center gap-2">
                        {getCategoryIcon(project.category)}
                        <span className="text-sm text-text-tertiary capitalize">
                          {project.category.replace('-', ' ')}
                        </span>
                      </div>
                      <span className={`text-sm font-medium ${getStatusColor(project.status)}`}>
                        {project.status === 'completed' ? '✓ Completed' : '🚧 In Progress'}
                      </span>
                    </div>

                    <h2 className="text-2xl font-bold mb-4 text-primary">
                      {project.title}
                    </h2>

                    <p className="text-text-secondary mb-6 leading-relaxed">
                      {project.longDescription}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-text-tertiary mb-2 uppercase tracking-wide">
                        Technologies Used
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn flex items-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        View Source
                      </a>
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary flex items-center gap-2"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Project Highlights */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-accent">
                        Key Highlights
                      </h3>
                      <ul className="space-y-3">
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <Star className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                            <span className="text-text-secondary text-sm leading-relaxed">
                              {highlight}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Coming Soon Section */}
          <div className="mt-20 text-center">
            <div className="card bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
              <Bot className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-2xl font-bold mb-4">AI Agent Projects Coming Soon</h2>
              <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
                I'm currently transitioning into agentic engineering and will be showcasing AI-powered 
                automation projects, LLM integrations, and intelligent workflow solutions. 
                Follow my journey in the blog section!
              </p>
              <Link href="/blog" className="btn">
                <GitBranch className="w-4 h-4 mr-2" />
                Follow My Progress
              </Link>
            </div>
          </div>

          {/* GitHub CTA */}
          <div className="mt-16 text-center">
            <p className="text-text-secondary mb-6">
              Want to see more of my work or contribute to a project?
            </p>
            <a
              href="https://github.com/juhyeonl-hub"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              Visit My GitHub Profile
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
