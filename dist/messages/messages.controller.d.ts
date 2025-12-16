import { MessagesService } from './messages.service';
export declare class MessagesController {
    private readonly messagesService;
    constructor(messagesService: MessagesService);
    getAll(): Promise<import("./messages.schema").Message[]>;
    create(data: any): Promise<import("./messages.schema").Message>;
}
