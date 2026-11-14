export interface Milestone {
  id: number;
  date: string;
  title: string;
  description: string;
  location?: string;
  image?: string;
}

export interface DigitalExperienceConfig {
  experience: {
    title: string;
    tagline: string;
    universeDate: string;
  };
  audio: {
    title: string;
    artist: string;
    src: string;
  };
  entrance: {
    subtitle: string;
    titleLine1: string;
    titleLine2: string;
    introParagraph: string;
    scrollHint: string;
  };
  conversations: Array<{
    id: number;
    text: string;
  }>;
  connection: {
    subtitle: string;
    title: string;
    description: string;
  };
  timeline: Milestone[];
  whispers: Array<{
    id: number;
    text: string;
    top: number;
    left: number;
    size: number;
    delay: number;
  }>;
  celestialWish: {
    subtitle: string;
    cardTagline: string;
    heading: string;
    letterParagraph1: string;
    letterParagraph2: string;
    wishButtonText: string;
    ponderButtonText: string;
    celebrationTitle: string;
    celebrationSubtitle: string;
    eternalBlessing: string;
  };
}

export const digitalConfig: DigitalExperienceConfig = {
  experience: {
    title: "Soft Constellations",
    tagline: "An Interactive Digital Romance Experience",
    universeDate: "Under the Midnight Stars"
  },
  audio: {
    title: "Quiet Night Piano",
    artist: "Ambient Soundscape",
    src: "https://assets.mixkit.co/music/preview/mixkit-serene-view-443.mp3"
  },
  entrance: {
    subtitle: "somewhere between nightfall & a wish",
    titleLine1: "A quiet universe",
    titleLine2: "where our words learn to glow.",
    introParagraph:
      "This is not a question and not an answer—only a sanctuary carved from starlight, quiet music, and the timeless poetry of human connection.",
    scrollHint: "scroll gently; the story prefers to arrive in whispers"
  },
  conversations: [
    {
      id: 1,
      text: "Somewhere between our pauses, the night quietly learns our truest dreams."
    },
    {
      id: 2,
      text: "Even the simplest ordinary moments carry poetry when the heart is listening."
    },
    {
      id: 3,
      text: "Half-finished thoughts travel farther in the dark, weaving constellations of unspoken beauty."
    },
    {
      id: 4,
      text: "A million quiet wishes, drifting like embers across the eternal midnight sky."
    }
  ],
  connection: {
    subtitle: "the spark",
    title: "Some connections begin softly",
    description:
      "Not with sudden thunder... but with a warmth that lingers like light on the edge of a closing door, making anywhere feel like home."
  },
  timeline: [
    {
      id: 1,
      date: "The Spark",
      title: "When Stars Align",
      description:
        "The gentle moment when quiet curiosity turns into wonder, and two orbits begin to mirror each other across the dark.",
      location: "Where thoughts wander",
      image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 2,
      date: "Midnight Whispers",
      title: "Conversations in the Dark",
      description:
        "Late hours when guards fall away and honesty breathes easily, trading dreams under neon lamps and quiet stars.",
      location: "Under silver moonlight",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 3,
      date: "The Sanctuary",
      title: "Peace in the Stillness",
      description:
        "Discovering that true romantic solace isn't found in noise, but in the effortless silence shared with an understanding soul.",
      location: "A haven for the mind",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 4,
      date: "The Infinite",
      title: "Beyond Every Horizon",
      description:
        "Knowing that love, in its purest artistic form, is boundless—a light that guides travelers through every storm.",
      location: "Toward tomorrow",
      image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=600&auto=format&fit=crop"
    }
  ],
  whispers: [
    {
      id: 1,
      top: 24,
      left: 20,
      size: 54,
      delay: 0.2,
      text: "Sometimes silence says what words cannot."
    },
    {
      id: 2,
      top: 42,
      left: 70,
      size: 48,
      delay: 0.5,
      text: "In the quiet corners of your mind, let yourself dream without fear."
    },
    {
      id: 3,
      top: 64,
      left: 32,
      size: 50,
      delay: 0.8,
      text: "You are the poet of your own constellation."
    }
  ],
  celestialWish: {
    subtitle: "a celestial moment",
    cardTagline: "A Wish Cast Into Eternity",
    heading: "Make a Wish Upon the Constellations",
    letterParagraph1:
      "Before you leave this quiet place, close your eyes. Think of a dream, a love, or a quiet hope you carry deep within.",
    letterParagraph2:
      "The universe has a way of remembering every gentle thought sent out into the night.",
    wishButtonText: "Release My Wish to the Stars",
    ponderButtonText: "Let me linger a moment...",
    celebrationTitle: "Your Wish Is Released",
    celebrationSubtitle: "Written forever in the tapestry of the night sky.",
    eternalBlessing:
      "May you find the kind of love and peace that feels like calm water on quiet shores—where you never have to be anything other than yourself."
  }
};
