import { Document } from 'mongoose';
export type ProfileDocument = Profile & Document;
export declare class Profile {
    fullName: string;
    title: string;
    bio: string;
    imageUrl: string;
    socialLinks: {
        linkedin?: string;
        github?: string;
        twitter?: string;
    };
}
export declare const ProfileSchema: import("mongoose").Schema<Profile, import("mongoose").Model<Profile, any, any, any, Document<unknown, any, Profile> & Profile & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Profile, Document<unknown, {}, import("mongoose").FlatRecord<Profile>> & import("mongoose").FlatRecord<Profile> & {
    _id: import("mongoose").Types.ObjectId;
}>;
