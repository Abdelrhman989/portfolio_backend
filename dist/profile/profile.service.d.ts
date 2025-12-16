import { Model } from 'mongoose';
import { Profile, ProfileDocument } from './profile.schema';
export declare class ProfileService {
    private profileModel;
    constructor(profileModel: Model<ProfileDocument>);
    getProfile(): Promise<Profile>;
    updateProfile(profileData: any): Promise<Profile>;
}
