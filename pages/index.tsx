import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import Link from 'next/link';
import { 
  Code2, 
  Bot, 
  ArrowRight, 
  Gamepad2,
  BookOpen,
  User,
  Sparkles
} from 'lucide-react';

const GameMenuItem = ({ 
  icon: Icon, 
  title, 
  subtitle, 
  href, 
  isActive, 
  onHover 
}: {
  icon: any;
  title: string;
  subtitle: string;
  href: string;
  isActive: boolean;
  onHover: () => void;
}) => (
  <Link href={href} onMouseEnter={onHover}>
    <div className={`
      pixel-card group cursor-pointer transition-all duration-300 
      ${isActive ? 'ring-2 ring-primary bg-primary/10' : 'hover:bg-primary/5'}
    `}>
      <div className="flex items-center gap-4 p-6">
        {isActive && (
          <div className="text-primary font-mono text-xl animate-pulse">{">"}</div>
        )}
        <div className={`
          p-3 rounded-lg transition-colors duration-300
          ${isActive ? 'bg-primary/20' : 'bg-bg-tertiary'}
        `}>
          <Icon className={`w-8 h-8 ${isActive ? 'text-primary' : 'text-accent'}`} />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-1 font-mono tracking-wide">
            {title}
          </h3>
          <p className="text-text-secondary text-sm">
            {subtitle}
          </p>
        </div>
        <div className="text-primary opacity-50 group-hover:opacity-100 transition-opacity">
          <ArrowRight className="w-5 h-5" />
        </div>
      </div>
    </div>
  </Link>
);

const Home: React.FC = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(0);
  const [showPixelEffect, setShowPixelEffect] = useState(false);

  useEffect(() => {
    setShowPixelEffect(true);
  }, []);

  const menuItems = [
    {
      icon: Code2,
      title: "PROJECTS",
      subtitle: "시스템 프로그래밍 & 개발 프로젝트",
      href: "/projects"
    },
    {
      icon: BookOpen,
      title: "STUDY LOG",
      subtitle: "Hive 경험 & 기술 학습 일기",
      href: "/blog"
    },
    {
      icon: Bot,
      title: "AI JOURNEY",
      subtitle: "에이전틱 엔지니어링 모험기",
      href: "/blog?category=ai"
    },
    {
      icon: User,
      title: "ABOUT ME",
      subtitle: "사용자 친화적 개발자 이야기",
      href: "/about"
    }
  ];

  return (
    <Layout>
      {/* Pixel Game Menu Screen */}
      <section className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
        {/* Pixel Background */}
        <div className="fixed inset-0 opacity-5 pixel-bg"></div>
        
        <div className="container max-w-4xl mx-auto relative z-10">
          {/* Game Title */}
          <div className="text-center mb-16 animate-fadeInUp">
            <div className="inline-flex items-center gap-3 mb-8">
              <Gamepad2 className="w-8 h-8 text-primary animate-pulse" />
              <h1 className="text-4xl md:text-6xl font-bold font-mono tracking-wider text-primary">
                JUHYEON'S
              </h1>
              <Sparkles className="w-6 h-6 text-accent animate-bounce" />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold font-mono mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              DEV WORLD
            </h2>
            
            <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
              <span className="font-mono text-accent">{'>'}</span> 동심을 잃지 않는 개발자 <br />
              <span className="font-mono text-accent">{'>'}</span> 사용자에게 친숙한 프로그램을 만드는 것이 목표
            </p>
            
            {/* Blinking cursor effect */}
            <div className="inline-block mt-4 animate-pulse">
              <span className="font-mono text-primary text-xl">_</span>
            </div>
          </div>

          {/* Game Menu Items */}
          <div className="space-y-4 mb-12">
            {menuItems.map((item, index) => (
              <GameMenuItem
                key={index}
                icon={item.icon}
                title={item.title}
                subtitle={item.subtitle}
                href={item.href}
                isActive={activeMenuItem === index}
                onHover={() => setActiveMenuItem(index)}
              />
            ))}
          </div>

          {/* Game Controls Hint */}
          <div className="text-center">
            <div className="inline-flex items-center gap-4 px-6 py-3 bg-bg-secondary/50 rounded-lg border border-primary/20">
              <span className="font-mono text-sm text-text-tertiary">
                키보드 ↑↓ 또는 마우스로 선택
              </span>
              <span className="text-primary">|</span>
              <span className="font-mono text-sm text-text-tertiary">
                Enter 또는 클릭으로 진입
              </span>
            </div>
          </div>
        </div>

        {/* Floating Pixels Animation */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`
                absolute w-2 h-2 bg-primary/30 floating-pixel
                ${showPixelEffect ? 'animate-float' : ''}
              `}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-bg-secondary/50">
        <div className="container">
          <div className="grid grid-3 gap-8">
            <div className="text-center pixel-card p-8">
              <div className="font-mono text-3xl font-bold text-primary mb-2">
                2+
              </div>
              <p className="text-text-secondary">
                Years Professional<br />Experience
              </p>
            </div>
            
            <div className="text-center pixel-card p-8">
              <div className="font-mono text-3xl font-bold text-accent mb-2">
                10+
              </div>
              <p className="text-text-secondary">
                Systems Programming<br />Projects
              </p>
            </div>
            
            <div className="text-center pixel-card p-8">
              <div className="font-mono text-3xl font-bold text-warning mb-2">
                ∞
              </div>
              <p className="text-text-secondary">
                동심과 호기심으로<br />배우는 중
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
