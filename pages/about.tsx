import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Github, Linkedin, Mail, MapPin, Calendar, GraduationCap, Briefcase, Code, User } from 'lucide-react';

export default function About() {
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
            Profile
          </h1>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Profile Photo & Basic Info */}
          <div className="mb-8 flex flex-col items-center">
            <div className="profile-photo-container mb-6">
              <div className="w-32 h-32 bg-gradient-to-b from-blue-400 to-blue-500 border-4 border-gray-700 rounded-full flex items-center justify-center">
                <User size={48} className="text-white" />
              </div>
              <div className="text-center mt-4">
                <h2 className="font-pixel text-2xl font-bold text-white minecraft-text-shadow">
                  JuHyeon Lee
                </h2>
                <p className="text-blue-100 font-pixel text-sm mt-1">
                  044-248-0624
                </p>
              </div>
            </div>
          </div>

          {/* Three Main Sections (as shown in sketch) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* 학력 (Education) */}
            <div className="minecraft-profile-card bg-gradient-to-b from-blue-400 to-blue-500 border-4 border-gray-700">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-white bg-opacity-20 p-2 rounded">
                    <GraduationCap size={20} className="text-white" />
                  </div>
                  <h3 className="font-pixel text-lg font-bold text-white">학력</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white bg-opacity-10 p-3 rounded">
                    <h4 className="font-pixel text-sm font-bold text-white mb-1">
                      Hive Helsinki
                    </h4>
                    <p className="text-blue-100 text-xs mb-1">
                      2024.11 - 2026.07 (예정)
                    </p>
                    <p className="text-blue-50 text-xs">
                      Systems Programming & Algorithms
                    </p>
                  </div>
                  
                  <div className="bg-white bg-opacity-10 p-3 rounded">
                    <h4 className="font-pixel text-sm font-bold text-white mb-1">
                      강동대학교
                    </h4>
                    <p className="text-blue-100 text-xs mb-1">
                      2015.03 - 2017.02
                    </p>
                    <p className="text-blue-50 text-xs">
                      레저스포츠과 전문학사
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 경력 (Experience) */}
            <div className="minecraft-profile-card bg-gradient-to-b from-blue-400 to-blue-500 border-4 border-gray-700">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-white bg-opacity-20 p-2 rounded">
                    <Briefcase size={20} className="text-white" />
                  </div>
                  <h3 className="font-pixel text-lg font-bold text-white">경력</h3>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-white bg-opacity-10 p-3 rounded">
                    <h4 className="font-pixel text-xs font-bold text-white mb-1">
                      DB Insurance
                    </h4>
                    <p className="text-blue-100 text-xs mb-1">
                      2023.04 - 2023.05
                    </p>
                    <p className="text-blue-50 text-xs">
                      Web Operations Engineer
                    </p>
                  </div>
                  
                  <div className="bg-white bg-opacity-10 p-3 rounded">
                    <h4 className="font-pixel text-xs font-bold text-white mb-1">
                      경찰청
                    </h4>
                    <p className="text-blue-100 text-xs mb-1">
                      2022.08 - 2023.03
                    </p>
                    <p className="text-blue-50 text-xs">
                      Full-Stack Engineer
                    </p>
                  </div>
                  
                  <div className="bg-white bg-opacity-10 p-3 rounded">
                    <h4 className="font-pixel text-xs font-bold text-white mb-1">
                      현대상용차/캐피탈
                    </h4>
                    <p className="text-blue-100 text-xs mb-1">
                      2021.02 - 2022.07
                    </p>
                    <p className="text-blue-50 text-xs">
                      Integration Developer
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 포트폴리오 (Portfolio Summary) */}
            <div className="minecraft-profile-card bg-gradient-to-b from-blue-400 to-blue-500 border-4 border-gray-700">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-white bg-opacity-20 p-2 rounded">
                    <Code size={20} className="text-white" />
                  </div>
                  <h3 className="font-pixel text-lg font-bold text-white">포트폴리오</h3>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-white bg-opacity-10 p-3 rounded">
                    <h4 className="font-pixel text-xs font-bold text-white mb-1">
                      Systems Programming
                    </h4>
                    <p className="text-blue-50 text-xs">
                      C/C++ • Shell • Concurrency
                    </p>
                  </div>
                  
                  <div className="bg-white bg-opacity-10 p-3 rounded">
                    <h4 className="font-pixel text-xs font-bold text-white mb-1">
                      Web Development
                    </h4>
                    <p className="text-blue-50 text-xs">
                      Java • Spring Boot • JavaScript
                    </p>
                  </div>
                  
                  <div className="bg-white bg-opacity-10 p-3 rounded">
                    <h4 className="font-pixel text-xs font-bold text-white mb-1">
                      Game Development
                    </h4>
                    <p className="text-blue-50 text-xs">
                      Raycasting • Graphics • DDA
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Contact Info at Bottom */}
          <div className="mt-8 text-center">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm border-4 border-gray-700 rounded-lg p-4 inline-block">
              <div className="flex items-center gap-6 text-white">
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span className="font-pixel text-sm">Vantaa, Finland</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <span className="font-pixel text-sm">xx.juon@gmail.com</span>
                </div>
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
