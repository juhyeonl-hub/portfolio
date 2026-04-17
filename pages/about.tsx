import React from 'react';
import Layout from '@/components/Layout';
import Link from 'next/link';
import { MapPin, Calendar, Mail, Github, Linkedin, Globe, Code2, GraduationCap, Briefcase, Award } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <section className="min-h-screen py-20 profile-background">
        <div className="container max-w-6xl mx-auto px-6">
          {/* 헤더 */}
          <div className="text-center mb-16">
            <h1 className="font-pixel text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              PROFILE
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Systems Programming에서 시작하여<br />
              Agentic Engineering으로 나아가는 개발자
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 프로필 사진 & 기본 정보 */}
            <div className="lg:col-span-1">
              <div className="profile-card sticky top-8">
                {/* 프로필 이미지 */}
                <div className="text-center mb-6">
                  <div className="profile-avatar mx-auto mb-4">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-4xl font-pixel border-4 border-gray-300">
                      사진
                    </div>
                  </div>
                  <h2 className="font-pixel text-2xl font-bold text-gray-800 mb-2">
                    Juhyeon Lee
                  </h2>
                  <p className="text-blue-600 font-pixel text-lg mb-1">
                    이주현
                  </p>
                  <p className="text-gray-500 text-sm">
                    049 - 289 - 0629
                  </p>
                </div>

                {/* 연락처 정보 */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Mail className="w-4 h-4 text-blue-500" />
                    <span className="text-sm">juhyeonl@student.hive.fi</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    <span className="text-sm">Helsinki, Finland</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <span className="text-sm">Born 2000</span>
                  </div>
                </div>

                {/* 소셜 링크 */}
                <div className="flex gap-3 justify-center">
                  <a 
                    href="https://github.com/juhyeonl-hub" 
                    target="_blank"
                    className="social-link bg-gray-800 text-white"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a 
                    href="https://linkedin.com/in/juhyeon-lee" 
                    target="_blank"
                    className="social-link bg-blue-600 text-white"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a 
                    href="https://portfolio-utcx.vercel.app" 
                    target="_blank"
                    className="social-link bg-green-600 text-white"
                  >
                    <Globe className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* 메인 콘텐츠 */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* 학력 섹션 */}
              <div className="profile-section">
                <div className="section-header">
                  <GraduationCap className="w-6 h-6 text-blue-500" />
                  <h3 className="font-pixel text-xl font-bold text-gray-800">학력</h3>
                </div>
                <div className="section-content">
                  <div className="education-item">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-gray-800">Hive Helsinki</h4>
                      <span className="text-sm text-gray-500">2024 - Present</span>
                    </div>
                    <p className="text-blue-600 text-sm font-pixel mb-2">
                      Software Engineering
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      42 Network 기반의 혁신적인 교육 과정. 동료 학습(Peer Learning)과 
                      프로젝트 기반 학습을 통해 Systems Programming, Algorithm, 
                      C/C++ 등을 심도있게 학습.
                    </p>
                  </div>
                </div>
              </div>

              {/* 경력 섹션 */}
              <div className="profile-section">
                <div className="section-header">
                  <Briefcase className="w-6 h-6 text-blue-500" />
                  <h3 className="font-pixel text-xl font-bold text-gray-800">경력</h3>
                </div>
                <div className="section-content">
                  <div className="experience-item">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-gray-800">Agentic Engineering Journey</h4>
                      <span className="text-sm text-gray-500">2026 - Present</span>
                    </div>
                    <p className="text-blue-600 text-sm font-pixel mb-2">
                      AI Agent Developer (Transitioning)
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      Systems Programming 기반을 바탕으로 AI Agent 개발 분야로 전환. 
                      LLM 통합, 자동화 워크플로우, 인텔리전트 시스템 구축에 집중.
                    </p>
                    <ul className="text-xs text-gray-500 space-y-1">
                      <li>• Claude API 활용한 개인 포트폴리오 자동 생성</li>
                      <li>• 마인크래프트 스타일 UI/UX 디자인 및 구현</li>
                      <li>• Next.js + TypeScript 기반 풀스택 개발</li>
                    </ul>
                  </div>

                  <div className="experience-item mt-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-gray-800">Systems Programming Projects</h4>
                      <span className="text-sm text-gray-500">2024</span>
                    </div>
                    <p className="text-blue-600 text-sm font-pixel mb-2">
                      Systems Programmer
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      Hive Helsinki에서 다양한 시스템 프로그래밍 프로젝트 수행. 
                      UNIX 시스템 이해도와 C/C++ 전문성을 바탕으로 고품질 소프트웨어 개발.
                    </p>
                    <ul className="text-xs text-gray-500 space-y-1">
                      <li>• POSIX 호환 Shell 구현 (Minishell)</li>
                      <li>• 멀티스레딩 및 동시성 제어 (Philosophers)</li>
                      <li>• 3D 레이캐스팅 게임 엔진 개발 (Cub3D)</li>
                      <li>• 최적화 알고리즘 설계 (Push Swap)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 포트폴리오 섹션 */}
              <div className="profile-section">
                <div className="section-header">
                  <Award className="w-6 h-6 text-blue-500" />
                  <h3 className="font-pixel text-xl font-bold text-gray-800">포트폴리오</h3>
                </div>
                <div className="section-content">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="portfolio-item">
                      <div className="p-4 bg-gray-50 rounded-lg border-2 border-gray-200 hover:border-blue-300 transition-colors">
                        <div className="flex items-center gap-3 mb-3">
                          <Code2 className="w-5 h-5 text-blue-500" />
                          <h4 className="font-pixel font-semibold text-gray-800">Systems Projects</h4>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          C/C++로 구현한 고품질 시스템 프로그램들. 
                          UNIX 환경에서의 깊은 이해와 최적화된 코드 작성 능력을 보여줍니다.
                        </p>
                      </div>
                    </div>

                    <div className="portfolio-item">
                      <div className="p-4 bg-gray-50 rounded-lg border-2 border-gray-200 hover:border-blue-300 transition-colors">
                        <div className="flex items-center gap-3 mb-3">
                          <Globe className="w-5 h-5 text-blue-500" />
                          <h4 className="font-pixel font-semibold text-gray-800">Web Development</h4>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          Next.js, TypeScript, Tailwind CSS를 활용한 
                          현대적인 웹 애플리케이션 개발과 배포 경험.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
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

export default AboutPage;
