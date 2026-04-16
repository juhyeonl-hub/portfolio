import React from 'react';
import Layout from '@/components/Layout';
import Link from 'next/link';
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  Bot, 
  Brain, 
  Zap,
  Code2,
  BookOpen,
  TrendingUp
} from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: 'agentic-engineering' | 'systems-programming' | 'learning-journey' | 'project-deep-dive';
  tags: string[];
  featured?: boolean;
}

// Sample blog posts - these would come from your CMS/markdown files in a real setup
const blogPosts: BlogPost[] = [
  {
    id: 'systems-to-ai-transition',
    title: 'From Systems Programming to AI Agents: My Learning Path',
    excerpt: 'Why I\'m transitioning from low-level C/C++ development to building intelligent automation systems, and how my systems background gives me a unique perspective on AI agent architecture.',
    date: '2026-04-16',
    readTime: '8 min read',
    category: 'learning-journey',
    tags: ['Career Transition', 'AI Agents', 'Systems Programming'],
    featured: true
  },
  {
    id: 'minishell-concurrency-lessons',
    title: 'Building a POSIX Shell: Lessons in Process Management',
    excerpt: 'Deep dive into the Minishell project: handling complex pipe chains, signal processing, and the challenges of building reliable process lifecycle management in C.',
    date: '2026-04-10',
    readTime: '12 min read',
    category: 'project-deep-dive',
    tags: ['C Programming', 'POSIX', 'Process Management', 'Minishell']
  },
  {
    id: 'first-ai-agent-experiment',
    title: 'My First AI Agent: Code Review Automation',
    excerpt: 'Building my first practical AI agent using Claude API to automate code reviews. What worked, what didn\'t, and lessons learned about prompt engineering and context management.',
    date: '2026-04-05',
    readTime: '10 min read',
    category: 'agentic-engineering',
    tags: ['AI Agents', 'Claude API', 'Automation', 'Code Review']
  },
  {
    id: 'philosophers-deadlock-deep-dive',
    title: 'Solving Deadlocks: The Philosophers Problem in Practice',
    excerpt: 'A technical breakdown of implementing the Dining Philosophers problem with zero data races. Synchronization strategies, timing precision, and debugging concurrent code.',
    date: '2026-03-28',
    readTime: '15 min read',
    category: 'project-deep-dive',
    tags: ['Concurrency', 'POSIX Threads', 'Deadlock Prevention', 'C Programming']
  },
  {
    id: 'hive-helsinki-experience',
    title: 'Hive Helsinki: Peer-to-Peer Learning in Practice',
    excerpt: 'What it\'s really like to study at Hive Helsinki (42 Network). The peer-to-peer learning model, project-based curriculum, and how it\'s reshaping my approach to problem-solving.',
    date: '2026-03-20',
    readTime: '6 min read',
    category: 'learning-journey',
    tags: ['Hive Helsinki', '42 Network', 'Education', 'Peer Learning']
  }
];

