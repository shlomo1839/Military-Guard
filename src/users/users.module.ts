import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersService } from './users.service';
import { User } from './user.model';


@Module({
  imports: [SequelizeModule.forFeature([User])], // Register the model
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}