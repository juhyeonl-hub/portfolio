import React from 'react';
import Layout from '@/components/Layout';
import { 
  MapPin, 
  Calendar, 
  Code2, 
  Brain, 
  Globe,
  GraduationCap,
  Briefcase,
  Target,
  Heart,
  Coffee,
  BookOpen,
  Zap
} from 'lucide-react';

const About: React.FC = () => {
  return (
    <Layout 
      title="About - Juhyeon Lee" 
      description="Learn more about Juhyeon Lee's journey from systems programming to AI agent development, professional experience, and personal interests."
    >
      <div className="py-16">
        <div className="container max-w-4xl">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-8 flex items-center justify-center">
              <Code2 className="w-16 h-16 text-bg-primary" />
            </div>
            <h1 className="text-4xl font-bold mb-6">
              About Me
            </h1>
            <p className="text-xl text-text-secondary">
              Systems programmer evolving into an AI agent engineer
            </p>
          </div>

          {/* Personal Story */}
          <section className="mb-16">
            <div className="card">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Heart className="w-6 h-6 text-primary" />
                My Story
              </h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  "When faced with something unfamiliar, I dig in and figure it out myself." 
                  This philosophy has shaped my entire career journey, from my early days in Korea's 
                  financial sector to my current studies at Hive Helsinki.
                </p>
                <p>
                  I started my professional journey as a Java backend developer, working across multiple 
                  companies in Korea's financial and government sectors. Each role presented unique challenges 
                  that required me to learn new technologies quickly and adapt to complex existing systems 
                  with minimal documentation.
                </p>
                <p>
                  The transition from traditional enterprise development to low-level systems programming 
                  at Hive Helsinki has been transformative. Working with C and C++, diving deep into 
                  process management, concurrency, and memory management has given me a fundamental 
                  understanding of how software really works under the hood.
                </p>
                <p>
                  Now, I'm channeling this systems-level expertise toward AI agent development. 
                  The combination of low-level programming knowledge and high-level AI capabilities 
                  creates unique opportunities for building more efficient, reliable, and sophisticated 
                  automation solutions.
                </p>
              </div>
            </div>
          </section>

          {/* Current Focus */}
          <section className="mb-16">
            <div className="card bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Target className="w-6 h-6 text-primary" />
                Current Focus
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-accent">
                    <GraduationCap className="inline w-5 h-5 mr-2" />
                    Hive Helsinki Studies
                  </h3>
                  <p className="text-text-secondary">
                    Deepening my computer science fundamentals through intensive peer-to-peer learning. 
                    Currently working on advanced C++ modules and preparing for system-level projects.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-secondary">
                    <Brain className="inline w-5 h-5 mr-2" />
                    AI Agent Development
                  </h3>
                  <p className="text-text-secondary">
                    Building practical automation solutions using LLMs and exploring the intersection 
                    of systems programming and artificial intelligence.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Professional Timeline */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Briefcase className="w-6 h-6 text-primary" />
              Professional Journey
            </h2>
            
            <div className="space-y-6">
              {/* Hive Helsinki */}
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-bg-primary" />
                  </div>
                  <div className="w-px h-16 bg-primary/30 mt-2"></div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-semibold text-primary">Hive Helsinki (42 Network)</h3>
                    <span className="px-2 py-1 bg-primary/20 text-primary rounded text-sm">Current</span>
                  </div>
                  <p className="text-text-tertiary mb-2">Nov 2024 - July 2026 (Expected)</p>
                  <p className="text-text-secondary">
                    Intensive systems programming curriculum. Mastering C/C++, algorithms, 
                    data structures, and collaborative software development through peer learning.
                  </p>
                </div>
              </div>

              {/* Professional Experience */}
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <Code2 className="w-6 h-6 text-bg-primary" />
                  </div>
                  <div className="w-px h-16 bg-accent/30 mt-2"></div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-accent">Backend Developer</h3>
                  <p className="text-text-tertiary mb-2">Feb 2021 - May 2023 | Korea</p>
                  <p className="text-text-secondary">
                    Full-stack development across Hyundai Capital, Korean National Police Agency, 
                    and DB Insurance. Built enterprise systems with Java/Spring Boot, 
                    handled complex integrations, and delivered under tight deadlines.
                  </p>
                </div>
              </div>

              {/* Education Background */}
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-bg-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-secondary">Gangdong University</h3>
                  <p className="text-text-tertiary mb-2">Mar 2015 - Feb 2017 | Korea</p>
                  <p className="text-text-secondary">
                    Associate Degree in Leisure Sports. This diverse educational background 
                    taught me discipline, teamwork, and adaptability—skills that transfer 
                    well to collaborative software development.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Zap className="w-6 h-6 text-primary" />
              Technical Expertise
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="card">
                <h3 className="font-semibold mb-4 text-primary">Systems Programming</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-text-secondary">C/C++</span>
                    <span className="text-primary">Advanced</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">POSIX/UNIX</span>
                    <span className="text-primary">Proficient</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Memory Management</span>
                    <span className="text-primary">Proficient</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Concurrency</span>
                    <span className="text-primary">Intermediate</span>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-4 text-accent">Backend Development</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Java</span>
                    <span className="text-accent">Advanced</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Spring Boot</span>
                    <span className="text-accent">Proficient</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">SQL/Oracle</span>
                    <span className="text-accent">Proficient</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">REST APIs</span>
                    <span className="text-accent">Advanced</span>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-4 text-warning">Emerging Skills</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Python</span>
                    <span className="text-warning">Learning</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">AI/LLM APIs</span>
                    <span className="text-warning">Learning</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Agent Frameworks</span>
                    <span className="text-warning">Learning</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Japanese</span>
                    <span className="text-warning">Learning</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Personal Details */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card">
                <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <Globe className="w-6 h-6 text-primary" />
                  Location & Languages
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Vantaa, Finland</p>
                      <p className="text-text-secondary text-sm">Currently studying at Hive Helsinki</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-accent" />
                    <div>
                      <p className="font-medium">Languages</p>
                      <p className="text-text-secondary text-sm">
                        Korean (Native), English (Professional), Japanese (Learning)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <Coffee className="w-6 h-6 text-secondary" />
                  When I'm Not Coding
                </h2>
                <div className="space-y-3 text-text-secondary">
                  <p className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-secondary rounded-full"></span>
                    Exploring Helsinki's tech meetups and communities
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-secondary rounded-full"></span>
                    Reading about AI/ML developments and system design
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-secondary rounded-full"></span>
                    Studying Japanese for future opportunities
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-secondary rounded-full"></span>
                    Gaming and staying connected with friends back in Korea
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center">
            <div className="card bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
              <h2 className="text-2xl font-bold mb-4">Let's Connect</h2>
              <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
                Whether you want to discuss AI agents, systems programming, career opportunities, 
                or just chat about technology, I'm always open to interesting conversations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:xx.juon@gmail.com" 
                  className="btn"
                >
                  Send me an Email
                </a>
                <a
                  href="https://linkedin.com/in/juhyeon-lee-54aa1a223"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default About;
