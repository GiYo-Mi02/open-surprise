import { AppRoute, FriendLetter, Memory, Track } from "./types";

export const NAVIGATION_ITEMS = [
  { id: AppRoute.HOME, label: 'For You', icon: 'Heart' },
  { id: AppRoute.FRIENDS, label: 'Friends', icon: 'Users' },
  { id: AppRoute.GALLERY, label: 'Memories', icon: 'Image' },
  { id: AppRoute.SOUNDTRACK, label: 'Fav Music', icon: 'Music' },
];

export const PLAYLIST: Track[] = [
  {
    id: '1',
    title: 'Golden Hour',
    artist: 'JVKE',
    coverUrl: 'https://picsum.photos/seed/album1/200/200',
    duration: 180,
  },
  {
    id: '2',
    title: 'Lover',
    artist: 'Taylor Swift',
    coverUrl: 'https://picsum.photos/seed/album2/200/200',
    duration: 221,
  },
  {
    id: '3',
    title: 'Until I Found You',
    artist: 'Stephen Sanchez',
    coverUrl: 'https://picsum.photos/seed/album3/200/200',
    duration: 178,
  },
  {
    id: '4',
    title: 'Flowers',
    artist: 'Miley Cyrus',
    coverUrl: 'https://picsum.photos/seed/album4/200/200',
    duration: 200,
  },
  {
    id: '5',
    title: 'As It Was',
    artist: 'Harry Styles',
    coverUrl: 'https://picsum.photos/seed/album5/200/200',
    duration: 167,
  }
];

export const HERO_MESSAGE = {
  greeting: "Happy Birthday, Sarah",
  subtitle: "A little corner of the internet, just for you.",
  intro: "I wanted to build something that lasts longer than flowers. Navigate through your memories, read letters from the people who love you, and listen to the songs that remind me of us."
};

export const MAIN_LETTER = `
My Dearest Sarah,

As you turn another year older, I find myself looking back at all the moments that have led us here. From that first awkward coffee date to our late-night drives listening to this exact playlist, every second has been a gift.

You bring so much light into the world. Your laugh is my favorite sound, and your kindness inspires me daily. I built this site because I wanted you to see yourself through my eyes—and through the eyes of everyone who cherishes you.

Take your time exploring. This is your digital sanctuary.

Love always,
Alex
`;

// Placeholder ambient video for friend cards
export const PLACEHOLDER_VIDEO = "https://assets.mixkit.co/videos/preview/mixkit-pink-and-blue-ink-1192-large.mp4";

export const FRIENDS_LETTERS: FriendLetter[] = [
  {
    id: 'f1',
    name: 'Jessica',
    relationship: 'Best Friend',
    avatarUrl: 'https://picsum.photos/seed/jessica/200/200',
    videoUrl: PLACEHOLDER_VIDEO,
    preview: 'To my partner in crime since 3rd grade...',
    fullLetter: `Dearest Sarah,\n\nHappy Birthday!! I literally cannot believe we are this old. Remember when we thought 25 was ancient? Now look at us.\n\nYou have been my rock through everything. From bad haircuts in middle school to navigating our first "real" jobs. I am so incredibly proud of the woman you are becoming. You are kind, fierce, and hilariously funny.\n\nI hope this year brings you everything you deserve. Can't wait to celebrate with wine and sushi soon!\n\nLove, Jess`,
  },
  {
    id: 'f2',
    name: 'Michael',
    relationship: 'Brother',
    avatarUrl: 'https://picsum.photos/seed/michael/200/200',
    videoUrl: PLACEHOLDER_VIDEO,
    preview: 'Don’t worry, I won’t embarrass you too much.',
    fullLetter: `Hey Sis,\n\nHappy Birthday. I know I don't say it enough, but you're actually pretty cool. Watching you chase your dreams this past year has been inspiring (even if I'll never admit it to your face).\n\nKeep crushing it. Mom and Dad are super proud, and honestly, so am I.\n\n- Mike`,
  },
  {
    id: 'f3',
    name: 'Emily',
    relationship: 'College Roommate',
    avatarUrl: 'https://picsum.photos/seed/emily/200/200',
    videoUrl: PLACEHOLDER_VIDEO,
    preview: 'Miss our late night pizza runs!',
    fullLetter: `Happy Birthday Sarah!!\n\nI was just looking at photos from sophomore year and laughing so hard. We have the best memories. Thank you for being the kind of friend who picks up the phone no matter what time it is.\n\nSending you the biggest hug from across the country!\n\nxoxo Em`,
  },
  {
    id: 'f4',
    name: 'David',
    relationship: 'Work Bestie',
    avatarUrl: 'https://picsum.photos/seed/david/200/200',
    videoUrl: PLACEHOLDER_VIDEO,
    preview: 'To the only person who keeps me sane in meetings.',
    fullLetter: `HBD Sarah!\n\nOffice life would be incredibly dull without our coffee breaks and Slack rants. You bring such a great energy to the team, and I'm glad we became actual friends outside of work too.\n\nHave the best day! Drink a margarita for me.\n\n- Dave`,
  },
    {
    id: 'f5',
    name: 'Sophie',
    relationship: 'Cousin',
    avatarUrl: 'https://picsum.photos/seed/sophie/200/200',
    videoUrl: PLACEHOLDER_VIDEO,
    preview: 'Family first, always.',
    fullLetter: `Happy Birthday Cuz!\n\nLove you so much. Can't wait for the next family reunion so we can hide in the corner and make fun of everyone else. Hope your day is magical!\n\nLove, Sophie`,
  },
];

export const MEMORIES: Memory[] = [
  { id: 'm1', imageUrl: 'https://picsum.photos/seed/mem1/600/800', caption: 'Paris, 2023', date: 'Oct 12', size: 'tall' },
  { id: 'm2', imageUrl: 'https://picsum.photos/seed/mem2/800/600', caption: 'The day we got Luna', date: 'Feb 14', size: 'wide' },
  { id: 'm3', imageUrl: 'https://picsum.photos/seed/mem3/600/600', caption: 'Sunday Brunch', date: 'Mar 01', size: 'medium' },
  { id: 'm4', imageUrl: 'https://picsum.photos/seed/mem4/600/600', caption: 'Beach day', date: 'Jul 22', size: 'small' },
  { id: 'm5', imageUrl: 'https://picsum.photos/seed/mem5/600/800', caption: 'Hiking trip', date: 'Aug 10', size: 'tall' },
  { id: 'm6', imageUrl: 'https://picsum.photos/seed/mem6/800/600', caption: 'Your graduation', date: 'May 15', size: 'wide' },
  { id: 'm7', imageUrl: 'https://picsum.photos/seed/mem7/600/600', caption: 'Coffee run', date: 'Sep 03', size: 'small' },
];