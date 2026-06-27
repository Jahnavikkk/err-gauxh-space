import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

function PillarCard({ icon: Icon, title, description, details, outcomes, image, imageAlt, aspectRatio = 'aspect-video' }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      {image && (
        <div className={`${aspectRatio} w-full overflow-hidden`}>
          <img
            src={image}
            alt={imageAlt || title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}
      
      <CardHeader>
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-xl bg-primary/10 text-primary flex-shrink-0">
            <Icon className="h-6 w-6" />
          </div>
          <div className="flex-1">
            <CardTitle className="text-xl mb-2">{title}</CardTitle>
            <CardDescription className="text-sm leading-relaxed">
              {description}
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="space-y-4 pt-4 border-t">
                {details && (
                  <div>
                    <span className="text-sm font-semibold text-foreground block mb-2">
                      What we do
                    </span>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {details}
                    </p>
                  </div>
                )}
                
                {outcomes && outcomes.length > 0 && (
                  <div>
                    <span className="text-sm font-semibold text-foreground block mb-2">
                      Learning outcomes
                    </span>
                    <ul className="space-y-1.5">
                      {outcomes.map((outcome, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <Button
          variant="ghost"
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full mt-4 text-primary hover:text-primary hover:bg-primary/10"
        >
          {isExpanded ? 'Show less' : 'Learn more'}
          <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
        </Button>
      </CardContent>
    </Card>
  );
}

export default PillarCard;