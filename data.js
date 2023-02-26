const MOVIES = [
  {
    id: 1,
    title: 'Avatar: The Way of Water (2022)',
    cover: './images/avatar.jpeg',
    duration: '3h12min',
    releasedDate: new Date("12/22/22"),
    category: ['Science Fiction', 'Adventure', 'Action'],
    type: "showing",
    trailerId: 'https://www.youtube.com/embed/d9MyW72ELq0',
    overview: 'Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.',
    cast: ['Sam Worthington', 'Zoe Saldana', 'Sigourney Weaver', 'Britain Dalton', 'Stephen Lang']
  },
  {
    id: 2,
    title: 'Avenger: Endgame (2019)',
    cover: './images/avengers_endgame.webp',
    duration: '3h1m',
    releasedDate: new Date("4/25/2019"),
    category: ['Science Fiction', 'Adventure', 'Action'],
    type: "showing",
    trailerId: 'https://www.youtube.com/embed/TcMBFSGVi1c',
    overview: 'After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos actions and restore order to the universe once and for all, no matter what consequences may be in store',
    cast: ['Robert Downey Jr', 'Chris Evan', 'Mark Ruffalo', 'Chris Hemsworth', 'Scarlett Johansson']
  },
  {
    id: 3,
    title: 'Ant-Man and the Wasp: Quantumania (2023)',
    cover: './images/ant_man.jpeg',
    duration: '2h5m',
    releasedDate: new Date("2/17/2023"),
    category: ['Science Fiction', 'Adventure', 'Comedy'],
    type: "showing",
    trailerId: 'https://www.youtube.com/embed/ZlNFpri-Y40',
    overview: 'Super-Hero partners Scott Lang and Hope van Dyne, along with with Hopes parents Janet van Dyne and Hank Pym, and Scotts daughter Cassie Lang, find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that will push them beyond the limits of what they thought possible.',
    cast: ['Paul Rudd', 'Evangeline Lilly', 'Jonathan Majors']
  },
  {
    id: 4,
    title: 'Puss in Boots: The Last Wish (2022)',
    cover: './images/puss_in_boots.jpeg',
    duration: '1h43m',
    releasedDate: new Date("12/29/2022"),
    category: ['Animation', 'Adventure', 'Fantasy'],
    type: "kids",
    trailerId: 'https://www.youtube.com/embed/RqrXhwS33yc',
    overview: 'Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.',
    cast: ['Antonio Banderas', 'Salma Hayek', 'Wagner Moura']
  },
  {
    id: 5,
    title: 'The Last of Us (2023)',
    cover: './images/last_of_us.jpg',
    duration: '59m',
    releasedDate: new Date("3/1/2023"),
    category: ['Drama', 'Action', 'Adventure'],
    type: "coming",
    trailerId: 'https://www.youtube.com/embed/uLtkt8BonwM',
    overview: 'Twenty years after modern civilization has been destroyed, Joel, a hardened survivor, is hired to smuggle Ellie, a 14-year-old girl, out of an oppressive quarantine zone. What starts as a small job soon becomes a brutal, heartbreaking journey, as they both must traverse the United States and depend on each other for survival',
    cast: ['Pedro Pascal', 'Bella Ramsey', 'Lamar Johnson']
  },
  {
    id: 6,
    title: 'John Wick: Chapter 4 (2023)',
    cover: './images/johnwick.jpeg',
    duration: '2h49m',
    releasedDate: new Date("3/24/2023"),
    category: ['Action', 'Thriller', 'Crime'],
    type: "coming",
    trailerId: 'https://www.youtube.com/embed/yjRHZEUamCc',
    overview: 'With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.',
    cast: ['Keanu Reeves', 'Donnie Yen', 'Ian McShane']
  },

]


export default MOVIES
