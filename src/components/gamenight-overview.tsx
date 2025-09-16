import { InfoCard } from "@/components/ui/info-card";
import { 
  Megaphone, 
  FileText, 
  Share2, 
  MessageCircle, 
  Users, 
  Heart,
  Coins,
  Clock
} from "lucide-react";
import ilvTokenLogo from "@/assets/ilv-token-logo.webp";

export function GamenightOverview() {
  const responsibilities = [
    {
      title: "Gamenight Announcement",
      icon: <Megaphone className="w-6 h-6" />,
      content: (
        <>
          <p><strong>Objective:</strong> Disseminate the Gamenight to the community and attract participants.</p>
          <p><strong>Platform:</strong> Twitter (X)</p>
          <p><strong>Content:</strong> Publication of the Gamenight announcement, containing essential information such as date, time, basic participation rules, and registration/access instructions.</p>
          <p><strong>Advance Notice:</strong> Advance notice of the date is essential for better distribution of the Gamenight schedule.</p>
        </>
      )
    },
    {
      title: "Social Media Content Creation",
      icon: <Share2 className="w-6 h-6" />,
      content: (
        <>
          <p><strong>Objective:</strong> Generate buzz and visibility for Illuvium and the Gamenight through organic content.</p>
          <p><strong>Platforms:</strong> Content created on at least one of the following platforms: Twitter (X), YouTube, Instagram, TikTok.</p>
          <p><strong>Content:</strong> Content should be creative and relevant, and may include:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Gamenight highlights</li>
            <li>Quick tutorials on the game or strategies</li>
            <li>Player reactions or comments on the experience</li>
            <li>Memes or short videos related to Illuvium</li>
          </ul>
        </>
      )
    },
    {
      title: "Engagement with Illuvium's X and Discord",
      icon: <Heart className="w-6 h-6" />,
      content: (
        <>
          <p><strong>Objective:</strong> Increase community interaction and engagement with Illuvium's official channels.</p>
          <p><strong>Platforms:</strong> Twitter (X) and Illuvium's official Discord</p>
          <p><strong>Activities:</strong> During the Gamenight, it is essential for the community to encourage participants to follow Illuvium's official Twitter (X) profile and join the official Discord server. This can be done through verbal reminders, in-game chat messages, or on the streaming platform.</p>
        </>
      )
    },
    {
      title: "Player Selection for the upcoming LATAM Tournament",
      icon: <Users className="w-6 h-6" />,
      content: (
        <>
          <p><strong>Objective:</strong> Identify and select 8 community members that will participate in the upcoming LATAM tournament.</p>
          <p><strong>Number of Players:</strong> 8 selected members</p>
          <p><strong>Selection Process:</strong> Description of the process used to select players (e.g., lottery, pre-competition, nomination)</p>
          <p><strong>Player list:</strong> List of the 8 selected players</p>
        </>
      ),
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-cosmic min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section with ILV Token Logo */}
        <div className="text-center mb-20">
          <div className="relative inline-block mb-8">
            <img 
              src={ilvTokenLogo} 
              alt="ILV Token Logo" 
              className="w-40 h-40 mx-auto drop-shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-glow opacity-50 blur-xl"></div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight py-2 md:py-3">
            Illuvium Game Nights
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-foreground">
            Responsibilities & Deliverables
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Each community partner has specific responsibilities to ensure successful Gamenight events that benefit the entire Illuvium ecosystem.
          </p>
          
          {/* Decorative separator */}
          <div className="flex items-center justify-center mt-12 mb-8">
            <div className="h-px bg-gradient-primary w-32"></div>
            <div className="w-3 h-3 bg-primary rounded-full mx-4 shadow-neon"></div>
            <div className="h-px bg-gradient-primary w-32"></div>
          </div>
        </div>

        {/* Main Responsibilities Section */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-center mb-4 text-foreground">
            Core Responsibilities
          </h3>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Four essential activities that every community partner must complete
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {responsibilities.map((item, index) => (
              <div key={index} className="relative">
                {/* Card number indicator */}
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg shadow-neon z-10">
                  {index + 1}
                </div>
                <InfoCard
                  title={item.title}
                  icon={item.icon}
                  className="h-full"
                >
                  {item.content}
                </InfoCard>
              </div>
            ))}
          </div>
        </div>

        {/* Budget and Operations Section */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-center mb-4 text-foreground">
            Budget & Operations
          </h3>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Financial details and scheduling information for your Game Night
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <InfoCard
              title="Budget and Rewards"
              icon={<Coins className="w-6 h-6" />}
              className="h-full"
            >
              <div className="space-y-3">
                <p>Each community will receive a budget of <span className="text-primary font-bold">20 ILV (Illuvium token)</span>.</p>
                <p><strong>Reporting:</strong> Communities must submit a brief financial report detailing how the budget was used, along with other deliverables.</p>
                <p><strong>Additional:</strong> Illuvitars will also be given away to everyone that participates.</p>
              </div>
            </InfoCard>

            <InfoCard
              title="Schedule and Duration"
              icon={<Clock className="w-6 h-6" />}
              className="h-full"
            >
              <div className="space-y-3">
                <p>Each Gamenight will have a <span className="text-primary font-bold">minimum duration of 2 hours</span>.</p>
                <p>The Illuvium team will be responsible for organizing the schedule among partner communities, ensuring no overlap and that all communities have the opportunity to hold their events within the stipulated period.</p>
              </div>
            </InfoCard>
          </div>
        </div>

        {/* Call-to-Action Section - Illuvium Alliance Program */}
        <div className="text-center">
          <h3 className="text-4xl font-bold mb-6 text-foreground">
            Ready to Get Started?
          </h3>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Join the Illuvium Alliance Program to unlock your community's potential
          </p>
          
          <div className="max-w-5xl mx-auto">
            <InfoCard
              title="Illuvium Alliance Program"
              icon={<Users className="w-6 h-6" />}
              variant="highlight"
              className="text-center relative overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-secondary/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-primary/10 rounded-full blur-2xl"></div>
              
              <div className="relative z-10 space-y-6">
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed">
                    To host an Illuvium Game Night, communities must register for the <strong className="text-primary">Illuvium Alliance Program</strong> and generate a unique referral code.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Only communities with an active social platform of at least <strong className="text-primary">500 followers</strong> are eligible.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Every player who uses your code and makes a purchase will earn your community a commission.
                  </p>
                </div>
                
                <div className="pt-6">
                  <p className="text-lg font-semibold mb-6 text-foreground">
                    Create your referral code now:
                  </p>
                  <div 
                    onClick={() => window.open('https://illuvidex.illuvium.io/alliance-hub?_gl=1*1fcdr7s*_gcl_au*MTY3Mzg4OTcwMC4xNzU2NzkxODkz', '_blank')}
                    className="inline-block p-8 bg-gradient-primary/20 rounded-2xl border-2 border-primary/40 hover:bg-gradient-primary/30 hover:border-primary/60 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-neon backdrop-blur-sm group"
                  >
                    <p className="text-2xl font-bold text-primary group-hover:text-white transition-colors duration-300">
                      🚀 Create Alliance Referral Code
                    </p>
                    <p className="text-sm text-muted-foreground mt-2 group-hover:text-white/80 transition-colors duration-300">
                      Click to access the Alliance Hub
                    </p>
                  </div>
                </div>
              </div>
            </InfoCard>
          </div>
        </div>
      </div>
    </section>
  );
}