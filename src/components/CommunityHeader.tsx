import { Button } from "@/components/ui/button";
import { PlusCircle, User, LogOut } from "lucide-react";
import heroImage from "@/assets/kimbanda-hero.jpg";

export const CommunityHeader = () => {
  return (
    <header className="relative">
      {/* Hero Section */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={heroImage} 
          alt="Kimbanda Community" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-shadow opacity-70" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-3xl font-bold text-foreground mb-2 animate-mystical-glow">
            Comunidade Kimbanda
          </h1>
          <p className="text-muted-foreground text-lg">
            Rituais e práticas sagradas em anonimato
          </p>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-card border-b border-border px-4 py-3">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-semibold text-foreground">Feed dos Rituais</h2>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="default" size="sm" className="bg-gradient-mystical hover:opacity-90">
              <PlusCircle className="w-4 h-4 mr-2" />
              Novo Ritual
            </Button>
            
            <Button variant="ghost" size="sm">
              <User className="w-4 h-4 mr-2" />
              Perfil
            </Button>
            
            <Button variant="ghost" size="sm">
              <LogOut className="w-4 h-4 mr-2" />
              Sair
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};