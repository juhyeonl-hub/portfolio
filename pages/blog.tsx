import React from 'react';
import Layout from '@/components/Layout';
import Link from 'next/link';
import { Calendar, Clock, BookOpen, Code2, Brain, Zap, Tag, ArrowRight } from 'lucide-react';

interface JournalEntry {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  excerpt: string;
  tags: string[];
  category: 'learning' | 'project' | 'reflection' | 'technical';
  icon: any;
}

const JournalCard = ({ entry }: { entry: JournalEntry }) => {
  const Icon = entry.icon;
  const getCategoryColor = (category: string) => {
    const colors = {
      learning: 'text-green-600 bg-green-100',
      project: 'text-blue-600 bg-blue-100',
      reflection: 'text-purple-600 bg-purple-100',
      technical: 'text-orange-600 bg-orange-100'
    };
    return colors[category as keyof typeof colors] || 'text-gray-600 bg-gray-100';
  };

  return (
    <div className="journal-card group cursor-pointer transition-all duration-300 hover:scale-105">
      <div className="p-6">
        {/* 헤더 */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="journal-icon bg-blue-500 text-white p-2 rounded-lg">
              <Icon className="w-5 h-5" />
            </div>
            <span className={`px-2 py-1 rounded-full text-xs font-pixel ${getCategoryColor(entry.category)}`}>
              {entry.category}
            </span>
          </div>
          <div className="flex items-center gap-2 text-gray-500 text-xs">
            <Calendar className="w-3 h-3" />
            <span>{entry.date}</span>
          </div>
        </div>

        {/* 제목과 부제목 */}
        <h3 className="font-pixel text-lg font-bold text-gray-800 mb-2 line-clamp-2">
          {entry.title}
        </h3>
        <p className="text-blue-600 text-sm font-pixel mb-3">
          {entry.subtitle}
        </p>

        {/* 내용 미리보기 */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {entry.excerpt}
        </p>

        {/* 태그 */}
        <div className="flex flex-wrap gap-2 mb-4">
          {entry.tags.slice(0, 3).map((tag, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded font-pixel"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* 하단 */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-500 text-xs">
            <Clock className="w-3 h-3" />
            <span>{entry.readTime}</span>
          </div>
          <div className="text-blue-600 text-sm font-pixel flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            Read More
            <ArrowRight className="w-3 h-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

const JournalPage: React.FC = () => {
  const journalEntries: JournalEntry[] = [
    {
      id: 'hive-first-month',
      title: 'Hive 첫 달 회고',
      subtitle: 'Peer Learning의 놀라운 경험',
      date: '2024.12.15',
      readTime: '5분',
      excerpt: 'Hive Helsinki에서의 첫 한 달. 동료와 함께 학습하며 느낀 것들과 C 프로그래밍의 깊이를 탐구하며 얻은 인사이트들을 정리해보았습니다.',
      tags: ['hive', '회고', 'peer-learning', 'C'],
      category: 'reflection',
      icon: BookOpen
    },
    {
      id: 'minishell-debugging',
      title: 'Minishell 디버깅 일지',
      subtitle: 'Signal Handling의 복잡함',
      date: '2024.11.28',
      readTime: '8분',
      excerpt: 'SIGINT와 SIGQUIT 처리에서 만난 복잡한 버그들과 해결 과정. fork/exec 시스템 콜에서 발생하는 race condition을 어떻게 해결했는지 기록합니다.',
      tags: ['minishell', 'signal', 'debugging', 'unix'],
      category: 'technical',
      icon: Code2
    },
    {
      id: 'philosophers-deadlock',
      title: 'Philosophers와 데드락',
      subtitle: '동시성 프로그래밍의 핵심',
      date: '2024.10.12',
      readTime: '6분',
      excerpt: 'Dining Philosophers 문제를 해결하며 배운 동시성과 동기화. 데드락을 방지하는 여러 전략들과 pthread 뮤텍스의 활용법을 탐구했습니다.',
      tags: ['philosophers', 'concurrency', 'mutex', 'deadlock'],
      category: 'project',
      icon: Zap
    },
    {
      id: 'c-to-cpp-journey',
      title: 'C에서 C++로의 여정',
      subtitle: '객체지향의 세계',
      date: '2024.09.20',
      readTime: '7분',
      excerpt: 'C 프로그래밍에 익숙해진 후 C++을 배우며 느낀 패러다임의 변화. 메모리 관리, 상속, 다형성 등 OOP 개념들의 실제 적용 경험을 공유합니다.',
      tags: ['cpp', 'oop', 'inheritance', 'polymorphism'],
      category: 'learning',
      icon: Brain
    },
    {
      id: 'push-swap-optimization',
      title: 'Push Swap 최적화기',
      subtitle: '알고리즘 효율성 추구',
      date: '2024.08.15',
      readTime: '9분',
      excerpt: 'Stack 정렬 알고리즘을 최적화하는 과정. Quicksort에서 Chunk 기반 전략으로 전환하며 배운 알고리즘 설계의 중요성과 복잡도 분석 방법론.',
      tags: ['push-swap', 'algorithm', 'optimization', 'complexity'],
      category: 'project',
      icon: Code2
    },
    {
      id: 'ai-agent-transition',
      title: 'AI Agent 개발로의 전환',
      subtitle: 'Systems에서 Intelligence로',
      date: '2026.01.03',
      readTime: '4분',
      excerpt: 'Systems Programming 기반으로 AI Agent 개발 분야에 진입하며 느낀 것들. 기존 지식이 어떻게 새로운 분야와 연결되는지에 대한 초기 관찰들.',
      tags: ['ai-agent', 'transition', 'career', 'reflection'],
      category: 'reflection',
      icon: Brain
    }
  ];

  return (
    <Layout>
      <section className="min-h-screen py-20 journal-background">
        <div className="container max-w-7xl mx-auto px-6">
          {/* 헤더 */}
          <div className="text-center mb-16">
            <h1 className="font-pixel text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              JOURNAL
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              학습 여정의 기록과 프로젝트 회고,<br />
              그리고 개발자로서의 성장 이야기
            </p>
          </div>

          {/* 카테고리 필터 */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            <button className="category-filter active">All</button>
            <button className="category-filter">Learning</button>
            <button className="category-filter">Projects</button>
            <button className="category-filter">Reflections</button>
            <button className="category-filter">Technical</button>
          </div>

          {/* 저널 엔트리 그리드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {journalEntries.map((entry) => (
              <JournalCard key={entry.id} entry={entry} />
            ))}
          </div>

          {/* Coming Soon */}
          <div className="text-center mt-16">
            <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-8 max-w-2xl mx-auto">
              <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="font-pixel text-xl font-bold text-gray-800 mb-3">
                더 많은 이야기가 준비 중입니다
              </h3>
              <p className="text-gray-600 mb-6">
                AI Agent 개발 여정의 새로운 챕터들과<br />
                더 깊이 있는 기술적 탐구들을 기록해나갈 예정입니다.
              </p>
              <Link href="/">
                <button className="minecraft-menu-button px-8 py-4 font-pixel text-gray-800 hover:scale-105 transition-transform">
                  ← Back to Adventure
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default JournalPage;
