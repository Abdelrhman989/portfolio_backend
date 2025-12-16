import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Experience, ExperienceDocument } from './experience.schema';

@Injectable()
export class ExperienceService {
    constructor(@InjectModel(Experience.name) private experienceModel: Model<ExperienceDocument>) { }

    async findAll(): Promise<Experience[]> {
        return this.experienceModel.find().exec();
    }

    async findOne(id: string): Promise<Experience> {
        return this.experienceModel.findById(id).exec();
    }

    async create(data: any): Promise<Experience> {
        const newExp = new this.experienceModel(data);
        return newExp.save();
    }

    async update(id: string, data: any): Promise<Experience> {
        return this.experienceModel.findByIdAndUpdate(id, data, { new: true }).exec();
    }

    async delete(id: string): Promise<any> {
        return this.experienceModel.findByIdAndDelete(id).exec();
    }
}
