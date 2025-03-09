
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function AISearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!searchQuery.trim()) return;
    
    setIsSearching(true);
    
    // Simple keyword-based navigation
    const query = searchQuery.toLowerCase();
    setTimeout(() => {
      if (query.includes("skill") || query.includes("network") || query.includes("technical") || query.includes("devops")) {
        navigate("#skills");
      } else if (query.includes("education") || query.includes("degree") || query.includes("university") || query.includes("school")) {
        navigate("#education");
      } else if (query.includes("experience") || query.includes("work") || query.includes("job") || query.includes("career")) {
        navigate("#experience");
      } else if (query.includes("about") || query.includes("profile") || query.includes("background")) {
        navigate("#about");
      } else if (query.includes("contact") || query.includes("email") || query.includes("message") || query.includes("call")) {
        navigate("#contact");
      } else if (query.includes("resume") || query.includes("cv")) {
        navigate("#resume");
      } else {
        // Default to home if no match
        navigate("#home");
      }
      
      setIsSearching(false);
      setSearchQuery("");
    }, 800);
  };

  const handleSkip = () => {
    navigate("#home");
  };

  return (
    <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="glass rounded-2xl p-8 w-full max-w-md text-center animate-scale-up">
        <h2 className="text-2xl font-bold mb-2">AI Portfolio Assistant</h2>
        <p className="text-muted-foreground mb-6">
          What would you like to know about Rajan?
        </p>
        
        <form onSubmit={handleSearch} className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Ask anything about skills, experience, etc."
              className="pl-10 pr-4 py-6"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex gap-4 mt-4">
            <Button 
              type="submit" 
              className="w-full"
              disabled={isSearching}
            >
              {isSearching ? "Searching..." : "Search"}
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              className="w-full"
              onClick={handleSkip}
            >
              Skip <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </form>
        
        <p className="text-sm text-muted-foreground">
          Try asking about "skills", "education", "contact details" or just skip to explore
        </p>
      </div>
    </div>
  );
}
