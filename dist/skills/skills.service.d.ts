import type { Model } from "mongoose";
import { Skill, type SkillDocument } from "./skills.schema";
import type { CreateSkillDto } from "./dto/create-skill.dto";
export declare class SkillsService {
    private skillModel;
    constructor(skillModel: Model<SkillDocument>);
    create(createSkillDto: CreateSkillDto): Promise<Skill>;
    findAll(): Promise<Skill[]>;
    findById(id: string): Promise<Skill>;
    update(id: string, updateSkillDto: CreateSkillDto): Promise<Skill>;
    delete(id: string): Promise<Skill>;
}
