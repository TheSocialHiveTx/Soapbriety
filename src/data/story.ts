export interface TimelineMilestone {
  date: string;
  title: string;
  subtitle: string;
  description: string;
  quote?: string;
  image: string;
}

export const FOUNDER_STORY = {
  founderName: 'DJ',
  sobrietyDate: 'April 20, 2023',
  title: 'Washing Away Yesterday.',
  quote: "On April 20, 2023, I was broken, exhausted, and out of options. I made the choice to put down the weight, choose recovery, and rebuild from the ground up. Soapbriety wasn't built as a soap company — it was built as a daily physical anchor that reminds you that no matter how hard yesterday was, you get to start fresh today.",
  missionStatement: 'The soap is not the product. Hope is. The soap is simply the daily reminder.',
  milestones: [
    {
      date: 'April 20, 2023',
      title: 'Rock Bottom & The Decision',
      subtitle: 'The Day Everything Changed',
      description: 'After years of fighting addiction in silence, DJ reached a point of complete surrender. He made a vow to get clean, ask for help, and commit unconditionally to rebuilding a life of discipline and service.',
      quote: 'surrender was not defeat — it was the first step toward true strength.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80'
    },
    {
      date: 'Summer 2023',
      title: 'Finding Purpose in the Kitchen',
      subtitle: 'Crafting the First Batch',
      description: 'In the quiet early mornings of early recovery, DJ began studying cold-process soapmaking. Mixing natural oils, lye, and botanicals required patience, precise chemistry, and complete presence — becoming a therapeutic form of active meditation.',
      quote: 'Pouring oil and watching it transform reminded me that raw ingredients can turn into something clean and useful with enough care.',
      image: 'https://images.unsplash.com/photo-1607006482172-3ba98971f165?auto=format&fit=crop&w=800&q=80'
    },
    {
      date: 'Fall 2023',
      title: 'Founding Soapbriety',
      subtitle: 'More Than Soap. A Fresh Start.',
      description: 'Friends in recovery circles began asking for DJ\'s handcrafted bars. They didn\'t just love the soap; they loved what it represented. Soapbriety was officially launched with a pledge to give back profits to recovery initiatives.',
      quote: 'A daily shower is the one ritual everyone shares. We made it a sacred moment of intention.',
      image: 'https://images.unsplash.com/photo-1546554137-f86b9593a222?auto=format&fit=crop&w=800&q=80'
    },
    {
      date: 'Early 2024',
      title: 'Partnering with The Wheelhouse',
      subtitle: 'Funding Community & Fellowship',
      description: 'Soapbriety established a direct financial partnership with The Wheelhouse, funding community outreach events, peer-led support groups, and emergency housing stipends for individuals taking their first steps in recovery.',
      quote: 'We don\'t measure success by bars sold, but by lives given a second chance.',
      image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=800&q=80'
    },
    {
      date: 'Present & Beyond',
      title: 'A Growing Movement',
      subtitle: '24,000+ Bars & Counting',
      description: 'Today, Soapbriety ships nationwide to a tight-knit community of customers, supporters, and advocates. Every purchase continues to fund clean starts, prove that recovery works, and smash the stigma surrounding addiction.',
      quote: 'If this bar gives even one person the courage to keep going today, every single batch was worth it.',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80'
    }
  ] as TimelineMilestone[]
};
