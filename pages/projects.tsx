import React from 'react';
import Layout from '@/components/Layout';
import Link from 'next/link';
import { ExternalLink, Github, Code2, Database, Globe, Terminal, Cpu } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  date: string;
  icon: any;
}

const ProjectCard = ({ project }: { project: Project }) => {
  const Icon = project.icon;
  
  return (
    <div className="showcase-card group cursor-pointer transition-all duration-300 hover:scale-105">
      <div className="p-6">
        {/* 프로젝트 아이콘 */}
        <div className="flex items-center justify-between mb-4">
          <div className="project-icon bg-blue-500 text-white p-3 rounded-lg">
            <Icon className="w-6 h-6" />
          </div>
          <div className="text-sm text-gray-500 font-pixel">
            {project.date}
          </div>
        </div>

        {/* 제목과 부제목 */}
        <h3 className="font-pixel text-lg font-bold text-gray-800 mb-2">
          {project.title}
        </h3>
        <p className="text-blue-600 text-sm font-pixel mb-3">
          {project.subtitle}
        </p>

        {/* 설명 */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* 태그 */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded font-pixel"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* 링크들 */}
        <div className="flex gap-3">
          {project.githubUrl && (
            <a 
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-black text-sm font-pixel"
            >
              <Github className="w-4 h-4" />
              Code
            </a>
          )}
          {project.liveUrl && (
            <a 
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm font-pixel"
            >
              <ExternalLink className="w-4 h-4" />
              Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectsPage: React.FC = () => {
  const projects: Project[] = [
    {
      id: 'minishell',
      title: 'Minishell',
      subtitle: 'POSIX Shell Implementation',
      description: 'C로 구현한 POSIX 호환 셸. 파이프, 리다이렉션, 신호 처리를 지원하며 fork/exec 시스템 콜을 활용한 프로세스 관리.',
      tags: ['C', 'UNIX', 'System Programming', 'IPC'],
      githubUrl: 'https://github.com/juhyeonl-hub/minishell',
      date: '2024',
      icon: Terminal
    },
    {
      id: 'philosophers',
      title: 'Philosophers',
      subtitle: 'Concurrency & Synchronization',
      description: '식사하는 철학자 문제를 pthread와 뮤텍스로 해결. 데드락 방지와 동기화 설계에 중점을 둔 멀티스레딩 프로젝트.',
      tags: ['C', 'Pthread', 'Mutex', 'Concurrency'],
      githubUrl: 'https://github.com/juhyeonl-hub/philo',
      date: '2024',
      icon: Cpu
    },
    {
      id: 'cpp-modules',
      title: 'CPP Modules',
      subtitle: 'Object-Oriented Programming',
      description: 'C++ 언어의 핵심 기능들을 단계별로 학습. 메모리 관리, 상속, 다형성 등 객체지향 프로그래밍의 고급 개념 구현.',
      tags: ['C++', 'OOP', 'Memory Management', 'STL'],
      githubUrl: 'https://github.com/juhyeonl-hub/CPP_Modules',
      date: '2024',
      icon: Code2
    },
    {
      id: 'cub3d',
      title: 'Cub3D',
      subtitle: '3D Raycasting Game',
      description: '레이캐스팅 기법을 사용한 3D 게임. DDA 알고리즘 구현과 텍스처 매핑을 통해 3D 환경을 시각화.',
      tags: ['C', 'Graphics', 'Raycasting', 'DDA'],
      githubUrl: 'https://github.com/juhyeonl-hub/cub3d',
      date: '2024',
      icon: Globe
    },
    {
      id: 'push-swap',
      title: 'Push Swap',
      subtitle: 'Stack Sorting Algorithm',
      description: '제한된 연산으로 스택을 정렬하는 최적화 알고리즘. 청크 기반 전략과 최적화된 이동 시퀀스로 효율성 극대화.',
      tags: ['C', 'Algorithm', 'Data Structures', 'Optimization'],
      githubUrl: 'https://github.com/juhyeonl-hub/push_swap',
      date: '2024',
      icon: Database
    },
    {
      id: 'portfolio',
      title: 'Portfolio Website',
      subtitle: 'Personal Website',
      description: 'Next.js와 TypeScript로 구축한 개인 포트폴리오. 마인크래프트 스타일 UI와 반응형 디자인으로 제작.',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      githubUrl: 'https://github.com/juhyeonl-hub/portfolio',
      liveUrl: 'https://portfolio-utcx.vercel.app',
      date: '2026',
      icon: Globe
    }
  ];

  return (
    <Layout>
      <section className="min-h-screen py-20 showcase-background">
        <div className="container max-w-7xl mx-auto px-6">
          {/* 헤더 */}
          <div className="text-center mb-16">
            <h1 className="font-pixel text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              SHOWCASE
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Systems Programming부터 Web Development까지,<br />
              다양한 프로젝트를 통해 쌓아온 개발 경험들
            </p>
          </div>

          {/* 프로젝트 그리드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Back to Home */}
          <div className="text-center mt-16">
            <Link href="/">
              <button className="minecraft-menu-button px-8 py-4 font-pixel text-gray-800 hover:scale-105 transition-transform">
                ← Back to Adventure
              </button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectsPage;
