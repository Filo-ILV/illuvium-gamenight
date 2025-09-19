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
        </div>

        {/* Main Responsibilities Section */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-center mb-4 text-foreground">
            Core Responsibilities
          </h3>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Each community partner has specific responsibilities to ensure successful Gamenight events that benefit the entire Illuvium ecosystem
          </p>
          
          <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
            {responsibilities.map((item, index) => (
              <div key={index} className="relative">
                <InfoCard
                  title={item.title}
                  icon={item.icon}
                  className="h-full hover:shadow-neon transition-all duration-300"
                >
                  {item.content}
                </InfoCard>
              </div>
            ))}
          </div>
        </div>

        {/* Objectives Section */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-center mb-4 text-foreground">
            Objectives
          </h3>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Strategic goals to achieve through your Game Night events
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <InfoCard
              title="Prepare for the upcoming LATAM Tournament"
              icon={<Users className="w-6 h-6" />}
              className="h-full"
            >
              <div className="space-y-3">
                <p><strong>Objective:</strong> Identify and engage community members for potential participation in the upcoming LATAM tournament.</p>
                <p><strong>Community Building:</strong> Foster competitive spirit and skill development within your community.</p>
                <p><strong>Engagement:</strong> Create excitement and anticipation for the tournament among your members.</p>
              </div>
            </InfoCard>

            <InfoCard
              title="Expand Illuvium's Player Base"
              icon={<Users className="w-6 h-6" />}
              className="h-full"
            >
              <div className="space-y-3">
                <p><strong>Growth:</strong> Attract new players to the Illuvium ecosystem through engaging community events.</p>
                <p><strong>Onboarding:</strong> Help newcomers understand the game mechanics and ecosystem.</p>
                <p><strong>Retention:</strong> Create memorable experiences that encourage continued participation.</p>
              </div>
            </InfoCard>

            <InfoCard
              title="Increase Social Presence"
              icon={<Share2 className="w-6 h-6" />}
              className="h-full"
            >
              <div className="space-y-3">
                <p><strong>Visibility:</strong> Boost Illuvium's presence across social media platforms.</p>
                <p><strong>Engagement:</strong> Generate authentic community-driven content and interactions.</p>
                <p><strong>Reach:</strong> Expand Illuvium's audience through organic social growth.</p>
              </div>
            </InfoCard>

            <InfoCard
              title="Create Quality Content"
              icon={<FileText className="w-6 h-6" />}
              className="h-full"
            >
              <div className="space-y-3">
                <p><strong>Content Creation:</strong> Produce high-quality, engaging content about Illuvium gameplay.</p>
                <p><strong>Educational Value:</strong> Share tutorials, strategies, and insights with the community.</p>
                <p><strong>Brand Building:</strong> Strengthen the Illuvium brand through positive content representation.</p>
              </div>
            </InfoCard>
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
                <p>Each community will receive a budget of <span className="text-primary font-bold">10-30 ILV (Illuvium token)</span> according to the number of players participating in the Game Night.</p>
                <p><strong>Additional:</strong> Illuvitars will also be awarded to participants.</p>
              </div>
            </InfoCard>

            <InfoCard
              title="Schedule and Duration"
              icon={<Clock className="w-6 h-6" />}
              className="h-full"
            >
              <div className="space-y-3">
                <p>Each Gamenight will have a <span className="text-primary font-bold">minimum duration of 1 hour</span>.</p>
                <p><strong>Scheduling:</strong> To schedule a Game Night, fill the Illuvium Game Night Form. Link below.</p>
              </div>
            </InfoCard>
          </div>
        </div>

        {/* Call-to-Action Section - Game Night Form */}
        <div className="text-center">
          <h3 className="text-4xl font-bold mb-6 text-foreground">
            Ready to Get Started?
          </h3>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Fill the Illuvium Game Night Form to schedule your community event
          </p>
          
          <div className="max-w-5xl mx-auto">
            <InfoCard
              title="Illuvium Game Night Form"
              icon={<FileText className="w-6 h-6" />}
              className="text-center"
            >
              <div className="space-y-6">
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed">
                    Complete the form below to register your community for an Illuvium Game Night event.
                  </p>
                </div>
                
                <div className="pt-6">
                  <div 
                    onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdrVWps-e-c0AL_EEiZaI2hhA9ohc1YAhkMxy_LwYquycXY0w/viewform?usp=dialog', '_blank')}
                    className="inline-block p-8 bg-gradient-primary/20 rounded-2xl border-2 border-primary/40 hover:bg-gradient-primary/30 hover:border-primary/60 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-neon backdrop-blur-sm group"
                  >
                    <p className="text-2xl font-bold text-primary group-hover:text-white transition-colors duration-300">
                      Fill Game Night Form
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
