import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ExperienceDocument = Experience & Document;

@Schema()
export class Experience {
    @Prop({ required: true })
    company: string;

    @Prop({ required: true })
    role: string;

    @Prop({ required: true })
    period: string;

    @Prop({ required: true })
    description: string;
}

export const ExperienceSchema = SchemaFactory.createForClass(Experience);
