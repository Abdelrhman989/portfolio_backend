import { ProjectsService } from "./projects.service";
import { CreateProjectDto } from "./dto/create-project.dto";
export declare class ProjectsController {
    private readonly projectsService;
    constructor(projectsService: ProjectsService);
    findAll(): Promise<import("./projects.schema").Project[]>;
    findById(id: string): Promise<import("./projects.schema").Project>;
    create(createProjectDto: CreateProjectDto): Promise<import("./projects.schema").Project>;
    update(id: string, updateProjectDto: CreateProjectDto): Promise<import("./projects.schema").Project>;
    delete(id: string): Promise<import("./projects.schema").Project>;
}
