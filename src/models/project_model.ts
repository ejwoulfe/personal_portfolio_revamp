import { techStack } from "../interfaces/project_interface";


export default class PersonalProject {
    name: string;
    image: string;
    techStack: techStack;
    liveURL: string;
    githubURL: string;
    videoURL: string;
    description: string[];
    goals: string[];
    accomplishments: string[];

    constructor(name: string, image: string, techStack: techStack, liveURL: string, githubURL: string, videoURL: string, description: string[], goals: string[], accomplishments: string[]) {
        this.name = name;
        this.image = image;
        this.techStack = techStack;
        this.liveURL = liveURL;
        this.githubURL = githubURL;
        this.videoURL = videoURL;
        this.description = description;
        this.goals = goals;
        this.accomplishments = accomplishments;
    }
}