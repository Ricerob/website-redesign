import { FaPython, FaJava, FaHtml5, FaReact } from "react-icons/fa";
import {SiJavascript, SiTailwindcss} from 'react-icons/si';

const projects = [
    {
        'name': 'senior design',
        'icons': [<FaPython size={60}/>, <FaJava size={60}/>],
        'desc': 'Automated annotation of source code for machine learning applications. Implented entire machine learning pipeline. Created a specialized RegEx tool to automatically tag parts of source code for training/test data.',
        },
    {
        'name': 'twitch clip grabber',
        'icons': [<FaPython size={60}/>, <FaHtml5 size={60}/>],
        'desc': 'Python script to grab and download Twitch.tv clips. Open-source. Web-scraping.',
        'githubLink': 'https://github.com/Ricerob/twitchClipGrabber'
    },
    {
        'name': 'sidepot',
        'icons': [<FaReact size={60} />],
        'desc': 'React Native application to keep track of side pots in various games. Stateful components. Finished with prior intended launch to the Apple App Store.',
        'githubLink': 'https://github.com/Ricerob/sidepot'
    },
    {
        'name': 'personal website',
        'icons': [<FaReact size={60}/>, <SiTailwindcss size={60}/>, <FaHtml5 size={60}/>],
        'desc': 'Personal website/ portfolio. What you\'re seeing now. Tailwind animations. Hosted on Vercel.',
        'githubLink': 'https://github.com/Ricerob/website-redesign'
    },
    {
        'name': 'javascript data structures and algorithms',
        'icons': [<SiJavascript size={60}/>],
        'desc': 'Continuous implementation of data structures and algorithms in JavaScript. Leetcode questions. Path traversal.',
        'githubLink': 'https://github.com/Ricerob/js-ds-algos'
    },
    {
        'name': 'tiktok live monitor',
        'icons': [<FaPython size={60}/>],
        'desc': 'Python script to establish websocket connection to live TikTok streams. Another websocket to display "game" mechanic. Unfinished.',
        'githubLink': 'https://github.com/Ricerob/tiktok-live-monitor'
    }
]

export default projects;