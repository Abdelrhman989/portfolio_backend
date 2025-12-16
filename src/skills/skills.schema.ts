import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import type { Document } from "mongoose"

export type SkillDocument = Skill & Document

@Schema({ timestamps: true })
export class Skill {
  @Prop({ required: true })
  name: string

  @Prop({ required: true })
  category: string

  @Prop()
  proficiency: number // 1-100

  @Prop({ default: true })
  isActive: boolean
}

export const SkillSchema = SchemaFactory.createForClass(Skill)
