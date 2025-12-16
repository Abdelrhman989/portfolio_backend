import type { Model } from "mongoose";
import { Project, type ProjectDocument } from "./projects.schema";
import type { CreateProjectDto } from "./dto/create-project.dto";
export declare class ProjectsService {
    private projectModel;
    constructor(projectModel: Model<ProjectDocument>);
    create(createProjectDto: CreateProjectDto): Promise<Project>;
    findAll(): Promise<Project[]>;
    findById(id: string): Promise<Project>;
    update(id: string, updateProjectDto: CreateProjectDto): Promise<Project>;
    delete(id: string): Promise<Project>;
}
