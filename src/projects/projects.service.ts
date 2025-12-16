import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import type { Model } from "mongoose"
import { Project, type ProjectDocument } from "./projects.schema"
import type { CreateProjectDto } from "./dto/create-project.dto"

@Injectable()
export class ProjectsService {
  constructor(@InjectModel(Project.name) private projectModel: Model<ProjectDocument>) { }

  async create(createProjectDto: CreateProjectDto): Promise<Project> {
    const createdProject = new this.projectModel(createProjectDto)
    return createdProject.save()
  }

  async findAll(): Promise<Project[]> {
    return this.projectModel.find({ isActive: true }).exec()
  }

  async findById(id: string): Promise<Project> {
    return this.projectModel.findById(id).exec()
  }

  async update(id: string, updateProjectDto: CreateProjectDto): Promise<Project> {
    return this.projectModel.findByIdAndUpdate(id, updateProjectDto, { new: true }).exec()
  }

  async delete(id: string): Promise<Project> {
    return this.projectModel.findByIdAndDelete(id).exec()
  }
}
