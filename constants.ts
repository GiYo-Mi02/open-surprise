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
  greeting: "Happy Birthday, Iza",
  subtitle: "A little corner of the internet, just for you.",
  intro: "I wanted to build something that lasts longer than flowers. Navigate through your memories, read letters from the people who love you, and listen to the songs that remind me of us."
};

export const MAIN_LETTER = `
My Dearest Iza,

I have been looking forward to January 13 because it’s the day the world got a little brighter. Now that you’re turning 20, it feels like such a big and exciting step, and I am so happy I get to be by your side for it.

I want to thank you for being the person you are. You are my biggest source of joy, and just being around you makes my life so much better. But what I love most is that you don’t just keep that light for yourself—you share it with everyone.

I see how much your friends love you and how much they count on you. Whether someone needs a helping hand, a kind word, or just someone to listen, you are always the first person to be there. You are so thoughtful and so reliable, not just to me, but to every single person who is lucky enough to know you. You always put others first, and it’s one of the most beautiful things about you.

On your special day, I hope you feel all that love coming back to you. I hope you know how much you are appreciated and how much you are loved. You deserve a year that is as wonderful and kind as your heart is.

Happy Birthday, Bebi! I love you so much Mahal.
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