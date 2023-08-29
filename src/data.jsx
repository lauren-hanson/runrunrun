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
  FaPersonHiking,
  FaPersonBiking, 
  FaPersonRunning, 
  FaPersonSwimming
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
    id: 1,
    date: '2022-02-04',
    activityType: 3, 
    details: "Today's run was invigorating and refreshing. I set out early in the morning as the sun was rising, casting a warm golden glow over the surroundings. The weather was ideal, with a gentle breeze rustling the leaves. I started with a light warm-up, stretching my muscles to prepare for the run ahead.", 
    distance: '5.2km', 
    time: '27 minutes'
  },
  {
    id: 2,
    date: '2023-08-28',
    activityType: 1, 
    details: 'Embarking on the Forest Trail Loop today was a delightful escape into nature. The trailhead greeted me with a cool breeze and the promise of adventure. The path led me through a dense forest, where sunlight filtered through the leaves, creating dappled patterns on the ground.', 
    distance: '3.8km', 
    time: '1 hour 15 minutes'
  },
  {
    id: 3,
    date: '2023-06-12',
    activityType: 5, 
    details: "Today's swim at the Crystal Waters Aquatic Center was a refreshing and invigorating experience. The indoor pool area was comfortably warm, and the glistening water beckoned as I stepped onto the pool deck.", 
    distance: '25km', 
    time: '45 minutes'
  },
]

export const activityType = [ 
  {
    id: 1,
    name: 'Hiking', 
    icon: <FaPersonHiking /> 

  },
  {
    id: 2,
    name: 'Biking', 
    icon: <FaPersonBiking /> 

  },
  {
    id: 3,
    name: 'Running', 
    icon: <FaPersonRunning /> 

  },
  {
    id: 4,
    name: 'Running', 
    icon: <FaPersonRunning /> 

  },
  {
    id: 5,
    name: 'Swimming', 
    icon: <FaPersonSwimming /> 

  },
]

export default sublinks;
