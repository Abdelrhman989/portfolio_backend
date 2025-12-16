import { SkillsService } from "./skills.service";
import { CreateSkillDto } from "./dto/create-skill.dto";
export declare class SkillsController {
    private readonly skillsService;
    constructor(skillsService: SkillsService);
    findAll(): Promise<import("./skills.schema").Skill[]>;
    findById(id: string): Promise<import("./skills.schema").Skill>;
    create(createSkillDto: CreateSkillDto): Promise<import("./skills.schema").Skill>;
    update(id: string, updateSkillDto: CreateSkillDto): Promise<import("./skills.schema").Skill>;
    delete(id: string): Promise<import("./skills.schema").Skill>;
}
