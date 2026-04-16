import React from 'react';
import Layout from '@/components/Layout';
import Link from 'next/link';
import { 
  Code2, 
  Bot, 
  Cpu, 
  GitBranch, 
  Terminal, 
  ArrowRight, 
  Zap,
  Brain,
  Globe,
  ChevronDown
} from 'lucide-react';

const Home: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-bg-secondary px-4 py-2 rounded-full border border-primary/20 mb-8 animate-fadeInUp">
              <Brain className="w-4 h-4 text-primary" />
              <span className="text-sm text-text-secondary">Systems Programmer → AI Agent Builder</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp">
              Building the Future with
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Agentic Engineering
              </span>
            </h1>
            
            <p className="text-xl text-text-secondary mb-12 max-w-2xl mx-auto animate-fadeInUp" style={{animationDelay: '0.2s'}}>
              I'm Juhyeon Lee, a systems programmer with 2+ years of professional experience, 
              now diving deep into AI agent development. Currently mastering C/C++ fundamentals 
              at Hive Helsinki while building intelligent automation solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp" style={{animationDelay: '0.4s'}}>
              <Link href="/projects" className="btn flex items-center gap-2">
                <Code2 className="w-5 h-5" />
                View My Projects
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/blog" className="btn-secondary flex items-center gap-2">
                <Terminal className="w-5 h-5" />
                Read My Journey
              </Link>
            </div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-10">
          <div className="w-full h-full border border-primary/30 rounded-full animate-pulse"></div>
          <div className="absolute top-4 left-4 right-4 bottom-4 border border-accent/30 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="py-16 bg-bg-secondary">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            <Bot className="inline w-8 h-8 mr-3 text-primary" />
            Tech Stack & Expertise
          </h2>
          
          <div className="grid grid-3 mb-16">
            <div className="card text-center">
              <Cpu className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Systems Programming</h3>
              <p className="text-text-secondary mb-4">
                Deep expertise in C/C++, POSIX, concurrency, and low-level system design from Hive Helsinki.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-bg-tertiary rounded-full text-sm">C/C++</span>
                <span className="px-3 py-1 bg-bg-tertiary rounded-full text-sm">POSIX</span>
                <span className="px-3 py-1 bg-bg-tertiary rounded-full text-sm">Memory Mgmt</span>
              </div>
            </div>
            
            <div className="card text-center">
              <Bot className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">AI Agent Development</h3>
              <p className="text-text-secondary mb-4">
                Building intelligent automation systems with LLMs, focusing on practical business applications.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-bg-tertiary rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-bg-tertiary rounded-full text-sm">OpenAI API</span>
                <span className="px-3 py-1 bg-bg-tertiary rounded-full text-sm">LangChain</span>
              </div>
            </div>
            
            <div className="card text-center">
              <Globe className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Full-Stack Development</h3>
              <p className="text-text-secondary mb-4">
                2+ years of professional experience in Korea's financial sector with Java/Spring Boot.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-bg-tertiary rounded-full text-sm">Java</span>
                <span className="px-3 py-1 bg-bg-tertiary rounded-full text-sm">Spring Boot</span>
                <span className="px-3 py-1 bg-bg-tertiary rounded-full text-sm">React</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            <Zap className="inline w-8 h-8 mr-3 text-warning" />
            Featured Projects
          </h2>
          
          <div className="grid grid-2 gap-8">
            {/* Minishell Project */}
            <div className="card group hover:scale-105 transition-transform">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Terminal className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    Minishell: POSIX Shell in C
                  </h3>
                  <p className="text-text-secondary mb-4">
                    A complete POSIX-compliant shell implementation handling pipes, redirections, 
                    signal processing, and process lifecycle management. Built with a focus on 
                    robust IPC and error handling.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-primary/20 text-primary rounded text-sm">C</span>
                    <span className="px-2 py-1 bg-primary/20 text-primary rounded text-sm">POSIX</span>
                    <span className="px-2 py-1 bg-primary/20 text-primary rounded text-sm">Process Mgmt</span>
                  </div>
                  <a 
                    href="https://github.com/juhyeonl-hub/minishell" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary-dark"
                  >
                    <GitBranch className="w-4 h-4" />
                    View on GitHub
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Philosophers Project */}
            <div className="card group hover:scale-105 transition-transform">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Cpu className="w-8 h-8 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                    Philosophers: Concurrency Mastery
                  </h3>
                  <p className="text-text-secondary mb-4">
                    Solved the classic Dining Philosophers problem using POSIX threads, mutexes, 
                    and precise timing control. Achieved deadlock-free execution with zero data races.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-accent/20 text-accent rounded text-sm">C</span>
                    <span className="px-2 py-1 bg-accent/20 text-accent rounded text-sm">Pthreads</span>
                    <span className="px-2 py-1 bg-accent/20 text-accent rounded text-sm">Synchronization</span>
                  </div>
                  <a 
                    href="https://github.com/juhyeonl-hub/philo" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent hover:opacity-80"
                  >
                    <GitBranch className="w-4 h-4" />
                    View on GitHub
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* CPP Modules */}
            <div className="card group hover:scale-105 transition-transform">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <Code2 className="w-8 h-8 text-secondary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors">
                    C++ OOP Mastery
                  </h3>
                  <p className="text-text-secondary mb-4">
                    Progressive C++ modules covering advanced OOP concepts, memory management, 
                    design patterns, and complex inheritance hierarchies including diamond problem solutions.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-secondary/20 text-secondary rounded text-sm">C++</span>
                    <span className="px-2 py-1 bg-secondary/20 text-secondary rounded text-sm">OOP</span>
                    <span className="px-2 py-1 bg-secondary/20 text-secondary rounded text-sm">Design Patterns</span>
                  </div>
                  <a 
                    href="https://github.com/juhyeonl-hub/CPP_Modules" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-secondary hover:opacity-80"
                  >
                    <GitBranch className="w-4 h-4" />
                    View on GitHub
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Cub3D Game */}
            <div className="card group hover:scale-105 transition-transform">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-warning/10 rounded-lg">
                  <Bot className="w-8 h-8 text-warning" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-warning transition-colors">
                    cub3d: 3D Raycasting Engine
                  </h3>
                  <p className="text-text-secondary mb-4">
                    Built a 3D game engine in C using raycasting techniques and DDA algorithms. 
                    Handled texture loading, map parsing, and real-time rendering from scratch.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-warning/20 text-warning rounded text-sm">C</span>
                    <span className="px-2 py-1 bg-warning/20 text-warning rounded text-sm">Graphics</span>
                    <span className="px-2 py-1 bg-warning/20 text-warning rounded text-sm">Raycasting</span>
                  </div>
                  <a 
                    href="https://github.com/juhyeonl-hub/cub3d" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-warning hover:opacity-80"
                  >
                    <GitBranch className="w-4 h-4" />
                    View on GitHub
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/projects" className="btn-secondary">
              View All Projects
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Professional Journey */}
      <section className="py-16 bg-bg-secondary">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Professional Journey</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {/* Hive Helsinki */}
              <div className="flex gap-6 animate-slideInLeft">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Code2 className="w-6 h-6 text-bg-primary" />
                  </div>
                  <div className="w-px h-20 bg-primary/30 mt-2"></div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary">Hive Helsinki (42 Network)</h3>
                  <p className="text-text-tertiary mb-2">Nov 2024 - Present | Expected Graduation: July 2026</p>
                  <p className="text-text-secondary">
                    Intensive systems programming curriculum focusing on C/C++, algorithms, 
                    and peer-to-peer learning. Building deep understanding of computer science fundamentals 
                    through hands-on projects.
                  </p>
                </div>
              </div>

              {/* Professional Experience in Korea */}
              <div className="flex gap-6 animate-slideInLeft" style={{animationDelay: '0.2s'}}>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <Globe className="w-6 h-6 text-bg-primary" />
                  </div>
                  <div className="w-px h-20 bg-accent/30 mt-2"></div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-accent">Korean Financial & Gov Sector</h3>
                  <p className="text-text-tertiary mb-2">Feb 2021 - May 2023 | 2+ Years Experience</p>
                  <p className="text-text-secondary">
                    Full-stack development across multiple companies including Hyundai Capital, 
                    Korean National Police Agency, and DB Insurance. Specialized in Java/Spring Boot 
                    enterprise applications and integration systems.
                  </p>
                </div>
              </div>

              {/* Future Goals */}
              <div className="flex gap-6 animate-slideInLeft" style={{animationDelay: '0.4s'}}>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-warning rounded-full flex items-center justify-center animate-pulse">
                    <Brain className="w-6 h-6 text-bg-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-warning">AI Agent Engineer</h3>
                  <p className="text-text-tertiary mb-2">2026 - Future Goals</p>
                  <p className="text-text-secondary">
                    Transitioning to specialize in agentic engineering, combining systems programming 
                    expertise with AI/LLM technologies. Building intelligent automation solutions 
                    for enterprise applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Build Something Amazing Together</h2>
          <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
            I'm always excited to discuss new opportunities, collaborate on interesting projects, 
            or share insights about systems programming and AI agent development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:xx.juon@gmail.com" className="btn">
              Get In Touch
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            <Link href="/blog" className="btn-secondary">
              Read My Latest Posts
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
