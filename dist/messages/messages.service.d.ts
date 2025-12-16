import { Model } from 'mongoose';
import { Message, MessageDocument } from './messages.schema';
export declare class MessagesService {
    private messageModel;
    constructor(messageModel: Model<MessageDocument>);
    findAll(): Promise<Message[]>;
    create(data: any): Promise<Message>;
}
