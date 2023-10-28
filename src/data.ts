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
    title: 'Atomic Habits',
    author_name: ['James Clear'],
    key: 'works/OL17930368W',
    cover_i: 27918581,
  },
  {
    title: 'The 48 Laws of Power',
    author_name: ['Robert Greene, Joost Elffers, William Richmond, Talita M. Rodrigues, Harper Price, and R. Greene'],
    key: 'works/OL1968368W',
    cover_i: 9573841,
  },
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
    title: 'Atomic Habits',
    author_name: ['James Clear'],
    key: 'works/OL17930368W',
    cover_i: 27918581,
  },
  {
    title: 'The 48 Laws of Power',
    author_name: ['Robert Greene, Joost Elffers, William Richmond, Talita M. Rodrigues, Harper Price, and R. Greene'],
    key: 'works/OL1968368W',
    cover_i: 9573841,
  }, {
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
].map((el, i) => ({
  ...el,
  key: `${el.key}_${i}`
}));
