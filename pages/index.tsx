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
      minecraft-menu-button group cursor-pointer transition-all duration-200 
      ${isActive ? 'minecraft-button-active scale-105' : 'hover:scale-105'}
    `}>
      <div className="flex items-center gap-3 p-3">
        <div className={`
          p-2 rounded transition-colors duration-200
          ${isActive ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'}
        `}>
          <Icon className="w-5 h-5" />
        </div>
        <div className="flex-1 text-left">
          <h3 className="font-pixel text-base font-bold text-gray-800 mb-1">
            {title}
          </h3>
          <p className="text-gray-600 text-xs">
            {subtitle}
          </p>
        </div>
        {isActive && (
          <div className="text-gray-800 animate-bounce">
            <ArrowRight className="w-4 h-4" />
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
      title: "SHOWCASE",
      subtitle: "프로젝트 포트폴리오 보기",
      href: "/projects"
    },
    {
      icon: User,
      title: "PROFILE", 
      subtitle: "개발자 프로필 & 정보",
      href: "/about"
    },
    {
      icon: BookOpen,
      title: "JOURNAL",
      subtitle: "학습 일기 & 성장 과정", 
      href: "/blog"
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
      {/* Minecraft Style Main Menu */}
      <section className="min-h-screen relative overflow-hidden minecraft-background">
        {/* Minecraft Sky Background */}
        <div className="absolute inset-0 minecraft-sky">
          {/* Floating clouds */}
          <div className="absolute top-10 left-10 cloud-animation text-2xl">☁️</div>
          <div className="absolute top-20 right-20 cloud-animation-slow text-xl">☁️</div>
          <div className="absolute top-32 left-1/3 cloud-animation-reverse text-lg">☁️</div>
        </div>

        {/* Social Icons - Bottom Right */}
        <div className="absolute bottom-6 right-6 flex flex-col gap-3 z-20">
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
            minecraft-title-bg p-6 rounded-lg shadow-2xl
            ${showElements ? 'animate-fadeInDown' : ''}
          `}>
            <h1 className="font-pixel text-4xl md:text-6xl font-bold text-white mb-2 minecraft-text-shadow">
              JuHyeon's
            </h1>
            <h2 className="font-pixel text-2xl md:text-4xl font-bold text-gray-200 minecraft-text-shadow">
              Adventure
            </h2>
            <p className="text-gray-300 mt-2 font-pixel text-sm">
              동심을 잃지 않는 개발자의 모험 🎮
            </p>
          </div>
        </div>

        {/* Central Menu Panel */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className={`
            minecraft-menu-panel p-6 rounded-lg shadow-2xl max-w-md w-full mx-auto
            ${showElements ? 'animate-fadeInUp' : ''}
          `}>
            <div className="space-y-4">
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

        {/* My Character - Left Side (Bear Hoodie) */}
        <div className="absolute bottom-10 left-10 z-10">
          <div className="character-container">
            {/* 곰 후드 캐릭터 */}
            <div className="bear-character relative">
              {/* 후드 (곰 귀 포함) */}
              <div className="character-hood bg-gradient-to-b from-yellow-200 to-yellow-300 border-2 border-gray-800">
                {/* 곰 귀 */}
                <div className="bear-ear left bg-gradient-to-b from-yellow-200 to-yellow-300 border-2 border-gray-800"></div>
                <div className="bear-ear right bg-gradient-to-b from-yellow-200 to-yellow-300 border-2 border-gray-800"></div>
                {/* 곰 얼굴 */}
                <div className="bear-face">
                  <div className="bear-eyes">
                    <div className="eye"></div>
                    <div className="eye"></div>
                  </div>
                  <div className="bear-nose"></div>
                  <div className="bear-mouth"></div>
                </div>
              </div>
              {/* 몸통 (후드티) */}
              <div className="character-hoodie bg-gradient-to-b from-yellow-100 to-yellow-200 border-2 border-gray-800"></div>
              {/* 팔 */}
              <div className="character-arms-bear">
                <div className="arm-bear bg-gradient-to-b from-yellow-100 to-yellow-200 border-2 border-gray-800"></div>
                <div className="arm-bear bg-gradient-to-b from-yellow-100 to-yellow-200 border-2 border-gray-800"></div>
              </div>
              {/* 다리 */}
              <div className="character-legs-bear">
                <div className="leg-bear bg-gradient-to-b from-blue-600 to-blue-700 border-2 border-gray-800"></div>
                <div className="leg-bear bg-gradient-to-b from-blue-600 to-blue-700 border-2 border-gray-800"></div>
              </div>
            </div>
            
            {/* 캐릭터 라벨 */}
            <div className="mt-3 text-center">
              <div className="bg-black bg-opacity-70 px-3 py-1 rounded-full text-white font-pixel text-xs">
                JuHyeon 🐻
              </div>
            </div>
          </div>
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
