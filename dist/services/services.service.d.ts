import { Model } from 'mongoose';
import { Service, ServiceDocument } from './services.schema';
export declare class ServicesService {
    private serviceModel;
    constructor(serviceModel: Model<ServiceDocument>);
    findAll(): Promise<Service[]>;
    findOne(id: string): Promise<Service>;
    create(data: any): Promise<Service>;
    update(id: string, data: any): Promise<Service>;
    delete(id: string): Promise<any>;
}
