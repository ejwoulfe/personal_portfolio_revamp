
export default class PersonalSkills {
    type: string;
    proficient: object | null;
    familiar: object | null;

    constructor(type: string, proficient: object, familiar: object) {
        this.type = type;
        this.proficient = proficient;
        this.familiar = familiar;
    }
}