import { Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"
import { MongooseModule } from "@nestjs/mongoose"
import { ProjectsModule } from "./projects/projects.module"
import { SkillsModule } from "./skills/skills.module"
import { AuthModule } from "./auth/auth.module"
import { ProfileModule } from "./profile/profile.module"
import { ExperienceModule } from "./experience/experience.module"
import { ServicesModule } from "./services/services.module"
import { MessagesModule } from "./messages/messages.module"

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env",
    }),
    MongooseModule.forRoot(process.env.MONGODB_URI || "mongodb://localhost:27017/portfolio"),
    ProjectsModule,
    SkillsModule,
    AuthModule,
    ProfileModule,
    ExperienceModule,
    ServicesModule,
    MessagesModule,
  ],
})
export class AppModule { }
