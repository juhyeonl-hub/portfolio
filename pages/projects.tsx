import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github, Code2, Cpu, Gamepad2, Database, Terminal, Layers } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  icon: React.ComponentType<any>;
  category: string;
}

const projects: Project[] = [
  {
    id: "project1",
    title: "프로젝트 1",
    description: "Minishell - POSIX 호환 셸 구현. 파이프, 리다이렉션, 신호 처리 및 프로세스 관리를 담당하는 C 프로젝트입니다.",
    tech: ["C", "POSIX", "IPC", "Shell"],
    github: "https://github.com/juhyeonl-hub/minishell",
    icon: Terminal,
    category: "Systems Programming"
  },
  {
    id: "project2", 
    title: "프로젝트 2",
    description: "Philosophers - 식사하는 철학자 문제를 pthread와 뮤텍스로 해결한 동시성 프로그래밍 프로젝트입니다.",
    tech: ["C", "Pthread", "Mutex", "Concurrency"],
    github: "https://github.com/juhyeonl-hub/philo",
    icon: Cpu,
    category: "Concurrency"
  },
  {
    id: "project3",
    title: "프로젝트 3", 
    description: "CPP Modules - C++ 언어의 핵심 기능들을 단계별로 학습하며 객체지향 프로그래밍을 익힌 프로젝트입니다.",
    tech: ["C++", "OOP", "STL", "Design Patterns"],
    github: "https://github.com/juhyeonl-hub/CPP_Modules",
    icon: Code2,
    category: "Object-Oriented"
  },
  {
    id: "project4",
    title: "프로젝트 4",
    description: "cub3d - 레이캐스팅 기법을 사용한 3D 게임 엔진. DDA 알고리즘과 텍스처 매핑을 구현했습니다.",
    tech: ["C", "Raycasting", "DDA", "Graphics"],
    github: "https://github.com/juhyeonl-hub/cub3d", 
    icon: Gamepad2,
    category: "Game Development"
  },
  {
    id: "project5",
    title: "프로젝트 5",
    description: "push_swap - 제한된 연산으로 스택을 정렬하는 최적화 알고리즘을 구현한 프로젝트입니다.",
    tech: ["C", "Algorithms", "Optimization", "Stack"],
    github: "https://github.com/juhyeonl-hub/push_swap",
    icon: Layers,
    category: "Algorithms"
  },
  {
    id: "project6",
    title: "프로젝트 6",
    description: "Portfolio - 마인크래프트 스타일로 제작한 개인 포트폴리오 웹사이트. Next.js와 TypeScript를 사용했습니다.",
    tech: ["Next.js", "TypeScript", "Tailwind", "CSS"],
    github: "https://github.com/juhyeonl-hub/portfolio",
    demo: "https://portfolio-utcx.vercel.app",
    icon: Database,
    category: "Web Development"
  }
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = project.icon;

  return (
    <div 
      className="minecraft-project-card bg-gradient-to-b from-blue-400 to-blue-500 border-4 border-gray-700 hover:border-gray-600 transition-all duration-200 transform hover:scale-102"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-6">
        {/* Project Icon & Category */}
        <div className="flex items-center justify-between mb-4">
          <div className="bg-white bg-opacity-20 p-3 rounded-lg">
            <IconComponent size={24} className="text-white" />
          </div>
          <span className="text-xs text-blue-100 bg-white bg-opacity-20 px-2 py-1 rounded">
            {project.category}
          </span>
        </div>

        {/* Project Title */}
        <h3 className="text-white font-bold text-lg mb-2 minecraft-text-shadow font-pixel">
          {project.title}
        </h3>

        {/* Project Description */}
        <p className="text-blue-50 text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1 mb-4">
          {project.tech.map((tech, index) => (
            <span 
              key={index}
              className="text-xs bg-white bg-opacity-20 text-blue-50 px-2 py-1 rounded font-pixel"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center gap-2 font-pixel"
          >
            <Github size={16} />
            Code
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-green-600 hover:bg-green-500 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center gap-2 font-pixel"
            >
              <ExternalLink size={16} />
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  return (
    <div className="minecraft-bg min-h-screen">
      {/* Header */}
      <div className="p-6">
        <div className="flex items-center gap-4 mb-8">
          <Link 
            href="/"
            className="minecraft-button bg-gradient-to-b from-gray-400 to-gray-500 border-4 border-gray-700 hover:from-gray-300 hover:to-gray-400 px-4 py-2 text-white font-bold transition-all duration-200 font-pixel"
          >
            <ArrowLeft size={20} />
          </Link>
          <h1 className="font-pixel text-4xl font-bold text-white minecraft-text-shadow">
            Showcase
          </h1>
        </div>

        {/* Projects Grid - 2x3 layout as shown in sketch */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Social Icons - Bottom Right (matching sketch) */}
        <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-20">
          <a
            href="https://github.com/juhyeonl-hub"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-all duration-200 minecraft-button-shadow"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/juhyeon-lee-54aa1a223"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon bg-blue-600 hover:bg-blue-500 text-white p-3 rounded-full transition-all duration-200 minecraft-button-shadow"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a
            href="mailto:xx.juon@gmail.com"
            className="social-icon bg-red-600 hover:bg-red-500 text-white p-3 rounded-full transition-all duration-200 minecraft-button-shadow"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.727L12 10.845l9.637-7.024h.727c.904 0 1.636.732 1.636 1.636z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
