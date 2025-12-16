import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Service, ServiceDocument } from './services.schema';

@Injectable()
export class ServicesService {
    constructor(@InjectModel(Service.name) private serviceModel: Model<ServiceDocument>) { }

    async findAll(): Promise<Service[]> {
        return this.serviceModel.find().exec();
    }

    async findOne(id: string): Promise<Service> {
        return this.serviceModel.findById(id).exec();
    }

    async create(data: any): Promise<Service> {
        const newService = new this.serviceModel(data);
        return newService.save();
    }

    async update(id: string, data: any): Promise<Service> {
        return this.serviceModel.findByIdAndUpdate(id, data, { new: true }).exec();
    }

    async delete(id: string): Promise<any> {
        return this.serviceModel.findByIdAndDelete(id).exec();
    }
}
