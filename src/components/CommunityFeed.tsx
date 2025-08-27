import { RitualPost } from "./RitualPost";

// Sample data for ritual posts - será substituído por dados do Supabase
const sampleRituals = [
  {
    id: "1",
    imageUrl: "/placeholder.svg",
    title: "Ritual de Proteção com Exú Tranca Ruas",
    description: "Um ritual poderoso para proteção do lar e afastamento de energias negativas. Utilize velas vermelhas e pretas, farofa, dendê e cachaça. Acenda as velas ao meio-dia em uma encruzilhada.",
    authorLevel: "high" as const,
    likes: 47,
    dislikes: 3,
    userVote: null
  },
  {
    id: "2", 
    imageUrl: "/placeholder.svg",
    title: "Oferenda para Pombagira Maria Padilha",
    description: "Ritual para abrir caminhos no amor e sedução. Prepare uma oferenda com rosas vermelhas, champagne, perfume e doces. Deixe em uma encruzilhada na sexta-feira à meia-noite.",
    authorLevel: "master" as const,
    likes: 89,
    dislikes: 12,
    userVote: "like" as const
  },
  {
    id: "3",
    imageUrl: "/placeholder.svg", 
    title: "Banho de Ervas para Limpeza Espiritual",
    description: "Misture arruda, guiné, alecrim e sal grosso. Ferva por 10 minutos, coe e misture com água fria. Tome o banho do pescoço para baixo pedindo limpeza espiritual.",
    authorLevel: "medium" as const,
    likes: 32,
    dislikes: 8,
    userVote: null
  },
  {
    id: "4",
    imageUrl: "/placeholder.svg",
    title: "Amarração Simples para Trazer Pessoa Amada",
    description: "Ritual básico com foto da pessoa, fita vermelha, mel e canela. Enrole a foto com a fita enquanto mentaliza seu desejo. Mantenha guardado em local seguro.",
    authorLevel: "low" as const,
    likes: 15,
    dislikes: 25,
    userVote: "dislike" as const
  }
];

export const CommunityFeed = () => {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {sampleRituals.map((ritual) => (
            <RitualPost key={ritual.id} {...ritual} />
          ))}
        </div>
        
        {/* Loading more posts indicator */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-2 text-muted-foreground">
            <div className="w-2 h-2 bg-primary rounded-full animate-ritual-pulse" />
            <div className="w-2 h-2 bg-primary rounded-full animate-ritual-pulse" style={{ animationDelay: '0.2s' }} />
            <div className="w-2 h-2 bg-primary rounded-full animate-ritual-pulse" style={{ animationDelay: '0.4s' }} />
            <span className="ml-2">Carregando mais rituais...</span>
          </div>
        </div>
      </div>
    </main>
  );
};