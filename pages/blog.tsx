import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, BookOpen, Code2, Github, Linkedin, Mail, Tag } from 'lucide-react';

interface JournalEntry {
  id: string;
  title: string;
  date: string;
  summary: string;
  category: string;
  tags: string[];
}

const journalEntries: JournalEntry[] = [
  {
    id: "entry1",
    title: "저널 목록 1",
    date: "2024.12",
    summary: "Hive Helsinki 입학 후 첫 한 달간의 학습 경험과 42 교육 시스템에 대한 인사이트를 정리합니다.",
    category: "학습 회고",
    tags: ["Hive", "42", "적응", "시스템"]
  },
  {
    id: "entry2", 
    title: "저널 목록 2",
    date: "2024.11",
    summary: "Minishell 프로젝트를 통해 UNIX 시스템과 프로세스 관리에 대한 깊은 이해를 얻은 과정을 기록했습니다.",
    category: "프로젝트 회고",
    tags: ["C", "Shell", "UNIX", "Process"]
  },
  {
    id: "entry3",
    title: "저널 목록 3", 
    date: "2024.10",
    summary: "Philosophers 프로젝트에서 멀티스레딩과 동시성 프로그래밍의 핵심 개념을 익힌 학습 과정입니다.",
    category: "기술 학습",
    tags: ["Concurrency", "Thread", "Mutex", "Deadlock"]
  },
  {
    id: "entry4",
    title: "저널 목록 4",
    date: "2024.09", 
    summary: "CPP Modules를 통해 C++의 객체지향 프로그래밍 패러다임을 깊이 있게 탐구한 여정을 담았습니다.",
    category: "언어 학습",
    tags: ["C++", "OOP", "Design Pattern", "Memory"]
  },
  {
    id: "entry5",
    title: "저널 목록 5",
    date: "2024.08",
    summary: "cub3d 프로젝트에서 3D 그래픽스와 레이캐스팅 알고리즘을 구현하며 얻은 경험을 정리했습니다.",
    category: "프로젝트 회고", 
    tags: ["Graphics", "Raycasting", "DDA", "Game"]
  },
  {
    id: "entry6",
    title: "저널 목록 6",
    date: "2024.07",
    summary: "push_swap 알고리즘 최적화 과정에서 배운 효율적인 문제 해결 방법론과 성능 개선 기법들입니다.",
    category: "알고리즘 분석",
    tags: ["Algorithm", "Optimization", "Stack", "Performance"]
  }
];

const JournalCard: React.FC<{ entry: JournalEntry }> = ({ entry }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="minecraft-journal-card bg-gradient-to-b from-blue-400 to-blue-500 border-4 border-gray-700 hover:border-gray-600 transition-all duration-200 transform hover:scale-102"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-6">
        {/* Entry Date & Category */}
        <div className="flex items-center justify-between mb-4">
          <div className="bg-white bg-opacity-20 p-2 rounded flex items-center gap-2">
            <Calendar size={16} className="text-white" />
            <span className="text-white font-pixel text-xs">{entry.date}</span>
          </div>
          <span className="text-xs text-blue-100 bg-white bg-opacity-20 px-2 py-1 rounded font-pixel">
            {entry.category}
          </span>
        </div>

        {/* Entry Title */}
        <h3 className="text-white font-bold text-lg mb-3 minecraft-text-shadow font-pixel">
          {entry.title}
        </h3>

        {/* Entry Summary */}
        <p className="text-blue-50 text-sm leading-relaxed mb-4 line-clamp-3">
          {entry.summary}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {entry.tags.map((tag, index) => (
            <span 
              key={index}
              className="text-xs bg-white bg-opacity-20 text-blue-50 px-2 py-1 rounded font-pixel flex items-center gap-1"
            >
              <Tag size={10} />
              {tag}
            </span>
          ))}
        </div>

        {/* Read More Button */}
        <div className="flex gap-2">
          <button className="flex-1 bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center gap-2 font-pixel">
            <BookOpen size={16} />
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Blog() {
  return (
    <div className="minecraft-bg min-h-screen">
      <div className="p-6">
        <div className="flex items-center gap-4 mb-8">
          <Link 
            href="/"
            className="minecraft-button bg-gradient-to-b from-gray-400 to-gray-500 border-4 border-gray-700 hover:from-gray-300 hover:to-gray-400 px-4 py-2 text-white font-bold transition-all duration-200 font-pixel"
          >
            <ArrowLeft size={20} />
          </Link>
          <h1 className="font-pixel text-4xl font-bold text-white minecraft-text-shadow">
            Journal
          </h1>
        </div>

        {/* Journal Entries Grid - 2x3 layout as shown in sketch */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {journalEntries.map((entry) => (
            <JournalCard key={entry.id} entry={entry} />
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-12 text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm border-4 border-gray-700 rounded-lg p-6 inline-block">
            <div className="flex items-center gap-8 text-white">
              <div className="text-center">
                <div className="font-pixel text-2xl font-bold text-blue-200 mb-1">6</div>
                <div className="font-pixel text-sm">총 저널 수</div>
              </div>
              <div className="text-center">
                <div className="font-pixel text-2xl font-bold text-blue-200 mb-1">4</div>
                <div className="font-pixel text-sm">카테고리</div>
              </div>
              <div className="text-center">
                <div className="font-pixel text-2xl font-bold text-blue-200 mb-1">2024</div>
                <div className="font-pixel text-sm">활동 기간</div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Icons - Bottom Right (matching other pages) */}
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
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:xx.juon@gmail.com"
            className="social-icon bg-red-600 hover:bg-red-500 text-white p-3 rounded-full transition-all duration-200 minecraft-button-shadow"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}
