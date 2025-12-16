import { ServicesService } from './services.service';
export declare class ServicesController {
    private readonly servicesService;
    constructor(servicesService: ServicesService);
    getAll(): Promise<import("./services.schema").Service[]>;
    getOne(id: string): Promise<import("./services.schema").Service>;
    create(data: any): Promise<import("./services.schema").Service>;
    update(id: string, data: any): Promise<import("./services.schema").Service>;
    delete(id: string): Promise<any>;
}
