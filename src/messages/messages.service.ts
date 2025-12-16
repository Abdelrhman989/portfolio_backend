import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Message, MessageDocument } from './messages.schema';

@Injectable()
export class MessagesService {
    constructor(@InjectModel(Message.name) private messageModel: Model<MessageDocument>) { }

    async findAll(): Promise<Message[]> {
        return this.messageModel.find().sort({ createdAt: -1 }).exec();
    }

    async create(data: any): Promise<Message> {
        const newMessage = new this.messageModel(data);
        return newMessage.save();
    }
}
