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
  Sparkles,
  Github,
  Linkedin,
  Mail,
  FileText,
  Twitter
} from 'lucide-react';

const GameMenuButton = ({ 
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
      retro-menu-button group cursor-pointer transition-all duration-200 
      ${isActive ? 'retro-button-active scale-105' : 'hover:scale-105'}
    `}>
      <div className="flex items-center gap-4 p-4">
        <div className={`
          p-2 rounded transition-colors duration-200
          ${isActive ? 'bg-yellow-400 text-brown-800' : 'bg-brown-200 text-brown-700'}
        `}>
          <Icon className="w-6 h-6" />
        </div>
        <div className="flex-1 text-left">
          <h3 className="font-pixel text-lg font-bold text-brown-800 mb-1">
            {title}
          </h3>
          <p className="text-brown-600 text-sm">
            {subtitle}
          </p>
        </div>
        {isActive && (
          <div className="text-brown-800 animate-bounce">
            <ArrowRight className="w-5 h-5" />
          </div>
        )}
      </div>
    </div>
  </Link>
);

const SocialIcon = ({ 
  icon: Icon, 
  href, 
  color, 
  label 
}: {
  icon: any;
  href: string;
  color: string;
  label: string;
}) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className={`
      social-icon-button p-3 rounded-full transition-all duration-200 hover:scale-110
      ${color} shadow-lg hover:shadow-xl
    `}
    title={label}
  >
    <Icon className="w-5 h-5 text-white" />
  </a>
);

const PixelCharacter = ({ 
  emoji, 
  animationDelay 
}: {
  emoji: string;
  animationDelay: string;
}) => (
  <div 
    className="text-4xl animate-bounce"
    style={{ animationDelay, animationDuration: '2s' }}
  >
    {emoji}
  </div>
);

const Home: React.FC = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(0);
  const [showElements, setShowElements] = useState(false);

  useEffect(() => {
    setShowElements(true);
  }, []);

  const menuItems = [
    {
      icon: Code2,
      title: "Continue",
      subtitle: "프로젝트 포트폴리오 보기",
      href: "/projects"
    },
    {
      icon: BookOpen,
      title: "New Game",
      subtitle: "학습 일기 & 성장 과정",
      href: "/blog"
    },
    {
      icon: Bot,
      title: "Load Game",
      subtitle: "AI 엔지니어링 여정",
      href: "/blog?category=ai"
    },
    {
      icon: User,
      title: "Settings",
      subtitle: "개발자 프로필 & 정보",
      href: "/about"
    },
    {
      icon: FileText,
      title: "Credits",
      subtitle: "이력서 & 경력 사항",
      href: "/resume"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/juhyeonl-hub",
      color: "bg-gray-800 hover:bg-gray-700",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/juhyeon-lee-54aa1a223",
      color: "bg-blue-600 hover:bg-blue-500",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:xx.juon@gmail.com",
      color: "bg-red-500 hover:bg-red-400",
      label: "Email"
    },
    {
      icon: Twitter,
      href: "https://twitter.com/yourhandle",
      color: "bg-sky-500 hover:bg-sky-400",
      label: "Twitter"
    }
  ];

  return (
    <Layout>
      {/* Retro Game Main Menu */}
      <section className="min-h-screen relative overflow-hidden game-background">
        {/* Animated Sky Background */}
        <div className="absolute inset-0 game-sky">
          {/* Floating clouds */}
          <div className="absolute top-10 left-10 cloud-animation">☁️</div>
          <div className="absolute top-20 right-20 cloud-animation-slow">☁️</div>
          <div className="absolute top-32 left-1/3 cloud-animation-reverse">☁️</div>
        </div>

        {/* Social Icons - Top Right */}
        <div className="absolute top-6 right-6 flex gap-3 z-20">
          {socialLinks.map((social, index) => (
            <SocialIcon
              key={index}
              icon={social.icon}
              href={social.href}
              color={social.color}
              label={social.label}
            />
          ))}
        </div>

        {/* Main Game Title */}
        <div className="absolute top-12 left-1/2 transform -translate-x-1/2 text-center z-10">
          <div className={`
            retro-title-bg p-6 rounded-lg shadow-2xl
            ${showElements ? 'animate-fadeInDown' : ''}
          `}>
            <h1 className="font-pixel text-4xl md:text-6xl font-bold text-yellow-400 mb-2 retro-text-shadow">
              JUHYEON'S
            </h1>
            <h2 className="font-pixel text-2xl md:text-4xl font-bold text-white retro-text-shadow">
              DEV WORLD
            </h2>
            <p className="text-yellow-200 mt-2 font-pixel text-sm">
              동심을 잃지 않는 개발자의 모험 🎮
            </p>
          </div>
        </div>

        {/* Central Menu Panel */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className={`
            retro-menu-panel p-8 rounded-lg shadow-2xl
            ${showElements ? 'animate-fadeInUp' : ''}
          `}>
            <div className="space-y-3">
              {menuItems.map((item, index) => (
                <GameMenuButton
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
          </div>
        </div>

        {/* Pixel Characters - Right Side */}
        <div className="absolute bottom-10 right-10 flex gap-4 z-10">
          <PixelCharacter emoji="👨‍💻" animationDelay="0s" />
          <PixelCharacter emoji="🤖" animationDelay="0.5s" />
          <PixelCharacter emoji="✨" animationDelay="1s" />
        </div>

        {/* Bottom Status Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3 z-10">
          <div className="container mx-auto flex justify-between items-center">
            <div className="font-pixel text-sm">
              Level: Systems Programmer → AI Engineer
            </div>
            <div className="font-pixel text-sm">
              Experience: 2+ Years | Projects: 10+ | 동심: ∞
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;

export default Home;
