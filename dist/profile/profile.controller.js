"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileController = void 0;
const common_1 = require("@nestjs/common");
const profile_service_1 = require("./profile.service");
const jwt_guard_1 = require("../auth/guards/jwt.guard");
const swagger_1 = require("@nestjs/swagger");
let ProfileController = class ProfileController {
    constructor(profileService) {
        this.profileService = profileService;
    }
    getProfile() {
        return this.profileService.getProfile();
    }
    updateProfile(profileData) {
        return this.profileService.updateProfile(profileData);
    }
};
exports.ProfileController = ProfileController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Get profile' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProfileController.prototype, "getProfile", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, swagger_1.ApiBody)({ type: Object }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Update profile' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProfileController.prototype, "updateProfile", null);
exports.ProfileController = ProfileController = __decorate([
    (0, swagger_1.ApiTags)('Profile'),
    (0, common_1.Controller)('profile'),
    __metadata("design:paramtypes", [profile_service_1.ProfileService])
], ProfileController);
//# sourceMappingURL=profile.controller.js.map