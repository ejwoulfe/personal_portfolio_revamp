

export default class PersonalProject {
    name: string;
    image: string;
    techStack: object;
    liveURL: string;
    githubURL: string;
    videoURL: string;
    description: Array<string>;
    goals: Array<string>;
    accomplishments: Array<string>;

    constructor(name: string, image: string, techStack: object, liveURL: string, githubURL: string, videoURL: string, description: Array<string>, goals: Array<string>, accomplishments: Array<string>) {
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