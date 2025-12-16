import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProfileDocument = Profile & Document;

@Schema()
export class Profile {
  @Prop({ required: true })
  fullName: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  bio: string;

  @Prop()
  imageUrl: string;

  @Prop({ type: Object })
  socialLinks: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);
