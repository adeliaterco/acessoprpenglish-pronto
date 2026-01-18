import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, X, CheckCircle, XCircle, Users, Clock, Shield } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

interface Module3UpsellModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Module3UpsellModal = ({ isOpen, onClose }: Module3UpsellModalProps) => {
  const handlePurchase = () => {
    window.open('https://pay.hotmart.com/N100448107A?off=fh6ck4c7', '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative bg-card rounded-2xl max-w-lg w-full shadow-2xl my-8"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 p-2 rounded-full hover:bg-muted transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content */}
            <div className="p-6 md:p-8">
              {/* Header */}
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-success/10 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-success" />
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold mb-2">
                  🔓 LAST CARD UNLOCKED
                </h2>
                <p className="text-lg text-muted-foreground">
                  How to MAINTAIN the obsession for 30 days
                </p>
              </div>

              {/* Warning */}
              <div className="bg-warning/10 border border-warning/20 rounded-xl p-4 mb-6">
                <div className="flex gap-3">
                  <AlertTriangle className="w-6 h-6 text-warning shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-warning-foreground">
                      You conquered. Now you need to MAINTAIN.
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      43% lose the opportunity in the first 30 days.
                    </p>
                  </div>
                </div>
              </div>

              {/* What happens without */}
              <div className="mb-6">
                <p className="font-semibold mb-3">Without the Shield Protocol:</p>
                <div className="space-y-2">
                  {[
                    'They will pull away again',
                    'Another person will enter the scene',
                    'You\'ll lose everything you gained',
                    'You\'ll go back to square one'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <XCircle className="w-4 h-4 text-destructive shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What you get */}
              <div className="mb-6">
                <p className="font-semibold mb-3">Module 3 (Emotional Shield) reveals:</p>
                <div className="space-y-2">
                  {[
                    'The 5 maintenance triggers',
                    '30-day protocol day by day',
                    'How to prevent them from pulling away again',
                    'How to shield against third parties',
                    'Access to exclusive community'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-success shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="bg-muted/50 rounded-xl p-4 mb-6 text-center">
                <p className="text-sm text-muted-foreground mb-1">Lifetime access + Community</p>
                <p className="text-4xl font-bold text-primary">$37</p>
              </div>

              {/* Social Proof */}
              <div className="flex items-center justify-center gap-4 mb-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  12 people bought today
                </span>
                <span className="text-success font-medium">98% success</span>
              </div>

              {/* Urgency */}
              <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-4 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Offer valid for:
                  </span>
                  <span className="text-xs text-muted-foreground">Only 5 spots/day</span>
                </div>
                <CountdownTimer targetDate={new Date(Date.now() + 24 * 60 * 60 * 1000)} />
              </div>

              {/* CTAs */}
              <div className="space-y-3">
                <button
                  onClick={handlePurchase}
                  className="w-full btn-primary py-4 text-lg font-bold animate-subtle-pulse"
                >
                  UNLOCK NOW! ($37)
                </button>
                <button
                  onClick={onClose}
                  className="w-full text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  Later
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Module3UpsellModal;