const Blog: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'agentic-engineering': return <Bot className="w-4 h-4" />;
      case 'systems-programming': return <Code2 className="w-4 h-4" />;
      case 'learning-journey': return <BookOpen className="w-4 h-4" />;
      case 'project-deep-dive': return <Zap className="w-4 h-4" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'agentic-engineering': return 'text-primary border-primary/20 bg-primary/10';
      case 'systems-programming': return 'text-accent border-accent/20 bg-accent/10';
      case 'learning-journey': return 'text-warning border-warning/20 bg-warning/10';
      case 'project-deep-dive': return 'text-secondary border-secondary/20 bg-secondary/10';
      default: return 'text-primary border-primary/20 bg-primary/10';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <Layout 
      title="Blog - Juhyeon Lee" 
      description="Insights on agentic engineering, systems programming, and the journey from low-level C/C++ to AI agent development."
    >
      <div className="py-16">
        <div className="container">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">
              <Brain className="inline w-10 h-10 mr-3 text-primary" />
              My Learning Journey
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Documenting my transition from systems programming to agentic engineering. 
              Deep dives into projects, technical challenges, and insights from building AI agents.
            </p>
          </div>

          {/* Featured Post */}
          {featuredPost && (
            <div className="mb-16">
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span className="text-primary font-semibold">Featured Post</span>
              </div>
              
              <div className="card bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 hover:scale-105 transition-all duration-300">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`px-3 py-1 rounded-full border text-sm font-medium flex items-center gap-2 ${getCategoryColor(featuredPost.category)}`}>
                        {getCategoryIcon(featuredPost.category)}
                        <span className="capitalize">
                          {featuredPost.category.replace('-', ' ')}
                        </span>
                      </div>
                    </div>

                    <h2 className="text-2xl font-bold mb-4 text-primary">
                      {featuredPost.title}
                    </h2>

                    <p className="text-text-secondary mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>

                    <div className="flex items-center gap-4 text-text-tertiary text-sm mb-6">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(featuredPost.date)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredPost.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-bg-tertiary rounded text-sm text-text-secondary"
                        >
                          #{tag.toLowerCase().replace(' ', '-')}
                        </span>
                      ))}
                    </div>

                    <Link 
                      href={`/blog/${featuredPost.id}`}
                      className="btn inline-flex items-center gap-2"
                    >
                      Read Full Post
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  <div className="flex items-center justify-center">
                    <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center">
                      <Bot className="w-16 h-16 text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {regularPosts.map((post, index) => (
              <article
                key={post.id}
                className="card hover:scale-105 transition-all duration-300 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`px-3 py-1 rounded-full border text-sm font-medium flex items-center gap-2 ${getCategoryColor(post.category)}`}>
                    {getCategoryIcon(post.category)}
                    <span className="capitalize">
                      {post.category.replace('-', ' ')}
                    </span>
                  </div>
                </div>

                <h2 className="text-xl font-bold mb-3 hover:text-primary transition-colors">
                  <Link href={`/blog/${post.id}`}>
                    {post.title}
                  </Link>
                </h2>

                <p className="text-text-secondary mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-4 text-text-tertiary text-sm mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-bg-tertiary rounded text-sm text-text-secondary"
                    >
                      #{tag.toLowerCase().replace(' ', '-')}
                    </span>
                  ))}
                </div>

                <Link 
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </article>
            ))}
          </div>

          {/* Coming Soon Notice */}
          <div className="mt-16 text-center">
            <div className="card bg-gradient-to-r from-accent/10 to-secondary/10 border border-accent/20">
              <Zap className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">More Content Coming Weekly!</h3>
              <p className="text-text-secondary mb-6">
                I'm committed to sharing my learning journey with regular posts about AI agent development, 
                systems programming insights, and project breakdowns. New content every week!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:xx.juon@gmail.com" 
                  className="btn-secondary"
                >
                  Subscribe via Email
                </a>
                <a
                  href="https://github.com/juhyeonl-hub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Follow on GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Explore by Category</h3>
            <div className="grid grid-2 md:grid-cols-4 gap-4">
              <div className="card text-center border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors">
                <Bot className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-primary">Agentic Engineering</h4>
                <p className="text-text-secondary text-sm">AI agents & automation</p>
              </div>
              <div className="card text-center border-accent/20 bg-accent/5 hover:bg-accent/10 transition-colors">
                <Code2 className="w-8 h-8 text-accent mx-auto mb-3" />
                <h4 className="font-semibold text-accent">Systems Programming</h4>
                <p className="text-text-secondary text-sm">C/C++ & low-level topics</p>
              </div>
              <div className="card text-center border-warning/20 bg-warning/5 hover:bg-warning/10 transition-colors">
                <BookOpen className="w-8 h-8 text-warning mx-auto mb-3" />
                <h4 className="font-semibold text-warning">Learning Journey</h4>
                <p className="text-text-secondary text-sm">Education & career insights</p>
              </div>
              <div className="card text-center border-secondary/20 bg-secondary/5 hover:bg-secondary/10 transition-colors">
                <Zap className="w-8 h-8 text-secondary mx-auto mb-3" />
                <h4 className="font-semibold text-secondary">Project Deep Dives</h4>
                <p className="text-text-secondary text-sm">Technical breakdowns</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
