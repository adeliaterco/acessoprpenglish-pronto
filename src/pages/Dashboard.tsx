import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Sparkles } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProgressBar from '@/components/ProgressBar';
import { getUser, isAuthenticated, isOnboardingComplete } from '@/lib/storage';

interface ModuleCardProps {
  moduleNumber: number;
  title: string;
  description: string;
  isUnlocked: boolean;
  progress?: number;
  onClick: () => void;
  icon: React.ReactNode;
}

const ModuleCard = ({ 
  moduleNumber, 
  title, 
  description, 
  isUnlocked, 
  progress, 
  onClick,
  icon
}: ModuleCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: moduleNumber * 0.1 }}
      whileHover={{ y: -4, boxShadow: '0 8px 30px rgba(0,0,0,0.12)' }}
      onClick={onClick}
      className={`
        relative p-6 rounded-2xl cursor-pointer transition-all duration-300
        ${isUnlocked 
          ? 'bg-card border-2 border-success shadow-lg' 
          : 'bg-muted/30 border-2 border-border opacity-90'
        }
      `}
    >
      {/* Status Badge */}
      <div className={`
        absolute -top-3 left-6 px-3 py-1 rounded-full text-xs font-semibold
        ${isUnlocked 
          ? 'bg-success text-success-foreground' 
          : 'bg-muted text-muted-foreground'
        }
      `}>
        {isUnlocked ? '✅ Unlocked' : '🔒 Locked'}
      </div>

      {/* Module Header */}
      <div className="flex items-start gap-4 mt-2">
        <div className={`
          w-14 h-14 rounded-xl flex items-center justify-center shrink-0
          ${isUnlocked ? 'bg-success/10 text-success' : 'bg-muted text-muted-foreground'}
        `}>
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <p className={`text-sm font-medium ${isUnlocked ? 'text-success' : 'text-muted-foreground'}`}>
            MODULE {moduleNumber}
          </p>
          <h3 className="font-display text-xl font-bold truncate">{title}</h3>
        </div>
      </div>

      {/* Description */}
      <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>

      {/* Progress */}
      {isUnlocked && progress !== undefined && progress > 0 && (
        <div className="mt-4">
          <ProgressBar progress={progress} size="sm" showPercentage />
        </div>
      )}

      {/* CTA Button */}
      <div className="mt-6">
        <button
          className={`
            w-full py-3 rounded-xl font-semibold transition-all
            ${isUnlocked 
              ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
              : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }
          `}
        >
          {progress && progress > 0 ? 'Continue' : 'Start'}
        </button>
      </div>
    </motion.div>
  );
};

const Dashboard = () => {
  const navigate = useNavigate();
  const [user] = useState(getUser());

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/');
      return;
    }
    
    if (!isOnboardingComplete()) {
      navigate('/onboarding');
      return;
    }
  }, [navigate]);

  if (!user) return null;

  // Apenas o Módulo 1 ativo por enquanto
  const modules = [
    {
      number: 1,
      title: 'PRP RECONNECTION',
      description: 'Learn the fundamentals of winning them back in 7 practical and effective lessons.',
      isUnlocked: true,
      progress: user.modulo_1_progreso,
      icon: <Sparkles className="w-7 h-7" />,
    }
  ];

  const handleModuleClick = (moduleNumber: number) => {
    if (moduleNumber === 1) {
      navigate('/modulo1');
    }
  };

  const features = [
    '7 lessons per module',
    'Scientific and proven content',
    'Lifetime access',
    'Support community',
  ];

  const testimonials = [
    { 
      text: 'The first module gave me the clarity I needed to understand where I was failing. Highly recommended.', 
      author: 'John M.',
      highlight: 'PRP Reconnection'
    },
    { 
      text: 'Simple, direct and effective. I started seeing changes in the first few days.', 
      author: 'Charles R.',
      highlight: 'Quick Results'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          {/* Welcome Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10 text-center md:text-left"
          >
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">
              Welcome, {user.nombre}
            </h1>
            <p className="text-muted-foreground text-lg">
              Your journey to winning them back
            </p>
          </motion.div>

          {/* Modules Section */}
          <section className="mb-12">
            <h2 className="font-display text-xl font-semibold mb-6">Your Modules</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {modules.map((module) => (
                <ModuleCard
                  key={module.number}
                  moduleNumber={module.number}
                  title={module.title}
                  description={module.description}
                  isUnlocked={module.isUnlocked}
                  progress={module.progress}
                  onClick={() => handleModuleClick(module.number)}
                  icon={module.icon}
                />
              ))}
            </div>
          </section>

          {/* Features Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="font-display text-xl font-semibold mb-6">Why this program?</h2>
            <div className="card-premium">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-success shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Testimonials Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="font-display text-xl font-semibold mb-6">Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="card-premium">
                  <div className="flex items-start gap-3">
                    <div className="text-warning text-2xl">⭐</div>
                    <div>
                      <p className="text-sm mb-2 leading-relaxed">
                        "{testimonial.text}"
                      </p>
                      <p className="text-xs text-muted-foreground mb-2">— {testimonial.author}</p>
                      <span className="inline-block text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {testimonial.highlight}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;