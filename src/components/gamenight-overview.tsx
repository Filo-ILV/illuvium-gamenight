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
    <section className="py-20 px-6 bg-gradient-cosmic">
      <div className="max-w-7xl mx-auto">
        {/* ILV Token Logo */}
        <div className="text-center mb-12">
          <img 
            src={ilvTokenLogo} 
            alt="ILV Token Logo" 
            className="w-32 h-32 mx-auto mb-8"
          />
        </div>
        
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent leading-tight py-2 md:py-3">
            Illuvium Game Nights
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">
            Responsibilities & Deliverables
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Each community partner has specific responsibilities to ensure successful Gamenight events that benefit the entire Illuvium ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {responsibilities.map((item, index) => (
            <InfoCard
              key={index}
              title={item.title}
              icon={item.icon}
            >
              {item.content}
            </InfoCard>
          ))}
        </div>

        {/* Budget and Schedule Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <InfoCard
            title="Budget and Rewards"
            icon={<Coins className="w-6 h-6" />}
          >
            <p>Each community will receive a budget of <strong>20 ILV (Illuvium token)</strong>.</p>
            <p><strong>Reporting:</strong> Communities must submit a brief financial report detailing how the budget was used, along with other deliverables.</p>
            <p><strong>Additional:</strong> Illuvitars will also be given away to everyone that participates.</p>
          </InfoCard>

          <InfoCard
            title="Schedule and Duration"
            icon={<Clock className="w-6 h-6" />}
          >
            <p>Each Gamenight will have a <strong>minimum duration of 2 hours</strong>. The Illuvium team will be responsible for organizing the schedule among partner communities, ensuring no overlap and that all communities have the opportunity to hold their events within the stipulated period.</p>
          </InfoCard>
        </div>

        {/* Illuvium Alliance Program - Prominent Section */}
        <div className="flex justify-center mb-8">
          <div className="max-w-4xl w-full">
            <InfoCard
              title="Illuvium Alliance Program"
              icon={<Users className="w-6 h-6" />}
              variant="highlight"
              className="text-center p-12"
            >
              <div className="space-y-4">
                <p className="text-lg">To host an Illuvium Game Night, communities must register for the <strong>Illuvium Alliance Program</strong> and generate a unique referral code. Only communities with an active social platform of at least <strong>500 followers</strong> are eligible.</p>
                <p className="text-lg">Every player who uses your code and makes a purchase will earn your community a commission.</p>
                <p className="text-lg font-semibold">To create the referral code click the link below:</p>
                <div 
                  onClick={() => window.open('https://illuvidex.illuvium.io/alliance-hub?_gl=1*1fcdr7s*_gcl_au*MTY3Mzg4OTcwMC4xNzU2NzkxODkz', '_blank')}
                  className="mt-6 p-6 bg-card/90 rounded-xl border-2 border-primary/60 hover:bg-card hover:border-primary/80 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-neon backdrop-blur-sm"
                >
                  <p className="text-2xl font-bold text-primary">Create an Illuvium Alliance Program Referral Code</p>
                </div>
              </div>
            </InfoCard>
          </div>
        </div>
      </div>
    </section>
  );
}