export interface BookInfo {
  key: string;
  title: string;
  cover_i?: number;
  author_name: string[];
}

export const data: BookInfo[] = [
  {
    title: 'Um casamento arranjado',
    author_name: ['Zana Kheiron'],
    key: '/works/OL35351151W',
    cover_i: 14321120,
  },
  {
    title: 'Control Your Mind and Master Your Feelings',
    author_name: ['Eric Robertson'],
    key: '/works/OL25312237W',
    cover_i: 12009823,
  },
  {
    title: 'The 48 Laws of Power',
    author_name: [
      'Robert Greene, Joost Elffers, William Richmond, Talita M. Rodrigues, Harper Price, and R. Greene',
    ],
    key: 'works/OL1968368W',
    cover_i: 9573841,
  },
  {
    title: 'It Ends With Us',
    author_name: ['Colleen Hoover'],
    key: 'works/OL18020194W',
    cover_i: 13217026,
  },
  {
    title: 'Rich Dad, Poor Dad',
    author_name: ['Robert T. Kiyosaki', 'Sharon L. Lechter', 'Tim Wheeler'],
    key: '/works/OL2010879W',
    cover_i: 13778173,
  },
  {
    title: 'Twisted Love',
    author_name: ['Ana Huang'],
    key: '/works/OL24390422W',
    cover_i: 12940491,
  },
  {
    title: 'The Subtle Art of Not Giving a F*ck',
    author_name: ['Mark Manson'],
    key: 'works/OL17590212W',
    cover_i: 14414472,
  },
  {
    title: 'King of Greed',
    author_name: ['Ana Huang'],
    key: '/works/OL35718442W',
    cover_i: 14532892,
  },
  {
    title: `A Game of Thrones`,
    author_name: ['George R. R. Martin'],
    key: '/works/OL257943W',
    cover_i: 8133585,
  },
  {
    title: `Shatter Me`,
    author_name: ['Tahereh Mafi'],
    key: '/works/OL16014245W',
    cover_i: 14408253,
  },
];
