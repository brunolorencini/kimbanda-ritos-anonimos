import { useState } from "react";
import { Heart, HeartOff, User } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface RitualPostProps {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  authorLevel: 'low' | 'medium' | 'high' | 'master';
  likes: number;
  dislikes: number;
  userVote?: 'like' | 'dislike' | null;
}

const getCredibilityText = (level: string) => {
  switch (level) {
    case 'low': return 'Iniciante';
    case 'medium': return 'Praticante';
    case 'high': return 'Experiente';
    case 'master': return 'Mestre';
    default: return 'Anônimo';
  }
};

const getCredibilityColor = (level: string) => {
  switch (level) {
    case 'low': return 'bg-credibility-low';
    case 'medium': return 'bg-credibility-medium';
    case 'high': return 'bg-credibility-high';
    case 'master': return 'bg-credibility-master';
    default: return 'bg-muted';
  }
};

export const RitualPost = ({ 
  id, 
  imageUrl, 
  title, 
  description, 
  authorLevel, 
  likes, 
  dislikes, 
  userVote 
}: RitualPostProps) => {
  const [currentVote, setCurrentVote] = useState<'like' | 'dislike' | null>(userVote || null);
  const [currentLikes, setCurrentLikes] = useState(likes);
  const [currentDislikes, setCurrentDislikes] = useState(dislikes);

  const handleVote = (voteType: 'like' | 'dislike') => {
    if (currentVote === voteType) {
      // Remove vote
      if (voteType === 'like') {
        setCurrentLikes(prev => prev - 1);
      } else {
        setCurrentDislikes(prev => prev - 1);
      }
      setCurrentVote(null);
    } else {
      // Change or add vote
      if (currentVote === 'like') {
        setCurrentLikes(prev => prev - 1);
        setCurrentDislikes(prev => prev + 1);
      } else if (currentVote === 'dislike') {
        setCurrentDislikes(prev => prev - 1);
        setCurrentLikes(prev => prev + 1);
      } else {
        if (voteType === 'like') {
          setCurrentLikes(prev => prev + 1);
        } else {
          setCurrentDislikes(prev => prev + 1);
        }
      }
      setCurrentVote(voteType);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto shadow-ritual hover:shadow-mystical transition-all duration-500 group">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-mystical flex items-center justify-center">
              <User className="w-4 h-4 text-primary-foreground" />
            </div>
            <Badge 
              variant="secondary" 
              className={`${getCredibilityColor(authorLevel)} text-primary-foreground border-0`}
            >
              {getCredibilityText(authorLevel)}
            </Badge>
          </div>
          <div className="text-xs text-muted-foreground">Anônimo</div>
        </div>
      </CardHeader>

      <CardContent className="p-0">
        <div className="relative overflow-hidden rounded-lg mx-4 mb-4">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.src = '/placeholder.svg';
            }}
          />
          <div className="absolute inset-0 bg-gradient-shadow opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        </div>
        
        <div className="px-4">
          <h3 className="font-semibold text-lg mb-2 text-foreground">{title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        </div>
      </CardContent>

      <CardFooter className="pt-4">
        <div className="flex items-center justify-between w-full">
          <div className="flex gap-2">
            <Button
              variant={currentVote === 'like' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => handleVote('like')}
              className={`gap-1 ${currentVote === 'like' ? 'bg-gradient-mystical' : ''}`}
            >
              <Heart className={`w-4 h-4 ${currentVote === 'like' ? 'fill-current' : ''}`} />
              {currentLikes}
            </Button>
            
            <Button
              variant={currentVote === 'dislike' ? 'destructive' : 'ghost'}
              size="sm"
              onClick={() => handleVote('dislike')}
              className="gap-1"
            >
              <HeartOff className={`w-4 h-4 ${currentVote === 'dislike' ? 'fill-current' : ''}`} />
              {currentDislikes}
            </Button>
          </div>
          
          <div className="text-xs text-muted-foreground">
            {Math.max(0, currentLikes - currentDislikes)} pontos
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};