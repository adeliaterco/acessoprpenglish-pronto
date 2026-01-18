import { useState } from 'react';
import { X, AlertTriangle, Check, Clock, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import CountdownTimer from './CountdownTimer';

interface UpsellModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const UpsellModal = ({ isOpen, onClose }: UpsellModalProps) => {
  const [dismissed, setDismissed] = useState(false);

  // Set countdown to 24 hours from now
  const targetDate = new Date(Date.now() + 24 * 60 * 60 * 1000);

  const handleDismiss = () => {
    setDismissed(true);
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  const handlePurchase = () => {
    window.open('https://pay.hotmart.com/D100233207O?off=hgjszxx1', '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="modal-overlay"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="modal-content relative"
          >
            <button
              onClick={handleDismiss}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>

            {dismissed ? (
              <div className="p-8 text-center">
                <p className="text-lg text-muted-foreground">
                  We hope you don't regret it...
                </p>
              </div>
            ) : (
              <div className="p-6 md:p-8">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <h2 className="font-display text-xl md:text-2xl font-bold text-destructive">
                      ⚠️ CRITICAL WARNING
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      You're about to make a fatal mistake!
                    </p>
                  </div>
                </div>

                {/* Stats */}
                <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-4 mb-6">
                  <p className="text-lg font-semibold text-center">
                    <span className="text-destructive">73%</span> of men who get this far{' '}
                    <span className="text-destructive">FAIL</span> in the long run.
                  </p>
                </div>

                {/* Description */}
                <div className="space-y-4 mb-6">
                  <p className="text-foreground">
                    You've won them back, but winning them back is only <strong>50% of the battle</strong>. 
                    Without the advanced knowledge of Module 2, it's almost certain that:
                  </p>
                  
                  <ul className="space-y-2">
                    {[
                      'You\'ll fall back into the same mistakes that caused the breakup.',
                      'They\'ll get bored again and look for someone else.',
                      'You\'ll lose everything you\'ve gained in a matter of weeks.',
                      'You\'ll be stuck in a cycle of breakups and reconciliations.'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-destructive mt-1">❌</span>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solution */}
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 mb-6">
                  <h3 className="font-display font-semibold mb-3">
                    Module 2: Dominance Protocol reveals:
                  </h3>
                  <ul className="space-y-2">
                    {[
                      'The 7 Advanced Triggers that will keep them addicted to you.',
                      'Power Scripts that will make them feel they need you.',
                      'Emotional Dominance Techniques (ethical) to lead the relationship.',
                      'Deep Psychology to understand their mind like no one else.'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Social Proof */}
                <div className="flex items-center justify-between mb-6 p-4 bg-muted/50 rounded-xl">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="text-sm">
                      <strong>15 men</strong> unlocked today
                    </span>
                  </div>
                  <div className="badge-success">
                    97% success
                  </div>
                </div>

                {/* Urgency */}
                <div className="text-center mb-6 p-4 border border-warning/30 bg-warning/5 rounded-xl">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Clock className="w-5 h-5 text-warning" />
                    <span className="font-semibold text-warning">This offer ends in:</span>
                  </div>
                  <CountdownTimer targetDate={targetDate} />
                  <p className="text-sm text-muted-foreground mt-2">
                    The price of <span className="font-bold">$17</span> will increase to{' '}
                    <span className="line-through">$27</span> in 24 hours.
                  </p>
                  <p className="text-sm font-medium text-warning mt-1">
                    Only 7 spots left at this price.
                  </p>
                </div>

                {/* CTAs */}
                <div className="space-y-3">
                  <button
                    onClick={handlePurchase}
                    className="w-full btn-primary text-lg py-4 pulse-subtle"
                  >
                    UNLOCK MODULE 2 NOW! ($17)
                  </button>
                  
                  <button
                    onClick={handleDismiss}
                    className="w-full btn-ghost text-sm py-2"
                  >
                    <span className="line-through opacity-60">
                      No, I'd rather risk losing them again
                    </span>
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default UpsellModal;