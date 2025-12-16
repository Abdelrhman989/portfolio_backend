import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import type { Model } from "mongoose"
import { Skill, type SkillDocument } from "./skills.schema"
import type { CreateSkillDto } from "./dto/create-skill.dto"

@Injectable()
export class SkillsService {
  constructor(@InjectModel(Skill.name) private skillModel: Model<SkillDocument>) { }

  async create(createSkillDto: CreateSkillDto): Promise<Skill> {
    const createdSkill = new this.skillModel(createSkillDto)
    return createdSkill.save()
  }

  async findAll(): Promise<Skill[]> {
    return this.skillModel.find().exec() // Removed filter to get ALL skills for debugging
  }

  async findById(id: string): Promise<Skill> {
    return this.skillModel.findById(id).exec()
  }

  async update(id: string, updateSkillDto: CreateSkillDto): Promise<Skill> {
    return this.skillModel.findByIdAndUpdate(id, updateSkillDto, { new: true }).exec()
  }

  async delete(id: string): Promise<Skill> {
    return this.skillModel.findByIdAndDelete(id).exec()
  }
}
