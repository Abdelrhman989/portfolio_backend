import { Model } from 'mongoose';
import { Experience, ExperienceDocument } from './experience.schema';
export declare class ExperienceService {
    private experienceModel;
    constructor(experienceModel: Model<ExperienceDocument>);
    findAll(): Promise<Experience[]>;
    findOne(id: string): Promise<Experience>;
    create(data: any): Promise<Experience>;
    update(id: string, data: any): Promise<Experience>;
    delete(id: string): Promise<any>;
}
