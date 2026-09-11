import adventures from '../assets/icons/adventures.svg';
import allquests from '../assets/icons/all-quests.svg';
import detective from '../assets/icons/detective.svg';
import horrors from '../assets/icons/horrors.svg';
import mystic from '../assets/icons/mysticism.svg';
import scifi from '../assets/icons/sciFi.svg';

import crypt from '../assets/images/crypt.png';
import maniac from '../assets/images/maniac.png';
import ritual from '../assets/images/ritual.png';
import fatalexperiment from '../assets/images/fatal-experiment.png';
import hutintheforest from '../assets/images/hut-in-the-forest.png';
import mars2056 from '../assets/images/mars-2056.png';
import metro2033 from '../assets/images/metro-2033.png';
import oldattic from '../assets/images/old-attic.png';
import oldestatesecrets from '../assets/images/old-estate-secrets.png';

import crypt_big from '../assets/images/crypt-big.jpg';
import maniac_big from '../assets/images/maniac-big.jpg';
import ritual_big from '../assets/images/ritual-big.jpg';
import fatalexperiment_big from '../assets/images/fatal-experiment-big.jpg';
import hutintheforest_big from '../assets/images/hut-in-the-forest-big.jpg';
import mars2056_big from '../assets/images/mars-2056-big.jpg';
import metro2033_big from '../assets/images/metro-2033-big.jpg';
import oldattic_big from '../assets/images/old-attic-big.jpg';
import oldestatesecrets_big from '../assets/images/old-estate-secrets-big.jpg';

export const categories = [
    {
        name: 'All Quests',
        icon: allquests,
    },
    {   name: 'Adventures',
        icon: adventures,
    },
    {   name: 'Horrors',
        icon: horrors,
    },
    {   name: 'Mysticism',  
        icon: mystic,   
    },
    {   name: 'Detective',
        icon: detective,    
    },
    {   name: 'Sci-Fi',
        icon: scifi,    
    },
];

export const quests = [
    {
        id: 1,
        title: 'Crypt',
        image: crypt,
        imageBig: crypt_big,
        players: '2-5 pl',
        difficulty: 'Difficult',
        category: 'Horrors',
        duration: '60 min',
        description: 
            'In a dimly lit room, several strangers regain consciousness. No one remembers what happened last night. Their hands and feet are tied, but one of you has managed to break free. A terrifying timer hangs on the wall, counting down from 60 minutes. Will you be able to handle this stressful situation, help the others, figure out what happened, and escape the room?',
    },
    {
        id: 2,
        title: 'Maniac',
        image: maniac,
        imageBig: maniac_big,
        players: '3-6 pl',
        difficulty: 'Medium',
        category: 'Horrors',
        duration: '90 min',
        description:
            'You wake up in a dark and unfamiliar room. The door is locked, the lights keep flickering, and somewhere nearby you can hear footsteps. A dangerous maniac is somewhere in the building, and he knows you are here. You have 60 minutes to find a way out, solve the puzzles, and survive before he finds you.',
    },

    {
        id: 3,
        title: 'Ritual',
        image: ritual,
        imageBig: ritual_big,
        players: '3-5 pl',
        difficulty: 'Difficult',
        category: 'Mysticism',
        duration: '120 min',
        description:
            'An ancient ritual has gone terribly wrong. Strange symbols cover the walls, candles burn in the darkness, and something unseen seems to be watching your every move. You have entered a place where the rules of the ordinary world no longer apply. Find the hidden clues, complete the ritual, and escape before it is too late.',
    },

    {
        id: 4,
        title: 'Mars-2056',
        image: mars2056,
        imageBig: mars2056_big,
        players: '2-4 pl',
        difficulty: 'Easy',
        category: 'Sci-fi',
        duration: '60 min',
        description:
            'Year 2056. Humanity has established its first research station on Mars. But something has gone wrong. The station is losing power, communication with Earth has been cut off, and the crew has disappeared. You have limited time to restore the systems, uncover what happened, and find a way to survive on the red planet.',
        },

    {
        id: 5,
        title: 'The Secrets of the Old Mansion',
        image: oldestatesecrets,
        imageBig: oldestatesecrets_big,
        players: '2-5 pl',
        difficulty: 'Easy',
        category: 'Detective',
        duration: '60 min',
        description:
            'An abandoned mansion hides a secret that has remained untouched for decades. Strange sounds come from the empty rooms, old photographs seem to hide clues, and every door leads to another mystery. Explore the mansion, connect the pieces of the story, and uncover the secret before the final hour runs out.',
    },

    {
        id: 6,
        title: 'The Cabin in the Woods',
        image: hutintheforest,
        imageBig: hutintheforest_big,
        players: '4-7 pl',
        difficulty: 'Medium',
        category: 'Horrors',
        duration: '90 min',
        description:
            'You arrive at an isolated cabin deep in the forest. At first everything seems abandoned, but soon you realize that someone has been here recently. The forest is silent, the doors are locked, and strange signs appear around the cabin. Work together, uncover the truth, and escape before darkness completely surrounds you.',
        },

    {
        id: 7,
        title: 'Fatal Experiment',
        image: fatalexperiment,
        imageBig: fatalexperiment_big,
        players: '5-8 pl',
        difficulty: 'Difficult',
        category: 'Sci-fi',
        duration: '120 min',
        description:
            'A secret scientific experiment has gone out of control. You find yourselves inside a damaged laboratory surrounded by strange equipment and warning signals. The experiment is still running, and every minute makes the situation more dangerous. Work as a team, restore the laboratory systems, discover what happened, and stop the experiment before it reaches its final stage.',
    },

    {
        id: 8,
        title: 'Metro 2033',
        image: metro2033,
        imageBig: metro2033_big,
        players: '6-8 pl',
        difficulty: 'Medium',
        category: 'Sci-fi',
        duration: '90 min',
        description:
            'The world outside is no longer safe. You are survivors hiding deep beneath the ruined city in an abandoned metro station. Supplies are running out, the lights are failing, and something is moving in the tunnels. Your team must explore the station, find a way forward, and reach a safe zone before the last source of power disappears.',
        },

    {
        id: 9,
        title: 'The Old Attic',
        image: oldattic,
        imageBig: oldattic_big,
        players: '2-3 pl',
        difficulty: 'Easy',
        category: 'Mysticism',
        duration: '60 min',
        description:
            'You discover an old attic filled with forgotten objects, mysterious photographs, and locked boxes. Every item seems to be connected to a story from the past. Somewhere among the dust and shadows is the key to the final mystery. Search carefully, solve the puzzles, and discover what has been hidden in the attic for so many years.',
    },
]