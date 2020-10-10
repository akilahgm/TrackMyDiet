import { Controller, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from '../auth/roles.decorator';
import { RolesGuard } from '../auth/roles.guard';
import { UserRole } from '../user/user.entity';
import { FileUploadService } from './file_upload.service';

@Controller('file_upload')
@UseGuards(AuthGuard())
export class FileUploadController {
    constructor(private readonly fileUploadService: FileUploadService) { }
    @Post()
    // @UseGuards(AuthGuard(), RolesGuard)
    // @Roles(UserRole.ADMIN)
    async create(@Req() request, @Res() response) {
        try {
            await this.fileUploadService.fileupload(request, response);
        } catch (error) {
            return response
                .status(500)
                .json(`Failed to upload media file: ${error.message}`);
        }
    }
}