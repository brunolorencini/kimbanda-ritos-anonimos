import { CommunityHeader } from "@/components/CommunityHeader";
import { CommunityFeed } from "@/components/CommunityFeed";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CommunityHeader />
      <CommunityFeed />
    </div>
  );
};

export default Index;
