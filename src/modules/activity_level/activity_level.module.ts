import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { ActivityLevelContoller } from './activity_level.controller';
import { ActivityLevelRepository } from './activity_level.repository';
import { ActivityLevelService } from './activity_level.service';


@Module({
    imports: [
        TypeOrmModule.forFeature([ActivityLevelRepository]),
        AuthModule
    ],
    controllers: [ActivityLevelContoller],
    providers: [ActivityLevelService]
})
export class ActivityLevelModule { }
