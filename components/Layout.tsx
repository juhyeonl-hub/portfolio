import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Github, Linkedin, Mail, Terminal, Code, Zap } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title = 'Juhyeon Lee - Agentic Engineer',
  description = 'Systems programmer transitioning to AI agent development. Building the future with C/C++, Python, and LLMs.'
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen flex flex-col">
        {/* Navigation */}
        <nav className="border-b border-primary/20 bg-bg-secondary/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="container">
            <div className="flex items-center justify-between py-4">
              <Link href="/" className="flex items-center gap-2 text-xl font-bold">
                <Terminal className="w-6 h-6 text-primary" />
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  JL:~$
                </span>
              </Link>
              
              <div className="flex items-center gap-6">
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
                <Link href="/projects" className="hover:text-primary transition-colors">
                  Projects
                </Link>
                <Link href="/blog" className="hover:text-primary transition-colors">
                  Blog
                </Link>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About
                </Link>
                
                <div className="flex items-center gap-3 ml-4 pl-4 border-l border-primary/20">
                  <a 
                    href="https://github.com/juhyeonl-hub" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://linkedin.com/in/juhyeon-lee-54aa1a223" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href="mailto:xx.juon@gmail.com"
                    className="hover:text-primary transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-primary/20 bg-bg-secondary">
          <div className="container py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2">
                <Code className="w-5 h-5 text-primary" />
                <span className="text-text-secondary">
                  Built with Next.js & deployed on Vercel
                </span>
              </div>
              
              <div className="flex items-center gap-4 text-text-secondary">
                <span>© 2026 Juhyeon Lee</span>
                <div className="flex items-center gap-1">
                  <Zap className="w-4 h-4 text-warning animate-pulse" />
                  <span className="text-sm">Powered by AI & Curiosity</span>
                </div>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-primary/10 text-center text-text-tertiary text-sm">
              <p>
                "When faced with something unfamiliar, I dig in and figure it out myself." 
                <br />
                Currently building AI agents while mastering systems programming at Hive Helsinki.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;
