import { InfoCard } from "@/components/ui/info-card";
import { Megaphone, FileText, Share2, MessageCircle, Users, Heart, Coins, Clock } from "lucide-react";
import ilvTokenLogo from "@/assets/ilv-token-logo.webp";
export function GamenightOverview() {
  const responsibilities = [{
    title: "Gamenight Announcement",
    icon: <Megaphone className="w-6 h-6" />,
    content: <>
          <p><strong>Platform:</strong> Twitter (X)</p>
          <p><strong>Content:</strong> Publication of the Gamenight announcement with essential information including date, time, basic participation rules, and registration/access instructions.</p>
          <p><strong>Requirement:</strong> Advance notice is essential for better distribution of the Gamenight schedule.</p>
        </>
  }, {
    title: "Gamenight Report",
    icon: <FileText className="w-6 h-6" />,
    content: <>
          <p><strong>Documentation:</strong> Recording or Post-Gamenight X Post (video on Google Drive or X post with recording/stream VOD)</p>
          <p><strong>Data Collection:</strong> Report average number of active players with participation proof (game logs, lobby screenshots)</p>
          <p><strong>Proof Requirements:</strong> Players must prove participation via screenshot or screen sharing</p>
          <p><strong>Format:</strong> Document (PDF/Google Docs) or presentation compiling all information and links</p>
        </>
  }, {
    title: "Social Media Content Creation",
    icon: <Share2 className="w-6 h-6" />,
    content: <>
          <p><strong>Platforms:</strong> Content on at least one platform: Twitter (X), YouTube, Instagram, TikTok</p>
          <p><strong>Objective:</strong> Generate buzz and visibility for Illuvium and the Gamenight through organic content</p>
          <p><strong>Requirements:</strong> Content should be creative and relevant to the gaming event</p>
        </>
  }, {
    title: "Feedback Collection",
    icon: <MessageCircle className="w-6 h-6" />,
    content: <>
          <p><strong>Purpose:</strong> Obtain valuable insights into community experience and identify improvement areas</p>
          <p><strong>Content:</strong> Feedback report including number of players, bug reports, and other relevant points</p>
          <p><strong>Goal:</strong> Improve the game and future campaigns based on community input</p>
        </>
  }, {
    title: "Player Selection for LATAM Tournament",
    icon: <Users className="w-6 h-6" />,
    content: <>
          <p><strong>Objective:</strong> Identify and select 8 community members for the upcoming LATAM tournament</p>
          <p><strong>Selection Process:</strong> Description of process used (lottery, pre-competition, nomination)</p>
          <p><strong>Deliverable:</strong> List of 8 selected players with selection methodology</p>
        </>,
    variant: "highlight" as const
  }, {
    title: "Engagement with Illuvium Channels",
    icon: <Heart className="w-6 h-6" />,
    content: <>
          <p><strong>Platforms:</strong> Twitter (X) and Illuvium's official Discord</p>
          <p><strong>Activities:</strong> Encourage participants to follow official Twitter and join Discord server</p>
          <p><strong>Methods:</strong> Verbal reminders, in-game chat messages, or streaming platform announcements</p>
        </>
  }];
  return <section className="py-20 px-6 bg-gradient-cosmic">
      <div className="max-w-7xl mx-auto">
        {/* ILV Token Logo */}
        <div className="text-center mb-12">
          <img src={ilvTokenLogo} alt="ILV Token Logo" className="w-32 h-32 mx-auto mb-8" />
        </div>
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent my-[10px] mx-[10px] px-[10px] py-[10px] md:text-6xl">
            Responsibilities & Deliverables
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Each community partner has specific responsibilities to ensure successful Gamenight events that benefit the entire Illuvium ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {responsibilities.map((item, index) => <InfoCard key={index} title={item.title} icon={item.icon} variant={item.variant}>
              {item.content}
            </InfoCard>)}
        </div>

        {/* Budget and Schedule Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <InfoCard title="Budget Allocation" icon={<Coins className="w-6 h-6" />} variant="highlight">
            <p><strong>Amount:</strong> 20 ILV (Illuvium token) per community</p>
            <p><strong>Purpose:</strong> Cover expenses related to organizing the Gamenight including prizes for winners, streaming costs, and operational expenses</p>
            <p><strong>Reporting:</strong> Communities must submit a brief financial report detailing budget usage</p>
          </InfoCard>

          <InfoCard title="Schedule & Duration" icon={<Clock className="w-6 h-6" />}>
            <p><strong>Minimum Duration:</strong> 2 hours per Gamenight</p>
            <p><strong>Coordination:</strong> Illuvium team organizes schedule among partner communities</p>
            <p><strong>Benefits:</strong> Ensures no overlap and all communities have equal opportunity within stipulated period</p>
          </InfoCard>
        </div>
      </div>
    </section>;
}