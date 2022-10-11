import { FaPython, FaJava } from "react-icons/fa";

const projects = [
    {
        'name': 'senior design',
        'icons': [<FaPython size={60}/>, <FaJava size={60}/>],
        'desc': 'sample desc',
        'githubLink': 'www.google.com'
    },
    {
        'name': 'twitch clip grabber',
        'icons': [<FaPython size={60}/>],
        'desc': 'grabs twitch clibs',
        'githubLink': 'www.google.com'
    }
]

export default projects;