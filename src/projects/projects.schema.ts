import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import type { Document } from "mongoose"

export type ProjectDocument = Project & Document

@Schema({ timestamps: true })
export class Project {
  @Prop({ required: true })
  title: string

  @Prop()
  description: string

  @Prop()
  image: string

  @Prop()
  technologies: string[]

  @Prop()
  githubLink: string

  @Prop()
  liveLink: string

  @Prop({ default: true })
  isActive: boolean
}

export const ProjectSchema = SchemaFactory.createForClass(Project)
