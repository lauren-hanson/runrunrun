import img1 from "./assets/lo.jpeg"

import {
  Fa500Px,
  FaAccusoft,
  FaAdversal,
  FaAvianex,
  FaBitcoin,
  FaBtc,
  FaCodiepie,
  FaDocker,
  FaGithubSquare,
} from 'react-icons/fa';
import { nanoid } from 'nanoid';

const sublinks = [
  {
    pageId: nanoid(),
    page: 'dashboard',
    links: [
      {
        id: nanoid(),
        label: 'Activity Feed',
        icon: <Fa500Px />,
        url: '/dashboard/activity',
      },
      {
        id: nanoid(),
        label: 'My Segments',
        icon: <FaAccusoft />,
        url: '/dashboard/segments',
      },
      {
        id: nanoid(),
        label: 'My Routes',
        icon: <FaAdversal />,
        url: '/dashboard/routes',
      },
    ],
  },
  {
    pageId: nanoid(),
    page: 'training',
    links: [
      {
        id: nanoid(),
        label: 'training calendar',
        icon: <FaAvianex />,
        url: '/training/calendar',
      },
      {
        id: nanoid(),
        label: 'activities',
        icon: <FaBitcoin />,
        url: '/training/activities',
      }
    ],
  },
  {
    page: 'explore',
    pageId: nanoid(),
    links: [
      {
        id: nanoid(),
        label: 'segment explore',
        icon: <FaDocker />,
        url: '/explore/segmentexplore',
      },
      {
        id: nanoid(),
        label: 'segment search',
        icon: <FaGithubSquare />,
        url: '/explore/segmentsearch',
      },
      {
        id: nanoid(),
        label: 'athlete search',
        icon: <FaGithubSquare />,
        url: '/explore/athletesearch',
      },
      {
        id: nanoid(),
        label: 'clubs',
        icon: <FaGithubSquare />,
        url: '/explore/clubs',
      },
      {
        id: nanoid(),
        label: 'apps',
        icon: <FaGithubSquare />,
        url: '/explore/apps',
      },
    ],
  },
  {
    page: 'challenges',
    pageId: nanoid(),
    links: [
      {
        id: nanoid(),
        label: 'starters',
        icon: <FaDocker />,
        url: '/resources/starters',
      },
      {
        id: nanoid(),
        label: 'showcase',
        icon: <FaGithubSquare />,
        url: '/resources/showcase',
      },
    ],
  },
];

export const users = [ 
  {
    id: nanoid(),
    firstName: 'Lauren',
    lastName: 'Hanson', 
    image: img1,
  },
]

export const activities = [ 
  {
    id: nanoid(),
    firstName: 'Lauren',
    lastName: 'Hanson', 
    image: img1,
  },
]

export default sublinks;
