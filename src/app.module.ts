import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ShiftsModule } from './shifts/shifts.module';
import { AssignmentsModule } from './assignments/assignments.module';
import { User } from './users/user.model';
import { Shift } from './shifts/shift.model';
import { Assignment } from './assignments/assignments.model'

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 8000,
      username: 'postgres', // Change to your DB username
      password: 'password', // Change to your DB password
      database: 'army_guard_db', // Change to your DB name
      models: [User, Shift, Assignment],
      autoLoadModels: true,
      synchronize: true, // WARNING: Don't use this in production, it drops tables
    }),
    AuthModule,
    UsersModule,
    ShiftsModule,
    AssignmentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {};