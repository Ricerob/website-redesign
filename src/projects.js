import { FaPython, FaJava, FaHtml5, FaReact, FaAws } from "react-icons/fa";
import {SiJavascript, SiNextdotjs, SiTailwindcss} from 'react-icons/si';

const projects = [
    {
        'name': 'SwiftTA',
        'icons': [<FaReact size={60} />, <SiTailwindcss size={60}/>, <SiNextdotjs size={50}/>, <FaAws size={60}/>],
        'desc': 'Empowering students with AI automated question generation. PDF parsing. Full-stack web app, AWS backend. Data streams from chat. OpenAI API.',
        'link': 'https://www.swift-ta.com/',
        'linkName': 'Website'
    },
    {
        'name': 'track',
        'icons': [<FaReact size={60} />, <SiTailwindcss size={60}/>],
        'desc': 'Web app to track Spotify artists\' releases. React and TailwindCSS. Multiple API call management. Media queries.',
        'link': 'https://track-spotify.vercel.app/',
        'linkName': 'Website'
    },
    {
        'name': 'stream safe',
        'icons': [<SiJavascript size={60}/>],
        'desc': 'VS Code Extension for streamers to block sensitive files showing. Pure JavaScript. VS Code API. 5+ installs.',
        'link': 'https://marketplace.visualstudio.com/items?itemName=ricerob.stream-safe',
        'linkName': 'VSCode Extension Store'
    },
    {
        'name': 'senior design',
        'icons': [<FaPython size={60}/>, <FaJava size={60}/>],
        'desc': 'Automated annotation of source code for machine learning applications. Implented entire machine learning pipeline. Created a specialized RegEx tool to automatically tag parts of source code for training/test data.',
    },
    {
        'name': 'twitch clip grabber',
        'icons': [<FaPython size={60}/>, <FaHtml5 size={60}/>],
        'desc': 'Python script to grab and download Twitch.tv clips. Open-source. Web-scraping.',
        'link': 'https://github.com/Ricerob/twitchClipGrabber',
        'linkName': 'GitHub'
    }
]

export default projects;