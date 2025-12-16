import { ProfileService } from './profile.service';
export declare class ProfileController {
    private readonly profileService;
    constructor(profileService: ProfileService);
    getProfile(): Promise<import("./profile.schema").Profile>;
    updateProfile(profileData: any): Promise<import("./profile.schema").Profile>;
}
