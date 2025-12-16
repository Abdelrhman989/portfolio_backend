import { ExperienceService } from './experience.service';
export declare class ExperienceController {
    private readonly experienceService;
    constructor(experienceService: ExperienceService);
    getAll(): Promise<import("./experience.schema").Experience[]>;
    getOne(id: string): Promise<import("./experience.schema").Experience>;
    create(data: any): Promise<import("./experience.schema").Experience>;
    update(id: string, data: any): Promise<import("./experience.schema").Experience>;
    delete(id: string): Promise<any>;
}
