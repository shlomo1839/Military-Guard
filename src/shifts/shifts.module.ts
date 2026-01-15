import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ShiftsController } from './shifts.controller'; // Controller remains same as Phase 2
import { ShiftsService } from './shifts.service';
import { Shift } from './shift.model';

@Module({
  imports: [SequelizeModule.forFeature([Shift])],
  controllers: [ShiftsController],
  providers: [ShiftsService],
})
export class ShiftsModule {}
