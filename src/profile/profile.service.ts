import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Profile, ProfileDocument } from './profile.schema';

@Injectable()
export class ProfileService {
    constructor(@InjectModel(Profile.name) private profileModel: Model<ProfileDocument>) { }

    async getProfile(): Promise<Profile> {
        return this.profileModel.findOne().exec();
    }

    async updateProfile(profileData: any): Promise<Profile> {
        const existing = await this.profileModel.findOne();
        if (existing) {
            return this.profileModel.findByIdAndUpdate(existing._id, profileData, { new: true }).exec();
        } else {
            const newProfile = new this.profileModel(profileData);
            return newProfile.save();
        }
    }
}
